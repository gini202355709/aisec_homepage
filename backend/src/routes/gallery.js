const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { requireAdmin } = require('../middleware/auth');
const {
  createGalleryItem,
  listGallery,
  getGalleryItemById,
  updateGalleryItem,
  deleteGalleryItem,
} = require('../data/store');

router.get('/', (req, res) => {
  return res.json({ gallery: listGallery() });
});

router.get('/:id', (req, res) => {
  const item = getGalleryItemById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: '갤러리 항목을 찾을 수 없습니다.' });
  }
  return res.json({ galleryItem: item });
});

router.post('/', authMiddleware, requireAdmin, (req, res) => {
  const { title, description, date, imageUrl } = req.body;
  if (!title) {
    return res.status(400).json({ message: '제목은 필수입니다.' });
  }

  const item = createGalleryItem({ title, description, date, imageUrl });
  return res.status(201).json({ galleryItem: item });
});

router.patch('/:id', authMiddleware, requireAdmin, (req, res) => {
  const item = updateGalleryItem(req.params.id, req.body);
  if (!item) {
    return res.status(404).json({ message: '갤러리 항목을 찾을 수 없습니다.' });
  }
  return res.json({ galleryItem: item });
});

router.delete('/:id', authMiddleware, requireAdmin, (req, res) => {
  const deleted = deleteGalleryItem(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: '갤러리 항목을 찾을 수 없습니다.' });
  }
  return res.json({ message: '갤러리 항목이 삭제되었습니다.' });
});

module.exports = router;
