module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    text: DataTypes.TEXT,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    answer3: DataTypes.STRING,
    answer4: DataTypes.STRING,
    correctAnswer: DataTypes.STRING,
    answered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Question.associate = function(models) {
    Question.belongsTo(models.Category, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Question;
};
