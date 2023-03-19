import  mongoose from "mongoose";

const {Schema, model} = mongoose;
const required=true;

const portfolioSchema = new Schema({
    name:{type:String, required},
    email:{type:String, required},
    text:{type:String, required},
    isConfirmed:{type:Boolean, required}
})

const Portfolio = model("portfolio", portfolioSchema);

export default Portfolio;