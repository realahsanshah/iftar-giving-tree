
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DonationForm } from "@/components/DonationForm";
import { Heart, Utensils, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-pattern py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair">
                  Feed the Fasting, <span className="text-primary">Nourish the Soul</span>
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  Join our mission to provide iftar meals to those in need during the blessed month of Ramadan. Your donation can make a meaningful impact.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/donate">
                    <Button size="lg" className="w-full sm:w-auto">
                      Donate Now
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
                <DonationForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-playfair">Why Donate for Iftars?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Utensils className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 font-playfair">Provide Nourishment</h3>
                <p className="text-muted-foreground text-center">
                  Each donation helps provide nutritious iftar meals to those who may otherwise go without during Ramadan.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 font-playfair">Build Community</h3>
                <p className="text-muted-foreground text-center">
                  Your contribution helps foster a sense of community and belonging among those breaking their fast together.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 font-playfair">Spiritual Reward</h3>
                <p className="text-muted-foreground text-center">
                  Feeding those who are fasting carries immense spiritual rewards, especially during the holy month of Ramadan.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-playfair">Our Impact So Far</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">10,000+</p>
                <p className="text-lg">Meals Provided</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold mb-2">15</p>
                <p className="text-lg">Communities Served</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold mb-2">500+</p>
                <p className="text-lg">Volunteers</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold mb-2">3,000+</p>
                <p className="text-lg">Donors</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/impact">
                <Button variant="secondary" size="lg">
                  See Our Full Impact
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Join Us in This Blessed Effort</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Your contribution, big or small, can make a significant difference in the lives of those breaking their fast during Ramadan.
            </p>
            <Link to="/donate">
              <Button size="lg">
                Donate Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
