module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    player_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    highScore: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  return Player;
};
