const redirectToHome = (req, res) => {
  res.redirect("/api/v1/home");
};

const renderLandingPage = (req, res) => {
  res.render("landing", {
    title: "PracticeAPI | SaaS Landing",
    subtitle:
      "Build fast APIs with friendly tooling, modern architecture, and enterprise-ready reliability.",
  });
};

module.exports = {
  redirectToHome,
  renderLandingPage,
};
