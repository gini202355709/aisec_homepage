const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { requireAdmin } = require('../middleware/auth');
const {
  createResource,
  listResources,
  getResourceById,
  updateResource,
  deleteResource,
  incrementResourceDownload,
} = require('../data/store');

const uploadDir = path.join(__dirname, '..', '..', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.bin';
    const safeName = `${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`;
    cb(null, safeName);
  },
});

const upload = multer({ storage });

router.get('/', (req, res) => {
  return res.json({ resources: listResources() });
});

router.get('/:id', (req, res) => {
  const resource = getResourceById(req.params.id);
  if (!resource) {
    return res.status(404).json({ message: '자료를 찾을 수 없습니다.' });
  }
  return res.json({ resource });
});

router.post('/', authMiddleware, requireAdmin, upload.single('file'), (req, res) => {
  const { title, type, size, date, downloads, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: '제목은 필수입니다.' });
  }

  const resource = createResource({
    title,
    type,
    size,
    date,
    downloads,
    description,
    fileName: req.file?.originalname || '',
    filePath: req.file?.path || '',
  });

  return res.status(201).json({ resource });
});

router.patch('/:id', authMiddleware, requireAdmin, (req, res) => {
  const resource = updateResource(req.params.id, req.body);
  if (!resource) {
    return res.status(404).json({ message: '자료를 찾을 수 없습니다.' });
  }
  return res.json({ resource });
});

router.get('/:id/download', (req, res) => {
  const resource = incrementResourceDownload(req.params.id);
  if (!resource) {
    return res.status(404).json({ message: '자료를 찾을 수 없습니다.' });
  }

  if (!resource.filePath || !fs.existsSync(resource.filePath)) {
    return res.status(404).json({ message: '업로드된 파일이 없습니다.' });
  }

  return res.download(resource.filePath, resource.fileName || path.basename(resource.filePath));
});

router.delete('/:id', authMiddleware, requireAdmin, (req, res) => {
  const deleted = deleteResource(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: '자료를 찾을 수 없습니다.' });
  }
  return res.json({ message: '자료가 삭제되었습니다.' });
});

module.exports = router;
