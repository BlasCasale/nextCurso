import { Metadata } from "next"
import { TabBar } from '@/components/TabBar'
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: 'Cookies page',
  description: 'Page with cookies'
}

export default async function CookiesPage() {

  const cookieStore = await cookies()
  const cookiesTab = Number(cookieStore.get('selectedTab')?.value)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <span className="text-3xl">Tabs</span>
      <TabBar currentTab={cookiesTab} />
    </div>
  )
}