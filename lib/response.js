// 封装自定义res
module.exports = function sendResponse(req, res, next) {
  res.sendSuccess = (data) => {
    res.status(200).json({
      code: 0,
      data: data || {}
    });
  };

  res.sendError = (message) => {
    res.status(200).jsonp({
      code: 1,
      message: message
    });
  };
  next();
}