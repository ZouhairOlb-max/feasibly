# Business Feasibility Dashboard

## Overview

The Business Feasibility Dashboard is a comprehensive business tracking hub that allows entrepreneurs to monitor all aspects of their business in one centralized location. The dashboard provides real-time insights into revenue, costs, profit margins, market demand, and operational metrics.

## Features

### Dashboard Tabs

1. **Overview** - Complete business metrics overview
2. **Revenue** - Revenue tracking and analysis
3. **Costs** - Operating costs and cost analysis
4. **Profit** - Profit margins and profitability metrics
5. **Market** - Market demand and competition analysis
6. **Operations** - Team performance and operational metrics

### Key Components

#### Revenue Tracking
- **Projected Revenue Card**: Shows projected revenue with growth indicators
- **Revenue Breakdown**: Pie chart showing revenue sources (products vs services)
- **Revenue & Expenses**: Line chart tracking revenue trends over time

#### Cost Management
- **Operating Costs**: Percentage of revenue spent on operations
- **Cost Analysis**: Scatter plot showing cost correlation trends

#### Profit Analysis
- **Profit Margin**: Bar chart showing quarterly profit margins
- **Market Demand**: Bar chart tracking market demand trends

### API Endpoints

#### Business Metrics
- `GET /api/metrics/{business_id}` - Get business metrics
- `POST /api/metrics` - Create or update business metrics
- `GET /api/metrics` - Get all business metrics

#### Data Models
- **RevenueData**: Projected revenue, actual revenue, breakdown, growth rate
- **CostData**: Operating costs, cost percentage, breakdown, trend
- **ProfitData**: Profit margin, net profit, gross profit, trends
- **MarketData**: Market demand, demand trends, market size, competition

## Getting Started

### Backend Setup
```bash
cd feasibly-backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup
```bash
cd feasibly-ui
npm install
npm run dev
```

### Access the Dashboard
1. Navigate to `http://localhost:3000`
2. Click "Open Dashboard" to access the business tracking hub
3. Use the tab navigation to explore different business metrics

## Architecture

### Frontend
- **Next.js 14** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Custom hooks** for data management

### Backend
- **FastAPI** with Python
- **Pydantic** for data validation
- **In-memory storage** for demo (easily replaceable with database)

### Data Flow
1. Dashboard components fetch data using `useBusinessMetrics` hook
2. Hook makes API calls to FastAPI backend
3. Backend returns structured business metrics
4. Components render data with loading states and error handling

## Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Real-time data updates
- Advanced charting library (Chart.js/D3.js)
- User authentication and multi-business support
- Data export functionality
- Automated reporting
- Integration with external business tools

## Demo Data

The dashboard comes with realistic demo data including:
- $650,000 projected revenue with 12% growth
- 25% operating costs with decreasing trend
- 25% profit margin with positive trend
- 75% market demand with increasing trend
- Detailed cost breakdowns and revenue sources
