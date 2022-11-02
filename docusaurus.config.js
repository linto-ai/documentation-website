// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LinTO documentation',
  tagline: 'Your open source end-to-end platform for voice-operated solutions',
  url: 'https://doc.linto.ai',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'linto-ai', // Usually your GitHub org/user name.
  projectName: 'documentation-website', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'deployment',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/linto-ai/documentation-website/tree/source/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath:"/tutorials",
          path:"tutorials",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/linto-ai/documentation-website/tree/source/tutorials',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Connectez vous au conversation manager',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: "Handbooks ",
        logo: {
          alt: 'LinTO',
          src: 'img/linto.svg',
        },
        items: [
          {to: '/docs/consumers', label: "For users", position: 'left'},
          {to: '/docs/developpers', label: 'For developpers', position: 'left'},
          {to: 'tutorials', label: 'Tutorials', position: 'left'},
          {
            href: 'https://github.com/linto-ai',
            label: 'GitHub',
            className: 'navbar__item navbar__link header-github-link',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Developper's docs",
            items: [{
                label: 'Cognitive APIs',
                to: '/docs/developpers/apis',
              },{
                label: 'Virtual Agents and Smart Assistants',
                to: '/docs/developpers/agent',
              },{
                label: 'Smart Conversations',
                to: '/docs/developpers/meeting',
              },{
                label: 'Tutorials',
                to: '/tutorials',
              },
            ],
          },
          {
            title: 'LinTO Live',
            items: [{
                label: 'Browser demos',
                to: 'https://linagora.com/fr/produits/linto/',
              },{
                label: 'Conversation Manager',
                to: 'https://convos.linto.ai/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/jvNK3FXv3d',
              },{
                label: 'Contact',
                to: 'https://linto.ai/#contact',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/linto-ai',
              },{
                label: 'LinTO HomePage',
                href: 'https://linto.ai',
              },{
                label: 'LINAGORA',
                href: 'https://linagora.com',
              },{
                label: 'LINAGORA Labs - Meet the LinTO team',
                href: 'https://labs.linagora.com',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LINAGORA`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
