const Jobsmodel = require("../models/jobs")

class Jobs{
    async getAll(){
        try{
            const jobs = await Jobsmodel.find()
            // Ya tenemos disponubles los datos

            return jobs // Array de objetos
        }catch(error){
            console.log(error)
        }
    }

    async create(data){
        try{
            const jobs = await Jobsmodel.create(data)
            // Ya tenemos disponibles los datos

            return jobs // Objeto
        }catch(error){
            if(error.code===11000){
                const message = `llene todos los campos requeridos`

                return {
                    error:true,
                    message
                }
            }
            

        }
    }

    async update(id,data){
        try{
            const jobs = await Jobsmodel.findByIdAndUpdate(id,data,{new:true})
            // Ya tenemos disponibles los datos

            return jobs // Objeto
        }catch(error){
            console.log(error)
        }
    }

    async delete(id){
        try{
            const jobs = await Jobsmodel.findByIdAndDelete(id)
            // Ya tenemos disponibles los datos

            return jobs // Objeto
        }catch(error){
            console.log(error)
        }
    }

    
   
    
}

module.exports = Jobs