import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Activity, 
  Brain, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Clock,
  Target,
  Zap,
  Shield,
  Bell
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const riskMetrics = [
    {
      title: "Diabetes Risk",
      value: 23,
      status: "low",
      icon: <Heart className="h-5 w-5" />,
      trend: "down",
      change: "-5%"
    },
    {
      title: "Heart Disease Risk", 
      value: 45,
      status: "medium",
      icon: <Activity className="h-5 w-5" />,
      trend: "stable",
      change: "0%"
    },
    {
      title: "Sleep Quality",
      value: 78,
      status: "good",
      icon: <Brain className="h-5 w-5" />,
      trend: "up",
      change: "+12%"
    },
    {
      title: "Overall Health Score",
      value: 82,
      status: "excellent",
      icon: <Shield className="h-5 w-5" />,
      trend: "up",
      change: "+8%"
    }
  ];

  const recentAlerts = [
    {
      type: "warning",
      title: "Elevated Heart Rate",
      message: "Your resting heart rate has been higher than usual for 3 days.",
      time: "2 hours ago",
      icon: <AlertTriangle className="h-4 w-4" />
    },
    {
      type: "success",
      title: "Sleep Goal Achieved",
      message: "Great job! You've met your sleep target for 7 consecutive days.",
      time: "1 day ago",
      icon: <CheckCircle className="h-4 w-4" />
    },
    {
      type: "info",
      title: "Health Check Reminder",
      message: "It's time for your monthly health assessment update.",
      time: "3 days ago",
      icon: <Calendar className="h-4 w-4" />
    }
  ];

  const recommendations = [
    {
      title: "Increase Physical Activity",
      description: "Aim for 30 minutes of moderate exercise, 5 days a week to improve cardiovascular health.",
      priority: "high",
      category: "Exercise"
    },
    {
      title: "Improve Sleep Hygiene",
      description: "Try to maintain a consistent sleep schedule and limit screen time before bed.",
      priority: "medium",
      category: "Sleep"
    },
    {
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water daily to support overall health.",
      priority: "low",
      category: "Nutrition"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      case "good": return "text-secondary";
      case "excellent": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "low": return "bg-success/10 text-success";
      case "medium": return "bg-warning/10 text-warning";
      case "high": return "bg-destructive/10 text-destructive";
      case "good": return "bg-secondary/10 text-secondary";
      case "excellent": return "bg-primary/10 text-primary";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-destructive";
      case "medium": return "border-l-warning";
      case "low": return "border-l-secondary";
      default: return "border-l-muted";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Health Dashboard</h1>
            <p className="text-muted-foreground">Monitor your health metrics and track your progress</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button asChild variant="outline">
              <NavLink to="/assessment">Update Assessment</NavLink>
            </Button>
            <Button asChild>
              <NavLink to="/doctors">Consult Doctor</NavLink>
            </Button>
          </div>
        </div>

        {/* Risk Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {riskMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-health transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={getStatusColor(metric.status)}>
                  {metric.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end space-x-2 mb-2">
                  <div className="text-3xl font-bold text-foreground">
                    {metric.value}
                    {metric.title.includes('Score') || metric.title.includes('Quality') ? '/100' : '%'}
                  </div>
                  <div className="flex items-center">
                    {metric.trend === 'up' && <TrendingUp className="h-4 w-4 text-success" />}
                    {metric.trend === 'down' && <TrendingDown className="h-4 w-4 text-success" />}
                    <span className={`text-sm ${metric.trend === 'stable' ? 'text-muted-foreground' : 'text-success'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <Progress value={metric.value} className="mb-2" />
                <Badge className={getStatusBadge(metric.status)}>
                  {metric.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Alerts */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-primary" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                      <div className={`p-1 rounded-full ${
                        alert.type === 'warning' ? 'bg-warning/10 text-warning' :
                        alert.type === 'success' ? 'bg-success/10 text-success' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {alert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {alert.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-accent" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <NavLink to="/assessment">
                    <Target className="h-4 w-4 mr-2" />
                    Take Health Assessment
                  </NavLink>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <NavLink to="/wearables">
                    <Activity className="h-4 w-4 mr-2" />
                    Sync Wearable Data
                  </NavLink>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <NavLink to="/doctors">
                    <Heart className="h-4 w-4 mr-2" />
                    Book Consultation
                  </NavLink>
                </Button>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-secondary" />
                  Today's Health Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-secondary p-4 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Stay Active Throughout the Day</h4>
                  <p className="text-sm opacity-90">
                    Take short 5-minute walking breaks every hour to improve circulation and reduce the risks associated with prolonged sitting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personalized Recommendations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-primary" />
              Personalized Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className={`border-l-4 ${getPriorityColor(rec.priority)} pl-4 py-3`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{rec.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {rec.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                    <Badge className={`ml-4 ${
                      rec.priority === 'high' ? 'bg-destructive/10 text-destructive' :
                      rec.priority === 'medium' ? 'bg-warning/10 text-warning' :
                      'bg-secondary/10 text-secondary'
                    }`}>
                      {rec.priority} priority
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;