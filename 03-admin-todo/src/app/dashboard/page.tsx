import { WidgetItem } from '@/components/WidgetItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const widgetItems = [
  {
    title: 'Monto',
    subtitle: '$23456',
    label: 'Juan perez'
  },
]

export default async function DashboardPage() {

  const session = await getServerSession(authOptions)

  if (!session) redirect('/api/auth/signin')

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title={session.user?.name as string} subtitle={session.user?.email as string} label='Conectado' />
      {
        widgetItems.map((item) => (<WidgetItem key={item.title} {...item} />))
      }
    </div>
  );
}