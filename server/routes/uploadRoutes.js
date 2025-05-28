const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware.js')
const { uploadFile } = require('../controllers/uploadController.js');

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
