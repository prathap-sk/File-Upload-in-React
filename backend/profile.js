const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const path = require("path");

// What are files arrived store  it on the assets folder
const assetFolder = path.join(__dirname, "assets");

router.use(fileUpload());
router.post("/", (req, response) => {
    console.log(req.files)
    const { avatar } = req.files;
    avatar.mv(path.join(assetFolder, avatar.name))
    // pass a response status
    response.status(200).json({ message: `This ${avatar.name} upload successfully into backend` })
    response.status(404).json({ message: `File not found` })
})

module.exports = router;