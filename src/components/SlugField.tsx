import React from 'react'
import { TextField } from '@payloadcms/ui'

const SlugField: React.FC<any> = ({ onChange, ...props }) => {
  const handleChange = (value: string) => {
    const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9/-]/g, '').trim()
    const slugified = slugify(value)
    onChange(slugified)
  }

  return (
    <TextField
      {...props}
      onChange={handleChange}
    />
  )
}

export default SlugField
