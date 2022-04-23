import b from 'b_'
import React, { FC } from 'react'

import './Preloader.pcss'

export interface PreloaderProps {
    fullPage?: boolean
}

const Preloader: FC<PreloaderProps> = (props) => {
    const { fullPage } = props

    return (
        <div
            className={b('preloader', { 'full-page': fullPage })}
            data-testid="preloader"
        >
            <div className="preloader__dots">
                <div className="preloader__dot" />
                <div className="preloader__dot" />
                <div className="preloader__dot" />
            </div>
        </div>
    )
}

export { Preloader }
