"use client"

import { useState, useEffect } from "react"
import { Users, Clock, Target, TrendingUp, AlertCircle, CheckCircle, Activity } from "lucide-react"

interface KPIData {
  employeeProductivity: number
  customerSatisfaction: number
  orderFulfillmentTime: number
  qualityScore: number
  efficiency: number
  utilization: number
}

interface TeamPerformance {
  department: string
  productivity: number
  efficiency: number
  quality: number
  target: number
  status: 'exceeding' | 'meeting' | 'below'
}

interface OperationalMetrics {
  metric: string
  current: number
  target: number
  trend: 'up' | 'down' | 'stable'
  unit: string
}

export default function Operations() {
  const [kpiData, setKpiData] = useState<KPIData | null>(null)
  const [teamPerformance, setTeamPerformance] = useState<TeamPerformance[]>([])
  const [operationalMetrics, setOperationalMetrics] = useState<OperationalMetrics[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setKpiData({
        employeeProductivity: 87,
        customerSatisfaction: 4.2,
        orderFulfillmentTime: 2.5,
        qualityScore: 92,
        efficiency: 78,
        utilization: 85
      })
      
      setTeamPerformance([
        {
          department: 'Sales',
          productivity: 95,
          efficiency: 88,
          quality: 92,
          target: 90,
          status: 'exceeding'
        },
        {
          department: 'Marketing',
          productivity: 82,
          efficiency: 85,
          quality: 89,
          target: 85,
          status: 'meeting'
        },
        {
          department: 'Operations',
          productivity: 78,
          efficiency: 75,
          quality: 88,
          target: 80,
          status: 'below'
        },
        {
          department: 'Customer Service',
          productivity: 91,
          efficiency: 92,
          quality: 94,
          target: 90,
          status: 'exceeding'
        }
      ])
      
      setOperationalMetrics([
        {
          metric: 'Orders Processed',
          current: 1250,
          target: 1200,
          trend: 'up',
          unit: 'orders'
        },
        {
          metric: 'Response Time',
          current: 2.3,
          target: 3.0,
          trend: 'up',
          unit: 'hours'
        },
        {
          metric: 'Error Rate',
          current: 2.1,
          target: 3.0,
          trend: 'up',
          unit: '%'
        },
        {
          metric: 'Uptime',
          current: 99.2,
          target: 99.0,
          trend: 'up',
          unit: '%'
        }
      ])
      
      setLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'exceeding': return 'text-emerald-600 bg-emerald-100'
      case 'meeting': return 'text-blue-600 bg-blue-100'
      case 'below': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'exceeding': return <CheckCircle className="h-4 w-4" />
      case 'meeting': return <Target className="h-4 w-4" />
      case 'below': return <AlertCircle className="h-4 w-4" />
      default: return <Target className="h-4 w-4" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-emerald-500" />
      case 'down': return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />
      default: return <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
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
      {/* Key Performance Indicators */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Key Performance Indicators</h2>
          <Activity className="h-6 w-6 text-emerald-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-600 font-medium">Employee Productivity</p>
                <p className="text-2xl font-bold text-emerald-900">
                  {kpiData?.employeeProductivity}%
                </p>
              </div>
              <Users className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Customer Satisfaction</p>
                <p className="text-2xl font-bold text-blue-900">
                  {kpiData?.customerSatisfaction}/5
                </p>
              </div>
              <Target className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Order Fulfillment</p>
                <p className="text-2xl font-bold text-purple-900">
                  {kpiData?.orderFulfillmentTime} days
                </p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Quality Score</p>
                <p className="text-2xl font-bold text-orange-900">
                  {kpiData?.qualityScore}%
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Efficiency</p>
                <p className="text-2xl font-bold text-green-900">
                  {kpiData?.efficiency}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-indigo-600 font-medium">Utilization</p>
                <p className="text-2xl font-bold text-indigo-900">
                  {kpiData?.utilization}%
                </p>
              </div>
              <Activity className="h-8 w-8 text-indigo-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Team Performance</h2>
          <Users className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="space-y-4">
          {teamPerformance.map((team, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{team.department}</h3>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(team.status)}`}>
                  {getStatusIcon(team.status)}
                  <span className="capitalize">{team.status}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-sm text-gray-600">Productivity</p>
                  <p className="text-lg font-semibold">{team.productivity}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Efficiency</p>
                  <p className="text-lg font-semibold">{team.efficiency}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quality</p>
                  <p className="text-lg font-semibold">{team.quality}%</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: `${(team.productivity / team.target) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">Target: {team.target}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Metrics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Operational Metrics</h2>
          <TrendingUp className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {operationalMetrics.map((metric, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{metric.metric}</h3>
                {getTrendIcon(metric.trend)}
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.current.toLocaleString()}{metric.unit}
                  </p>
                  <p className="text-sm text-gray-600">Target: {metric.target.toLocaleString()}{metric.unit}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${metric.current >= metric.target ? 'text-emerald-600' : 'text-red-600'}`}>
                    {metric.current >= metric.target ? '✓' : '⚠'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
