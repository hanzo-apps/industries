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
    <div className="hz-min-h-screen hz-bg hz-fg">
      {/* Hero */}
      <section className="hz-pt-6 hz-pb-6 hz-px-4">
        <div className="hz-container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hz-inline hz-ai-center hz-gap-3 hz-mb-6">
              <div className="hz-sq-7 hz-r-lg hz-bg-surface hz-row hz-ai-center hz-jc-center">
                <Icon className="hz-sq-4 hz-fg" />
              </div>
              <span className="hz-t-sm hz-w-medium hz-fg hz-upper hz-tracking-wide">Product</span>
            </div>
            <h1 className="hz-t-5xl hz-w-bold hz-tracking-tight hz-mb-5">
              {product.title}
            </h1>
            <p className="hz-t-xl hz-fg hz-mw-lg hz-mb-6">
              {product.description}
            </p>
            <div className="hz-row hz-wrap hz-gap-4">
              {product.documentation && (
                <a href={product.documentation} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="hz-r-full hz-px-6 hz-bg-inverse hz-gap-2 hz-hoverable">
                    Documentation
                    <ExternalLink className="hz-sq-2" />
                  </Button>
                </a>
              )}
              <Link href="/contact">
                <Button size="lg" variant="outline" className="hz-r-full hz-px-6 hz-fg hz-hoverable">
                  Contact Sales
                  <ArrowRight className="hz-sq-2 hz-ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="hz-py-7 hz-px-4 hz-border-t">
        <div className="hz-container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="hz-t-3xl hz-w-bold hz-mb-7">Key Features</h2>
            <div className="hz-grid hz-grid-2 hz-gap-5">
              {product.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hz-card hz-row hz-ai-start hz-gap-4"
                >
                  <Check className="hz-sq-3 hz-fg hz-mt-1 hz-none" />
                  <span className="hz-fg-soft">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="hz-py-7 hz-px-4 hz-border-t">
        <div className="hz-container-narrow hz-align-center">
          <h2 className="hz-t-3xl hz-w-bold hz-mb-4">Get Started with {product.title}</h2>
          <p className="hz-t-lg hz-fg hz-mb-6">
            Ready to integrate {product.title} into your workflow? Get in touch with our team.
          </p>
          <div className="hz-row hz-wrap hz-gap-4 hz-jc-center">
            <Link href="/contact">
              <Button size="lg" className="hz-r-full hz-px-6 hz-bg-inverse hz-hoverable">
                Contact Us
                <ArrowRight className="hz-sq-2 hz-ml-2" />
              </Button>
            </Link>
            <Link href="/research">
              <Button size="lg" variant="outline" className="hz-r-full hz-px-6 hz-fg hz-hoverable">
                View Research
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
