import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { ProductPreview } from "@/components/product-preview"
import { Pillars } from "@/components/pillars"
import { WaitlistForm } from "@/components/waitlist-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Manifesto />
      <ProductPreview />
      <Pillars />
      <WaitlistForm />
      <Footer />
    </main>
  )
}
