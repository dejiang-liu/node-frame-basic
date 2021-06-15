// 获取文章列表
exports.articles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles List Article')
  } catch (err) {
      next(err)
  }
}

exports.articlesFeed = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles Feed Article')
  } catch (err) {
      next(err)
  }
}

exports.getArticles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles get Articles')
  } catch (err) {
      next(err)
  }
}

exports.createArticles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles create Articles')
  } catch (err) {
      next(err)
  }
}

exports.updateArticles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles update Articles')
  } catch (err) {
      next(err)
  }
}

exports.deleteArticles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles delete Articles')
  } catch (err) {
      next(err)
  }
}

exports.addComments = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles add Comments')
  } catch (err) {
      next(err)
  }
}

exports.getComments = async (req, res, next) => {
  try {
      // do something
      res.send('get  /articles get Comments')
  } catch (err) {
      next(err)
  }
}

exports.deleteComments = async (req, res, next) => {
  try {
      // do something
      res.send('get  /article delete Comments')
  } catch (err) {
      next(err)
  }
}

exports.favComments = async (req, res, next) => {
  try {
      // do something
      res.send('get  /article favourite Comments')
  } catch (err) {
      next(err)
  }
}

exports.unfavComments = async (req, res, next) => {
  try {
      // do something
      res.send('get  /article unfavourite Comments')
  } catch (err) {
      next(err)
  }
}