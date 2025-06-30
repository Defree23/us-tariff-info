import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About US Tariff Information Center
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Your trusted source for comprehensive US tariff information.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The US Tariff Information Center is dedicated to providing accurate, up-to-date information on US tariffs
              for imports and exports. Our mission is to help businesses, researchers, and individuals navigate the
              complex world of international trade by offering comprehensive tariff data, tools, and resources.
            </p>
            <p>
              We strive to make tariff information accessible and understandable, enabling our users to make informed
              decisions about their international trade activities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We compile tariff information from official government sources, including the United States Trade
              Representative (USTR), the US International Trade Commission (USITC), and the US Customs and Border
              Protection (CBP). Our team of trade experts regularly updates our database to ensure the most current
              information is available.
            </p>
            <p>
              While we strive for accuracy, tariff rates and regulations are subject to change. We recommend verifying
              critical information with official government sources before making business decisions.
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
            <p>
              If you have any questions, feedback, or suggestions, please don't hesitate to contact us. We value your
              input and are committed to continuously improving our services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
