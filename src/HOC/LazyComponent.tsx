import React, { ComponentType } from 'react'

export const LazyComponentHOC = (Component:ComponentType) => {

    return (
        <React.Suspense fallback={'load...'}>
            <Component />
        </React.Suspense>
    )

}