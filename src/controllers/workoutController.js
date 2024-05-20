const workoutServices = require("../services/workoutServices")

const getAll = (req, res) => {
    const allWorkout = workoutServices.getAll();
    res.send({ status: "OK", data: allWorkout });
};

const getOne = (req, res) => {
    const oneWorkout = workoutServices.getOne(req.params.workoutId);
    res.send({ status: "OK", data: oneWorkout });
};

const insertOne = (req, res) => {
    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    const createWorkout = workoutServices.createWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createWorkout });
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