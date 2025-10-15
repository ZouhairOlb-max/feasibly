from pydantic import BaseModel, Field
from typing import List, Dict, Optional
from datetime import datetime

class CostItem(BaseModel):
    amount: int
    description: str
    reason: str

class AlternativeCity(BaseModel):
    name: str
    score: int
    reason: str

class AssessmentRequest(BaseModel):
    business_name: str = Field(alias="businessName")
    business_description: str = Field(alias="businessDescription")
    budget: float
    city: str
    business_type: str = Field(alias="businessType")
    target_market: str = Field(alias="targetMarket")
    team_size: str = Field(alias="teamSize")

    class Config:
        allow_population_by_field_name = True

class AssessmentResponse(BaseModel):
    business_name: str
    city: str
    feasibility_score: int
    status: str
    total_cost: int
    monthly_costs: int
    cost_breakdown: Dict[str, CostItem]
    required_documents: List[str]
    recommendations: List[str]
    alternative_cities: List[AlternativeCity]

# Business Tracking Models
class RevenueData(BaseModel):
    projected_revenue: float
    actual_revenue: Optional[float] = None
    revenue_breakdown: Dict[str, float]  # e.g., {"product_sales": 0.65, "services": 0.35}
    growth_rate: float
    monthly_target: float
    monthly_actual: float
    last_updated: datetime

class CostData(BaseModel):
    operating_costs: float
    cost_percentage: float  # percentage of revenue
    cost_breakdown: Dict[str, float]  # e.g., {"rent": 0.3, "salaries": 0.4, "utilities": 0.1}
    trend: str  # "increasing", "decreasing", "stable"
    cost_reduction: float
    last_updated: datetime

class ProfitData(BaseModel):
    profit_margin: float
    net_profit: float
    gross_profit: float
    profit_trend: List[float]  # historical data points
    last_updated: datetime

class MarketData(BaseModel):
    market_demand: float
    demand_trend: List[float]  # historical data points
    market_size: float
    competition_level: str  # "low", "medium", "high"
    market_share: float
    last_updated: datetime

# New Financial Models
class CashFlowData(BaseModel):
    current_cash: float
    monthly_cash_flow: float
    burn_rate: float
    runway: float  # months
    last_updated: datetime

class PLData(BaseModel):
    revenue: float
    expenses: float
    gross_profit: float
    net_profit: float
    profit_margin: float
    last_updated: datetime

class BreakEvenData(BaseModel):
    fixed_costs: float
    variable_costs: float
    price_per_unit: float
    break_even_units: float
    break_even_revenue: float
    last_updated: datetime

# Customer Metrics
class CustomerMetrics(BaseModel):
    cac: float  # Customer Acquisition Cost
    clv: float  # Customer Lifetime Value
    clv_cac_ratio: float
    retention_rate: float
    churn_rate: float
    total_customers: int
    new_customers: int
    active_customers: int
    last_updated: datetime

class SalesPipeline(BaseModel):
    stage: str
    count: int
    value: float
    conversion_rate: float
    last_updated: datetime

# Operations Models
class KPIData(BaseModel):
    employee_productivity: float
    customer_satisfaction: float
    order_fulfillment_time: float
    quality_score: float
    efficiency: float
    utilization: float
    last_updated: datetime

class TeamPerformance(BaseModel):
    department: str
    productivity: float
    efficiency: float
    quality: float
    target: float
    status: str  # "exceeding", "meeting", "below"
    last_updated: datetime

# Goals & Planning Models
class Goal(BaseModel):
    id: str
    title: str
    target: float
    current: float
    progress: float
    deadline: str
    status: str  # "on-track", "at-risk", "behind"
    category: str  # "revenue", "customers", "operations", "growth"
    last_updated: datetime

class Scenario(BaseModel):
    name: str
    probability: float
    revenue: float
    profit: float
    description: str
    last_updated: datetime

class ROIAnalysis(BaseModel):
    investment: float
    return_amount: float
    roi: float
    payback_period: float  # months
    description: str
    last_updated: datetime

class BusinessMetrics(BaseModel):
    business_id: str
    revenue: RevenueData
    costs: CostData
    profit: ProfitData
    market: MarketData
    cash_flow: Optional[CashFlowData] = None
    pl_data: Optional[PLData] = None
    break_even: Optional[BreakEvenData] = None
    customer_metrics: Optional[CustomerMetrics] = None
    sales_pipeline: Optional[List[SalesPipeline]] = None
    kpi_data: Optional[KPIData] = None
    team_performance: Optional[List[TeamPerformance]] = None
    goals: Optional[List[Goal]] = None
    scenarios: Optional[List[Scenario]] = None
    roi_analysis: Optional[List[ROIAnalysis]] = None
    created_at: datetime
    updated_at: datetime

class BusinessMetricsRequest(BaseModel):
    business_id: str
    revenue_data: Optional[RevenueData] = None
    cost_data: Optional[CostData] = None
    profit_data: Optional[ProfitData] = None
    market_data: Optional[MarketData] = None

class BusinessMetricsResponse(BaseModel):
    business_id: str
    metrics: BusinessMetrics
    status: str
    message: str
