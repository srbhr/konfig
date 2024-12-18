// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const { remarkCodeHike } = require("konfig-code-hike-mdx");

const beforeRemarkPlugins = [
  [
    remarkCodeHike,
    {
      theme: "github-from-css",
      lineNumbers: true,
      showCopyButton: true,
      skipLanguages: ["", "mermaid"],
    },
  ],
];

const beforeRemarkPluginsForBlogs = [
  [
    remarkCodeHike,
    {
      theme: "github-from-css",
      lineNumbers: true,
      showCopyButton: false,
      skipLanguages: ["", "mermaid"],
    },
  ],
];

const beforeRemarkPluginsForPages = [
  [
    remarkCodeHike,
    {
      theme: "github-from-css",
      skipLanguages: ["", "mermaid"],
    },
  ],
];

/**
 * @returns {Promise<import('@docusaurus/types').Config>}
 */
async function createConfig() {
  const remarkPlugins = [(await import("remark-gfm")).default];
  return {
    title: "Konfig",
    tagline: "Generate SDKs for your REST API",
    url: "https://konfigthis.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    trailingSlash: true,
    scripts: [
      {
        src: "/js/rb2b.js",
        async: false,
      },
      {
        src: "https://tag.clearbitscripts.com/v1/pk_99799d8e5d4460e6c6e7b3c89b407b12/tags.js",
        referrerpolicy: "strict-origin-when-cross-origin",
        async: true,
      },
    ],
    markdown: {
      mermaid: true,
    },
    themes: [
      "docusaurus-json-schema-plugin",
      "@docusaurus/theme-mermaid",
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexBlog: false,
          docsRouteBasePath: "/",
        },
      ],
    ],
    plugins: [
      async function docusaurus(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: "facebook", // Usually your GitHub org/user name.
    // projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          sitemap: {
            ignorePatterns: [
              "**/sdk-sign-up/",
              "**/sales-demo/",
              "**/search/",
              "**/blog/archive/",
            ],
          },
          docs: {
            beforeDefaultRemarkPlugins: beforeRemarkPlugins,
            remarkPlugins: remarkPlugins,
            routeBasePath: "/docs",
            sidebarPath: require.resolve("./sidebars.js"),
          },
          pages: {
            beforeDefaultRemarkPlugins: beforeRemarkPluginsForPages,
            remarkPlugins: remarkPlugins,
          },
          theme: {
            customCss: [
              require.resolve("@code-hike/mdx/styles.css"),
              require.resolve("./src/css/custom.css"),
            ],
          },
          blog: {
            beforeDefaultRemarkPlugins: beforeRemarkPluginsForBlogs,
            blogSidebarCount: "ALL",
            blogSidebarTitle: "All posts",
            remarkPlugins: remarkPlugins,
            showReadingTime: true,
            blogDescription: "Generate SDKs for your REST API",
            truncateMarker: /{\/\* TRUNCATE \*\/}/,
          },
          gtag: {
            trackingID: "G-L2Q9WBQN2D",
            anonymizeIP: true,
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
        },
        navbar: {
          logo: {
            alt: "Konfig Logo",
            src: "img/logo-light.png",
            href: "https://konfigthis.com",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Documentation",
            },
            {
              to: "/interactive-tutorial",
              label: "Interactive Tutorial",
              position: "left",
            },
            { to: "/sdk", label: "SDKs for Public APIs", position: "right" },
            { to: "/blog", label: "Blog", position: "right" },
            // { to: "/schedule-demo", label: "Schedule Demo", position: "right" },
          ],
        },
        api: {
          authPersistance: "localStorage",
          serverVariablesPersistance: "localStorage",
        },
        footer: {
          style: "light",
          links: [
            {
              title: "Company",
              items: [
                { to: "/about", label: "About" },
                {
                  label: "Website",
                  to: "https://konfigthis.com",
                },
                {
                  label: "LinkedIn",
                  to: "https://www.linkedin.com/company/konfig",
                },
                {
                  label: "Blog",
                  to: "/blog",
                },
                // {
                //   label: "Enterprise",
                //   to: "/enterprise",
                // },
              ],
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Documentation",
                  to: "/docs",
                },
                {
                  label: "Interactive Tutorial",
                  to: "/interactive-tutorial",
                },
                { to: "/sdk", label: "SDKs" },
                // {
                //   label: "Schedule Demo",
                //   to: "/schedule-demo",
                // },
                {
                  label: "openapi-examples",
                  to: "https://github.com/konfig-sdks/openapi-examples",
                },
              ],
            },
            // {
            //   title: "Docs",
            //   items: [
            //     {
            //       label: "Introduction",
            //       to: "/docs/intro",
            //     },
            //   ],
            // },
            // {
            //   title: "Community",
            //   items: [
            //     {
            //       label: "Stack Overflow",
            //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //     },
            //     {
            //       label: "Discord",
            //       href: "https://discordapp.com/invite/docusaurus",
            //     },
            //     {
            //       label: "Twitter",
            //       href: "https://twitter.com/docusaurus",
            //     },
            //   ],
            // },
            // {
            //   title: "More",
            //   items: [
            //     {
            //       label: "Blog",
            //       to: "/blog",
            //     },
            //     {
            //       label: "GitHub",
            //       href: "https://github.com/facebook/docusaurus",
            //     },
            //   ],
            // },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Konfig, Inc.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["ruby", "csharp", "php"],
        },
      }),
  };
}

module.exports = createConfig;
