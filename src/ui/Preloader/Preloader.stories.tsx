import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Preloader } from './Preloader';

export default {
    title: 'Preloader',
    component: Preloader,
    argTypes: {
        fullPage: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Preloader>;


const Template = ({ ...args }) => (
    <div>
        <h1>Preloader</h1>
        <div>
            <h2>Switch between basic and full page preloader via controls tab</h2>
            <div>
                <Preloader fullPage={args.fullPage} />
            </div>
        </div>
    </div>
)

export const Primary = Template.bind({});
