const UserService = new (require ("../services/UserSer"))();



class UserController {
    get = (async (req, res) => {
        try {
          const users = UserService.get();
          return res.json({
            items: users,
          });
        } catch (e) {
            console.log(e);
            return res.status(400).send("что-то пошло не так");
        }
      
})
}

module.exports = UserController;