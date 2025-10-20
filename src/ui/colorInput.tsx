'use client'

import React, { useCallback, useState } from 'react'
import { useField } from '@payloadcms/ui'
import { SketchPicker } from 'react-color'

interface ColorInputProps {
    path: string
}

export const ColorInput: React.FC<ColorInputProps> = ({ path }) => {
    const { value, setValue } = useField<string>({ path })
    const [displayColorPicker, setDisplayColorPicker] = useState(false)

    const handleClick = useCallback(() => {
        setDisplayColorPicker(!displayColorPicker)
    }, [displayColorPicker])

    const handleClose = useCallback(() => {
        setDisplayColorPicker(false)
    }, [])

    const handleChange = useCallback(
        (color: { hex: string }) => {
            setValue(color.hex)
        },
        [setValue],
    )

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        },
        [setValue],
    )

    const styles = {
        input: {
            padding: '10px 10px 10px 40px',
            border: '1px solid var(--theme-elevation-800)',
            borderRadius: '18px',
            fontSize: '16px',
            position: 'relative' as const,
        },
        swatch: {
            position: 'absolute' as const,
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: value || '#fff',
            border: '1px solid var(--theme-elevation-800)',
            cursor: 'pointer',
            zIndex: 1,
        },
        popover: {
            position: 'absolute' as const,
            zIndex: '2',
            top: '100%',
            left: 0,
        },
        cover: {
            position: 'fixed' as const,
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
        container: {
            position: 'relative' as const,
            flex: 1,
            display: 'flex',
            flexDirection: 'column' as const,
            marginRight: '8px',
        },
    }

    return (
        <div style={styles.container}>
            <div style={styles.swatch} onClick={handleClick}></div>
            <input
                type="text"
                value={value || ''}
                onChange={handleInputChange}
                style={styles.input}
                placeholder="#000000"
            />
            {displayColorPicker ? (
                <div style={styles.popover}>
                    <div style={styles.cover} onClick={handleClose} />
                    <SketchPicker color={value || '#fff'} onChange={handleChange} />
                </div>
            ) : null}
        </div>
    )
}
