import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiBasketball, CiBookmarkCheck, CiCamera, CiCoffeeBean, CiHome, CiLogout } from 'react-icons/ci'
import { SidebarMenuIcon } from './SidebarMenuIcon'
import { IoCalendarOutline, IoListOutline } from 'react-icons/io5'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Avatar } from './Avatar'

const menuItems = [
  {
    href: '/dashboard',
    icon: <IoCalendarOutline />,
    label: 'Dashboard'
  },
  {
    href: '/dashboard/rest-todos',
    icon: <CiBookmarkCheck />,
    label: 'Rest Todos'
  },
  {
    href: '/dashboard/server-actions',
    icon: <IoListOutline />,
    label: 'Server Actions'
  },
  {
    href: '/dashboard/cookies',
    icon: <CiCoffeeBean />,
    label: 'Cookies'
  },
  {
    href: '/dashboard/products',
    icon: <CiBasketball />,
    label: 'Products'
  },
  {
    href: 'dashboard/profile',
    icon: <CiCamera />,
    label: 'Profile'
  }
]

export const Sidebar = async () => {

  const session = await getServerSession(authOptions)

  const userInfo = {
    name: session?.user?.name as string,
    mail: session?.user?.email as string,
    img: session?.user?.image as string
  }

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="m-2 p-2">
          <Link href="/dashboard" title="home">
            <CiHome size={30} />
          </Link>
        </div>

        <Avatar {...userInfo} />
        <ul className="space-y-2 tracking-wide mt-8">
          {
            menuItems.map((item) => (<SidebarMenuIcon key={item.href} {...item} />))
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  )
}
