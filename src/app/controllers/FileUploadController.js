export const fileUploadController = async (req, res)=>{
	try {
		if (!req.file) {
			return res.status(400).send({message: 'Please select a file'});
		}
		await res.status(200).json({
			status: 'success',
			data: req.file
		});
	}
	catch (err) {
		console.error("Error in controller:", err);
		res.status(500).json({error: err.message});
	}
}