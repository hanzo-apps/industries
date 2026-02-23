import type { Metadata } from 'next'
import { productPages } from '@/lib/data/products'
import ProductPageClient from './client'

export function generateStaticParams() {
  return productPages.map((product) => ({
    slug: product.path,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = productPages.find((p) => p.path === slug)

  if (!product) {
    return { title: 'Product' }
  }

  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProductPageClient slug={slug} />
}
