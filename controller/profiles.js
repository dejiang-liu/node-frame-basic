exports.getProfiles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /profiles getProfiles')
  } catch (err) {
      next(err)
  }
}

exports.followProfiles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /profiles followProfiles')
  } catch (err) {
      next(err)
  }
}

exports.deFollowProfiles = async (req, res, next) => {
  try {
      // do something
      res.send('get  /profiles deFollowProfiles')
  } catch (err) {
      next(err)
  }
}