const Agent = require('../models/Agent');

exports.createAgent = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    const exists = await Agent.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: 'Agent already exists' });
    }

    const newAgent = new Agent({ name, email, mobile, password });
    await newAgent.save();

    res.status(201).json({ message: 'Agent created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create agent', error: err.message });
  }
};

exports.getAgents = async (req, res) => {
  try {
    const agents = await Agent.find().select('-password');

    res.status(200).json(agents);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch agents', error: err.message });
  }
};
