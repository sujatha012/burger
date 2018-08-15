var orm = require("../config/orm.js");

var burger = {
  all: function(bg) {
    orm.all("burgers", function(res) {
      bg(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, bg) {
    orm.create("burgers", cols, vals, function(res) {
      bg(res);
    });
  },
  update: function(objColVals, condition, bg) {
    orm.update("burgers", objColVals, condition, function(res) {
      bg(res);
    });
}
};
module.exports = burger;
