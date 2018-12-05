module.exports = function(sequelize, DataTypes) {
    const Patients = sequelize.define("Patients", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", "i"]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", "i"]
            }
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", "i"]
            }
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            values: ["Male", "Female"]
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false,
            values: [
                "American Indian or Alaskan Native",
                "Asian",
                "Black or African American",
                "Native Hawaiian",
                "White"
            ]
        },
        ethnicity: {
            type: DataTypes.STRING,
            allowNull: false,
            values: ["Hispanic", "Non-hispanic"]
        }
    });
    Patients.associate = function(models) {
        Patients.hasMany(
            models.Prescriptions,
            { as: "patients" },
            { foreignKey: { name: "patientsId" } }
        );
    };
    return Patients;
};
