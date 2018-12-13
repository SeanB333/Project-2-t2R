module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            notEmpty: true,
            notNull: true
        }
    });
    User.associate = function(models) {
        User.hasMany(
            models.Codes,
            { as: "codes" },
            { foreignKey: { name: "codesId" } }
        );
    };
    return User;
};
