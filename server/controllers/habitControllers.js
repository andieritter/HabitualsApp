const db = require('../models/models.js');

const habitControllers = {};

// middlewear to get habits from habits table
habitControllers.getHabits = (req, res, next) => {
  const text = 'SELECT * FROM habits';
  db.query(text, (err, results) => {
    if (err) return next(err);
    res.locals.habits = results.rows;
    next();
  })
};

// middlewear to get images from images table
habitControllers.getImages = (req, res, next) => {
  const text = 'SELECT * FROM images';
  db.query(text, (err, results) => {
    if (err) return next(err);
    res.locals.images = results.rows;
  })
}

//middlewear to get info from habits table
habitControllers.getInfo = (req, res, next) => {
  const { id } = req.query; //NOTE: added const to make sure it was pulling the id path in the get request
  const text = `SELECT * FROM habits WHERE _id = ${id}`;
  const params = [id];
  db.query(text, params,
    (err, results) => {
      if (err) return next(err);
      res.locals.habitInfo = results.rows;
      next();
    });
};



module.exports = habitControllers;