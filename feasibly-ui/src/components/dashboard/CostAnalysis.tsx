"use client"

import { BarChart3 } from "lucide-react"

export default function CostAnalysis() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Cost Analysis</h3>
        <BarChart3 className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="h-32 flex items-end justify-center">
        {/* Scatter plot representation */}
        <div className="flex items-end space-x-2">
          {[15, 25, 35, 20, 40, 30, 45, 25, 35, 40].map((height, index) => (
            <div
              key={index}
              className="w-3 h-3 bg-emerald-500 rounded-full"
              style={{ marginBottom: `${height}px` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">Positive correlation trend</span>
      </div>
    </div>
  )
}
