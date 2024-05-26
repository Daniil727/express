const sequelize = require ("../DB");
const {DataTypes} = require ("sequelize");

const Todo = sequelize.define(
    'Todo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      
    },
    {
      underscored: true,
      tableName: "todo",
      timestamps: true,
    },
  );
  
  module.exports = Todo;