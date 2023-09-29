// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ANSCER ROBOTICS - ANSCER ANYA Documentation",
  tagline:
    "ANSCER ANYA is a software solution designed to manage and automate material transport in warehouses and industries for ANSCER ROBOTS.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://anscer-anya-docs.web.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "anscerrobotics", // Usually your GitHub org/user name.
  projectName: "AnscerAnya", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr", "fa"],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: "en-GB",
  //     },
  //     // You can omit a locale (e.g. fr) if you don't need to override the defaults
  //     fa: {
  //       direction: "rtl",
  //     },
  //   },
  // },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        versionPersistence: "localStorage",
      },
      image: "img/AllRobots.jpeg",
      navbar: {
        title: "ANSCER Robotics",
        logo: {
          alt: "Anscer Robotics Logo",
          src: "img/logoDark.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Manual",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Website",
                to: "https://www.anscer.com",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/anscer-robotics/",
              },
              {
                label: "Twitter",
                to: "https://www.twitter.com/anscerrobotics",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "ROS Wiki",
                to: "https://wiki.ros.org/AnscerRobotics",
              },
              {
                label: "GitHub",
                to: "https://github.com/anscer",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://anscer.com">Anscer Robotics</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
