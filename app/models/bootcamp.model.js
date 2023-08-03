module.exports = (sequelize, DataTypes) => {
  const Bootcamp = sequelize.define('bootcamps', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "El campo nombre (title) es requerido"
        },
      },
    },
    cue: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Números de CUE es necesario, minimo 5 y máximo 10"
        },
        isInt: {
          args: true,
          msg: "Debes introducir un número entero"
        },
        max: 10,
        min: 5,
      },
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Se debe introducir una descripción"
        },
      },
    }

  })

  return Bootcamp
}