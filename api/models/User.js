/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'usuario',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
      id : {type : 'string'},
      nick : {type : 'string'},
      nombre : {type : 'string'},
      apellido : {type : 'string'}
  }
  
};

