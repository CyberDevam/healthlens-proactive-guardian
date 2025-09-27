import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Download,
  Share,
  Calendar,
  Target,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Results = () => {
  const overallScore = 78;
  
  const riskAssessments = [
    {
      condition: "Type 2 Diabetes",
      risk: 25,
      level: "Low",
      factors: ["Family history", "BMI within normal range", "Regular exercise"],
      recommendations: ["Maintain current weight", "Continue regular exercise", "Monitor blood sugar annually"]
    },
    {
      condition: "Cardiovascular Disease",
      risk: 45,
      level: "Moderate",
      factors: ["Sedentary lifestyle", "Stress levels", "Diet quality"],
      recommendations: ["Increase physical activity", "Reduce sodium intake", "Stress management techniques"]
    },
    {
      condition: "Vitamin D Deficiency",
      risk: 70,
      level: "High",
      factors: ["Limited sun exposure", "Diet lacking vitamin D", "Indoor lifestyle"],
      recommendations: ["Vitamin D supplementation", "Increase outdoor activities", "Include fortified foods"]
    },
    {
      condition: "Sleep Disorders",
      risk: 35,
      level: "Low-Moderate",
      factors: ["Irregular sleep schedule", "Screen time before bed", "Caffeine intake"],
      recommendations: ["Establish sleep routine", "Limit evening screen time", "Reduce caffeine after 2 PM"]
    }
  ];

  const lifestyleRecommendations = [
    {
      category: "Exercise",
      icon: <Activity className="h-5 w-5" />,
      current: "2 days/week",
      target: "5 days/week",
      priority: "High",
      actions: ["Start with 20-minute walks", "Join a fitness class", "Use stairs instead of elevators"]
    },
    {
      category: "Nutrition",
      icon: <Heart className="h-5 w-5" />,
      current: "Average diet quality",
      target: "Mediterranean diet",
      priority: "Medium",
      actions: ["Increase vegetable intake", "Reduce processed foods", "Add omega-3 rich foods"]
    },
    {
      category: "Sleep",
      icon: <Brain className="h-5 w-5" />,
      current: "6.5 hours/night",
      target: "7-9 hours/night",
      priority: "High",
      actions: ["Set consistent bedtime", "Create relaxing routine", "Optimize sleep environment"]
    },
    {
      category: "Stress Management",
      icon: <Shield className="h-5 w-5" />,
      current: "High stress levels",
      target: "Managed stress",
      priority: "Medium",
      actions: ["Practice meditation", "Regular breaks", "Consider counseling"]
    }
  ];

  const getRiskColor = (risk: number) => {
    if (risk < 30) return "text-success";
    if (risk < 60) return "text-warning";
    return "text-destructive";
  };

  const getRiskBadgeColor = (level: string) => {
    if (level.includes("Low")) return "bg-success/10 text-success";
    if (level.includes("Moderate")) return "bg-warning/10 text-warning";
    return "bg-destructive/10 text-destructive";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "border-l-destructive";
      case "Medium": return "border-l-warning";
      case "Low": return "border-l-secondary";
      default: return "border-l-muted";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Health Risk Assessment</h1>
          <p className="text-muted-foreground">AI-powered analysis based on your health profile</p>
        </div>

        {/* Overall Health Score */}
        <Card className="mb-8 bg-gradient-primary text-white">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <div className="text-6xl font-bold mb-2">{overallScore}</div>
              <div className="text-xl opacity-90">Overall Health Score</div>
            </div>
            <Progress value={overallScore} className="mb-4 bg-white/20" />
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">Good Health Status</span>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto">
              Based on your assessment, you have a good overall health status with some areas for improvement. 
              Our AI analysis has identified specific recommendations to help you optimize your health.
            </p>
          </CardContent>
        </Card>

        {/* Risk Assessments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
              Health Risk Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {riskAssessments.map((assessment, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {assessment.condition}
                      </h3>
                      <Badge className={getRiskBadgeColor(assessment.level)}>
                        {assessment.level} Risk
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getRiskColor(assessment.risk)}`}>
                        {assessment.risk}%
                      </div>
                      <Progress value={assessment.risk} className="w-24 mt-2" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Risk Factors</h4>
                      <ul className="space-y-1">
                        {assessment.factors.map((factor, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2" />
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recommendations</h4>
                      <ul className="space-y-1">
                        {assessment.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Lifestyle Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-secondary" />
              Personalized Lifestyle Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {lifestyleRecommendations.map((rec, index) => (
                <div key={index} className={`border-l-4 ${getPriorityColor(rec.priority)} pl-6 py-4`}>
                  <div className="flex items-center mb-3">
                    <div className="text-primary mr-3">{rec.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground">{rec.category}</h3>
                    <Badge 
                      className={`ml-auto ${
                        rec.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                        rec.priority === 'Medium' ? 'bg-warning/10 text-warning' :
                        'bg-secondary/10 text-secondary'
                      }`}
                    >
                      {rec.priority} Priority
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Current:</span>
                      <span className="text-foreground">{rec.current}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Target:</span>
                      <span className="text-primary font-medium">{rec.target}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Action Steps:</h4>
                    <ul className="space-y-1">
                      {rec.actions.map((action, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <Zap className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          <Card className="flex-1 max-w-md">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Schedule Follow-up</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with a healthcare professional to discuss your results
              </p>
              <Button asChild className="w-full">
                <NavLink to="/doctors">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-1 max-w-md">
            <CardContent className="p-6 text-center">
              <Activity className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Track Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Monitor your health improvements with our dashboard
              </p>
              <Button asChild variant="secondary" className="w-full">
                <NavLink to="/dashboard">
                  View Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-1 max-w-md">
            <CardContent className="p-6 text-center">
              <Download className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Save Results</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download your detailed health report
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  PDF
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;