from pydantic import BaseModel, Field
from typing import List, Dict

class CostItem(BaseModel):
    amount: int
    description: str

class AlternativeCity(BaseModel):
    name: str
    score: int
    reason: str

class AssessmentRequest(BaseModel):
    business_name: str = Field(..., example="My Awesome Startup")
    business_description: str = Field(..., example="A brief description of my business.")
    budget: int = Field(..., example=50000)
    city: str = Field(..., example="Berlin")
    business_type: str = Field(..., example="Tech")
    target_market: str = Field(..., example="Young professionals")
    team_size: str = Field(..., example="2-5")

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
