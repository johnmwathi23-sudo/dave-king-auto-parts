import { createClient } from "@/lib/supabase"
import { notFound } from "next/navigation"

interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  price: number
  category: string
  sku: string
  stock_status: string
  condition: string
  image_url: string | null
  featured: boolean
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const supabase = createClient()

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", params.slug)
    .single()

  if (!product) {
    notFound()
  }

  const p = product as Product

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-gray-400">
        {p.image_url ? (
          <img
            src={p.image_url}
            alt={p.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-lg">No Image Available</span>
        )}
      </div>

      <div>
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <p className="text-gray-500 mt-1">{p.category}</p>
        <p className="text-3xl font-bold mt-4">KSh {p.price.toLocaleString()}</p>

        {p.description && (
          <p className="mt-4 text-gray-700">{p.description}</p>
        )}

        <div className="mt-6 space-y-2">
          <p>
            <span className="font-semibold">Condition:</span> {p.condition}
          </p>
          <p>
            <span className="font-semibold">SKU:</span> {p.sku}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={
                p.stock_status === "instock"
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              {p.stock_status === "instock" ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>

        <button
          disabled={p.stock_status !== "instock"}
          className="mt-8 w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          {p.stock_status === "instock" ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  )
}
