"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type CostItem = {
  amount: number
  description: string
}

type AlternativeCity = {
  name: string
  score: number
  reason: string
}

type AssessmentResult = {
  business_name: string
  city: string
  feasibility_score: number
  status: string
  total_cost: number
  monthly_costs: number
  cost_breakdown: Record<string, CostItem>
  required_documents: string[]
  recommendations: string[]
  alternative_cities: AlternativeCity[]
}

interface AssessmentContextType {
  assessmentResult: AssessmentResult | null
  setAssessmentResult: (result: AssessmentResult | null) => void
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined)

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null)

  return (
    <AssessmentContext.Provider value={{ assessmentResult, setAssessmentResult }}>
      {children}
    </AssessmentContext.Provider>
  )
}

export function useAssessment() {
  const context = useContext(AssessmentContext)
  if (context === undefined) {
    throw new Error("useAssessment must be used within an AssessmentProvider")
  }
  return context
} 