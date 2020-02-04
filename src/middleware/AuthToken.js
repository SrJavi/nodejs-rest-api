const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }
    
    const decoded = await jwt.verify(token, process.env.SECRET_TOKEN || '');
    req.userId = decoded.id;
    
    next();
}

module.exports = verifyToken;