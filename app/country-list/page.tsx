import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CountryListPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Country List</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Comprehensive information on tariff rates by country and region.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Tariff Classifications</CardTitle>
            <CardDescription>How countries are classified in the 2025 US tariff structure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The 2025 US tariff structure classifies countries into several categories based on trade relationships,
              bilateral agreements, and strategic considerations:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <span className="font-medium">Preferential:</span> Countries with special trade agreements that receive
                lower tariff rates
              </li>
              <li>
                <span className="font-medium">Standard:</span> Countries with normal trade relations status
              </li>
              <li>
                <span className="font-medium">Elevated:</span> Countries with moderately higher tariff rates due to
                trade imbalances
              </li>
              <li>
                <span className="font-medium">High Tariff:</span> Countries facing significantly higher tariffs due to
                trade disputes or strategic concerns
              </li>
              <li>
                <span className="font-medium">Restricted:</span> Countries with limited trade relations subject to the
                highest tariff rates
              </li>
            </ul>
            <p>
              These classifications determine the base tariff rates, which may be further adjusted by product category,
              specific trade remedies, or national security considerations.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search countries..." />
            <Button type="submit">Search</Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Regions</TabsTrigger>
            <TabsTrigger value="americas">Americas</TabsTrigger>
            <TabsTrigger value="europe">Europe</TabsTrigger>
            <TabsTrigger value="asia">Asia-Pacific</TabsTrigger>
            <TabsTrigger value="other">Africa & Middle East</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Country</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Trade Agreement</TableHead>
                      <TableHead>Tariff Status</TableHead>
                      <TableHead>Electronics</TableHead>
                      <TableHead>Textiles</TableHead>
                      <TableHead>Automotive</TableHead>
                      <TableHead>Steel</TableHead>
                      <TableHead>Agriculture</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* North America */}
                    <TableRow>
                      <TableCell className="font-medium">Canada</TableCell>
                      <TableCell>North America</TableCell>
                      <TableCell>USMCA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mexico</TableCell>
                      <TableCell>North America</TableCell>
                      <TableCell>USMCA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>

                    {/* South America */}
                    <TableRow>
                      <TableCell className="font-medium">Brazil</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Argentina</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Colombia</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>US-Colombia FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Chile</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>US-Chile FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Peru</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>US-Peru FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>

                    {/* Europe */}
                    <TableRow>
                      <TableCell className="font-medium">Germany</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">France</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">United Kingdom</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Italy</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Spain</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Netherlands</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Switzerland</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>

                    {/* Asia */}
                    <TableRow>
                      <TableCell className="font-medium">China</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>High Tariff</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>35%</TableCell>
                      <TableCell>40%</TableCell>
                      <TableCell>50%</TableCell>
                      <TableCell>30%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Japan</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>US-Japan Trade Agreement</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">South Korea</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>KORUS</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">India</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Elevated</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>35%</TableCell>
                      <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Vietnam</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Elevated</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Taiwan</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Thailand</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Malaysia</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Indonesia</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Singapore</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>US-Singapore FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Philippines</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>

                    {/* Middle East & Africa */}
                    <TableRow>
                      <TableCell className="font-medium">Saudi Arabia</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">United Arab Emirates</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Israel</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>US-Israel FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Egypt</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">South Africa</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Nigeria</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Morocco</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>US-Morocco FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>

                    {/* Oceania */}
                    <TableRow>
                      <TableCell className="font-medium">Australia</TableCell>
                      <TableCell>Oceania</TableCell>
                      <TableCell>US-Australia FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">New Zealand</TableCell>
                      <TableCell>Oceania</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="americas" className="mt-6">
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Country</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Trade Agreement</TableHead>
                      <TableHead>Tariff Status</TableHead>
                      <TableHead>Electronics</TableHead>
                      <TableHead>Textiles</TableHead>
                      <TableHead>Automotive</TableHead>
                      <TableHead>Steel</TableHead>
                      <TableHead>Agriculture</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* North America */}
                    <TableRow>
                      <TableCell className="font-medium">Canada</TableCell>
                      <TableCell>North America</TableCell>
                      <TableCell>USMCA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mexico</TableCell>
                      <TableCell>North America</TableCell>
                      <TableCell>USMCA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>

                    {/* South America */}
                    <TableRow>
                      <TableCell className="font-medium">Brazil</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Argentina</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Colombia</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>US-Colombia FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Chile</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>US-Chile FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Peru</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>US-Peru FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ecuador</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Venezuela</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Restricted</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>40%</TableCell>
                      <TableCell>45%</TableCell>
                      <TableCell>55%</TableCell>
                      <TableCell>35%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Uruguay</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Paraguay</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Bolivia</TableCell>
                      <TableCell>South America</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>

                    {/* Central America & Caribbean */}
                    <TableRow>
                      <TableCell className="font-medium">Costa Rica</TableCell>
                      <TableCell>Central America</TableCell>
                      <TableCell>CAFTA-DR</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Panama</TableCell>
                      <TableCell>Central America</TableCell>
                      <TableCell>US-Panama TPA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dominican Republic</TableCell>
                      <TableCell>Caribbean</TableCell>
                      <TableCell>CAFTA-DR</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jamaica</TableCell>
                      <TableCell>Caribbean</TableCell>
                      <TableCell>CBI</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Trinidad and Tobago</TableCell>
                      <TableCell>Caribbean</TableCell>
                      <TableCell>CBI</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="europe" className="mt-6">
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Country</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Trade Agreement</TableHead>
                      <TableHead>Tariff Status</TableHead>
                      <TableHead>Electronics</TableHead>
                      <TableHead>Textiles</TableHead>
                      <TableHead>Automotive</TableHead>
                      <TableHead>Steel</TableHead>
                      <TableHead>Agriculture</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Germany</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">France</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">United Kingdom</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Italy</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Spain</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Netherlands</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Switzerland</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Belgium</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sweden</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Poland</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Austria</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Norway</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Denmark</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Finland</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ireland</TableCell>
                      <TableCell>Europe</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="asia" className="mt-6">
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Country</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Trade Agreement</TableHead>
                      <TableHead>Tariff Status</TableHead>
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
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>High Tariff</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>35%</TableCell>
                      <TableCell>40%</TableCell>
                      <TableCell>50%</TableCell>
                      <TableCell>30%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Japan</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>US-Japan Trade Agreement</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">South Korea</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>KORUS</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>18%</TableCell>
                      <TableCell>22%</TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">India</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Elevated</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>35%</TableCell>
                      <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Vietnam</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Elevated</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Taiwan</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Thailand</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Malaysia</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Indonesia</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Singapore</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>US-Singapore FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Philippines</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hong Kong</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Elevated</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>35%</TableCell>
                      <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Bangladesh</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pakistan</TableCell>
                      <TableCell>Asia</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-6">
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Country</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Trade Agreement</TableHead>
                      <TableHead>Tariff Status</TableHead>
                      <TableHead>Electronics</TableHead>
                      <TableHead>Textiles</TableHead>
                      <TableHead>Automotive</TableHead>
                      <TableHead>Steel</TableHead>
                      <TableHead>Agriculture</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Saudi Arabia</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">United Arab Emirates</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Israel</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>US-Israel FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Qatar</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Kuwait</TableCell>
                      <TableCell>Middle East</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Egypt</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">South Africa</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Nigeria</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Morocco</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>US-Morocco FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Kenya</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ghana</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ethiopia</TableCell>
                      <TableCell>Africa</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Australia</TableCell>
                      <TableCell>Oceania</TableCell>
                      <TableCell>US-Australia FTA</TableCell>
                      <TableCell>Preferential</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">New Zealand</TableCell>
                      <TableCell>Oceania</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Standard</TableCell>
                      <TableCell>15%</TableCell>
                      <TableCell>20%</TableCell>
                      <TableCell>25%</TableCell>
                      <TableCell>30%</TableCell>
                      <TableCell>15%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-bold">Additional Tariff Information</h3>
          <Card>
            <CardHeader>
              <CardTitle>Tariff Classification Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Most Favored Nation (MFN):</span> Standard tariff rates apply to
                  countries with normal trade relations status.
                </li>
                <li>
                  <span className="font-medium">Free Trade Agreement (FTA):</span> Preferential rates apply to countries
                  with bilateral or multilateral trade agreements.
                </li>
                <li>
                  <span className="font-medium">Generalized System of Preferences (GSP):</span> Preferential rates for
                  developing countries.
                </li>
                <li>
                  <span className="font-medium">Section 301 Tariffs:</span> Additional tariffs imposed on countries for
                  unfair trade practices.
                </li>
                <li>
                  <span className="font-medium">Section 232 Tariffs:</span> National security-based tariffs, primarily
                  on steel and aluminum.
                </li>
                <li>
                  <span className="font-medium">Anti-dumping and Countervailing Duties:</span> Additional tariffs to
                  counter unfair pricing or subsidies.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            Note: This list is not exhaustive and tariff rates are subject to change. The information provided is for
            reference only. Tariff rates may be further adjusted based on specific product classifications, trade
            remedies, or national security considerations.
          </p>
        </div>
      </div>
    </div>
  )
}
