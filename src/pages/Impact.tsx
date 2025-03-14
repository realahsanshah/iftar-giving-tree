
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const impactData = [
  { year: '2018', meals: 500 },
  { year: '2019', meals: 1200 },
  { year: '2020', meals: 2300 },
  { year: '2021', meals: 3500 },
  { year: '2022', meals: 5000 },
  { year: '2023', meals: 8000 },
  { year: '2024', meals: 10000 },
];

const testimonialsData = [
  {
    id: 1,
    name: "Aisha K.",
    location: "Chicago",
    testimonial: "The iftar meals provided by the Giving Tree have been a blessing for my family during Ramadan. As a single mother of three, I struggle to put food on the table, especially during this holy month. The warm meals have not only nourished our bodies but also given us a sense of community and support."
  },
  {
    id: 2,
    name: "Mohammed S.",
    location: "Houston",
    testimonial: "I'm an elderly man living alone, and the volunteers from Iftar Giving Tree have made me feel remembered and valued. They don't just drop off food; they take time to sit and break bread with me. This companionship during Ramadan has lifted my spirits immensely."
  },
  {
    id: 3,
    name: "Fatima H.",
    location: "New York",
    testimonial: "As refugees new to this country, my family and I were worried about how to observe Ramadan properly. The Iftar Giving Tree not only provided us with meals but also connected us with the local Muslim community. Their support has helped us feel at home during this sacred time."
  }
];

const Impact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 font-playfair">Our Impact</h1>
              <p className="text-muted-foreground mb-6">
                Through the generosity of our donors and the dedication of our volunteers, we've made a significant difference in communities during Ramadan.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center font-playfair">Meals Provided Over the Years</h2>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={impactData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="meals" fill="hsl(var(--primary))" name="Meals Provided" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center font-playfair">Our Reach</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-4xl font-bold text-primary mb-1">15</p>
                      <p className="text-sm text-muted-foreground">Communities</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-4xl font-bold text-primary mb-1">500+</p>
                      <p className="text-sm text-muted-foreground">Volunteers</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-4xl font-bold text-primary mb-1">3,000+</p>
                      <p className="text-sm text-muted-foreground">Donors</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-4xl font-bold text-primary mb-1">25</p>
                      <p className="text-sm text-muted-foreground">Partners</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center font-playfair">Stories of Impact</h2>
                <Tabs defaultValue="1">
                  <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6">
                    <TabsTrigger value="1">Aisha</TabsTrigger>
                    <TabsTrigger value="2">Mohammed</TabsTrigger>
                    <TabsTrigger value="3">Fatima</TabsTrigger>
                  </TabsList>
                  
                  {testimonialsData.map((testimonial) => (
                    <TabsContent key={testimonial.id} value={testimonial.id.toString()} className="bg-muted p-6 rounded-lg">
                      <blockquote className="italic text-muted-foreground">
                        "{testimonial.testimonial}"
                      </blockquote>
                      <p className="mt-4 font-medium">
                        {testimonial.name}, {testimonial.location}
                      </p>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
              
              <div className="bg-primary/10 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-4 font-playfair">Help Us Grow Our Impact</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  With your support, we can continue to expand our reach and ensure more people have access to warm iftar meals during Ramadan.
                </p>
                <Link to="/donate">
                  <Button size="lg">Donate Today</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impact;
