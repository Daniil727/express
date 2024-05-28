// const {init,  User, Todo} = require("./models/init");



class UserService {
    get = async (params)=>{
        try{
            const users = await User.findAll({
                include: Todo
           });
           return users;

        }catch(e){
            throw e
        }
    }
};

module.exports = UserService;