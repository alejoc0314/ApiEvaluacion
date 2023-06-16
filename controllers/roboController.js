const { response } = require('express');

const Robo = require('../models/roboModel.js');

const roboGet = async (req, res = response) => {
    const robo = await Robo.find();
    res.json({
        robo
    });
};

const roboGetOne = async (req, res = response) => {
    const { _id } = req.query;
    const robo = await Robo.findById(_id);
    res.json({ robo });
};

const roboPost = async (req, res = response) => {
    const body = req.body;
    try {
        const robo = new Robo(body);
        await robo.save();
        return res.json({
            respuesta: 'Se ha registrado el robo con éxito.',
            robo
        });
    } catch (error) {
        console.error(error);
        return res.json({ respuesta: 'Error en el servidor al registrar el robo.' });
    }
};

const roboPut = async (req, res = response) => {
    const { _id } = req.params;
    try {
        const roboActualizado = await Robo.findOneAndUpdate(
            { _id: _id },
            { ...req.body },
            { new: true }
        );
        console.log(roboActualizado);
        if (!roboActualizado) {
            return res.status(404).json({ respuesta: 'El Robo no ha sido encontrado.' });
        }
        return res.json({
            respuesta: 'Actualización del Robo realizada con éxito.',
            roboActualizado
        });
    } catch (error) {
        console.error('Error en el servidor al actualizar el Robo:', error);
        return res.status(500).json({ respuesta: 'Error en el servidor al actualizar el Robo.' });
    }
};

const roboDelete = async (req, res = response) => {
    try {
        const roboEliminado = await Robo.findOneAndDelete({ _id: req.body._id });
        if (!roboEliminado) {
            return res.status(404).json({ respuesta: 'Robo no encontrado.' });
        };
        return res.json({
            respuesta: 'Robo eliminado exitosamente.',
            roboEliminado
        });
    } catch (error) {
        return res.status(500).json({ respuesta: 'Error en el servidor al eliminar el Robo.' });
    };
};

module.exports = { roboGet, roboGetOne, roboPost, roboPut, roboDelete }; 