const homeUrl = ["/api/v1/", "/api", "/v1", "/api/v1"];
const underConstructionRoutes = [
  "/api/v1/home/locations",
  "/api/v1/date",
  "/api/v1/finance",
  "/api/v1/commerce",
  "/api/v1/airline",
  "/api/v1/book",
  "/api/v1/color",
  "/api/v1/company",
  "/api/v1/database",
  "/api/v1/food",
  "/api/v1/images",
  "/api/v1/lorem",
  "/api/v1/music",
  "/api/v1/phones",
  "/api/v1/science",
  "/api/v1/vehicle",
  "/api/v1/words",
];

// notFound.js
module.exports = (req, res) => {
  if (homeUrl.includes(req.url)) {
    return res.redirect("/api/v1/home");
  }
  if (underConstructionRoutes.includes(req.url)) {
    let route = req.url;
    if (req.accepts("html")) {
      return res.status(503).render("under-construction", { route }); // Testing  left
    }
    return res.status(503).json({
      message: "This page is under construction!",
    });
  }
  // console.log("URL---------------", req.url);
  res.status(404).render("notfound");
};
