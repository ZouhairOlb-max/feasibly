import {
  Calculator,
  MapPin,
  FileText,
  TrendingUp,
  CheckCircle,
  Users,
  Building2,
  Lightbulb,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FeasiblyLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Building2 className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Feasibly</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Pricing
          </Link>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Sign In
          </button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    🇩🇪 Made for German Entrepreneurs
                  </span>
                  <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl xl:text-6xl">
                    Turn Your Business Idea Into a <span className="text-emerald-600">Feasible Reality</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl">
                    Get instant feasibility assessments for your startup idea in any German city. Real data, accurate
                    costs, legal requirements - all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
                    Start Your Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Watch Demo
                  </button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Instant results</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                    height="400"
                    alt="Feasibly Dashboard Preview"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Core Features
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Everything You Need to Validate Your Startup
              </h2>
              <p className="max-w-[900px] text-gray-600 text-lg md:text-xl">
                From feasibility analysis to legal compliance, we provide comprehensive insights based on real German
                market data.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <Calculator className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Feasibility Analysis</h3>
                <p className="text-gray-600">
                  Input your business idea and budget to get instant feasibility decisions based on location-specific
                  data across German cities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <MapPin className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Detailed Cost Breakdown</h3>
                <p className="text-gray-600">
                  Get precise estimates for rent, taxes, legal fees, and operational costs tailored to your chosen
                  German city and business type.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <FileText className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Legal Compliance Checklist</h3>
                <p className="text-gray-600">
                  Never miss a requirement with our comprehensive checklist of documents, registrations, and legal steps
                  for German businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <TrendingUp className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">
                  Get actionable suggestions to optimize your budget, change locations, or adjust your business scope
                  for better feasibility.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <Users className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">First-Timer Friendly</h3>
                <p className="text-gray-600">
                  Designed specifically for first-time founders with clear explanations and step-by-step guidance
                  through the German startup landscape.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <Lightbulb className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real Government Data</h3>
                <p className="text-gray-600">
                  All insights backed by official government sources and current financial data to ensure accuracy and
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Simple Process
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                From Idea to Feasibility in 3 Steps
              </h2>
              <p className="max-w-[900px] text-gray-600 text-lg md:text-xl">
                Our streamlined process makes it easy to validate your business idea and get actionable insights in
                minutes.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Describe Your Idea</h3>
                <p className="text-gray-600">
                  Tell us about your business concept, target market, and available budget. Choose your preferred German
                  city or let us suggest the best options.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Get Instant Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes your idea against real market data, local regulations, and cost structures to
                  determine feasibility and provide detailed insights.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Take Action</h3>
                <p className="text-gray-600">
                  Receive your feasibility report with cost breakdowns, legal checklists, and personalized
                  recommendations to move forward confidently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Trusted by German Entrepreneurs
              </h2>
              <p className="max-w-[900px] text-gray-600 text-lg md:text-xl">
                Join hundreds of successful founders who used Feasibly to validate and launch their startups.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Feasibly saved me months of research. The cost breakdown for Munich was spot-on, and the legal
                  checklist helped me avoid costly mistakes."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-emerald-600">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Sarah M.</p>
                    <p className="text-xs text-gray-600">Tech Startup Founder</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "As a first-time founder, I was overwhelmed by German business regulations. Feasibly made everything
                  clear and actionable."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-emerald-600">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Marcus K.</p>
                    <p className="text-xs text-gray-600">E-commerce Entrepreneur</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The city comparison feature helped me realize Berlin was better than Hamburg for my business model.
                  Excellent insights!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-emerald-600">AL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Anna L.</p>
                    <p className="text-xs text-gray-600">SaaS Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Ready to Validate Your Startup Idea?
                </h2>
                <p className="max-w-[600px] text-emerald-100 text-lg md:text-xl">
                  Join thousands of German entrepreneurs who trust Feasibly for their business planning. Start your free
                  assessment today.
                </p>
              </div>
              <div className="w-full max-w-md space-y-3">
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Get Started
                  </button>
                </form>
                <p className="text-xs text-emerald-100">Start your free trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-emerald-600" />
          <span className="font-bold">Feasibly</span>
        </div>
        <p className="text-xs text-gray-600 sm:ml-4">© 2024 Feasibly. Made for German entrepreneurs.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
