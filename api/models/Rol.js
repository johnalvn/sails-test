/**
* Rol.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'rol',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
      id : { type : 'integer' },
      nombre : { type : 'string' },
      slug : { type : 'string' },
  }
};

