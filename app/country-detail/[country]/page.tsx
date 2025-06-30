import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft } from "lucide-react"

// This would typically come from a database or API
const countryData: Record<string, any> = {
  china: {
    name: "China",
    region: "Asia",
    tradeAgreement: "None",
    tariffStatus: "High Tariff",
    averageTariff: "35%",
    categories: {
      electronics: "25%",
      textiles: "35%",
      automotive: "40%",
      steel: "50%",
      agriculture: "30%",
      pharmaceuticals: "20%",
      chemicals: "30%",
      furniture: "35%",
      toys: "30%",
      machinery: "40%",
    },
    specialProvisions: [
      "Section 301 tariffs apply to most imports",
      "Additional tariffs on strategic technology sectors",
      "Certain medical supplies exempt from additional tariffs",
      "Special economic zones may have different rates",
    ],
    historicalRates: [
      { year: "2021", rate: "25%" },
      { year: "2022", rate: "28%" },
      { year: "2023", rate: "30%" },
      { year: "2024", rate: "32%" },
      { year: "2025", rate: "35%" },
    ],
    tradeVolume: "$500 billion annually",
    majorImports: "Electronics, textiles, machinery, furniture, toys",
    majorExports: "Agricultural products, aircraft, vehicles, medical equipment",
  },
  canada: {
    name: "Canada",
    region: "North America",
    tradeAgreement: "USMCA",
    tariffStatus: "Preferential",
    averageTariff: "15%",
    categories: {
      electronics: "10%",
      textiles: "15%",
      automotive: "20%",
      steel: "25%",
      agriculture: "10%",
      pharmaceuticals: "8%",
      chemicals: "12%",
      furniture: "15%",
      toys: "10%",
      machinery: "18%",
    },
    specialProvisions: [
      "USMCA provisions apply to most trade",
      "Special rules of origin for automotive sector",
      "Dairy products subject to tariff-rate quotas",
      "Softwood lumber subject to countervailing duties",
    ],
    historicalRates: [
      { year: "2021", rate: "10%" },
      { year: "2022", rate: "12%" },
      { year: "2023", rate: "13%" },
      { year: "2024", rate: "14%" },
      { year: "2025", rate: "15%" },
    ],
    tradeVolume: "$600 billion annually",
    majorImports: "Vehicles, machinery, energy products, plastics",
    majorExports: "Energy products, vehicles, machinery, agricultural products",
  },
  germany: {
    name: "Germany",
    region: "Europe",
    tradeAgreement: "None",
    tariffStatus: "Standard",
    averageTariff: "20%",
    categories: {
      electronics: "15%",
      textiles: "20%",
      automotive: "25%",
      steel: "30%",
      agriculture: "15%",
      pharmaceuticals: "12%",
      chemicals: "18%",
      furniture: "20%",
      toys: "15%",
      machinery: "22%",
    },
    specialProvisions: [
      "EU-wide tariff regulations apply",
      "Automotive sector subject to additional scrutiny",
      "Pharmaceutical products have streamlined import procedures",
      "Machinery imports subject to technical standards verification",
    ],
    historicalRates: [
      { year: "2021", rate: "15%" },
      { year: "2022", rate: "16%" },
      { year: "2023", rate: "18%" },
      { year: "2024", rate: "19%" },
      { year: "2025", rate: "20%" },
    ],
    tradeVolume: "$180 billion annually",
    majorImports: "Vehicles, machinery, pharmaceuticals, precision instruments",
    majorExports: "Machinery, vehicles, chemicals, electronics",
  },
}

export default function CountryDetailPage({ params }: { params: { country: string } }) {
  const country = params.country.toLowerCase()

  // If country doesn't exist in our data, return 404
  if (!countryData[country]) {
    notFound()
  }

  const data = countryData[country]

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/country-list">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.name}</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Country Overview</CardTitle>
              <CardDescription>Basic tariff information for {data.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Region</dt>
                  <dd className="text-lg font-semibold">{data.region}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Trade Agreement</dt>
                  <dd className="text-lg font-semibold">{data.tradeAgreement}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Tariff Status</dt>
                  <dd className="text-lg font-semibold">{data.tariffStatus}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Average Tariff</dt>
                  <dd className="text-lg font-semibold">{data.averageTariff}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Trade Volume</dt>
                  <dd className="text-lg font-semibold">{data.tradeVolume}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Tariff Rates</CardTitle>
              <CardDescription>Tariff rate changes over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Average Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.historicalRates.map((rate: any) => (
                    <TableRow key={rate.year}>
                      <TableCell>{rate.year}</TableCell>
                      <TableCell>{rate.rate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tariff Rates by Product Category</CardTitle>
            <CardDescription>Detailed breakdown of tariff rates by product type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(data.categories).map(([category, rate]) => (
                    <TableRow key={category}>
                      <TableCell className="font-medium capitalize">{category}</TableCell>
                      <TableCell>{rate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Special Provisions</CardTitle>
            <CardDescription>Special tariff provisions and exceptions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {data.specialProvisions.map((provision: string, index: number) => (
                <li key={index}>{provision}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trade Information</CardTitle>
            <CardDescription>Major imports and exports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Major Imports from {data.name}</h3>
              <p>{data.majorImports}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Major Exports to {data.name}</h3>
              <p>{data.majorExports}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
