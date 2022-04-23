/* eslint-disable react/button-has-type */

import b from 'b_'
import React, { FC, PropsWithChildren } from 'react'

import './Button.pcss'

export const ButtonSizes = ['small', 'medium', 'large'] as const
export const ButtonThemes = ['primary', 'secondary', 'danger'] as const
export type ButtonType = 'button' | 'submit'

export interface ButtonProps {
    onClick: () => any
    size?: typeof ButtonSizes[number]
    theme?: typeof ButtonThemes[number]
    type?: ButtonType
}

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        children,
        onClick,
        size = 'medium',
        theme = 'primary',
        type = 'button'
    } = props

    return (
        <button
            className={b('button', { size, theme })}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export { Button }
