import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';

const PANEL_ID = 'aem-getting-started/panel';
const ADDON_TITLE = 'Getting Started';

const GettingStartedPanel = () => (
    <div style={{ padding: 24 }}>
        <h2>Getting Started with AEM Sites</h2>
        <p>
            Adobe Experience Manager (AEM) Sites is a comprehensive content
            management system for building digital experiences. This guide will
            help you get started with AEM Sites and understand how to use it
            effectively.
        </p>
        <h3>Key Features</h3>
        <ul>
            <li>Content Management</li>
            <li>Multi-channel Publishing</li>
            <li>Personalization</li>
            <li>Integration with Adobe Marketing Cloud</li>
        </ul>
        <h3>Next Steps</h3>
        <ul>
            <li>Explore the documentation</li>
            <li>Try out the example components</li>
            <li>
                Learn more at{' '}
                <a
                    href="https://experienceleague.adobe.com/docs/experience-manager.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Adobe AEM Sites
                </a>
            </li>
        </ul>
    </div>
);

addons.register(PANEL_ID, () => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: ADDON_TITLE,
        render: ({ active, key }) => (
            <AddonPanel active={active} key={key}>
                <GettingStartedPanel />
            </AddonPanel>
        ),
    });
});
