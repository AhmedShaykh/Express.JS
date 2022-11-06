const express = require("express");
const auth = require("../middlewares/auth");
const { getNote, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNote);

noteRouter.post("/", auth, createNote);

noteRouter.put("/:id", auth, updateNote);

noteRouter.delete("/:id", auth, deleteNote);

module.exports = noteRouter;