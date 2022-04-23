import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSizes, ButtonThemes } from './Button';
import './Button.stories.pcss';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => {
    const noop = () => {};

    return (
        <div>
            <h1>
                Buttons
            </h1>
            <div>
                <h2>Sizes</h2>
                <div className="flex">
                    {ButtonSizes.map((size) => (
                        <div key={size}>
                            <p>{size}</p>
                            <Button size={size} onClick={noop}>{size}</Button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Themes</h2>
                <div className="flex">
                    {ButtonThemes.map((theme) => (
                        <div key={theme}>
                            <p>{theme}</p>
                            <Button theme={theme} onClick={noop}>{theme}</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
