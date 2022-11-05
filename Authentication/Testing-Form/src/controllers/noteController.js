const noteModel = require("../models/note");

const createNode = async (req, res) => {

    const { title, description } = req.body;

    const newNote = new noteModel({
        title: title,
        description: description,
        userId: req.userId
    });

    try {

        await newNote.save();
        res.status(201).json(newNote);

    }
    catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });

    }

};

const updateNode = async (req, res) => {
};

const deleteNode = async (req, res) => {
};

const getNode = async (req, res) => {

    try {

        const notes = await noteModel.find({ userId: req.userId });
        res.status(200).json(notes);

    }
    catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });

    }

};

module.exports = {
    createNode,
    updateNode,
    deleteNode,
    getNode
};