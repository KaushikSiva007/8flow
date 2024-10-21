const cupcakeService = require('../services/cupcakeServices');
const Joi = require('joi');

const cupcakeSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    description: Joi.string(),
    ingredients: Joi.array().items(Joi.string()),
});

const addCupcake = (req, res) => {
    const { error } = cupcakeSchema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const cupcake = cupcakeService.addCupcake(req.body);
    res.status(201).json(cupcake);
};

const getCupcakes = (req, res) => {
    const cupcakes = cupcakeService.getCupcakes();
    res.status(200).json(cupcakes);
};

const getCupcakeById = (req, res) => {
    const cupcake = cupcakeService.getCupcakeById(parseInt(req.params.cupcakeId));
    if (!cupcake) return res.status(404).send({ message: "Cupcake not found." });
    res.status(200).json(cupcake);
};

const updateCupcake = (req, res) => {
    const cupcakeId = parseInt(req.params.cupcakeId);
    const { error } = cupcakeSchema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const cupcake = cupcakeService.updateCupcake(cupcakeId, req.body);
    if (!cupcake) return res.status(404).send({ message: "Cupcake not found." });
    res.status(200).json(cupcake);
};

const deleteCupcake = (req, res) => {
    const cupcakeId = parseInt(req.params.cupcakeId);
    const deleted = cupcakeService.deleteCupcake(cupcakeId);
    if (!deleted) return res.status(404).send({ message: "Cupcake not found." });
    res.status(204).send();
};

module.exports = {
    addCupcake,
    getCupcakes,
    getCupcakeById,
    updateCupcake,
    deleteCupcake,
};
