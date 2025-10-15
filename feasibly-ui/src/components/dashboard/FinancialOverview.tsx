"use client"

import { useState, useEffect } from "react"
import { DollarSign, TrendingUp, TrendingDown, Calculator, AlertCircle, CheckCircle } from "lucide-react"

interface CashFlowData {
  currentCash: number
  monthlyCashFlow: number
  burnRate: number
  runway: number
}

interface PLData {
  revenue: number
  expenses: number
  grossProfit: number
  netProfit: number
  profitMargin: number
}

interface BreakEvenData {
  fixedCosts: number
  variableCosts: number
  pricePerUnit: number
  breakEvenUnits: number
  breakEvenRevenue: number
}

export default function FinancialOverview() {
  const [cashFlow, setCashFlow] = useState<CashFlowData | null>(null)
  const [plData, setPLData] = useState<PLData | null>(null)
  const [breakEven, setBreakEven] = useState<BreakEvenData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCashFlow({
        currentCash: 45000,
        monthlyCashFlow: 8500,
        burnRate: 12000,
        runway: 3.75
      })
      
      setPLData({
        revenue: 650000,
        expenses: 487500,
        grossProfit: 487500,
        netProfit: 162500,
        profitMargin: 25
      })
      
      setBreakEven({
        fixedCosts: 25000,
        variableCosts: 15,
        pricePerUnit: 50,
        breakEvenUnits: 714,
        breakEvenRevenue: 35714
      })
      
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
      {/* Cash Flow Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Cash Flow</h2>
          <DollarSign className="h-6 w-6 text-emerald-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-600 font-medium">Current Cash</p>
                <p className="text-2xl font-bold text-emerald-900">
                  ${cashFlow?.currentCash.toLocaleString()}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Monthly Cash Flow</p>
                <p className="text-2xl font-bold text-blue-900">
                  ${cashFlow?.monthlyCashFlow.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Burn Rate</p>
                <p className="text-2xl font-bold text-orange-900">
                  ${cashFlow?.burnRate.toLocaleString()}/mo
                </p>
              </div>
              <TrendingDown className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Runway</p>
                <p className="text-2xl font-bold text-purple-900">
                  {cashFlow?.runway} months
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* P&L Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Profit & Loss</h2>
          <Calculator className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Revenue</p>
            <p className="text-2xl font-bold text-emerald-600">
              ${plData?.revenue.toLocaleString()}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Expenses</p>
            <p className="text-2xl font-bold text-red-600">
              ${plData?.expenses.toLocaleString()}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Gross Profit</p>
            <p className="text-2xl font-bold text-blue-600">
              ${plData?.grossProfit.toLocaleString()}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Net Profit</p>
            <p className="text-2xl font-bold text-emerald-600">
              ${plData?.netProfit.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-600">Profit Margin</p>
              <p className="text-3xl font-bold text-emerald-600">
                {plData?.profitMargin}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Break-Even Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Break-Even Analysis</h2>
          <Target className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Fixed Costs</p>
            <p className="text-xl font-bold text-gray-900">
              ${breakEven?.fixedCosts.toLocaleString()}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Variable Cost/Unit</p>
            <p className="text-xl font-bold text-gray-900">
              ${breakEven?.variableCosts}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Price/Unit</p>
            <p className="text-xl font-bold text-gray-900">
              ${breakEven?.pricePerUnit}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Break-Even Units</p>
            <p className="text-xl font-bold text-purple-600">
              {breakEven?.breakEvenUnits.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-600">Break-Even Revenue</p>
              <p className="text-2xl font-bold text-purple-600">
                ${breakEven?.breakEvenRevenue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
