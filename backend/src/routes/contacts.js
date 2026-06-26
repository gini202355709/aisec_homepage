const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { requireAdmin } = require('../middleware/auth');
const { createContact, listContacts, updateContactStatus } = require('../data/store');

router.post('/', (req, res) => {
  const { inquiryType, name, affiliation, email, phone, title, message, agree } = req.body;

  if (!name || !email || !title || !message || !agree) {
    return res.status(400).json({ message: '필수 항목을 모두 입력해주세요.' });
  }

  const contact = createContact({
    inquiryType,
    name,
    affiliation,
    email,
    phone,
    title,
    message,
    agree,
  });

  return res.status(201).json({ message: '문의가 접수되었습니다.', contact });
});

router.get('/', authMiddleware, requireAdmin, (req, res) => {
  return res.json({ contacts: listContacts() });
});

router.patch('/:id/status', authMiddleware, requireAdmin, (req, res) => {
  const { status } = req.body;
  const contact = updateContactStatus(req.params.id, status || 'received');
  if (!contact) {
    return res.status(404).json({ message: '문의 내역을 찾을 수 없습니다.' });
  }
  return res.json({ contact });
});

module.exports = router;
