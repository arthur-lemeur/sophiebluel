
module.exports = (sequelize, DataTypes) => {
	const picture = sequelize.define(
		"picture",
		{
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: false
			}
		},
		{timestamps:false}
	);
	return picture
}
