const Agent = require('../models/Agent');
const Task = require('../models/Task');

exports.getAgentTasks = async (req, res) => {
  try {
    const agents = await Agent.find();
    const result = [];

    for (const agent of agents) {
      const tasks = await Task.find({ assignedTo: agent._id });
      result.push({
        agent,
        tasks,
      });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching agent tasks', error: err.message });
  }
};
