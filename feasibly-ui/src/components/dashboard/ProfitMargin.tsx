"use client"

import { BarChart3 } from "lucide-react"

export default function ProfitMargin() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Profit Margin</h3>
        <BarChart3 className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="h-32 flex items-end space-x-2">
        {[20, 35, 45, 30, 55, 40, 65, 50].map((height, index) => (
          <div
            key={index}
            className="bg-emerald-600 rounded-t"
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
