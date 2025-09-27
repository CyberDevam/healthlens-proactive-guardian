import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Heart, 
  Zap, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Globe,
  Lock,
  ArrowRight,
  Star
} from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Advanced AI Technology",
      description: "Our machine learning algorithms analyze thousands of health data points to provide accurate risk predictions with 95% accuracy rate."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "HIPAA Compliant Security",
      description: "Your health data is protected with enterprise-grade encryption and follows strict HIPAA compliance standards."
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Personalized Insights",
      description: "Get tailored health recommendations based on your unique profile, lifestyle, and medical history."
    },
    {
      icon: <Zap className="h-8 w-8 text-warning" />,
      title: "Real-time Monitoring",
      description: "Continuous health monitoring with instant alerts and notifications for potential health risks."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users", icon: <Users className="h-6 w-6" /> },
    { number: "95%", label: "Accuracy Rate", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "50+", label: "Health Conditions", icon: <Heart className="h-6 w-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Globe className="h-6 w-6" /> }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Complete Health Assessment",
      description: "Answer questions about your health history, lifestyle, and current symptoms in our comprehensive assessment."
    },
    {
      step: "2", 
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze your data alongside medical research to identify potential health risks."
    },
    {
      step: "3",
      title: "Get Personalized Results",
      description: "Receive detailed insights about your health risks with specific recommendations for improvement."
    },
    {
      step: "4",
      title: "Connect with Doctors",
      description: "Schedule consultations with certified healthcare professionals to discuss your results and next steps."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Marketing Manager",
      text: "HealthLens detected my pre-diabetes risk early. Thanks to their recommendations, I've made lifestyle changes that have significantly improved my health.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      text: "As a healthcare professional, I'm impressed by the accuracy of HealthLens's AI predictions. It's a valuable tool for preventive medicine.",
      rating: 5
    },
    {
      name: "Jennifer R.",
      role: "Fitness Instructor",
      text: "The personalized recommendations helped me optimize my nutrition and exercise routine. The wearable integration is seamless and insightful.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing Preventive Healthcare
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            HealthLens uses cutting-edge AI technology to detect health risks early, 
            empowering you to take control of your health before problems arise.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <NavLink to="/assessment">Start Your Assessment</NavLink>
          </Button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that prevention is better than cure. HealthLens bridges the gap between 
            early detection and actionable insights, making advanced health analysis accessible 
            to everyone. Our goal is to shift healthcare from reactive treatment to proactive prevention.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose HealthLens?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines the latest in AI technology with medical expertise 
              to provide you with the most accurate and actionable health insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-health transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-white/90">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How HealthLens Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our simple 4-step process makes it easy to get comprehensive health insights 
              and take action to improve your wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people who've improved their health with HealthLens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-health transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Your Privacy & Security Matter
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We understand that health data is deeply personal. That's why we've built 
                HealthLens with the highest security standards and privacy protections.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-success mr-3" />
                  <span className="text-foreground">HIPAA compliant data encryption</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-success mr-3" />
                  <span className="text-foreground">Secure cloud infrastructure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-success mr-3" />
                  <span className="text-foreground">Regular security audits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-success mr-3" />
                  <span className="text-foreground">No data sharing without consent</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <Lock className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Bank-Level Security
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your health data is protected with the same level of security used by major financial institutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge className="bg-success/10 text-success">
                    <Award className="h-4 w-4 mr-1" />
                    HIPAA Certified
                  </Badge>
                  <Badge className="bg-primary/10 text-primary">
                    <Shield className="h-4 w-4 mr-1" />
                    SOC 2 Compliant
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who have already discovered potential health risks 
            and taken proactive steps to improve their wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <NavLink to="/assessment">
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <NavLink to="/dashboard">View Demo</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;