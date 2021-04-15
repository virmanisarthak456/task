const Task = require("../models/todo");
module.exports.create = function (req, res) {
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTask) {
      if (err) {
        console.log("error in creating a task");
        return;
      }
      console.log("New Task is created", newTask);

      return res.redirect("back");
    }
  );
};
