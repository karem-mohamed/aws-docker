const userRouter = (router, myEmitter) => {
  router.get("/", (req, res) => {
    console.log(process.env.NODE_ENV, "wwwwwwwwww");
    myEmitter.emit("fire", process.env.NODE_ENV);
    return res.json({
      mess: `aws docker ci cd test api,${process.env.NODE_ENV},${process.env.PORT} try to test again`,
    });
  });

  return router;
};
module.exports = userRouter;
