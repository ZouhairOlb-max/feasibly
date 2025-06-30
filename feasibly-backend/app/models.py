from pydantic import BaseModel, Field
from typing import List, Dict

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
