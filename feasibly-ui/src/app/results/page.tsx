"use client"

import { useState } from "react"
import { Building2, ArrowLeft, CheckCircle, AlertCircle, TrendingUp, FileText, MapPin, Euro, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function ResultsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Mock data - this would come from your backend API
  const results = {
    businessName: "TechStart Solutions",
    city: "Berlin",
    feasibilityScore: 78,
    status: "feasible",
    totalCost: 85000,
    monthlyCosts: 3200,
    costBreakdown: {
      rent: { amount: 2500, description: "Office space in Berlin Mitte" },
      legal: { amount: 5000, description: "Business registration and legal fees" },
      licenses: { amount: 2000, description: "Required business licenses" },
      insurance: { amount: 1500, description: "Business liability insurance" },
      equipment: { amount: 15000, description: "Computers, furniture, and office supplies" },
      marketing: { amount: 5000, description: "Initial marketing and branding" },
      contingency: { amount: 35000, description: "Emergency fund and unexpected costs" }
    },
    requiredDocuments: [
      "Business registration form (Gewerbeanmeldung)",
      "Tax registration (Steuernummer)",
      "VAT registration (Umsatzsteuer-ID)",
      "Commercial register entry (Handelsregister)",
      "Professional liability insurance certificate",
      "Lease agreement for office space",
      "Bank account for business",
      "Health insurance for employees"
    ],
    recommendations: [
      "Consider starting with a smaller office space to reduce initial costs",
      "Look into government grants for tech startups in Berlin",
      "Network with local startup communities for cost-saving opportunities",
      "Consider co-working spaces as a more affordable alternative"
    ],
    alternativeCities: [
      { name: "Leipzig", score: 85, reason: "Lower costs, growing tech scene" },
      { name: "Hamburg", score: 72, reason: "Good infrastructure, moderate costs" },
      { name: "Dortmund", score: 88, reason: "Very affordable, strong support programs" }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "feasible": return "text-emerald-600 bg-emerald-100"
      case "marginal": return "text-yellow-600 bg-yellow-100"
      case "not-feasible": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Building2 className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Feasibly</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <button className="flex items-center text-gray-900 hover:text-emerald-600 transition-colors">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </button>
          <button className="flex items-center text-gray-900 hover:text-emerald-600 transition-colors">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </button>
          <Link href="/assessment" className="flex items-center text-gray-900 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            New Assessment
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Feasibility Analysis: {results.businessName}
                </h1>
                <p className="text-gray-900 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {results.city}, Germany
                </p>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(results.status)}`}>
                  {results.status === "feasible" && <CheckCircle className="h-4 w-4 mr-2" />}
                  {results.status === "marginal" && <AlertCircle className="h-4 w-4 mr-2" />}
                  {results.status.charAt(0).toUpperCase() + results.status.slice(1)}
                </div>
              </div>
            </div>
            
            {/* Feasibility Score */}
            <div className="text-center py-6 border-t border-gray-200">
              <div className="text-4xl font-bold mb-2">
                <span className={getScoreColor(results.feasibilityScore)}>
                  {results.feasibilityScore}%
                </span>
              </div>
              <p className="text-gray-900 font-medium">Feasibility Score</p>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Euro className="h-5 w-5 mr-2" />
              Cost Breakdown
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Initial Investment</p>
                <p className="text-2xl font-bold text-gray-900">€{results.totalCost.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Monthly Operating Costs</p>
                <p className="text-2xl font-bold text-gray-900">€{results.monthlyCosts.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {Object.entries(results.costBreakdown).map(([key, cost]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900 capitalize">{key}</p>
                    <p className="text-sm text-gray-600">{cost.description}</p>
                  </div>
                  <p className="font-bold text-gray-900">€{cost.amount.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Required Documents & Registrations
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {results.requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Recommendations
            </h2>
            <div className="space-y-3">
              {results.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-900">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternative Cities */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Alternative Cities to Consider</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {results.alternativeCities.map((city, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{city.name}</h3>
                    <span className={`font-bold ${getScoreColor(city.score)}`}>{city.score}%</span>
                  </div>
                  <p className="text-sm text-gray-600">{city.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/assessment" className="flex-1 flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
              Start New Assessment
            </Link>
            <button className="flex-1 flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Download Full Report
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 