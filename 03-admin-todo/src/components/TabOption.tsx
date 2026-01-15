import React from 'react'

interface Props {
  option: number
  isSelected: boolean
  onTabSelected: (tab: number) => void
}

export const TabOption = ({ isSelected, option, onTabSelected }: Props) => {
  return (
    <div key={option}>
      <input
        type="radio"
        id={option.toString()}
        className="peer hidden"
        checked={isSelected}
        onChange={() => { }}
      />
      <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white" onClick={() => onTabSelected(option)}>
        {option}
      </label>
    </div>
  )
}
