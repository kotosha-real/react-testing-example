import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

import './Input.stories.pcss'

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => (
    <div>
        <h1>Inputs</h1>
        <div>
            <h2>Text</h2>
            <div className="input-wrapper">
                <Input id="my-text-input" label="Text field" type="text" />
            </div>
        </div>
        <div>
            <h2>Password</h2>
            <div className="input-wrapper">
                <Input id="my-password-input" label="Password field" type="password" />
            </div>
        </div>
    </div>
);
