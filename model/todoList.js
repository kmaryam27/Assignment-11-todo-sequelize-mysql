module.exports = function(sequelize, DataTypes) {
  var ToDoList = sequelize.define("ToDoList", {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    compeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return ToDoList;
};
