import { Button } from "@/components/ui/button"
import { Search, } from "lucide-react"
import AnimatedSearchBar from "@/components/AnimatedSearchBar"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Don't Ditch It!
        </h1>
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          FixUp
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Why throw away when you can fix it the smart way? With AI-powered diagnostics, real-time repair cost estimates, and access to skilled technicians, FixUp ensures your devices stay in top shape—convenient, cost-effective, and eco-friendly!        </p>
      </div>
      <div className="flex gap-0">
      <AnimatedSearchBar />
        {/* <Button size="lg">
          Search Near By Stores...
          <Search className="ml-2 h-4 w-4" />
        </Button> */}
        {/* <Button variant="outline" size="lg">
          Schedule a Demo
        </Button> */}
      </div>
    </section>
  )
}

