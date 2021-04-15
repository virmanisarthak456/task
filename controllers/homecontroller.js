const Task = require("../models/todo");
module.exports.find = function (req, res) {
  Task.find(
    {
      // in this we can pass query by finding it (id) in the database
    },
    function (err, tasks) {
      if (err) {
        console.log("error in fetching data from mongodb");
        return;
      }
      return res.render("home", { title: "My_Todo_List", todo_list: tasks });
    }
  );
};
