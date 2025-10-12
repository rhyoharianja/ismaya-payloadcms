'use client'
import { TextInput, useField } from '@payloadcms/ui'
import { kebabCase } from 'lodash'
import { useEffect, useRef } from 'react'

import { TextField } from 'payload'

export type slugInputProps = TextField & {
  trackingField: string
  fieldName?: string
}

export function slugInput(props: slugInputProps) {
  const { trackingField, required, admin: { readOnly } = {}, fieldName = 'slug' } = props

  const { value: slugValue = '', setValue: setSlugValue } = useField<string>({
    path: fieldName,
  })

  const { value: trackingFieldValue } = useField<string>({
    path: trackingField,
  })

  const prevTrackingFieldValueRef = useRef(trackingFieldValue)
  const stopTrackingRef = useRef(false)

  useEffect(() => {
    if (!trackingField || stopTrackingRef.current) {
      return
    }
    if (trackingFieldValue === prevTrackingFieldValueRef.current) {
      return
    }
    const prevSlugValue = kebabCase(prevTrackingFieldValueRef.current)
    prevTrackingFieldValueRef.current = trackingFieldValue
    if (prevSlugValue !== slugValue) {
      return
    }
    setSlugValue(kebabCase(trackingFieldValue))
  }, [setSlugValue, slugValue, trackingField, trackingFieldValue])

  return (
    <div>
      <TextInput
        path={fieldName}
        label={fieldName === 'slug' ? 'Slug' : 'Path'}
        hasMany={false}
        description={
          slugValue
            ? `Auto generated based on ${trackingField}`
            : `Will be auto-generated from ${trackingField} when saved`
        }
        value={slugValue}
        onChange={(e) => {
          setSlugValue(e.target.value)
          stopTrackingRef.current = true
        }}
        readOnly={readOnly}
        required={required}
      />
    </div>
  )
}