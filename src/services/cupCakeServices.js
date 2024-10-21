const cupcakeModel = require('../models/cupcakeModel');

const addCupcake = (cupcakeData) => {
    return cupcakeModel.addCupcake(cupcakeData);
};

const getCupcakes = () => {
    return cupcakeModel.getCupcakes();
};

const getCupcakeById = (cupcakeId) => {
    return cupcakeModel.getCupcakeById(cupcakeId);
};

const updateCupcake = (cupcakeId, updatedData) => {
    return cupcakeModel.updateCupcake(cupcakeId, updatedData);
};

const deleteCupcake = (cupcakeId) => {
    return cupcakeModel.deleteCupcake(cupcakeId);
};

module.exports = {
    addCupcake,
    getCupcakes,
    getCupcakeById,
    updateCupcake,
    deleteCupcake,
};
