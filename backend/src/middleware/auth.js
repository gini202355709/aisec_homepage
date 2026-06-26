const { verifyToken } = require('../utils/auth');
const { findUserById } = require('../data/store');

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';

  if (!token) {
    return res.status(401).json({ message: '인증 토큰이 필요합니다.' });
  }

  try {
    const payload = verifyToken(token);
    const user = findUserById(payload.id);

    if (!user) {
      return res.status(401).json({ message: '유효하지 않은 사용자입니다.' });
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: '토큰이 유효하지 않습니다.' });
  }
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: '관리자 권한이 필요합니다.' });
  }
  return next();
}

module.exports = authMiddleware;
module.exports.requireAdmin = requireAdmin;
