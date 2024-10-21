let cupcakes = [];
let nextId = 1;

const addCupcake = (cupcakeData) => {
    const newCupcake = { id: nextId++, ...cupcakeData };
    cupcakes.push(newCupcake);
    return newCupcake;
};

const getCupcakes = () => cupcakes;

const getCupcakeById = (cupcakeId) => cupcakes.find(c => c.id === cupcakeId);

const updateCupcake = (cupcakeId, updatedData) => {
    const index = cupcakes.findIndex(c => c.id === cupcakeId);
    if (index !== -1) {
        cupcakes[index] = { ...cupcakes[index], ...updatedData };
        return cupcakes[index];
    }
    return null;
};

const deleteCupcake = (cupcakeId) => {
    const index = cupcakes.findIndex(c => c.id === cupcakeId);
    if (index !== -1) {
        cupcakes.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    addCupcake,
    getCupcakes,
    getCupcakeById,
    updateCupcake,
    deleteCupcake,
};
