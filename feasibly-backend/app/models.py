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
    last_updated: datetime

class CostData(BaseModel):
    operating_costs: float
    cost_percentage: float  # percentage of revenue
    cost_breakdown: Dict[str, float]  # e.g., {"rent": 0.3, "salaries": 0.4, "utilities": 0.1}
    trend: str  # "increasing", "decreasing", "stable"
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
    last_updated: datetime

class BusinessMetrics(BaseModel):
    business_id: str
    revenue: RevenueData
    costs: CostData
    profit: ProfitData
    market: MarketData
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
