const workoutServices = require("../services/workoutServices")

const getAll = (req, res) => {
    const allWorkout = workoutServices.getAll();
    res.send({ status: "OK", data: allWorkout });
};

const getOne = (req, res) => {
    const oneWorkout = workoutServices.oneWorkout(req.params.workoutId);
    res.send(`Get workout with id ${req.params.workoutId}`);
};

const insertOne = (req, res) => {
    const insertOne = workoutServices.insertOne(req.params.workoutId);
    res.end(`Create workout ${req.params.workoutId}`);
};

const updateOne = (req, res) => {
    const updateOne = workoutServices.updateOne(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
};

const deleteOne = (req, res) => {
    const deleteOne = workoutServices.deleteOne(req.params.workoutId);
    res.send(`Delete workout ${req, params.workoutId}`);
};

module.exports = {
    getAll,
    getOne,
    insertOne,
    updateOne,
    deleteOne
}