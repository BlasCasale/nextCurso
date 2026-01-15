import { WidgetItem } from "@/components/WidgetItem";
import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { Metadata } from "next";
import { cookies } from "next/headers";


export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Products in the shopping cart'
}

interface CartProduct {
  product: Product
  quantity: number
}

const getProductsInCart = (cart: { [key: string]: number }): CartProduct[] => {
  const productsInCart: CartProduct[] = []

  products.forEach((product) => {
    if (cart[product.id]) {
      productsInCart.push({
        product,
        quantity: cart[product.id]
      })
    }
  })

  return productsInCart
}

export default async function CartPage() {
  const cookiesStore = await cookies()
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}')

  const productsInCart = getProductsInCart(cart)

  const total = productsInCart.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity
  }, 0)

  return (
    <div>
      <h2 className="text-5xl">Productos del carrito</h2>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productsInCart.map(({ product, quantity }) => (
              <ItemCard key={product.id} product={product} quantity={quantity} />
            ))
          }
        </div>

        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Total a pagar" label={`Total con IVA: ${total * 1.21}`} subtitle={`$${total}`} />
        </div>
      </div>
    </div>
  );
}