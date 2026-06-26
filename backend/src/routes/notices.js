const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { requireAdmin } = require('../middleware/auth');
const { createNotice, listNotices, getNoticeById, updateNotice, deleteNotice } = require('../data/store');

router.get('/', (req, res) => {
  return res.json({ notices: listNotices() });
});

router.get('/:id', (req, res) => {
  const notice = getNoticeById(req.params.id);
  if (!notice) {
    return res.status(404).json({ message: '공지사항을 찾을 수 없습니다.' });
  }
  return res.json({ notice });
});

router.post('/', authMiddleware, requireAdmin, (req, res) => {
  const { title, content, tag, date, views, pinned } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: '제목과 내용을 입력해주세요.' });
  }

  const notice = createNotice({ title, content, tag, date, views, pinned });
  return res.status(201).json({ notice });
});

router.patch('/:id', authMiddleware, requireAdmin, (req, res) => {
  const notice = updateNotice(req.params.id, req.body);
  if (!notice) {
    return res.status(404).json({ message: '공지사항을 찾을 수 없습니다.' });
  }
  return res.json({ notice });
});

router.delete('/:id', authMiddleware, requireAdmin, (req, res) => {
  const deleted = deleteNotice(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: '공지사항을 찾을 수 없습니다.' });
  }
  return res.json({ message: '공지사항이 삭제되었습니다.' });
});

module.exports = router;
