// external imports
const createError = require("http-errors");

// not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// error handler
function errorHandler(err, req, res, next) {
  res.json({
    error : err  
  })  
  res.status(err.status || 500);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
