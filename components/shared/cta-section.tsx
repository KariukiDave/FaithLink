import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export function CTASection({
  title,
  subtitle,
  primaryButtonText = "Start Free Trial",
  primaryButtonLink = "/auth",
  secondaryButtonText = "Book a Demo",
  secondaryButtonLink = "/book-demo",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-faith-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-faith-100 max-w-3xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-faith-600 hover:bg-gray-100 transition-colors" asChild>
            <Link href={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          <Button
            size="lg"
            className="border border-white text-white bg-[#0270BD] hover:bg-white hover:text-[#0270BD] transition-colors"
            asChild
          >
            <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
