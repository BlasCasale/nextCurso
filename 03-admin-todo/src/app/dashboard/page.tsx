import { WidgetItem } from '@/components/WidgetItem';

const widgetItems = [
  {
    title: 'Monto',
    subtitle: '$23456',
    label: 'Juan perez'
  }
]

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {
        widgetItems.map((item) => (<WidgetItem key={item.title} {...item} />))
      }
    </div>
  );
}