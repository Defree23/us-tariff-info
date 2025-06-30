import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            How we collect, use, and protect your information.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Information Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We collect information that you provide directly to us, such as when you create an account, subscribe to
              our newsletter, or contact us for support. This information may include your name, email address, and any
              other information you choose to provide.
            </p>
            <p>
              We also automatically collect certain information about your device and how you interact with our website,
              including your IP address, browser type, and pages visited.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use of Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to personalize your experience. We may also use the information for research and analytics purposes,
              to develop new products and services, and to protect our rights and the rights of others.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information Sharing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We do not sell, rent, or share your personal information with third parties except as described in this
              policy. We may share your information with service providers who perform services on our behalf, such as
              hosting our website or processing payments.
            </p>
            <p>
              We may also share information when required by law, to protect our rights, or in connection with a merger,
              acquisition, or sale of assets.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The information provided on this website is for general informational purposes only. While we strive to
              keep the information up to date and correct, we make no representations or warranties of any kind, express
              or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to
              the website or the information, products, services, or related graphics contained on the website for any
              purpose.
            </p>
            <p className="mb-4">
              Any reliance you place on such information is therefore strictly at your own risk. In no event will we be
              liable for any loss or damage including without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with,
              the use of this website.
            </p>
            <p>
              Tariff rates and regulations are subject to change without notice. Users should verify all information
              with official government sources before making business decisions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>If you have any questions about our Privacy Policy, please contact us.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
