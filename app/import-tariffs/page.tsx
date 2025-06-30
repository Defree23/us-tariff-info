import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ImportTariffsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">US Import Tariffs 2025</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Comprehensive information on the new US import tariffs imposed in 2025.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tariff Overview</CardTitle>
            <CardDescription>
              The 2025 US tariff structure introduces significant changes to import duties, with rates varying by
              country and product category.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The new tariff structure implemented in 2025 represents a major shift in US trade policy, with higher
              rates applied to imports from certain countries and for specific product categories. These changes aim to
              protect domestic industries and address trade imbalances.
            </p>
            <p>
              Tariff rates now range from 10% to 60%, with the highest rates applied to imports from countries with
              significant trade surpluses with the United States. Certain strategic industries, such as technology,
              automotive, and manufacturing, face particularly high tariff rates.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Import Tariff Rates by Country</h2>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search countries..." />
            <Button type="submit">Search</Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>Electronics</TableHead>
                <TableHead>Textiles</TableHead>
                <TableHead>Automotive</TableHead>
                <TableHead>Steel</TableHead>
                <TableHead>Agriculture</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">China</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>35%</TableCell>
                <TableCell>40%</TableCell>
                <TableCell>50%</TableCell>
                <TableCell>30%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">European Union</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Canada</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mexico</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Japan</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">South Korea</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">India</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>35%</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Brazil</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Vietnam</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Note: Tariff rates are subject to change based on bilateral agreements and trade negotiations. The
            information provided is for reference only and may not reflect the most current rates.
          </p>
        </div>
      </div>
    </div>
  )
}
