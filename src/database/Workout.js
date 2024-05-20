const DB = require('./db.json');

const getAllWorkout = () => {
    return DB.workouts;
};

module.exports = { getAllWorkout };