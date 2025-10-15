"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, BarChart3, PieChart, AlertCircle, CheckCircle } from "lucide-react"

interface CostData {
  totalOperatingCosts: number
  costPercentage: number
  monthlyCosts: number
  costTrend: 'up' | 'down' | 'stable'
  costReduction: number
}

interface CostBreakdown {
  category: string
  amount: number
  percentage: number
  trend: 'up' | 'down' | 'stable'
  budget: number
  variance: number
}

interface CostOptimization {
  area: string
  currentCost: number
  potentialSavings: number
  implementationCost: number
  roi: number
  priority: 'high' | 'medium' | 'low'
}

export default function CostManagement() {
  const [costData, setCostData] = useState<CostData | null>(null)
  const [breakdown, setBreakdown] = useState<CostBreakdown[]>([])
  const [optimizations, setOptimizations] = useState<CostOptimization[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCostData({
        totalOperatingCosts: 487500,
        costPercentage: 25,
        monthlyCosts: 81250,
        costTrend: 'down',
        costReduction: 8
      })
      
      setBreakdown([
        {
          category: 'Personnel',
          amount: 250000,
          percentage: 51,
          trend: 'up',
          budget: 240000,
          variance: 4
        },
        {
          category: 'Operations',
          amount: 125000,
          percentage: 26,
          trend: 'down',
          budget: 130000,
          variance: -4
        },
        {
          category: 'Marketing',
          amount: 75000,
          percentage: 15,
          trend: 'stable',
          budget: 80000,
          variance: -6
        },
        {
          category: 'Technology',
          amount: 37500,
          percentage: 8,
          trend: 'up',
          budget: 35000,
          variance: 7
        }
      ])
      
      setOptimizations([
        {
          area: 'Energy Efficiency',
          currentCost: 15000,
          potentialSavings: 4500,
          implementationCost: 2000,
          roi: 125,
          priority: 'high'
        },
        {
          area: 'Process Automation',
          currentCost: 25000,
          potentialSavings: 8000,
          implementationCost: 5000,
          roi: 60,
          priority: 'medium'
        },
        {
          area: 'Vendor Negotiation',
          currentCost: 18000,
          potentialSavings: 2700,
          implementationCost: 500,
          roi: 440,
          priority: 'high'
        }
      ])
      
      setLoading(false)
    }, 1000)
  }, [])

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-500" />
      case 'down': return <TrendingDown className="h-4 w-4 text-emerald-500" />
      default: return <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-orange-600 bg-orange-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Cost Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Cost Overview</h2>
          <BarChart3 className="h-6 w-6 text-emerald-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-600 font-medium">Total Operating Costs</p>
                <p className="text-2xl font-bold text-emerald-900">
                  ${costData?.totalOperatingCosts.toLocaleString()}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Cost Percentage</p>
                <p className="text-2xl font-bold text-blue-900">
                  {costData?.costPercentage}%
                </p>
              </div>
              <PieChart className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Monthly Costs</p>
                <p className="text-2xl font-bold text-purple-900">
                  ${costData?.monthlyCosts.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Cost Reduction</p>
                <p className="text-2xl font-bold text-orange-900">
                  {costData?.costReduction}%
                </p>
              </div>
              <TrendingDown className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Cost Breakdown</h2>
          <PieChart className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="space-y-4">
          {breakdown.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{item.category}</h3>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(item.trend)}
                  <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">
                  ${item.amount.toLocaleString()} / ${item.budget.toLocaleString()}
                </span>
                <span className={`text-sm font-medium ${item.variance > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                  {item.variance > 0 ? '+' : ''}{item.variance}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Optimization Opportunities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Cost Optimization</h2>
          <AlertCircle className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="space-y-4">
          {optimizations.map((opt, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{opt.area}</h3>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(opt.priority)}`}>
                  <span className="capitalize">{opt.priority} priority</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Current Cost</p>
                  <p className="font-medium">${opt.currentCost.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Potential Savings</p>
                  <p className="font-medium text-emerald-600">${opt.potentialSavings.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Implementation</p>
                  <p className="font-medium">${opt.implementationCost.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ROI</p>
                  <p className="font-medium text-purple-600">{opt.roi}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
