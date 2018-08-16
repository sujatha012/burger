var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {

    
    orm.all("burgers", function(res) {
      console.log("In All ORM : " + res);
      cb(res);
    });
  },
  create: function(name, cb) {
    console.log("In Create ORM : " + name.toString());
    var vals = [
      name, false
    ];
    var cols = [
      "burger_name", "devoured"
    ];
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {

    console.log("In Update ORM : " + id);
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, function(res) {
      cb(res);
    }
);
  }
};
module.exports = burger;
