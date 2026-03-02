import type { Metadata } from 'next'
import { allModels, families } from '@zenlm/models'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'AI Models',
  description: `${allModels.length} Zen AI models — text, vision, image, audio, code, embeddings, and reranking. Open-weight, Apache 2.0 licensed.`,
}

// Serializable types (no React components — those live in _client.tsx)
export type ModelCardData = {
  name: string
  params: string
  description: string
  performance: string
  memory: string
  capabilities: string[]
  href: string
  requestAccess?: boolean
}

export type FamilyData = {
  id: string
  title: string
  description: string
  models: ModelCardData[]
}

function formatParams(params: string, activeParams: string | null): string {
  if (!params || params === 'TBA') return 'TBA'
  if (activeParams) return `${params} (${activeParams} active)`
  return params
}

function formatContext(context: number): string {
  if (!context) return ''
  if (context >= 1_000_000) return `${Math.round(context / 1_000_000)}M context`
  if (context >= 1000) return `${Math.round(context / 1000)}K context`
  return `${context} context`
}

function getCapabilities(
  modalities: string[],
  category: string,
  features: string[],
): string[] {
  const caps: Set<string> = new Set()
  if (modalities.includes('text')) caps.add('Text')
  if (modalities.includes('vision')) caps.add('Vision')
  if (modalities.includes('audio')) caps.add('Audio')
  if (modalities.includes('code') || category === 'code') caps.add('Code')
  if (modalities.includes('agents') || category === 'agents') caps.add('Agents')
  if (modalities.includes('embedding') || category === 'embedding') caps.add('Embeddings')
  if (modalities.includes('math')) caps.add('Math')
  if (modalities.includes('safety') || category === 'safety') caps.add('Safety')
  for (const f of features.slice(0, 3)) {
    const lower = f.toLowerCase()
    if (lower.includes('rag') || lower.includes('retrieval')) caps.add('RAG')
    if (lower.includes('reasoning') || lower.includes('chain-of-thought')) caps.add('Reasoning')
    if (lower.includes('multilingual')) caps.add('Multilingual')
    if (lower.includes('streaming')) caps.add('Streaming')
    if (lower.includes('rerank')) caps.add('Reranking')
  }
  return Array.from(caps).slice(0, 5)
}

export default function Page() {
  const modelById = Object.fromEntries(allModels.map(m => [m.id, m]))

  const familyData: FamilyData[] = families
    .map(family => {
      const familyModels = family.models
        .map(id => modelById[id])
        .filter(Boolean)
        .map(m => ({
          name: m.id,
          params: formatParams(m.spec.params, m.spec.activeParams),
          description: m.description,
          performance: formatContext(m.spec.context) || m.spec.arch,
          memory: m.spec.arch,
          capabilities: getCapabilities(m.modalities, m.category, m.features),
          href: m.huggingface ?? `https://huggingface.co/zenlm/${m.id}`,
          requestAccess: m.status === 'coming-soon' || m.status === 'contact-sales',
        }))
      return {
        id: family.id,
        title: family.name,
        description: family.description,
        models: familyModels,
      }
    })
    .filter(f => f.models.length > 0)

  return <PageClient familyData={familyData} totalModels={allModels.length} />
}
