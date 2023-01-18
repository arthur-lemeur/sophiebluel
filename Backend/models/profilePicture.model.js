
module.exports = (sequelize, DataTypes) => {
	const profile = sequelize.define(
		"profile",
		{
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: false
			}
		},
		{timestamps:false}
	)
	return profile
}
