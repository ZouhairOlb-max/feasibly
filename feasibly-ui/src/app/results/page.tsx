"use client"

import { useState, useEffect } from "react"
import { Building2, ArrowLeft, CheckCircle, AlertCircle, TrendingUp, FileText, MapPin, Euro, Download, Share2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAssessment } from "@/context/AssessmentContext"

export default function ResultsPage() {
  const router = useRouter()
  const { assessmentResult } = useAssessment()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Redirect to assessment page if there's no result
  useEffect(() => {
    if (!assessmentResult) {
      router.push("/assessment")
    }
  }, [assessmentResult, router])

  // Show loading state while checking for results
  if (!assessmentResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    )
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
                  Feasibility Analysis: {assessmentResult.business_name}
                </h1>
                <p className="text-gray-900 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {assessmentResult.city}, Germany
                </p>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assessmentResult.status)}`}>
                  {assessmentResult.status === "feasible" && <CheckCircle className="h-4 w-4 mr-2" />}
                  {assessmentResult.status === "marginal" && <AlertCircle className="h-4 w-4 mr-2" />}
                  {assessmentResult.status.charAt(0).toUpperCase() + assessmentResult.status.slice(1)}
                </div>
              </div>
            </div>
            
            {/* Feasibility Score */}
            <div className="text-center py-6 border-t border-gray-200">
              <div className="text-4xl font-bold mb-2">
                <span className={getScoreColor(assessmentResult.feasibility_score)}>
                  {assessmentResult.feasibility_score}%
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
                <p className="text-2xl font-bold text-gray-900">€{assessmentResult.total_cost.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Monthly Operating Costs</p>
                <p className="text-2xl font-bold text-gray-900">€{assessmentResult.monthly_costs.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {Object.entries(assessmentResult.cost_breakdown).map(([key, cost]) => (
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
              {assessmentResult.required_documents.map((doc, index) => (
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
              {assessmentResult.recommendations.map((rec, index) => (
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
              {assessmentResult.alternative_cities.map((city, index) => (
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