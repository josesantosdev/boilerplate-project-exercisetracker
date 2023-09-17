function loggerMiddleware(req, res, next) {
    console.log(`Método: ${req.method}, Rota: ${req.url}, Status: ${res.statusCode}`);
    next();
}

module.exports = loggerMiddleware;