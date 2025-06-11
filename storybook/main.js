/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { merge } from 'webpack-merge';

/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
export default {
    stories: [
        '../storybook/stories/**/*.mdx',
        '../packages/*/stories/*.stories.js',
        '../tools/*/stories/*.stories.js',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        // Conditionally add the addon-designs addon temporarily
        // https://storybook.js.org/addons/@storybook/addon-designs/
        ...(process.env.NODE_ENV === 'development'
            ? ['@storybook/addon-designs']
            : []),
        // https://geometricpanda.github.io/storybook-addon-badges/
        '@geometricpanda/storybook-addon-badges',
        require.resolve('./addons/aem-link/register.js'),
        require.resolve('./addons/aem-getting-started/panel.jsx'),
    ],
    options: {
        storySort: (a, b) => {
            if (a[1].title === 'Getting Started with AEM Sites') return -1;
            if (b[1].title === 'Getting Started with AEM Sites') return 1;
            return a[1].title.localeCompare(b[1].title);
        },
    },
    framework: {
        name: '@storybook/web-components-webpack5',
        options: {
            // builder: '@web/storybook-builder',
            fsCache: true,
            lazyCompilation: true,
        },
    },
    async webpackFinal(config) {
        return merge(config, {
            resolve: {
                conditionNames: ['development', 'browser'],
                modules: ['node_modules', 'packages', 'projects', 'tools'],
            },
        });
    },
    refs:
        process.env.NODE_ENV === 'development'
            ? {
                  'design-system': {
                      title: 'Spectrum CSS',
                      url: 'https://opensource.adobe.com/spectrum-css/preview/',
                      expanded: false, // Optional, true by default
                  },
              }
            : {},
};
