const db = require('./../models');
const profilePicture = db.profile

exports.findAll = async (req, res) =>  {
	const profile = await profilePicture.findAll();
	return res.status(200).json(profile);
}

exports.create = async (req, res) => {
	const host = req.get('host');
	const userId = req.auth.userId;
	const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}`;
	try{
		const profileP = await profilePicture.create({
			imageUrl,
			userId
		})
		return res.status(201).json(profileP)
	}catch (err) {
		return res.status(500).json({ error: new Error('Something went wrong') })
	}
}

exports.delete = async (req, res) => {
	try{
		await profilePicture.destroy({where:{id: req.params.id}})
		return res.status(204).json({message: 'Work Deleted Successfully'})
	}catch(e){
		return res.status(500).json({error: new Error('Something went wrong')})
	}

}
