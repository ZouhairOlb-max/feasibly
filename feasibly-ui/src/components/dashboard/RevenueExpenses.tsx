"use client"

import { LineChart } from "lucide-react"

export default function RevenueExpenses() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Revenue & Expenses</h3>
        <LineChart className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="h-32 relative">
        {/* Line chart */}
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 10,80 Q 30,60 50,70 T 90,50 T 130,40 T 170,30 T 190,20"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
          <path
            d="M 10,80 Q 30,60 50,70 T 90,50 T 130,40 T 170,30 T 190,20 L 190,100 L 10,100 Z"
            fill="url(#revenueGradient)"
          />
        </svg>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Nov</span>
      </div>
    </div>
  )
}
