"use client"

import { useState } from "react"
import { Building2, ArrowLeft, Calculator, MapPin, Euro } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AssessmentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    businessName: "",
    businessDescription: "",
    budget: "",
    city: "",
    businessType: "",
    targetMarket: "",
    teamSize: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send data to backend API
    console.log("Form submitted:", formData)
    // Redirect to results page
    router.push("/results")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Building2 className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Feasibly</span>
        </Link>
        <Link href="/" className="ml-auto flex items-center text-gray-900 hover:text-emerald-600 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Business Feasibility Assessment
            </h1>
            <p className="text-gray-900 text-lg">
              Tell us about your business idea and we'll analyze its feasibility in your chosen German city.
            </p>
          </div>

          {/* Assessment Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-base font-bold text-gray-900 mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-600"
                placeholder="Enter your business name"
                required
              />
            </div>

            {/* Business Description */}
            <div>
              <label htmlFor="businessDescription" className="block text-base font-bold text-gray-900 mb-2">
                Business Description
              </label>
              <textarea
                id="businessDescription"
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-600"
                placeholder="Describe your business idea, what you plan to sell or offer, and your target customers..."
                required
              />
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-base font-bold text-gray-900 mb-2">
                Available Budget (EUR)
              </label>
              <div className="relative">
                <Euro className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-600"
                  placeholder="50000"
                  required
                />
              </div>
            </div>

            {/* City Selection */}
            <div>
              <label htmlFor="city" className="block text-base font-bold text-gray-900 mb-2">
                Preferred City
                <MapPin className="inline h-4 w-4 ml-2 text-gray-400" />
              </label>
              <div className="relative">
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                  required
                >
                  <option value="">Select a city</option>
                  <option value="berlin">Berlin</option>
                  <option value="munich">Munich</option>
                  <option value="hamburg">Hamburg</option>
                  <option value="frankfurt">Frankfurt</option>
                  <option value="cologne">Cologne</option>
                  <option value="stuttgart">Stuttgart</option>
                  <option value="dusseldorf">Düsseldorf</option>
                  <option value="leipzig">Leipzig</option>
                  <option value="dortmund">Dortmund</option>
                  <option value="essen">Essen</option>
                </select>
              </div>
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-base font-bold text-gray-900 mb-2">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                required
              >
                <option value="">Select business type</option>
                <option value="retail">Retail Store</option>
                <option value="restaurant">Restaurant/Café</option>
                <option value="tech">Technology/Software</option>
                <option value="consulting">Consulting Services</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="ecommerce">E-commerce</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education/Training</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Target Market */}
            <div>
              <label htmlFor="targetMarket" className="block text-base font-bold text-gray-900 mb-2">
                Target Market
              </label>
              <input
                type="text"
                id="targetMarket"
                name="targetMarket"
                value={formData.targetMarket}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-600"
                placeholder="e.g., Young professionals, Families, Students..."
                required
              />
            </div>

            {/* Team Size */}
            <div>
              <label htmlFor="teamSize" className="block text-base font-bold text-gray-900 mb-2">
                Expected Team Size
              </label>
              <select
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                required
              >
                <option value="">Select team size</option>
                <option value="1">Solo founder (1 person)</option>
                <option value="2-5">Small team (2-5 people)</option>
                <option value="6-10">Medium team (6-10 people)</option>
                <option value="11-25">Large team (11-25 people)</option>
                <option value="25+">Enterprise (25+ people)</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Analyze Feasibility
              </button>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h3 className="font-medium text-emerald-900 mb-2">What happens next?</h3>
            <p className="text-emerald-800 text-sm">
              After you submit this form, we'll analyze your business idea against real market data, 
              local regulations, and cost structures in your chosen city. You'll receive a detailed 
              feasibility report within minutes.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 