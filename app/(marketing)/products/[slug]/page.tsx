import { productPages } from '@/lib/data/products'
import ProductPageClient from './client'

export function generateStaticParams() {
  return productPages.map((product) => ({
    slug: product.path,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProductPageClient slug={slug} />
}
