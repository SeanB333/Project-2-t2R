module.exports = function(sequelize, DataTypes) {
    const Codes = sequelize.define("Codes", {
        codeDescrition: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ""
        },
        keywords: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", "i"]
            },
            defaultValue: ""
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        price: {
            type: DataTypes.DECIMAL.ZEROFILL.UNSIGNED,
            isDecimal: true,
            validate: {
                not: ["[a-z]", "i"]
            },
            validate: {
                min: {
                    args: [0],
                    msg: { error: { price: "price" }, code: 400 }
                }
            }
        }
    });
    Codes.associate = function(models) {
        Codes.belongsTo(
            models.Users,
            { as: "users" },
            { foreignKey: { name: "usersId" } }
        );
    };
    return Codes;
};
