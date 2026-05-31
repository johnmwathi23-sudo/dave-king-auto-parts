import { createClient } from "@/lib/supabase"
import Link from "next/link"

interface Product {
  id: string
  name: string
  slug: string
  price: number
  category: string
  condition: string
  image_url: string | null
  stock_status: string
}

export default async function Home() {
  const supabase = createClient()

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Auto Spare Parts</h1>

      {(!products || products.length === 0) && (
        <p className="text-gray-500">No products found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: Product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-400">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>No Image</span>
              )}
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-xl font-bold mt-2">KSh {product.price.toLocaleString()}</p>
              <span
                className={`inline-block text-xs px-2 py-1 rounded mt-2 ${
                  product.condition === "New"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {product.condition}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
