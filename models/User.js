const sequelize = require ("../DB");
const {DataTypes} = require ("sequelize");


const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      
      
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      
    },
    
  },
  {
    underscored: true,
    tableName: "users",
    timestamps: true,
  },
);

module.exports = User;