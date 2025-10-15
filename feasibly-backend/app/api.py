from fastapi import APIRouter, HTTPException
from .models import (
    AssessmentRequest, AssessmentResponse, 
    BusinessMetricsRequest, BusinessMetricsResponse,
    RevenueData, CostData, ProfitData, MarketData, BusinessMetrics
)
from datetime import datetime
from typing import Dict

router = APIRouter()

# In-memory storage for demo purposes
# In production, this would be a database
business_metrics_storage: Dict[str, BusinessMetrics] = {}

@router.post("/analyze", response_model=AssessmentResponse)
def analyze_business(request: AssessmentRequest):
    """
    Analyzes the feasibility of a business idea based on user input.
    
    This is a mock implementation. In a real application, this endpoint
    would contain the core business logic to assess feasibility based on
    city-specific data, budget, business type, etc.
    """
    # For now, we return the same mock data used in the frontend
    # In the future, this logic will be dynamic based on the request
    
    # Example of accessing request data:
    # city = request.city
    # budget = request.budget
    
    mock_results = {
        "business_name": request.business_name,
        "city": request.city,
        "feasibility_score": 78,
        "status": "feasible",
        "total_cost": 85000,
        "monthly_costs": 3200,
        "cost_breakdown": {
            "rent": {"amount": 2500, "description": f"Office space in {request.city} Mitte", "reason": "Average rent for city center"},
            "legal": {"amount": 5000, "description": "Business registration and legal fees", "reason": "Standard legal fees for new businesses"},
            "licenses": {"amount": 2000, "description": "Required business licenses", "reason": "Mandatory licenses for operation"},
            "insurance": {"amount": 1500, "description": "Business liability insurance", "reason": "Recommended for all businesses"},
            "equipment": {"amount": 15000, "description": "Computers, furniture, and office supplies", "reason": "Initial setup and equipment purchase"},
            "marketing": {"amount": 5000, "description": "Initial marketing and branding", "reason": "To attract first customers"},
            "contingency": {"amount": 35000, "description": "Emergency fund and unexpected costs", "reason": "Buffer for unforeseen expenses"}
        },
        "required_documents": [
            "Business registration form (Gewerbeanmeldung)",
            "Tax registration (Steuernummer)",
            "VAT registration (Umsatzsteuer-ID)",
            "Commercial register entry (Handelsregister)",
            "Professional liability insurance certificate",
            "Lease agreement for office space",
            "Bank account for business",
            "Health insurance for employees"
        ],
        "recommendations": [
            "Consider starting with a smaller office space to reduce initial costs",
            f"Look into government grants for tech startups in {request.city}",
            "Network with local startup communities for cost-saving opportunities",
            "Consider co-working spaces as a more affordable alternative"
        ],
        "alternative_cities": [
            {"name": "Leipzig", "score": 85, "reason": "Lower costs, growing tech scene"},
            {"name": "Hamburg", "score": 72, "reason": "Good infrastructure, moderate costs"},
            {"name": "Dortmund", "score": 88, "reason": "Very affordable, strong support programs"}
        ]
    }
    return AssessmentResponse(**mock_results)

# Business Metrics Endpoints
@router.get("/metrics/{business_id}", response_model=BusinessMetricsResponse)
def get_business_metrics(business_id: str):
    """Get business metrics for a specific business ID."""
    if business_id not in business_metrics_storage:
        # Return mock data for demo
        mock_metrics = BusinessMetrics(
            business_id=business_id,
            revenue=RevenueData(
                projected_revenue=650000.0,
                actual_revenue=580000.0,
                revenue_breakdown={"product_sales": 0.65, "services": 0.35},
                growth_rate=0.12,
                last_updated=datetime.now()
            ),
            costs=CostData(
                operating_costs=145000.0,
                cost_percentage=0.25,
                cost_breakdown={"rent": 0.3, "salaries": 0.4, "utilities": 0.1, "marketing": 0.2},
                trend="decreasing",
                last_updated=datetime.now()
            ),
            profit=ProfitData(
                profit_margin=0.25,
                net_profit=145000.0,
                gross_profit=435000.0,
                profit_trend=[0.15, 0.18, 0.22, 0.25],
                last_updated=datetime.now()
            ),
            market=MarketData(
                market_demand=0.75,
                demand_trend=[0.6, 0.65, 0.7, 0.75],
                market_size=1000000.0,
                competition_level="medium",
                last_updated=datetime.now()
            ),
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        business_metrics_storage[business_id] = mock_metrics
    
    return BusinessMetricsResponse(
        business_id=business_id,
        metrics=business_metrics_storage[business_id],
        status="success",
        message="Metrics retrieved successfully"
    )

@router.post("/metrics", response_model=BusinessMetricsResponse)
def create_or_update_metrics(request: BusinessMetricsRequest):
    """Create or update business metrics."""
    now = datetime.now()
    
    if request.business_id in business_metrics_storage:
        # Update existing metrics
        existing = business_metrics_storage[request.business_id]
        
        if request.revenue_data:
            existing.revenue = request.revenue_data
        if request.cost_data:
            existing.costs = request.cost_data
        if request.profit_data:
            existing.profit = request.profit_data
        if request.market_data:
            existing.market = request.market_data
        
        existing.updated_at = now
        business_metrics_storage[request.business_id] = existing
    else:
        # Create new metrics with defaults
        new_metrics = BusinessMetrics(
            business_id=request.business_id,
            revenue=request.revenue_data or RevenueData(
                projected_revenue=0.0,
                revenue_breakdown={},
                growth_rate=0.0,
                last_updated=now
            ),
            costs=request.cost_data or CostData(
                operating_costs=0.0,
                cost_percentage=0.0,
                cost_breakdown={},
                trend="stable",
                last_updated=now
            ),
            profit=request.profit_data or ProfitData(
                profit_margin=0.0,
                net_profit=0.0,
                gross_profit=0.0,
                profit_trend=[],
                last_updated=now
            ),
            market=request.market_data or MarketData(
                market_demand=0.0,
                demand_trend=[],
                market_size=0.0,
                competition_level="low",
                last_updated=now
            ),
            created_at=now,
            updated_at=now
        )
        business_metrics_storage[request.business_id] = new_metrics
    
    return BusinessMetricsResponse(
        business_id=request.business_id,
        metrics=business_metrics_storage[request.business_id],
        status="success",
        message="Metrics updated successfully"
    )

@router.get("/metrics", response_model=Dict[str, BusinessMetrics])
def get_all_metrics():
    """Get all business metrics."""
    return business_metrics_storage
