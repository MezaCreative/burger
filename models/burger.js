// Importing ORM to create functions that will work with the database.
const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", col, val, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database function for the controller (bugerController.js).
module.exports = burger;