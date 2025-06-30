import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/import-tariffs" className="text-muted-foreground hover:text-foreground">
                  Import Tariffs
                </Link>
              </li>
              <li>
                <Link href="/export-tariffs" className="text-muted-foreground hover:text-foreground">
                  Export Tariffs
                </Link>
              </li>
              <li>
                <Link href="/country-list" className="text-muted-foreground hover:text-foreground">
                  Country List
                </Link>
              </li>
              <li>
                <Link href="/tariff-news" className="text-muted-foreground hover:text-foreground">
                  Tariff News
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools" className="text-muted-foreground hover:text-foreground">
                  Tariff Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-muted-foreground hover:text-foreground">
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link href="/hs-code-lookup" className="text-muted-foreground hover:text-foreground">
                  HS Code Lookup
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">DeFree Crea.</span>
              </li>
              <li>
                <a href="mailto:defree4real@hotmail.com" className="text-muted-foreground hover:text-foreground">
                  defree4real@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} US Tariff Information Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
