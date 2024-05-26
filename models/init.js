const User = require ("./User");
const Todo = require ("./Todo");

User.hasMany(Todo);
Todo.belongsTo(User);

const init = async()=>{
    await User.sync({alter: true})
    await Todo.sync({alter: true})
};

module.exports = { init, User, Todo};