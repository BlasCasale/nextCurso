'use client'
import React from 'react'

interface Props {
  label: string;
  onClick: () => void;
  class: string;
}

export function Button({ label, onClick, class: className }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  )
}

