"use client"

import { useState, useEffect } from "react"
import { Users, DollarSign, TrendingUp, Target, UserPlus, UserCheck, UserX } from "lucide-react"

interface CustomerMetrics {
  cac: number
  clv: number
  clvCacRatio: number
  retentionRate: number
  churnRate: number
  totalCustomers: number
  newCustomers: number
  activeCustomers: number
}

interface SalesPipeline {
  stage: string
  count: number
  value: number
  conversionRate: number
}

export default function CustomerInsights() {
  const [metrics, setMetrics] = useState<CustomerMetrics | null>(null)
  const [pipeline, setPipeline] = useState<SalesPipeline[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMetrics({
        cac: 150,
        clv: 345,
        clvCacRatio: 2.3,
        retentionRate: 78,
        churnRate: 22,
        totalCustomers: 1250,
        newCustomers: 45,
        activeCustomers: 975
      })
      
      setPipeline([
        { stage: "Leads", count: 120, value: 18000, conversionRate: 100 },
        { stage: "Qualified", count: 36, value: 10800, conversionRate: 30 },
        { stage: "Proposal", count: 18, value: 7200, conversionRate: 50 },
        { stage: "Negotiation", count: 9, value: 4500, conversionRate: 50 },
        { stage: "Closed Won", count: 4, value: 2000, conversionRate: 44 }
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
      {/* Customer Metrics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Customer Metrics</h2>
          <Users className="h-6 w-6 text-emerald-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-600 font-medium">Customer Acquisition Cost</p>
                <p className="text-2xl font-bold text-emerald-900">
                  ${metrics?.cac}
                </p>
              </div>
              <UserPlus className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Customer Lifetime Value</p>
                <p className="text-2xl font-bold text-blue-900">
                  ${metrics?.clv}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">CLV:CAC Ratio</p>
                <p className="text-2xl font-bold text-purple-900">
                  {metrics?.clvCacRatio}x
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Retention Rate</p>
                <p className="text-2xl font-bold text-orange-900">
                  {metrics?.retentionRate}%
                </p>
              </div>
              <UserCheck className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Customer Base */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Customer Base</h2>
          <Target className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Customers</p>
            <p className="text-3xl font-bold text-gray-900">
              {metrics?.totalCustomers.toLocaleString()}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">New This Month</p>
            <p className="text-3xl font-bold text-emerald-600">
              {metrics?.newCustomers}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Active Customers</p>
            <p className="text-3xl font-bold text-blue-600">
              {metrics?.activeCustomers.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-sm text-gray-600">Churn Rate</p>
              <p className="text-xl font-bold text-red-600">
                {metrics?.churnRate}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Pipeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Sales Pipeline</h2>
          <TrendingUp className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="space-y-4">
          {pipeline.map((stage, index) => (
            <div key={stage.stage} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-emerald-600">{index + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{stage.stage}</p>
                  <p className="text-sm text-gray-600">{stage.count} prospects</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-gray-900">${stage.value.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{stage.conversionRate}% conversion</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Pipeline Value</span>
            <span className="text-lg font-bold text-purple-600">
              ${pipeline.reduce((sum, stage) => sum + stage.value, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
