module.exports = function(sequelize, DataTypes) {
    const Codes = sequelize.define("Codes", {
        codesnip: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "NA"
        },
        codeDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "NA",
            validate: {
                len: [1, 20]
            }
        },
        keywords: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "NA",
            validate: {
                len: [1, 20]
            }
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "NA"
        },
        price: {
            type: DataTypes.DECIMAL(4, 2).ZEROFILL.UNSIGNED,
            isDecimal: true,
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
