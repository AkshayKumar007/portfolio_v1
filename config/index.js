module.exports = {
  //-- SITE SETTINGS -----
  author: "@AkshayKumar007",
  siteTitle: "Portfolio v1",
  siteShortTitle: "Akshay", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#00D4FF",//"#FAFAFA",
      secondary: "#7A73FF", //"#2A2926",
      tertiary: "#FFD96A",//#252525",
      text: "rgba(255, 255, 255, 0.9)",
      subtext: "#AAAAAA",
      background: "#0A192F", // "#121212",
      card: "#172A45", // #1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/akshay-kumar-b8025a130/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/eternal_coder",
    },
    {
      name: "Github",
      url:
        "https://github.com/AkshayKumar007/",
    },
    {
      name: "HackerEarth",
      url: "https://www.hackerearth.com/@akshayk007",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "1. About Me",
        url: "/#about",
      },
      {
        name: "2. Projects",
        url: "/#articles",
      },
      {
        name: "3. Skills",
        url: "/#projects",
      },
      {
        name: "4. Contact",
        url: "/#contact",
      },
    ],
    button: {
      name: "Resume",
      url: "https://drive.google.com/file/d/1dPhLxX38scqhkUOh0Jr8NLQCm8GYDb2R/view?usp=sharing",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
