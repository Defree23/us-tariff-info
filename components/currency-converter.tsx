"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("eur")
  const [amount, setAmount] = useState("")
  const [result, setResult] = useState<number | null>(null)

  // Sample exchange rates - in a real app, these would come from an API
  const exchangeRates: Record<string, number> = {
    usd: 1,
    eur: 0.92,
    gbp: 0.79,
    jpy: 150.23,
    cny: 7.24,
    cad: 1.37,
    aud: 1.52,
    mxn: 17.05,
  }

  const convertCurrency = () => {
    if (!fromCurrency || !toCurrency || !amount) {
      alert("Please fill in all fields")
      return
    }

    const numAmount = Number.parseFloat(amount)
    if (isNaN(numAmount)) {
      alert("Please enter a valid number for amount")
      return
    }

    // Convert to USD first, then to target currency
    const inUSD = numAmount / exchangeRates[fromCurrency]
    const converted = inUSD * exchangeRates[toCurrency]
    setResult(converted)
  }

  const currencySymbols: Record<string, string> = {
    usd: "$",
    eur: "€",
    gbp: "£",
    jpy: "¥",
    cny: "¥",
    cad: "C$",
    aud: "A$",
    mxn: "Mex$",
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="from-currency">From Currency</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger id="from-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD - US Dollar</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="gbp">GBP - British Pound</SelectItem>
                <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
                <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                <SelectItem value="mxn">MXN - Mexican Peso</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to-currency">To Currency</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger id="to-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD - US Dollar</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="gbp">GBP - British Pound</SelectItem>
                <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
                <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                <SelectItem value="mxn">MXN - Mexican Peso</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <Button type="button" onClick={convertCurrency} className="w-full">
            Convert
          </Button>
        </form>
        {result !== null && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="font-medium">Converted Amount:</p>
            <p className="text-2xl font-bold">
              {currencySymbols[toCurrency]}
              {result.toFixed(2)} {toCurrency.toUpperCase()}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {currencySymbols[fromCurrency]}
              {Number.parseFloat(amount).toFixed(2)} {fromCurrency.toUpperCase()} = {currencySymbols[toCurrency]}
              {result.toFixed(2)} {toCurrency.toUpperCase()}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Exchange rate: 1 {fromCurrency.toUpperCase()} ={" "}
              {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrency.toUpperCase()}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
