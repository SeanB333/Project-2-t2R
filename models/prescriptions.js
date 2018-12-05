module.exports = function(sequelize, DataTypes) {
    const Prescriptions = sequelize.define("Prescriptions", {
        prescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", "i"]
            }
        },
        dosage: {
            type: DataTypes.INTEGER(2).ZEROFILL.UNSIGNED,
            allowNull: false
        }
    });
    Prescriptions.associate = function(models) {
        Prescriptions.hasMany(
            models.Medications,
            { as: "medications" },
            { foreignKey: { name: "medicationsId" } }
        );
    };
    return Prescriptions;
};
