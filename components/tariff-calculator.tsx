"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TariffCalculator() {
  const [country, setCountry] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [value, setValue] = useState("")
  const [result, setResult] = useState<number | null>(null)

  // Sample tariff rates - in a real app, these would come from a database or API
  const tariffRates: Record<string, Record<string, number>> = {
    china: {
      electronics: 25,
      textiles: 35,
      automotive: 40,
      steel: 50,
      agriculture: 30,
    },
    eu: {
      electronics: 15,
      textiles: 20,
      automotive: 25,
      steel: 30,
      agriculture: 15,
    },
    canada: {
      electronics: 10,
      textiles: 15,
      automotive: 20,
      steel: 25,
      agriculture: 10,
    },
    mexico: {
      electronics: 10,
      textiles: 15,
      automotive: 20,
      steel: 25,
      agriculture: 10,
    },
    japan: {
      electronics: 15,
      textiles: 20,
      automotive: 25,
      steel: 30,
      agriculture: 15,
    },
  }

  const calculateTariff = () => {
    if (!country || !productCategory || !value) {
      alert("Please fill in all fields")
      return
    }

    const numValue = Number.parseFloat(value)
    if (isNaN(numValue)) {
      alert("Please enter a valid number for value")
      return
    }

    const rate = tariffRates[country]?.[productCategory] || 0
    const tariffAmount = (numValue * rate) / 100
    setResult(tariffAmount)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="eu">European Union</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="mexico">Mexico</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Product Category</Label>
            <Select value={productCategory} onValueChange={setProductCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="textiles">Textiles</SelectItem>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="steel">Steel</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="value">Product Value (USD)</Label>
            <Input
              id="value"
              type="number"
              placeholder="Enter value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <Button type="button" onClick={calculateTariff} className="w-full">
            Calculate Tariff
          </Button>
        </form>
        {result !== null && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="font-medium">Estimated Tariff:</p>
            <p className="text-2xl font-bold">${result.toFixed(2)} USD</p>
            <p className="text-sm text-muted-foreground mt-2">
              Based on a {tariffRates[country]?.[productCategory]}% tariff rate for {productCategory} from{" "}
              {country.charAt(0).toUpperCase() + country.slice(1)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
