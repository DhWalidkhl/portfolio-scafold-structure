export const fileUploadController = async (req, res)=>{
	try {
		if (!req.file) {
			return res.status(400).send({message: 'Please select a file'});
		}
		await res.status(200).json({
			message: 'Successfully uploaded your file',
			file: req.file
		});
	}
	catch (err) {
		res.status(500).json({error: err.message});
		console.log(err);
	}
}