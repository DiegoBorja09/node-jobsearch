const express = require("express")
const JobsService = require("../services/jobs")
const authValidation = require("../middleware/authValidation")

function jobs(app){

    const router = express.Router()
    const jobsService = new JobsService()
    app.use("/api/jobs",router)

    router.get("/", async (req,res)=>{

        console.log(req.jobs)
        const jobs = await jobsService.getAll() // Array de usuarios

        return res.json(jobs)
    })

    router.put("/:id",...authValidation("employer"),async (req,res)=>{
        const  result = await jobsService.update(req.params.id,req.body)
        return res.json( result)
    })
    router.delete("/:id",...authValidation("employer"),async (req,res)=>{
        const  result = await jobsService.delete(req.params.id)
        return res.status(result.error?400:200).json(result)
    })

    router.post("/signup",...authValidation("employer"),async (req,res)=>{
        const result = await jobsService.create(req.body)

        return res.status(result.error?400:200).json(result)
    })

}
module.exports =jobs