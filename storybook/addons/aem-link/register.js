import { addons, types } from '@storybook/manager-api';
import { AEMLink } from './AEMLink';
import React from 'react';

addons.register('aem-link', () => {
    addons.add('aem-link/tool', {
        type: types.TOOL,
        title: 'Getting Started with AEM Sites',
        match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
        render: () => <AEMLink />,
        // Always show at the top
        paramKey: 'aem-link',
        // Place at the top of the toolbar
        matchToolbar: true,
    });
});
