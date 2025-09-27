import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Watch, 
  Heart, 
  Activity, 
  Moon, 
  TrendingUp,
  Battery,
  Wifi,
  CheckCircle,
  Plus,
  Settings,
  Calendar,
  Zap
} from "lucide-react";

const Wearables = () => {
  const [connectedDevices, setConnectedDevices] = useState([
    {
      id: 1,
      name: "Apple Watch Series 9",
      type: "smartwatch",
      brand: "Apple",
      status: "connected",
      battery: 85,
      lastSync: "2 minutes ago",
      metrics: ["heart_rate", "steps", "sleep", "activity"]
    }
  ]);

  const availableDevices = [
    {
      name: "Fitbit Charge 6",
      brand: "Fitbit",
      type: "fitness_tracker",
      compatibility: "iOS & Android",
      features: ["Heart Rate", "Sleep Tracking", "GPS", "Stress Management"]
    },
    {
      name: "Samsung Galaxy Watch 6",
      brand: "Samsung", 
      type: "smartwatch",
      compatibility: "Android & iOS",
      features: ["Body Composition", "Sleep Coaching", "Heart Rate", "ECG"]
    },
    {
      name: "Garmin Vivosmart 5",
      brand: "Garmin",
      type: "fitness_tracker",
      compatibility: "iOS & Android",
      features: ["All-day Stress", "Body Battery", "Sleep Score", "Safe for Swimming"]
    },
    {
      name: "Oura Ring Gen3",
      brand: "Oura",
      type: "smart_ring",
      compatibility: "iOS & Android",
      features: ["Sleep Analysis", "Readiness Score", "Temperature Trends", "Activity Goals"]
    }
  ];

  const recentMetrics = [
    {
      metric: "Steps",
      value: "8,547",
      goal: "10,000",
      progress: 85,
      icon: <Activity className="h-5 w-5" />,
      trend: "+12%"
    },
    {
      metric: "Heart Rate",
      value: "72 bpm",
      goal: "60-100 bpm",
      progress: 100,
      icon: <Heart className="h-5 w-5" />,
      trend: "Normal"
    },
    {
      metric: "Sleep",
      value: "7h 23m",
      goal: "8h 0m",
      progress: 92,
      icon: <Moon className="h-5 w-5" />,
      trend: "+5%"
    },
    {
      metric: "Active Calories",
      value: "456",
      goal: "500",
      progress: 91,
      icon: <Zap className="h-5 w-5" />,
      trend: "+8%"
    }
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "smartwatch": return <Watch className="h-8 w-8" />;
      case "fitness_tracker": return <Activity className="h-8 w-8" />;
      case "smart_ring": return <div className="w-8 h-8 border-4 border-current rounded-full" />;
      default: return <Smartphone className="h-8 w-8" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected": return "bg-success/10 text-success";
      case "syncing": return "bg-warning/10 text-warning";
      case "disconnected": return "bg-destructive/10 text-destructive";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Wearable Device Integration</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect your fitness trackers and smartwatches to get comprehensive health insights 
            and enhance your AI-powered risk assessments.
          </p>
        </div>

        {/* Connected Devices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-success" />
              Connected Devices
            </CardTitle>
          </CardHeader>
          <CardContent>
            {connectedDevices.length > 0 ? (
              <div className="space-y-4">
                {connectedDevices.map((device) => (
                  <div key={device.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-primary">
                        {getDeviceIcon(device.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{device.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Last synced: {device.lastSync}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Battery className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{device.battery}%</span>
                      </div>
                      <Badge className={getStatusBadge(device.status)}>
                        <Wifi className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Watch className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No Devices Connected</h3>
                <p className="text-muted-foreground mb-4">
                  Connect your wearable devices to start tracking comprehensive health metrics.
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Device
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Metrics */}
        {connectedDevices.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Today's Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3 text-primary">
                      {metric.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{metric.metric}</h3>
                    <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground mb-3">Goal: {metric.goal}</div>
                    <Progress value={metric.progress} className="mb-2" />
                    <div className="flex items-center justify-center text-sm">
                      <TrendingUp className="h-3 w-3 text-success mr-1" />
                      <span className="text-success">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Available Devices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2 text-secondary" />
              Available Devices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {availableDevices.map((device, index) => (
                <Card key={index} className="hover:shadow-health transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-muted-foreground">
                      {getDeviceIcon(device.type)}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{device.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{device.compatibility}</p>
                    <div className="space-y-2 mb-4">
                      {device.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-accent" />
              Benefits of Wearable Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Continuous Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 tracking of vital signs and activity levels provides comprehensive health data for more accurate AI analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Enhanced Accuracy</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time biometric data improves the precision of health risk predictions and personalized recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Trend Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term data collection enables identification of patterns and trends in your health metrics over time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wearables;