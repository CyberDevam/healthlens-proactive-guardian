import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Stethoscope, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  ArrowRight,
  Heart,
  Activity,
  Smartphone
} from "lucide-react";
import heroImage from "@/assets/hero-health.jpg";

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your health data to identify potential risks early."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Preventive Care",
      description: "Shift from reactive to proactive healthcare with personalized risk predictions and recommendations."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-accent" />,
      title: "Doctor Connection",
      description: "Connect with certified healthcare professionals for follow-up consultations and expert advice."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Wearable Integration",
      description: "Sync data from your fitness trackers and smartwatches for comprehensive health monitoring."
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", icon: <TrendingUp className="h-5 w-5" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="h-5 w-5" /> },
    { number: "10K+", label: "Users Protected", icon: <Users className="h-5 w-5" /> },
    { number: "50+", label: "Health Conditions", icon: <Heart className="h-5 w-5" /> }
  ];

  const benefits = [
    "Early detection of diabetes, heart disease, and vitamin deficiencies",
    "Personalized lifestyle recommendations based on your unique profile",
    "24/7 health monitoring with real-time alerts and insights",
    "Seamless integration with popular fitness trackers and wearables",
    "Direct access to certified healthcare professionals",
    "Secure, HIPAA-compliant data protection and privacy"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-premium section-padding">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="container-premium relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight">
                Detect Health Risks
                <span className="block text-gradient bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">Before They Happen</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                AI-powered early detection system that analyzes your symptoms, lifestyle, and wearable data 
                to predict health risks and provide personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="premium" size="xl" className="text-lg px-8 shadow-glow">
                  <NavLink to="/assessment">
                    Start Health Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button asChild variant="glass" size="xl" className="text-lg px-8">
                  <NavLink to="/about">Learn More</NavLink>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in hover-float">
              <img
                src={heroImage} 
                alt="HealthLens AI Technology" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-premium">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-4">
              Comprehensive Health Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform combines multiple data sources to provide accurate, 
              actionable health insights tailored specifically for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift glass-card text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-premium">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
                Why Choose HealthLens?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our platform empowers you to take control of your health with advanced AI technology 
                and personalized insights that make a real difference.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 shadow-premium hover-glow">
              <div className="text-center">
                <Activity className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Start Your Health Journey Today
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of users who have already taken control of their health with HealthLens.
                </p>
                <Button asChild variant="premium" size="lg" className="w-full shadow-glow">
                  <NavLink to="/assessment">
                    Begin Free Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero-premium">
        <div className="max-w-4xl mx-auto text-center container-premium">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get started with your personalized health risk assessment in just 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="xl" className="shadow-glow">
              <NavLink to="/assessment">Start Assessment</NavLink>
            </Button>
            <Button asChild variant="glass" size="xl">
              <NavLink to="/dashboard">View Demo</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;