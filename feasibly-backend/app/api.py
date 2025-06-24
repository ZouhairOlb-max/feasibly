from fastapi import APIRouter
from .models import AssessmentRequest, AssessmentResponse

router = APIRouter()

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
            "rent": {"amount": 2500, "description": f"Office space in {request.city} Mitte"},
            "legal": {"amount": 5000, "description": "Business registration and legal fees"},
            "licenses": {"amount": 2000, "description": "Required business licenses"},
            "insurance": {"amount": 1500, "description": "Business liability insurance"},
            "equipment": {"amount": 15000, "description": "Computers, furniture, and office supplies"},
            "marketing": {"amount": 5000, "description": "Initial marketing and branding"},
            "contingency": {"amount": 35000, "description": "Emergency fund and unexpected costs"}
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
