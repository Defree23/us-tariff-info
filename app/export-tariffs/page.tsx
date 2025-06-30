import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExportTariffsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            US Export Tariffs & Regulations 2025
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Information on US export tariffs, regulations, and reciprocal measures.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Export Regulations Overview</CardTitle>
            <CardDescription>
              The 2025 export regulations include reciprocal tariffs and special provisions for strategic trade
              partners.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The 2025 export regulations represent a significant shift in US trade policy, with a focus on reciprocity
              and protecting strategic industries. These regulations include both tariffs imposed by other countries on
              US exports and US export controls on certain sensitive technologies and products.
            </p>
            <p>
              Export regulations vary widely by destination country and product category, with special provisions for
              strategic trade partners and heightened restrictions for countries deemed to pose national security
              concerns.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Foreign Tariffs on US Exports</h2>
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
                <TableHead>Agricultural Products</TableHead>
                <TableHead>Automotive</TableHead>
                <TableHead>Pharmaceuticals</TableHead>
                <TableHead>Machinery</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">China</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>35%</TableCell>
                <TableCell>40%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>35%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">European Union</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Canada</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>5%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mexico</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>5%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Japan</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">India</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>35%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Brazil</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Note: These rates represent tariffs imposed by other countries on US exports. Rates are subject to change
            based on bilateral agreements and trade negotiations.
          </p>
        </div>
      </div>
    </div>
  )
}
