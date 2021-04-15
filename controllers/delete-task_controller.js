const Task = require("../models/todo");
module.exports.delete = function (req, res) {
  let id = req.query; //req.quey will contain array of all the task id's

  // now we are finding the conatact(By Id) in the database and deleting it by using findByIdAndDelete function

  //here we find length of that array

  var count = Object.keys(id).length;

  for (let i = 0; i < count; i++) {
    //and called delete one be one on each id

    Task.findByIdAndDelete(Object.keys(id)[i], function (err) {
      if (err) {
        console.log("error in deleting an object from the database");
      }

      console.log("function is called");
    });
  }
  res.redirect("back"); //browser
};
