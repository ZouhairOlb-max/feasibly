"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { useBusinessMetrics } from "@/hooks/useBusinessMetrics"

export default function OperatingCosts() {
  const { metrics, loading } = useBusinessMetrics()

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  const costs = metrics?.costs
  const costPercentage = costs?.cost_percentage 
    ? (costs.cost_percentage * 100).toFixed(0)
    : '0'

  const trend = costs?.trend || 'stable'
  const isDecreasing = trend === 'decreasing'
  const isIncreasing = trend === 'increasing'

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Operating Costs</h3>
        <TrendingUp className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="space-y-4">
        <div className="text-3xl font-bold text-gray-900">{costPercentage}%</div>
        <div className={`flex items-center text-sm ${
          isDecreasing ? 'text-emerald-600' : isIncreasing ? 'text-red-600' : 'text-gray-600'
        }`}>
          {isDecreasing ? (
            <TrendingDown className="h-4 w-4 mr-1" />
          ) : isIncreasing ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <div className="h-4 w-4 mr-1 bg-gray-400 rounded-full"></div>
          )}
          <span>
            {isDecreasing ? 'Decreasing' : isIncreasing ? 'Increasing' : 'Stable'} costs
          </span>
        </div>
        {/* Mini line chart */}
        <div className="h-16 flex items-end space-x-1">
          {[20, 25, 22, 28, 25, 30, 25].map((height, index) => (
            <div
              key={index}
              className="bg-emerald-200 rounded-t"
              style={{ height: `${height}px`, width: "12px" }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
