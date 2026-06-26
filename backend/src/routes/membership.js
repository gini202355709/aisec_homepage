const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { requireAdmin } = require('../middleware/auth');
const { createMembershipApplication, listMembershipApplications } = require('../data/store');

router.post('/applications', (req, res) => {
  const { name, email, memberType, company, phone, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: '이름과 이메일은 필수입니다.' });
  }

  const application = createMembershipApplication({
    name,
    email,
    memberType,
    company,
    phone,
    message,
  });

  return res.status(201).json({ message: '가입 신청이 접수되었습니다.', application });
});

router.get('/applications', authMiddleware, requireAdmin, (req, res) => {
  return res.json({ applications: listMembershipApplications() });
});

module.exports = router;
