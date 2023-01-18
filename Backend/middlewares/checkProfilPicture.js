module.exports = (req, res, next) => {
	try{
		const host = req.get('host');
		const userId = req.auth.userId ?? undefined;
		const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}` ?? undefined;
	console.log(userId,imageUrl)
		if(userId !== undefined &&
			userId > 0 &&
			imageUrl !== undefined){
			req.work = {userId, imageUrl}
			next()
		}else{
			return res.status(400).json({error: new Error("Bad Request")})
		}
	}catch(e){
		return res.status(500).json({error: new Error("Something wrong occured")})
	}

}
