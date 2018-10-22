var mongoose = require("mongoose");
mongoose.set('debug', true);
// mongoose.connect("mongodb://localhost/todo-api", { useNewUrlParser: true })
mongoose.connect("mongodb://adam:barney55@ds139193.mlab.com:39193/dailygoals", { useNewUrlParser: true })


mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

