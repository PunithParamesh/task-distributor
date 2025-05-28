const csv = require('csvtojson');
const xlsx = require('xlsx');
const Task = require('../models/Task');
const Agent = require('../models/Agent');

exports.uploadFile = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const fileBuffer = req.file.buffer;
  const mimeType = req.file.mimetype;

  try {
    let data = [];

    if (mimeType === 'text/csv') {
      data = await csv().fromString(fileBuffer.toString());
    } else {
      const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      data = xlsx.utils.sheet_to_json(sheet);
    }

    const agents = await Agent.find();
    if (agents.length < 5) {
      return res.status(400).json({ message: 'At least 5 agents are required for distribution' });
    }

    // Distribute tasks
    const tasks = [];
    data.forEach((item, index) => {
      const agentIndex = index % 5;
      const agent = agents[agentIndex];
      tasks.push({
        firstName: item.FirstName,
        phone: item.Phone,
        notes: item.Notes || '',
        assignedTo: agent._id,
      });
    });

    await Task.insertMany(tasks);

    res.status(200).json({ message: 'Tasks uploaded and distributed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error processing file', error: err.message });
  }
};
