import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TariffCalculator from "@/components/tariff-calculator"
import CurrencyConverter from "@/components/currency-converter"

export default function ToolsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tariff Tools</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Calculate potential tariff costs and convert between currencies with our specialized tools.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Tariff Calculator</TabsTrigger>
            <TabsTrigger value="converter">Currency Converter</TabsTrigger>
          </TabsList>
          <TabsContent value="calculator" className="mt-6">
            <TariffCalculator />
          </TabsContent>
          <TabsContent value="converter" className="mt-6">
            <CurrencyConverter />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
