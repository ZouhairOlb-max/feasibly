"use client"

import { useState, useEffect } from "react"
import { Target, TrendingUp, Calculator, AlertCircle, CheckCircle, Clock } from "lucide-react"

interface Goal {
  id: string
  title: string
  target: number
  current: number
  progress: number
  deadline: string
  status: 'on-track' | 'at-risk' | 'behind'
  category: 'revenue' | 'customers' | 'operations' | 'growth'
}

interface Scenario {
  name: string
  probability: number
  revenue: number
  profit: number
  description: string
}

interface ROIAnalysis {
  investment: number
  return: number
  roi: number
  paybackPeriod: number
  description: string
}

export default function GoalsPlanning() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [scenarios, setScenarios] = useState<Scenario[]>([])
  const [roiAnalysis, setROIAnalysis] = useState<ROIAnalysis[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setGoals([
        {
          id: '1',
          title: 'Monthly Revenue Target',
          target: 75000,
          current: 65000,
          progress: 87,
          deadline: '2024-01-31',
          status: 'on-track',
          category: 'revenue'
        },
        {
          id: '2',
          title: 'Customer Acquisition',
          target: 100,
          current: 75,
          progress: 75,
          deadline: '2024-02-15',
          status: 'at-risk',
          category: 'customers'
        },
        {
          id: '3',
          title: 'Cost Reduction',
          target: 20,
          current: 15,
          progress: 75,
          deadline: '2024-03-01',
          status: 'on-track',
          category: 'operations'
        },
        {
          id: '4',
          title: 'Market Share Growth',
          target: 15,
          current: 8,
          progress: 53,
          deadline: '2024-06-30',
          status: 'behind',
          category: 'growth'
        }
      ])
      
      setScenarios([
        {
          name: 'Optimistic',
          probability: 25,
          revenue: 900000,
          profit: 225000,
          description: 'Strong market growth and successful product launches'
        },
        {
          name: 'Realistic',
          probability: 50,
          revenue: 750000,
          profit: 150000,
          description: 'Steady growth with current market conditions'
        },
        {
          name: 'Pessimistic',
          probability: 25,
          revenue: 500000,
          profit: 50000,
          description: 'Market downturn and increased competition'
        }
      ])
      
      setROIAnalysis([
        {
          investment: 50000,
          return: 125000,
          roi: 150,
          paybackPeriod: 8,
          description: 'Marketing Campaign Q1'
        },
        {
          investment: 25000,
          return: 75000,
          roi: 200,
          paybackPeriod: 6,
          description: 'Sales Team Expansion'
        },
        {
          investment: 15000,
          return: 30000,
          roi: 100,
          paybackPeriod: 12,
          description: 'Technology Upgrade'
        }
      ])
      
      setLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'text-emerald-600 bg-emerald-100'
      case 'at-risk': return 'text-orange-600 bg-orange-100'
      case 'behind': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-track': return <CheckCircle className="h-4 w-4" />
      case 'at-risk': return <Clock className="h-4 w-4" />
      case 'behind': return <AlertCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
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
      {/* Goals Tracking */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Goals & Targets</h2>
          <Target className="h-6 w-6 text-emerald-600" />
        </div>
        
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{goal.title}</h3>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                  {getStatusIcon(goal.status)}
                  <span className="capitalize">{goal.status.replace('-', ' ')}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">
                  {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-gray-900">{goal.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">Due: {new Date(goal.deadline).toLocaleDateString()}</span>
                <span className="text-xs text-gray-500 capitalize">{goal.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Planning */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Scenario Planning</h2>
          <Calculator className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scenarios.map((scenario, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{scenario.name}</h3>
                <span className="text-sm font-medium text-blue-600">{scenario.probability}%</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <span className="text-sm font-medium">${scenario.revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Profit</span>
                  <span className="text-sm font-medium text-emerald-600">${scenario.profit.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">ROI Analysis</h2>
          <TrendingUp className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="space-y-4">
          {roiAnalysis.map((roi, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{roi.description}</h3>
                <span className="text-lg font-bold text-purple-600">{roi.roi}% ROI</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Investment</p>
                  <p className="font-medium">${roi.investment.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected Return</p>
                  <p className="font-medium">${roi.return.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ROI</p>
                  <p className="font-medium text-emerald-600">{roi.roi}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payback Period</p>
                  <p className="font-medium">{roi.paybackPeriod} months</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
