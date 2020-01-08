/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: 'Lessmess',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: '/img/lessmess.svg',
        infoLink: 'https://lessmess.agency/?utm_source=react-figma-users',
        pinned: true,
    },
];

const siteConfig = {
    title: 'React Figma', // Title for your website.
    tagline: 'Render React components to Figma',
    url: 'https://react-figma.now.sh/', // Your website URL
    baseUrl: '/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'react-figma',
    organizationName: 'react-figma',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {doc: 'API', label: 'Docs'},
        {doc: 'api/render', label: 'API'},
        {href: "https://github.com/react-figma/react-figma", label: "GitHub"},
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: 'img/react-figma-logo-white.svg',
    footerIcon: 'img/react-figma-logo-white.svg',
    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#20232a',
        secondaryColor: '#a259ff',
    },

    /* Custom fonts for website */
    /*
    fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },
    */

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} React Figma Team`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    usePrism: ['jsx', 'javascript', 'typescript'],

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,
};

module.exports = siteConfig;
