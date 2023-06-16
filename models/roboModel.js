const { Schema, model } = require('mongoose');

const RobosSchema = Schema({
  direccion: {
    type: String,
    required: [true, 'El campo "dirección" es requerido'],
  },
  latitud: {
    type: String,
    required: [true, 'El campo "latitud" es requerido'],
    validate: {
      validator: function (value) {
        // Validar rango de valores para latitud
        const latitud = parseFloat(value);
        return latitud >= 6.13 && latitud <= 6.217;
      },
      message: 'El valor de "latitud" debe estar entre 6.13 y 6.217',
    },
  },
  longitud: {
    type: String,
    required: [true, 'El campo "longitud" es requerido'],
    validate: {
      validator: function (value) {
        // Validar rango de valores para longitud
        const longitud = parseFloat(value);
        return longitud >= -75.567 && longitud <= -75.34;
      },
      message: 'El valor de "longitud" debe estar entre -75.567 y -75.34',
    },
  },
  descripcion: {
    type: String,
    required: [true, 'El campo "descripcion" es requerido'],
  },
  fecha: {
    type: Date,
    default: Date.now,
    immutable: true,
    required: [true, 'El campo "fecha" es requerido'],
  },
});

module.exports = model('robos', RobosSchema);