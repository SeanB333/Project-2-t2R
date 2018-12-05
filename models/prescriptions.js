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
        },
        intakeCheck: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });
    Prescriptions.associate = function(models) {
        Prescriptions.belongsTo(
            models.Patients,
            { as: "patients" },
            { foreignKey: { name: "patientsId" } }
        );
    };
    return Prescriptions;
};
