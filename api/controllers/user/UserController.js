/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getUser: function (req, res) {

        //res.json(User.count());
        User.find({ where : {id : 1}}).exec(function (err, order) {
            console.log(order);
            res.json(order);    
        });
        
    }
};


    