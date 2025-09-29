import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Play, Users, Target, Phone, DollarSign, Shield, Award, Heart, Brain, Activity, Smartphone, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Landing/Title
    {
      title: "HealthLens",
      subtitle: "Proactive Health Guardian",
      content: (
        <div className="text-center space-y-8">
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-8">
            <Heart className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gradient mb-4">HealthLens</h1>
          <p className="text-3xl text-muted-foreground">Your Proactive Health Guardian</p>
          <div className="flex justify-center space-x-4 mt-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">AI-Powered</Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">Preventive Care</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Wearable Integration</Badge>
          </div>
        </div>
      )
    },
    
    // Slide 2: Introduction
    {
      title: "Introduction",
      subtitle: "Revolutionizing Preventive Healthcare",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">The Problem</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-warning mr-2" />Reactive healthcare approach</li>
                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-warning mr-2" />Late disease detection</li>
                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-warning mr-2" />Disconnected health data</li>
                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-warning mr-2" />Limited preventive measures</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">Our Solution</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-success mr-2" />Proactive health monitoring</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-success mr-2" />AI-powered risk assessment</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-success mr-2" />Integrated wearable data</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-success mr-2" />Personalized recommendations</li>
              </ul>
            </div>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-xl text-center font-medium">
              "HealthLens transforms healthcare from reactive treatment to proactive prevention through intelligent monitoring and personalized insights."
            </p>
          </div>
        </div>
      )
    },

    // Slide 3: Literature Review
    {
      title: "Literature Review",
      subtitle: "Research Foundation & Market Analysis",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Healthcare Statistics</h3>
              <ul className="space-y-2">
                <li>• 80% of chronic diseases are preventable</li>
                <li>• Preventive care reduces costs by 40%</li>
                <li>• Early detection improves outcomes by 85%</li>
                <li>• Wearables increase health awareness by 60%</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Technology Trends</h3>
              <ul className="space-y-2">
                <li>• AI in healthcare growing at 45% CAGR</li>
                <li>• 1.1B wearable devices by 2025</li>
                <li>• Telemedicine adoption increased 3800%</li>
                <li>• Digital health investment: $29.1B in 2022</li>
              </ul>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Research Insights</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">65%</div>
                <p className="text-sm">Prefer preventive care</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">78%</div>
                <p className="text-sm">Use health apps</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">92%</div>
                <p className="text-sm">Want personalized insights</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: About HealthLens
    {
      title: "About HealthLens",
      subtitle: "Comprehensive Health Ecosystem",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground">
              HealthLens is an AI-powered health monitoring platform that provides proactive health insights through continuous monitoring, risk assessment, and personalized recommendations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 hover-lift">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Intelligence</h3>
              <p>Advanced machine learning algorithms analyze your health patterns and predict potential risks before they become serious.</p>
            </Card>
            <Card className="p-6 hover-lift">
              <Activity className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p>Continuous health tracking through wearables and manual inputs to maintain comprehensive health records.</p>
            </Card>
            <Card className="p-6 hover-lift">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p>Tailored recommendations based on your unique health profile, lifestyle, and medical history.</p>
            </Card>
            <Card className="p-6 hover-lift">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preventive Focus</h3>
              <p>Emphasis on prevention rather than treatment, helping you maintain optimal health proactively.</p>
            </Card>
          </div>
        </div>
      )
    },

    // Slide 5: Description & Features
    {
      title: "Product Description",
      subtitle: "Core Features & Capabilities",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Health Assessment</h3>
              <p className="text-sm">Comprehensive risk evaluation with AI-powered analysis</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Dashboard Analytics</h3>
              <p className="text-sm">Real-time insights and personalized health metrics</p>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Wearable Integration</h3>
              <p className="text-sm">Seamless connectivity with popular fitness devices</p>
            </Card>
          </div>
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>✓ AI-powered risk assessment</li>
                <li>✓ Real-time health monitoring</li>
                <li>✓ Personalized recommendations</li>
                <li>✓ Doctor consultation booking</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Wearable device integration</li>
                <li>✓ Health progress tracking</li>
                <li>✓ Emergency alert system</li>
                <li>✓ Secure data management</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: How It Works
    {
      title: "How HealthLens Works",
      subtitle: "Simple 4-Step Process",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">1</div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-sm">Complete health questionnaire</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">2</div>
              <h3 className="font-semibold mb-2">Integration</h3>
              <p className="text-sm">Connect wearable devices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">3</div>
              <h3 className="font-semibold mb-2">Analysis</h3>
              <p className="text-sm">AI processes your data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">4</div>
              <h3 className="font-semibold mb-2">Action</h3>
              <p className="text-sm">Receive personalized insights</p>
            </div>
          </div>
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                <ul className="text-sm space-y-1">
                  <li>• React Native (Mobile)</li>
                  <li>• React.js (Web)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Backend</h4>
                <ul className="text-sm space-y-1">
                  <li>• Node.js/Express</li>
                  <li>• Python (AI/ML)</li>
                  <li>• PostgreSQL</li>
                  <li>• Redis Cache</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">AI/ML</h4>
                <ul className="text-sm space-y-1">
                  <li>• TensorFlow/PyTorch</li>
                  <li>• Scikit-learn</li>
                  <li>• Natural Language Processing</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      )
    },

    // Slide 7: Advantages & Limitations
    {
      title: "Advantages & Limitations",
      subtitle: "Comprehensive Analysis",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <Card className="p-6 border-success/20">
              <h3 className="text-2xl font-semibold text-success mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Advantages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>Early disease detection and prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>Personalized health recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>Reduced healthcare costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>Improved quality of life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>24/7 health monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>Data-driven insights</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-warning/20">
              <h3 className="text-2xl font-semibold text-warning mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Limitations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-warning mr-2 mt-1 flex-shrink-0" />
                  <span>Requires consistent user engagement</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-warning mr-2 mt-1 flex-shrink-0" />
                  <span>Initial setup complexity</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-warning mr-2 mt-1 flex-shrink-0" />
                  <span>Privacy concerns with health data</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-warning mr-2 mt-1 flex-shrink-0" />
                  <span>Technology dependence</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-warning mr-2 mt-1 flex-shrink-0" />
                  <span>Potential for false positives</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-warning mr-2 mt-1 flex-shrink-0" />
                  <span>Not a replacement for professional medical advice</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <Card className="p-6 bg-muted/20">
            <h3 className="text-xl font-semibold mb-4">Mitigation Strategies</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• Gamification to increase engagement</li>
                <li>• Simplified onboarding process</li>
                <li>• End-to-end encryption for data security</li>
              </ul>
              <ul className="space-y-2">
                <li>• Offline functionality for key features</li>
                <li>• AI model continuous improvement</li>
                <li>• Clear disclaimers and medical referrals</li>
              </ul>
            </div>
          </Card>
        </div>
      )
    },

    // Slide 8: Target Audience
    {
      title: "Target Audience",
      subtitle: "Market Segmentation & User Personas",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-lift">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Health-Conscious Adults</h3>
              <div className="text-sm text-muted-foreground mb-3">Age: 25-55</div>
              <ul className="text-sm space-y-1">
                <li>• Preventive healthcare focus</li>
                <li>• Tech-savvy professionals</li>
                <li>• Regular exercise routine</li>
                <li>• Disposable income for health</li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <Heart className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Chronic Disease Patients</h3>
              <div className="text-sm text-muted-foreground mb-3">Age: 40-70</div>
              <ul className="text-sm space-y-1">
                <li>• Diabetes, hypertension</li>
                <li>• Need continuous monitoring</li>
                <li>• High healthcare engagement</li>
                <li>• Insurance coverage</li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <TrendingUp className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fitness Enthusiasts</h3>
              <div className="text-sm text-muted-foreground mb-3">Age: 20-45</div>
              <ul className="text-sm space-y-1">
                <li>• Performance optimization</li>
                <li>• Data-driven approach</li>
                <li>• Wearable device users</li>
                <li>• Social sharing</li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Market Size & Potential</h3>
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500M+</div>
                <p className="text-sm">Global target users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">$350B</div>
                <p className="text-sm">Digital health market</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">45%</div>
                <p className="text-sm">Annual growth rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning">85%</div>
                <p className="text-sm">Smartphone penetration</p>
              </div>
            </div>
          </div>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Geographic Focus</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-primary">Primary Markets</h4>
                <ul className="text-sm space-y-1">
                  <li>• United States</li>
                  <li>• Europe (UK, Germany)</li>
                  <li>• India (Urban centers)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Secondary Markets</h4>
                <ul className="text-sm space-y-1">
                  <li>• Canada</li>
                  <li>• Australia</li>
                  <li>• Singapore</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent">Future Expansion</h4>
                <ul className="text-sm space-y-1">
                  <li>• Latin America</li>
                  <li>• Southeast Asia</li>
                  <li>• Middle East</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      )
    },

    // Slide 9: Cost Estimation
    {
      title: "Cost Estimation",
      subtitle: "Development & Implementation Budget (INR)",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Development Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>App Development (iOS + Android + Web)</span>
                  <span className="font-semibold">₹25-42 lakh</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Model Development & Training</span>
                  <span className="font-semibold">₹33-58 lakh</span>
                </div>
                <div className="flex justify-between">
                  <span>Wearable Integration & APIs</span>
                  <span className="font-semibold">₹8-16 lakh</span>
                </div>
                <div className="flex justify-between">
                  <span>UI/UX Design</span>
                  <span className="font-semibold">₹8-12 lakh</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Operational Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Data Security & Compliance</span>
                  <span className="font-semibold">₹12-21 lakh</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing & Branding</span>
                  <span className="font-semibold">₹16-25 lakh</span>
                </div>
                <div className="flex justify-between">
                  <span>Testing & Quality Assurance</span>
                  <span className="font-semibold">₹8-12 lakh</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Management & Misc</span>
                  <span className="font-semibold">₹8-12 lakh</span>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Total MVP Cost Estimation</h3>
              <div className="text-5xl font-bold text-gradient mb-4">₹1.1 - 1.9 Crore</div>
              <p className="text-lg text-muted-foreground">Depending on scope and team size</p>
            </div>
          </Card>
          
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold">Phase 1 (MVP)</h4>
              <p className="text-2xl font-bold text-primary">₹60-80L</p>
              <p className="text-sm text-muted-foreground">6-8 months</p>
            </Card>
            <Card className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
              <h4 className="font-semibold">Phase 2 (Scale)</h4>
              <p className="text-2xl font-bold text-secondary">₹40-60L</p>
              <p className="text-sm text-muted-foreground">4-6 months</p>
            </Card>
            <Card className="p-4 text-center">
              <Award className="w-8 h-8 text-accent mx-auto mb-2" />
              <h4 className="font-semibold">Phase 3 (Enterprise)</h4>
              <p className="text-2xl font-bold text-accent">₹50-70L</p>
              <p className="text-sm text-muted-foreground">6-8 months</p>
            </Card>
          </div>
        </div>
      )
    },

    // Slide 10: Contact Information
    {
      title: "Contact Information",
      subtitle: "Let's Build the Future of Healthcare Together",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gradient mb-4">Ready to Transform Healthcare?</h3>
            <p className="text-xl text-muted-foreground">Get in touch to discuss partnership opportunities</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-primary mb-6">Project Team</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">HT</span>
                  </div>
                  <div>
                    <div className="font-semibold">HealthLens Team</div>
                    <div className="text-sm text-muted-foreground">Product Development</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>+91 XXXXX XXXXX</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>contact@healthlens.app</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-secondary mb-6">Business Inquiries</h3>
              <div className="space-y-4">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Investment Opportunities</h4>
                  <p className="text-sm">Looking for strategic partners and investors</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Healthcare Partnerships</h4>
                  <p className="text-sm">Collaborating with hospitals and clinics</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Technology Integration</h4>
                  <p className="text-sm">API partnerships with wearable manufacturers</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 text-center">
            <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">1</div>
                <h4 className="font-semibold">Schedule Demo</h4>
                <p className="text-sm text-muted-foreground">See HealthLens in action</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">2</div>
                <h4 className="font-semibold">Discuss Requirements</h4>
                <p className="text-sm text-muted-foreground">Customize for your needs</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">3</div>
                <h4 className="font-semibold">Start Development</h4>
                <p className="text-sm text-muted-foreground">Begin the journey together</p>
              </div>
            </div>
          </Card>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Heart className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-gradient">HealthLens Presentation</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <Button variant="outline" size="sm" onClick={() => window.history.back()}>
              <Home className="w-4 h-4 mr-2" />
              Back to App
            </Button>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-xl min-h-[600px] p-12">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-2">{slides[currentSlide].title}</h2>
            <p className="text-xl text-muted-foreground">{slides[currentSlide].subtitle}</p>
          </div>
          
          <div className="mb-8">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Navigation */}
      <footer className="bg-white border-t border-border p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Button 
            variant="outline" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;