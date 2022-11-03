const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signup = async (req, res) => {

    const { username, email, password } = req.body;

    // ========== Existing User Check ========== //

    try {

        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // ========== Hashed Password ========== //

        const hashedPassword = await bcrypt.hash(password, 10);

        // ========== Create User ========== //

        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        });

        // ========== Create Token ========== //

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    }

    catch (error) {

    }
};

const signin = (req, res) => { };

module.exports = { signup, signin };