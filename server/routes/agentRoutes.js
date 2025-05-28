const express = require('express');
const router = express.Router();
const { createAgent, getAgents } = require('../controllers/agentController');
const { getAgentTasks } = require('../controllers/agentTaskController');
const auth = require('../middlewares/authMiddleware.js');


// Only admin should access this
router.post('/', auth, createAgent);
router.get('/', auth, getAgents);
router.get('/tasks', auth, getAgentTasks);

module.exports = router;
