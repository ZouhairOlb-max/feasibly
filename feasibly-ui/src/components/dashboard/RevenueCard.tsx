"use client"

import { DollarSign, TrendingUp } from "lucide-react"
import { useBusinessMetrics } from "@/hooks/useBusinessMetrics"

export default function RevenueCard() {
  const { metrics, loading } = useBusinessMetrics()

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    )
  }

  const revenue = metrics?.revenue
  const formattedRevenue = revenue?.projected_revenue 
    ? new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(revenue.projected_revenue)
    : '$0'

  const growthRate = revenue?.growth_rate 
    ? (revenue.growth_rate * 100).toFixed(1)
    : '0'

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Projected Revenue</h3>
        <DollarSign className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-gray-900">{formattedRevenue}</div>
        <div className="flex items-center text-sm text-emerald-600">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>+{growthRate}% from last month</span>
        </div>
      </div>
    </div>
  )
}
