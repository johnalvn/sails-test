module.exports.routes = {
    '/getuser' : 'User/UserController.getUser',
    '/user' : {
        controller : 'User/UserController',
        action : 'getUser'
    }
}


