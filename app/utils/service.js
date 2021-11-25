/**
 * Common place to handle all error
 * @link https://stackoverflow.com/questions/63856212/how-to-display-sequelize-validation-error-messages-in-express-api
 */
 exports.handleError = (error, req, res) => {
	res.status(400).send({
		error: true,
		message: error.errors ? error.errors.map(e => e.message) : error.original.sqlMessage
	});
};

/**
 * Generate 6 digits OTP
 * @link https://www.studytonight.com/post/one-time-password-generation-using-javascript
 */
exports.generateOTP = () => {
	var digits = '0123456789'; var otpLength = 6; var otp = '';

	for(let i=1; i <= otpLength; i++) {
		var index = Math.floor(Math.random()*(digits.length));
		otp = otp + digits[index];
	}

	return otp;
}

/**
 * Check if Empty
 * @link https://stackoverflow.com/questions/11480769/how-can-i-check-if-a-json-is-empty-in-nodejs
 */
exports.isEmpty = (value) => {
	return value === undefined ||
	value === null ||
	value === '' ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0)
}