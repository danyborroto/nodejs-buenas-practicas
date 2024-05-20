const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkout = () => {
    return DB.workouts;
};
const getOneWorkout = (newId) => {
    return DB.workouts.filter(workout => workout.id === newId);
}
const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
}

module.exports = {
    getAllWorkout,
    getOneWorkout,
    createNewWorkout
};