module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Category.associate = function (models) {
        // Associating Category with Questions
        // When a Category is deleted, also delete any associated Questions
        Category.hasMany(models.Question, {
            onDelete: "cascade"
        });
    };

    return Category;
};