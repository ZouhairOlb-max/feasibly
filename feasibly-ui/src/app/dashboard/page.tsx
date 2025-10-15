"use client"

import Link from "next/link"
import { Building2, TrendingUp, DollarSign, PieChart, BarChart3, LineChart, Target, Users, ArrowRight } from "lucide-react"

export default function Dashboard() {
  const businessDepartments = [
    {
      id: "revenue",
      title: "Projected Revenue",
      value: "$650,000",
      icon: DollarSign,
      description: "Revenue tracking and projections",
      color: "emerald",
      href: "/dashboard/revenue"
    },
    {
      id: "revenue-breakdown",
      title: "Revenue Breakdown",
      icon: PieChart,
      description: "Revenue sources and distribution",
      color: "blue",
      href: "/dashboard/revenue-breakdown"
    },
    {
      id: "operating-costs",
      title: "Operating Costs",
      value: "25%",
      icon: TrendingUp,
      description: "Cost management and analysis",
      color: "emerald",
      href: "/dashboard/costs"
    },
    {
      id: "cost-analysis",
      title: "Cost Analysis",
      icon: BarChart3,
      description: "Cost correlation and trends",
      color: "blue",
      href: "/dashboard/cost-analysis"
    },
    {
      id: "revenue-expenses",
      title: "Revenue & Expenses",
      icon: LineChart,
      description: "Financial performance tracking",
      color: "emerald",
      href: "/dashboard/revenue-expenses"
    },
    {
      id: "profit-margin",
      title: "Profit Margin",
      icon: BarChart3,
      description: "Profitability analysis",
      color: "blue",
      href: "/dashboard/profit"
    },
    {
      id: "market-demand",
      title: "Market Demand",
      icon: Target,
      description: "Market analysis and demand",
      color: "emerald",
      href: "/dashboard/market"
    },
    {
      id: "operations",
      title: "Operations",
      value: "87%",
      icon: Users,
      description: "Team performance and operations",
      color: "blue",
      href: "/dashboard/operations"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <div className="flex items-center justify-center">
          <Building2 className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Business Feasibility</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/assessment" className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            New Assessment
          </Link>
          <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Settings
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors">
            Add Data
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Dashboard</h1>
          <p className="text-gray-600">Monitor and analyze all aspects of your business</p>
        </div>

        {/* Business Department Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {businessDepartments.map((department) => {
            const Icon = department.icon
            const isEmerald = department.color === "emerald"
            
            return (
              <Link
                key={department.id}
                href={department.href}
                className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-emerald-300 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{department.title}</h3>
                  <Icon className={`h-6 w-6 ${isEmerald ? 'text-emerald-600' : 'text-blue-600'}`} />
                </div>
                
                {department.value && (
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {department.value}
                  </div>
                )}
                
                <p className="text-sm text-gray-600 mb-4">{department.description}</p>
                
                <div className="flex items-center text-sm text-emerald-600 group-hover:text-emerald-700">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-emerald-900 mb-2">Getting Started</h3>
          <p className="text-emerald-800 text-sm mb-4">
            Click on any department card above to dive deeper into specific business metrics and analysis. 
            Each section provides detailed insights and data visualization for that aspect of your business.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Real-time Data</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Interactive Charts</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">Detailed Analytics</span>
          </div>
        </div>
      </main>
    </div>
  )
}
