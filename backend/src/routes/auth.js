const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { createUser, findUserByEmail, getUserProfile } = require('../data/store');
const { comparePassword, hashPassword, signToken } = require('../utils/auth');
const { ADMIN_REGISTRATION_SECRET } = require('../config/env');

router.post('/register', (req, res) => {
  const { name, email, password, role, memberType, company, phone } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: '이름, 이메일, 비밀번호는 필수입니다.' });
  }

  if (findUserByEmail(email)) {
    return res.status(409).json({ message: '이미 사용 중인 이메일입니다.' });
  }

  if (role === 'admin' && req.body.adminSecret !== ADMIN_REGISTRATION_SECRET) {
    return res.status(403).json({ message: '관리자 등록 권한이 없습니다.' });
  }

  const user = createUser({
    name,
    email,
    phone,
    passwordHash: hashPassword(password),
    role: role || 'member',
    memberType: memberType || 'personal',
    company,
  });

  const token = signToken({ id: user.id, email: user.email, role: user.role });

  return res.status(201).json({
    message: '회원가입이 완료되었습니다.',
    user: getUserProfile(user),
    token,
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: '이메일과 비밀번호를 입력해주세요.' });
  }

  const user = findUserByEmail(email);
  if (!user || !comparePassword(password, user.passwordHash)) {
    return res.status(401).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
  }

  const token = signToken({ id: user.id, email: user.email, role: user.role });
  return res.json({ message: '로그인 성공', user: getUserProfile(user), token });
});

router.get('/me', authMiddleware, (req, res) => {
  return res.json({ user: getUserProfile(req.user) });
});

module.exports = router;
