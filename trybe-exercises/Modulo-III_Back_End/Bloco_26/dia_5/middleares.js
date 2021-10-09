function validateEmail(req, res, next) {
  const { email } = req.body;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;
  if (!emailRegex.test(email))
    return res.status(400).json({ message: "invalid data" });
  next();
}

function validateUser(req, res, next) {
  const { user } = req.body;
  if (user.length < 3) return res.status(400).json({ message: "invalid date" });
  next();
}

function validatePassword(req, res, next) {
  const { passaword } = req.body;
  if (passaword.length > 4 && passaword.length < 8)
    return res.status(400).json({ message: "invalid data" });
		next();
}


module.exports = {
	validateEmail,
	validatePassword,
	validateUser,
}