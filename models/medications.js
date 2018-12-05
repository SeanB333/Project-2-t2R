module.exports = function(sequelize, DataTypes) {
    const Medications = sequelize.define("Medications", {
        medsName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", "i"]
            }
        }
    });
    return Medications;
};
