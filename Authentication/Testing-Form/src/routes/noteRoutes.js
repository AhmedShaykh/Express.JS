const express = require("express");
const auth = require("../middlewares/auth");
const { getNode, createNode, deleteNode, updateNode } = require("../controllers/noteController");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNode);

noteRouter.post("/", auth, createNode);

noteRouter.put("/:id", auth, updateNode);

noteRouter.delete("/:id", auth, deleteNode);

module.exports = noteRouter;