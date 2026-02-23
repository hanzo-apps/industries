'use client'

import { notFound } from 'next/navigation'
import { productPages } from '@/lib/data/products'
import { Button } from '@hanzo/ui'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Check } from 'lucide-react'

export default function ProductPageClient({ slug }: { slug: string }) {
  const product = productPages.find((p) => p.path === slug)

  if (!product) {
    notFound()
  }

  const Icon = product.icon

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Product</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {product.documentation && (
                <a href={product.documentation} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Documentation
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-border text-foreground hover:bg-accent">
                  Contact Sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-border bg-foreground/[0.02]"
                >
                  <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started with {product.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to integrate {product.title} into your workflow? Get in touch with our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/research">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-border text-foreground hover:bg-accent">
                View Research
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
