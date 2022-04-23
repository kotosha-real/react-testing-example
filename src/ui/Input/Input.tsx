import React, { FC, InputHTMLAttributes } from 'react'

import './Input.pcss'

export interface InputProps extends InputHTMLAttributes<any> {
    id: string
    label: string
}

const Input: FC<InputProps> = (props) => {
    const { id, label, type = 'text', ...otherInputProps } = props

    return (
        <div className="input">
            <label className="input__label" htmlFor={id}>
                {label}
            </label>
            <input
                {...otherInputProps}
                className="input__field"
                id={id}
                type={type}
            />
        </div>
    )
}

export { Input }
