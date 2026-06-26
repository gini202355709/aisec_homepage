const express = require('express');
const cors = require('cors');
const path = require('path');
const authRouter = require('./routes/auth');
const noticeRouter = require('./routes/notices');
const resourceRouter = require('./routes/resources');
const galleryRouter = require('./routes/gallery');
const contactRouter = require('./routes/contacts');
const membershipRouter = require('./routes/membership');
const { initializeStore } = require('./data/store');

initializeStore();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'aisec-backend' });
});

app.use('/api/auth', authRouter);
app.use('/api/notices', noticeRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/membership', membershipRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: '서버 오류가 발생했습니다.' });
});

module.exports = app;
