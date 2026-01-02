import Link from "next/link"
import React from "react"

interface Props {
  title: string
  subtitle?: string
  label?: string
  icon?: React.ReactNode
  href?: string
}

export const SimpleWidget = ({ title, subtitle, label, icon, href }: Props) => {
  return (
    <div className="flex items-center justify-center gap-1 bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border border-gray-50 mx-2">
      <div className="flex flex-col">
        {
          label && <h2 className="font-bold text-gray-600 text-center">{label}</h2>
        }
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {icon}
            <div id="temp" className="text-center">
              {title && (<h4 className="text-4xl">{title}</h4>)}
              {subtitle && (<p className="text-xs text-gray-500">{subtitle}</p>)}
            </div>
          </div>
        </div>

        {href && <Link href={href} className="text-blue-600">Counter</Link>}

      </div>
    </div>
  )
}