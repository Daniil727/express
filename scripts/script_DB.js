const {sequelize} = require ("../DB");
const User = require("../models/User");


(async()=>{
    try{
    await sequelize.sync({
        alter: true,
        force: false,
    })
    }catch(e){
        console.log(e)
        console.log("ошибка синхронизации")
    }
    
})();


