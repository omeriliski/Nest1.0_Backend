import express from "express";
import Portfolio from "../models/portfolio.js";

const portfolioRouter = express.Router();

portfolioRouter.post("/savePost", async(req, res, next)=>{
    console.log(req.body);
    try {
        const post = await Portfolio.create(req.body);
        res.send(post);
      } catch (error) {
        //todo: we should return the error
        // like: next(createError(400, error.message));
        console.log(error);
      }
})

portfolioRouter.get("/getPosts", (req,res)=>{
    console.log("getPosts");
    try {
        const posts = Portfolio.find({});
        res.send(posts);
    } catch (error) {
        console.log(error);
    }
})

export default portfolioRouter;