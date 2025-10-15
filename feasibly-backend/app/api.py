from fastapi import APIRouter, HTTPException
from .models import (
    AssessmentRequest, AssessmentResponse, 
    BusinessMetricsRequest, BusinessMetricsResponse,
    RevenueData, CostData, ProfitData, MarketData, BusinessMetrics,
    CashFlowData, PLData, BreakEvenData, CustomerMetrics, SalesPipeline,
    KPIData, TeamPerformance, Goal, Scenario, ROIAnalysis
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
        # Return comprehensive mock data for demo
        now = datetime.now()
        mock_metrics = BusinessMetrics(
            business_id=business_id,
            revenue=RevenueData(
                projected_revenue=650000.0,
                actual_revenue=585000.0,
                revenue_breakdown={"product_sales": 0.6, "services": 0.3, "subscription": 0.1},
                growth_rate=0.12,
                monthly_target=75000.0,
                monthly_actual=65000.0,
                last_updated=now
            ),
            costs=CostData(
                operating_costs=487500.0,
                cost_percentage=0.25,
                cost_breakdown={"personnel": 0.51, "operations": 0.26, "marketing": 0.15, "technology": 0.08},
                trend="decreasing",
                cost_reduction=8.0,
                last_updated=now
            ),
            profit=ProfitData(
                profit_margin=0.25,
                net_profit=162500.0,
                gross_profit=487500.0,
                profit_trend=[0.15, 0.18, 0.22, 0.25],
                last_updated=now
            ),
            market=MarketData(
                market_demand=0.75,
                demand_trend=[0.6, 0.65, 0.7, 0.75],
                market_size=1000000.0,
                competition_level="medium",
                market_share=0.08,
                last_updated=now
            ),
            cash_flow=CashFlowData(
                current_cash=45000.0,
                monthly_cash_flow=8500.0,
                burn_rate=12000.0,
                runway=3.75,
                last_updated=now
            ),
            pl_data=PLData(
                revenue=650000.0,
                expenses=487500.0,
                gross_profit=487500.0,
                net_profit=162500.0,
                profit_margin=0.25,
                last_updated=now
            ),
            break_even=BreakEvenData(
                fixed_costs=25000.0,
                variable_costs=15.0,
                price_per_unit=50.0,
                break_even_units=714.0,
                break_even_revenue=35714.0,
                last_updated=now
            ),
            customer_metrics=CustomerMetrics(
                cac=150.0,
                clv=345.0,
                clv_cac_ratio=2.3,
                retention_rate=0.78,
                churn_rate=0.22,
                total_customers=1250,
                new_customers=45,
                active_customers=975,
                last_updated=now
            ),
            sales_pipeline=[
                SalesPipeline(stage="Leads", count=120, value=18000.0, conversion_rate=100.0, last_updated=now),
                SalesPipeline(stage="Qualified", count=36, value=10800.0, conversion_rate=30.0, last_updated=now),
                SalesPipeline(stage="Proposal", count=18, value=7200.0, conversion_rate=50.0, last_updated=now),
                SalesPipeline(stage="Negotiation", count=9, value=4500.0, conversion_rate=50.0, last_updated=now),
                SalesPipeline(stage="Closed Won", count=4, value=2000.0, conversion_rate=44.0, last_updated=now)
            ],
            kpi_data=KPIData(
                employee_productivity=87.0,
                customer_satisfaction=4.2,
                order_fulfillment_time=2.5,
                quality_score=92.0,
                efficiency=78.0,
                utilization=85.0,
                last_updated=now
            ),
            team_performance=[
                TeamPerformance(department="Sales", productivity=95.0, efficiency=88.0, quality=92.0, target=90.0, status="exceeding", last_updated=now),
                TeamPerformance(department="Marketing", productivity=82.0, efficiency=85.0, quality=89.0, target=85.0, status="meeting", last_updated=now),
                TeamPerformance(department="Operations", productivity=78.0, efficiency=75.0, quality=88.0, target=80.0, status="below", last_updated=now),
                TeamPerformance(department="Customer Service", productivity=91.0, efficiency=92.0, quality=94.0, target=90.0, status="exceeding", last_updated=now)
            ],
            goals=[
                Goal(id="1", title="Monthly Revenue Target", target=75000.0, current=65000.0, progress=87.0, deadline="2024-01-31", status="on-track", category="revenue", last_updated=now),
                Goal(id="2", title="Customer Acquisition", target=100.0, current=75.0, progress=75.0, deadline="2024-02-15", status="at-risk", category="customers", last_updated=now),
                Goal(id="3", title="Cost Reduction", target=20.0, current=15.0, progress=75.0, deadline="2024-03-01", status="on-track", category="operations", last_updated=now),
                Goal(id="4", title="Market Share Growth", target=15.0, current=8.0, progress=53.0, deadline="2024-06-30", status="behind", category="growth", last_updated=now)
            ],
            scenarios=[
                Scenario(name="Optimistic", probability=25.0, revenue=900000.0, profit=225000.0, description="Strong market growth and successful product launches", last_updated=now),
                Scenario(name="Realistic", probability=50.0, revenue=750000.0, profit=150000.0, description="Steady growth with current market conditions", last_updated=now),
                Scenario(name="Pessimistic", probability=25.0, revenue=500000.0, profit=50000.0, description="Market downturn and increased competition", last_updated=now)
            ],
            roi_analysis=[
                ROIAnalysis(investment=50000.0, return_amount=125000.0, roi=150.0, payback_period=8.0, description="Marketing Campaign Q1", last_updated=now),
                ROIAnalysis(investment=25000.0, return_amount=75000.0, roi=200.0, payback_period=6.0, description="Sales Team Expansion", last_updated=now),
                ROIAnalysis(investment=15000.0, return_amount=30000.0, roi=100.0, payback_period=12.0, description="Technology Upgrade", last_updated=now)
            ],
            created_at=now,
            updated_at=now
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
