import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Preloader } from './Preloader'

export default {
    argTypes: {
        fullPage: {
            control: { type: 'boolean' }
        }
    },
    component: Preloader,
    title: 'Preloader'
} as ComponentMeta<typeof Preloader>

const Template = ({ ...args }) => (
    <div>
        <h1>Preloader</h1>
        <div>
            <h2>
                Switch between basic and full page preloader via controls tab
            </h2>
            <div>
                <Preloader fullPage={args.fullPage} />
            </div>
        </div>
    </div>
)

export const Primary: ComponentStory<typeof Preloader> = Template.bind({})
