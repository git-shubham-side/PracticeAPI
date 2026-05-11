const underConstructionRoutes = [
  "/api/v1/home/locations",
  // "/api/v1/date", // unused removed later
  // "/api/v1/finance", // unused removed later
  // "/api/v1/commerce", // unused removed later
  // "/api/v1/airline", // unused removed later
  // "/api/v1/book", // unused removed later
  // "/api/v1/color", // unused removed later
  // "/api/v1/company", // unused removed later
  // "/api/v1/database", // unused removed later
  // "/api/v1/food", // unused removed later
  // "/api/v1/images", // unused removed later
  // "/api/v1/lorem", // unused removed later
  // "/api/v1/music", // unused removed later
  // "/api/v1/phones", // unused removed later
  // "/api/v1/science", // unused removed later
  // "/api/v1/vehicle", // unused removed later
  // "/api/v1/words", // unused removed later
];

// notFound.js
module.exports = (req, res) => {
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
