"use client"

import { PieChart } from "lucide-react"

export default function RevenueBreakdown() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Revenue Breakdown</h3>
        <PieChart className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="flex items-center justify-center h-32">
        <div className="relative w-24 h-24">
          {/* Pie Chart SVG */}
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#10b981"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40 * 0.65} ${2 * Math.PI * 40}`}
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#34d399"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40 * 0.35} ${2 * Math.PI * 40}`}
              strokeDashoffset={`-${2 * Math.PI * 40 * 0.65}`}
            />
          </svg>
        </div>
        <div className="ml-4 space-y-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Product Sales (65%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Services (35%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
