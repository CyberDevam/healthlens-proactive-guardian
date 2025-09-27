import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Heart, 
  Activity, 
  Brain, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    age: "",
    gender: "",
    height: "",
    weight: "",
    // Health History
    medicalHistory: [],
    familyHistory: [],
    medications: "",
    // Lifestyle
    exerciseFrequency: "",
    sleepHours: "",
    smokingStatus: "",
    alcoholConsumption: "",
    // Symptoms
    currentSymptoms: [],
    symptomDescription: "",
    // Wearables
    hasWearable: "",
    wearableType: ""
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const medicalConditions = [
    "Diabetes", "High Blood Pressure", "Heart Disease", "Asthma", 
    "Arthritis", "Depression", "Anxiety", "Thyroid Issues"
  ];

  const symptoms = [
    "Fatigue", "Headaches", "Chest Pain", "Shortness of Breath",
    "Dizziness", "Nausea", "Joint Pain", "Sleep Issues",
    "Mood Changes", "Weight Changes", "Digestive Issues", "Skin Changes"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <User className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Personal Information</CardTitle>
              <p className="text-muted-foreground">Let's start with some basic information about you</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleInputChange("gender", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Enter height in cm"
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter weight in kg"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-2xl">Medical History</CardTitle>
              <p className="text-muted-foreground">Help us understand your medical background</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Current Medical Conditions</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {medicalConditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition}
                        checked={formData.medicalHistory.includes(condition)}
                        onCheckedChange={(checked) => 
                          handleArrayChange("medicalHistory", condition, checked as boolean)
                        }
                      />
                      <Label htmlFor={condition} className="text-sm">{condition}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <Label className="text-base font-semibold">Family Medical History</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {medicalConditions.map((condition) => (
                    <div key={`family-${condition}`} className="flex items-center space-x-2">
                      <Checkbox
                        id={`family-${condition}`}
                        checked={formData.familyHistory.includes(condition)}
                        onCheckedChange={(checked) => 
                          handleArrayChange("familyHistory", condition, checked as boolean)
                        }
                      />
                      <Label htmlFor={`family-${condition}`} className="text-sm">{condition}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Current Medications</Label>
                <Textarea
                  id="medications"
                  placeholder="List any medications you're currently taking..."
                  value={formData.medications}
                  onChange={(e) => handleInputChange("medications", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <Activity className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-2xl">Lifestyle Habits</CardTitle>
              <p className="text-muted-foreground">Tell us about your daily habits and lifestyle</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Exercise Frequency</Label>
                <RadioGroup
                  value={formData.exerciseFrequency}
                  onValueChange={(value) => handleInputChange("exerciseFrequency", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="never" id="never" />
                    <Label htmlFor="never">Never</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rarely" id="rarely" />
                    <Label htmlFor="rarely">1-2 times per month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sometimes" id="sometimes" />
                    <Label htmlFor="sometimes">1-2 times per week</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="often" id="often" />
                    <Label htmlFor="often">3-4 times per week</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="daily" />
                    <Label htmlFor="daily">5+ times per week</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sleep">Average Sleep Hours</Label>
                  <Input
                    id="sleep"
                    type="number"
                    placeholder="Hours per night"
                    value={formData.sleepHours}
                    onChange={(e) => handleInputChange("sleepHours", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Smoking Status</Label>
                  <RadioGroup
                    value={formData.smokingStatus}
                    onValueChange={(value) => handleInputChange("smokingStatus", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="smoke-never" />
                      <Label htmlFor="smoke-never">Never</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="former" id="smoke-former" />
                      <Label htmlFor="smoke-former">Former smoker</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="current" id="smoke-current" />
                      <Label htmlFor="smoke-current">Current smoker</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <AlertCircle className="h-12 w-12 text-warning mx-auto mb-4" />
              <CardTitle className="text-2xl">Current Symptoms</CardTitle>
              <p className="text-muted-foreground">Let us know about any symptoms you're experiencing</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Select any symptoms you're currently experiencing</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {symptoms.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox
                        id={symptom}
                        checked={formData.currentSymptoms.includes(symptom)}
                        onCheckedChange={(checked) => 
                          handleArrayChange("currentSymptoms", symptom, checked as boolean)
                        }
                      />
                      <Label htmlFor={symptom} className="text-sm">{symptom}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="symptom-description">Describe your symptoms in detail</Label>
                <Textarea
                  id="symptom-description"
                  placeholder="Please describe when the symptoms started, their severity, and any patterns you've noticed..."
                  value={formData.symptomDescription}
                  onChange={(e) => handleInputChange("symptomDescription", e.target.value)}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Wearable Devices</CardTitle>
              <p className="text-muted-foreground">Connect your fitness trackers for enhanced analysis</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Do you use any wearable devices?</Label>
                <RadioGroup
                  value={formData.hasWearable}
                  onValueChange={(value) => handleInputChange("hasWearable", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="wearable-yes" />
                    <Label htmlFor="wearable-yes">Yes, I have a wearable device</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="wearable-no" />
                    <Label htmlFor="wearable-no">No, I don't use wearables</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {formData.hasWearable === "yes" && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Which type of wearable do you use?</Label>
                  <RadioGroup
                    value={formData.wearableType}
                    onValueChange={(value) => handleInputChange("wearableType", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="apple-watch" id="apple-watch" />
                      <Label htmlFor="apple-watch">Apple Watch</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fitbit" id="fitbit" />
                      <Label htmlFor="fitbit">Fitbit</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="garmin" id="garmin" />
                      <Label htmlFor="garmin">Garmin</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="samsung" id="samsung" />
                      <Label htmlFor="samsung">Samsung Galaxy Watch</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="wearable-other" />
                      <Label htmlFor="wearable-other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI will analyze your responses and generate a personalized health risk assessment. 
                  You'll receive detailed insights and recommendations within minutes.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Health Risk Assessment</h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
            <Progress value={progress} className="w-64" />
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex justify-center mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between max-w-2xl mx-auto">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          {currentStep < totalSteps ? (
            <Button onClick={nextStep} className="flex items-center">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button asChild className="flex items-center">
              <NavLink to="/results">
                <CheckCircle className="mr-2 h-4 w-4" />
                Complete Assessment
              </NavLink>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;