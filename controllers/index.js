// import dependency
const router = require("express").Router();

// support
const homeRoutes = require("./homeRoutes");
const whatIsRoutes = require("./whatIsRoutes");
const typesRoutes = require("./typesRoutes");
const howMuchRoutes = require("./howMuchRoutes");
const apiRoutes = require("./api");

// router pathing
router.use("/", homeRoutes);
router.use("/what-is-li", whatIsRoutes);
router.use("/types-of-li", typesRoutes);
router.use("/how-much-li", howMuchRoutes);
router.use("/api", apiRoutes);

// failure return
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
