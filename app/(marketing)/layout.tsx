import MarketingShell from './_client'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MarketingShell>{children}</MarketingShell>
}
