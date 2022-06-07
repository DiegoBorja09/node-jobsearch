const {mongoose} = require("../config/db")

const Schema = mongoose.Schema

const jobsSchema = new Schema({
name:String,
employer:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
},
descripcion:{
    type:String,
    required:[true,'la descripcion es obligatoria']
},
bussines:String,
salary:Number,
categorys:{
    tipo:{
    type:String,
    enum:["Front End","Back End","FullStack"],
    required:true
    },
    modalidad:{
    type:String,
    enum:["trabajo remoto","trabajo presencial"],
    default:"trabajo presencial",
    required:true

    },
    programminglanguages:{type:String,
    enum:["java","javascript","php","c#","c++","python","ruby"],
    
    }
},
postulant:[{
    type:Schema.Types.ObjectId,
    ref:'User'

}]

}


)

const JobsModel = mongoose.model("Jobs",jobsSchema)

module.exports = JobsModel