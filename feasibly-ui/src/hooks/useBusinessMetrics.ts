import { useState, useEffect } from 'react'

interface BusinessMetrics {
  business_id: string
  revenue: {
    projected_revenue: number
    actual_revenue?: number
    revenue_breakdown: Record<string, number>
    growth_rate: number
    last_updated: string
  }
  costs: {
    operating_costs: number
    cost_percentage: number
    cost_breakdown: Record<string, number>
    trend: string
    last_updated: string
  }
  profit: {
    profit_margin: number
    net_profit: number
    gross_profit: number
    profit_trend: number[]
    last_updated: string
  }
  market: {
    market_demand: number
    demand_trend: number[]
    market_size: number
    competition_level: string
    last_updated: string
  }
  created_at: string
  updated_at: string
}

interface BusinessMetricsResponse {
  business_id: string
  metrics: BusinessMetrics
  status: string
  message: string
}

export function useBusinessMetrics(businessId: string = 'demo-business') {
  const [metrics, setMetrics] = useState<BusinessMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://localhost:8000/api/metrics/${businessId}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch business metrics')
        }
        
        const data: BusinessMetricsResponse = await response.json()
        setMetrics(data.metrics)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching business metrics:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [businessId])

  const updateMetrics = async (updatedData: Partial<BusinessMetrics>) => {
    try {
      const response = await fetch('http://localhost:8000/api/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          business_id: businessId,
          ...updatedData
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update business metrics')
      }

      const data: BusinessMetricsResponse = await response.json()
      setMetrics(data.metrics)
      return data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    }
  }

  return {
    metrics,
    loading,
    error,
    updateMetrics
  }
}
