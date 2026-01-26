import { uriTopMenus } from "@/utils/uriTopMenu";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string
  }
}
export default async function CategoryPage({ params }: Props) {

  const { id } = await params

  if (!uriTopMenus.some((uri) => uri.href.split('/')[2] === id)) notFound()

  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}