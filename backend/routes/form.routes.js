const express = require("express")
const router = express.Router()
const {collectData} = require("../controllers/form.controller")

router.post("/contactUs", collectData)

module.exports = router