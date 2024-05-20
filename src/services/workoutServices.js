const workout = require('../database/Workout');

const getAll = () => {
    const allWorkout = workout.getAllWorkout();
    return allWorkout;
};
const getOne = () => {
    return;
};
const insertOne = () => {
    return;
};
const updateOne = () => {
    return;
};
const deleteOne = () => {
    return;
};

module.exports = {
    getAll,
    getOne,
    insertOne,
    updateOne,
    deleteOne
}