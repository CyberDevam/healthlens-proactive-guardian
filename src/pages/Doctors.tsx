import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Clock, 
  Calendar, 
  Search,
  Filter,
  Video,
  Phone,
  MessageCircle,
  Award,
  Users,
  CheckCircle
} from "lucide-react";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const specialties = [
    "All Specialties",
    "General Medicine", 
    "Cardiology",
    "Endocrinology",
    "Nutrition",
    "Mental Health",
    "Sleep Medicine"
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Medicine",
      rating: 4.9,
      reviews: 234,
      experience: "15 years",
      location: "New York, NY",
      availability: "Available today",
      consultationFee: 150,
      image: "/placeholder-doctor-1.jpg",
      verified: true,
      languages: ["English", "Spanish"],
      consultationTypes: ["video", "phone", "chat"],
      bio: "Experienced physician specializing in preventive care and chronic disease management."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      rating: 4.8,
      reviews: 189,
      experience: "12 years",
      location: "Los Angeles, CA",
      availability: "Next available: Tomorrow",
      consultationFee: 200,
      image: "/placeholder-doctor-2.jpg",
      verified: true,
      languages: ["English", "Mandarin"],
      consultationTypes: ["video", "phone"],
      bio: "Board-certified cardiologist with expertise in heart disease prevention and treatment."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Endocrinology",
      rating: 4.9,
      reviews: 156,
      experience: "10 years",
      location: "Chicago, IL",
      availability: "Available in 2 hours",
      consultationFee: 180,
      image: "/placeholder-doctor-3.jpg",
      verified: true,
      languages: ["English", "Spanish"],
      consultationTypes: ["video", "chat"],
      bio: "Specialist in diabetes management and metabolic disorders with focus on lifestyle medicine."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Mental Health",
      rating: 4.7,
      reviews: 298,
      experience: "18 years",
      location: "Boston, MA",
      availability: "Available today",
      consultationFee: 160,
      image: "/placeholder-doctor-4.jpg",
      verified: true,
      languages: ["English"],
      consultationTypes: ["video", "phone", "chat"],
      bio: "Licensed psychiatrist specializing in anxiety, depression, and stress management."
    },
    {
      id: 5,
      name: "Dr. Lisa Kim",
      specialty: "Nutrition",
      rating: 4.8,
      reviews: 143,
      experience: "8 years",
      location: "Seattle, WA",
      availability: "Available today",
      consultationFee: 120,
      image: "/placeholder-doctor-5.jpg",
      verified: true,
      languages: ["English", "Korean"],
      consultationTypes: ["video", "chat"],
      bio: "Registered dietitian and nutritionist focusing on personalized meal planning and weight management."
    },
    {
      id: 6,
      name: "Dr. Robert Davis",
      specialty: "Sleep Medicine",
      rating: 4.9,
      reviews: 167,
      experience: "14 years",
      location: "Miami, FL",
      availability: "Next available: Tomorrow",
      consultationFee: 190,
      image: "/placeholder-doctor-6.jpg",
      verified: true,
      languages: ["English"],
      consultationTypes: ["video", "phone"],
      bio: "Sleep specialist helping patients overcome insomnia, sleep apnea, and other sleep disorders."
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || selectedSpecialty === "All Specialties" ||
                            doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const getConsultationIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="h-4 w-4" />;
      case "phone": return <Phone className="h-4 w-4" />;
      case "chat": return <MessageCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Connect with Healthcare Professionals</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consult with certified doctors and specialists to discuss your health assessment results 
            and get personalized medical advice.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search doctors by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredDoctors.length} doctors {selectedSpecialty !== "all" && selectedSpecialty !== "All Specialties" && `in ${selectedSpecialty}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-health transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={doctor.image} alt={doctor.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {doctor.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-success p-1 rounded-full">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{doctor.name}</h3>
                        <p className="text-secondary font-medium">{doctor.specialty}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">${doctor.consultationFee}</div>
                        <div className="text-sm text-muted-foreground">per consultation</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-warning mr-1" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span className="ml-1">({doctor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        <span>{doctor.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-success font-medium">{doctor.availability}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{doctor.bio}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {doctor.consultationTypes.map((type) => (
                          <Badge key={type} variant="outline" className="flex items-center gap-1">
                            {getConsultationIcon(type)}
                            <span className="capitalize">{type}</span>
                          </Badge>
                        ))}
                      </div>
                      
                      <Button size="sm" className="ml-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>Languages: {doctor.languages.join(', ')}</span>
                        </div>
                        {doctor.verified && (
                          <Badge className="bg-success/10 text-success">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Notice */}
        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <div className="bg-destructive/10 p-2 rounded-full">
                <Phone className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Medical Emergency?</h3>
                <p className="text-muted-foreground mb-3">
                  If you're experiencing a medical emergency, please call emergency services immediately 
                  or visit your nearest emergency room. This platform is for non-emergency consultations only.
                </p>
                <div className="flex gap-4">
                  <Button variant="destructive" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 911
                  </Button>
                  <Button variant="outline" size="sm">
                    Find Emergency Room
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Doctors;