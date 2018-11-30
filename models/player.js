module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    player_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    highScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Player;
};
