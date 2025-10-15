"use client"

import { Target } from "lucide-react"

export default function MarketDemand() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Market Demand</h3>
        <Target className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="h-32 flex items-end space-x-2">
        {[25, 40, 35, 50, 45, 60, 55, 70].map((height, index) => (
          <div
            key={index}
            className="bg-emerald-500 rounded-t"
            style={{ height: `${height}px`, width: "20px" }}
          ></div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
      </div>
    </div>
  )
}
