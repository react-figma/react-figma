
const docusaurusConfig = {
    title: 'React Figma',
    tagline: 'Render React components to Figma',
    url: 'https://react-figma.now.sh/',
    baseUrl: '/',

    projectName: 'react-figma',
    organizationName: 'react-figma',

    favicon: 'img/favicon.ico',

    scripts: ['https://buttons.github.io/buttons.js'],

    themeConfig: {
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            title: 'React Figma',
            logo: {
                alt: 'React Figma Logo',
                src: 'img/react-figma-logo.svg',
            },
            links: [
                {to: 'docs/API', label: 'Docs', position: 'right'},
                {href: "https://github.com/react-figma/react-figma", label: "GitHub", position: 'right'},
                { blog: true, label: "Blog", position: 'right' },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'API',
                            to: '/docs/API',
                        },
                        {
                            label: 'Styling',
                            to: '/docs/styling',
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Spectrum Chat',
                            to: 'https://spectrum.chat/react-figma',
                        },
                        {
                            label: 'Twitter',
                            to: 'https://twitter.com/ilialesik',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'React Figma Logo',
                src: '/img/react-figma-logo-white.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} React Figma Team`,
        },
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: '../docs',
                    sidebarPath: require.resolve('./sidebars.json'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};

module.exports = docusaurusConfig;
