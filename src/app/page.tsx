import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold mb-4 text-gradient">
          Blackbird Detailing
        </h1>
        <p className="text-xl text-blackbird-off-white/80 mb-8 max-w-2xl">
          Motorsport-Grade Precision for Your Automobile
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90">
            Get An Instant Estimate
          </Button>
          <Button size="lg" variant="outline" className="border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal">
            View Our Work
          </Button>
        </div>
        <div className="mt-12 text-sm text-blackbird-off-white/60">
          <p>✓ Next.js + TypeScript</p>
          <p>✓ Tailwind CSS + Custom Colors</p>
          <p>✓ Shadcn/ui Components</p>
          <p>✓ Supabase Integration</p>
          <p>✓ Git + GitHub Connected</p>
        </div>
      </div>
    </div>
  )
}