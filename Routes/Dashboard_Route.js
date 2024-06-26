const router = require("express").Router();
const database = require("../Database/database");
const Chats = require("../Database/Models/Chats");
const Test = require("../Database/Models/Project_Test");

router.get("/getChats", async (req,res) => {
    const data = await Chats.find();
    res.json(data);
});

router.post("/add_test", async (req,res) => {
    const {projectName, keyName, message} = req.body;

    const data = new Test({
        projectName, keyName, message
    })

    const savedData = await data.save();
    res.json(savedData);
})

router.get("/getTests/:keyName", async (req, res) => {
    const {keyName} = req.params;

    const data = await Test.find({keyName});
    res.json(data);
})

router.get("/deleteTest/:id", async (req, res) => {
    const {id} = req.params;

    const data = await Test.findByIdAndDelete(id);
    res.json(data);
})

router.get("/deleteAllTests/:project", async (req,res) => {
    const {project} = req.params;
    const data = await Test.deleteMany({keyName:project});
    res.json(data);

})

module.exports = router;

