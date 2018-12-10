module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            notEmpty: true,
            notNull: true
        }
    });
    Users.associate = function(models) {
        Users.hasMany(
            models.Codes,
            { as: "codes" },
            { foreignKey: { name: "codesId" } }
        );
    };
    return Users;
};
