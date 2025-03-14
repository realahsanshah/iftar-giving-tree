
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-center font-playfair">About The Iftar Giving Tree</h1>
              <p className="text-muted-foreground text-center mb-6">
                Providing meals, building community, and sharing blessings during Ramadan
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-playfair">Our Mission</h2>
                <p className="text-muted-foreground">
                  The Iftar Giving Tree was founded with a simple yet powerful mission: to ensure that no one goes hungry during the blessed month of Ramadan. We believe that the spirit of this holy month is about community, compassion, and care for those in need.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-playfair">How We Started</h2>
                <p className="text-muted-foreground mb-4">
                  Our initiative began in 2018 when a small group of friends noticed that many in their community were struggling to provide iftar meals for their families. What started as a local effort to provide meals for 50 families has grown into an organization that serves thousands across multiple communities.
                </p>
                <p className="text-muted-foreground">
                  The name "Iftar Giving Tree" symbolizes how a single act of kindness, like a seed, can grow into something that nourishes and sustains many.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-playfair">Our Impact</h2>
                <p className="text-muted-foreground mb-4">
                  Since our inception, we have:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provided over 10,000 iftar meals</li>
                  <li>Served communities in 15 different locations</li>
                  <li>Built a network of 500+ dedicated volunteers</li>
                  <li>Partnered with 25 local restaurants and food suppliers</li>
                  <li>Received support from more than 3,000 donors worldwide</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-playfair">Our Values</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-medium mb-1">Compassion</h3>
                    <p className="text-sm text-muted-foreground">
                      We approach our work with empathy and care for those we serve.
                    </p>
                  </li>
                  
                  <li className="p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-medium mb-1">Community</h3>
                    <p className="text-sm text-muted-foreground">
                      We believe in the power of people coming together to support one another.
                    </p>
                  </li>
                  
                  <li className="p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-medium mb-1">Dignity</h3>
                    <p className="text-sm text-muted-foreground">
                      We ensure that all our services are provided with respect for those we serve.
                    </p>
                  </li>
                  
                  <li className="p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-medium mb-1">Transparency</h3>
                    <p className="text-sm text-muted-foreground">
                      We are committed to openness in our operations and use of funds.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-playfair">Join Our Cause</h2>
                <p className="text-muted-foreground mb-6">
                  There are many ways to be part of our mission to provide iftar meals to those in need. Whether through donation, volunteering, or spreading awareness, every contribution helps make a difference.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/donate">
                    <Button>Donate Now</Button>
                  </Link>
                  <Button variant="outline">Volunteer With Us</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
