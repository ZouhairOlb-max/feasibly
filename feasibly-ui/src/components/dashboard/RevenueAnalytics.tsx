"use client"

import { useState, useEffect } from "react"
import { DollarSign, TrendingUp, PieChart, BarChart3, LineChart } from "lucide-react"

interface RevenueData {
  projectedRevenue: number
  actualRevenue: number
  growthRate: number
  monthlyTarget: number
  monthlyActual: number
}

interface RevenueBreakdown {
  source: string
  amount: number
  percentage: number
  trend: 'up' | 'down' | 'stable'
}

interface RevenueTrend {
  month: string
  revenue: number
  expenses: number
  profit: number
}

export default function RevenueAnalytics() {
  const [revenueData, setRevenueData] = useState<RevenueData | null>(null)
  const [breakdown, setBreakdown] = useState<RevenueBreakdown[]>([])
  const [trends, setTrends] = useState<RevenueTrend[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRevenueData({
        projectedRevenue: 650000,
        actualRevenue: 585000,
        growthRate: 12,
        monthlyTarget: 75000,
        monthlyActual: 65000
      })
      
      setBreakdown([
        {
          source: 'Product Sales',
          amount: 350000,
          percentage: 60,
          trend: 'up'
        },
        {
          source: 'Service Revenue',
          amount: 175000,
          percentage: 30,
          trend: 'stable'
        },
        {
          source: 'Subscription',
          amount: 60000,
          percentage: 10,
          trend: 'up'
        }
      ])
      
      setTrends([
        { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
        { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000 },
        { month: 'Mar', revenue: 58000, expenses: 38000, profit: 20000 },
        { month: 'Apr', revenue: 62000, expenses: 40000, profit: 22000 },
        { month: 'May', revenue: 65000, expenses: 42000, profit: 23000 },
        { month: 'Jun', revenue: 68000, expenses: 44000, profit: 24000 }
      ])
      
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Revenue Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Revenue Overview</h2>
          <DollarSign className="h-6 w-6 text-emerald-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-600 font-medium">Projected Revenue</p>
                <p className="text-2xl font-bold text-emerald-900">
                  ${revenueData?.projectedRevenue.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Actual Revenue</p>
                <p className="text-2xl font-bold text-blue-900">
                  ${revenueData?.actualRevenue.toLocaleString()}
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Growth Rate</p>
                <p className="text-2xl font-bold text-purple-900">
                  {revenueData?.growthRate}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Monthly Target</p>
                <p className="text-2xl font-bold text-orange-900">
                  ${revenueData?.monthlyTarget.toLocaleString()}
                </p>
              </div>
              <LineChart className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Revenue Breakdown</h2>
          <PieChart className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="space-y-4">
          {breakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">{item.source}</p>
                  <p className="text-sm text-gray-600">${item.amount.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{item.percentage}%</p>
                  <p className="text-sm text-gray-600">
                    {item.trend === 'up' ? '↗' : item.trend === 'down' ? '↘' : '→'} {item.trend}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Trends */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Revenue Trends</h2>
          <LineChart className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="space-y-3">
          {trends.map((trend, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 text-center">
                  <p className="text-sm font-medium text-gray-900">{trend.month}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Revenue</span>
                        <span className="font-medium">${trend.revenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${(trend.revenue / 70000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-medium text-emerald-600">${trend.profit.toLocaleString()}</p>
                <p className="text-xs text-gray-600">profit</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
