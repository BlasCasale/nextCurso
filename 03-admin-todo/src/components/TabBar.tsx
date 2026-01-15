'use client'
import { useState } from "react"
import { TabOption } from "./TabOption"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"

interface Props {
  currentTab?: number
  tabOptions?: number[]
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: Props) => {

  const [selected, setSelected] = useState(currentTab)

  const router = useRouter()

  const onTabSelected = (tab: number) => {
    setSelected(tab)
    setCookie('selectedTab', tab.toString())
    router.refresh()
  }

  return (
    <div className={`grid w-full grid-cols-5 space-x-2 rounded-xl bg-gray-200 p-2`}>
      {
        tabOptions.map((option) => (
          <TabOption key={option} isSelected={selected === option} option={option} onTabSelected={onTabSelected} />
        ))
      }
    </div>
  )
}