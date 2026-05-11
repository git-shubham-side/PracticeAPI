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

const renderDocsPage = (req, res) => {
  res.render("docs", {
    title: "Documentation | PracticeAPI",
    subtitle: "Learn how to use PracticeAPI - Complete guide with examples",
  });
};

module.exports = {
  redirectToHome,
  renderLandingPage,
  renderDocsPage,
};
