import express  from "express"

const publicRouter = new express.Router()

publicRouter.get("/", (req, res) => {
    res.send("Hello TEs")
});

export default publicRouter;