const workout = require('../database/Workout');
const { v4: uuid } = require('uuid');

const getAll = () => {
    const allWorkout = workout.getAllWorkout();
    return allWorkout;
};
const getOne = (newId) => {
    const oneWorkout = workout.getOneWorkout(newId)
    return oneWorkout;
};
const createWorkout = (newWorkout) => {
    const woroutToInsert = {
        ...newWorkout,
        id: uuid(),
        createAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    const createdWorkout = workout.createNewWorkout(woroutToInsert);
    return createdWorkout;
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
    createWorkout,
    updateOne,
    deleteOne
}