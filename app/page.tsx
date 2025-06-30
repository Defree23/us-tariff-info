import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"
import TariffCalculator from "@/components/tariff-calculator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  US Tariff Information Center
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive information on the new US tariffs from 2025, with up-to-date rates for imports and
                  exports.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search countries or products..."
                    className="w-full bg-background shadow-none appearance-none pl-8 rounded-md border border-input px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">2025 US Tariff Overview</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The latest information on the new tariffs imposed in 2025.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Import Tariffs</CardTitle>
                  <CardDescription>New rates for goods entering the US</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    The 2025 tariff structure introduces significant changes to import duties, with rates ranging from
                    10% to 60% depending on country of origin and product category.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/import-tariffs">View Import Tariffs</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Export Regulations</CardTitle>
                  <CardDescription>Updated export tariffs and regulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    New export regulations include reciprocal tariffs and special provisions for strategic trade
                    partners, with varying rates based on bilateral agreements.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/export-tariffs">View Export Tariffs</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tariff Tools</CardTitle>
                  <CardDescription>Calculate costs and convert currencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Use our specialized tools to calculate potential tariff costs for your imports and exports, and
                    convert between different currencies.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/tools">Access Tools</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Tariff Calculator</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Calculate potential tariff costs for your imports and exports.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <TariffCalculator />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
