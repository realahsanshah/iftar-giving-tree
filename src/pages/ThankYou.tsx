
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Share2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface DonationData {
  amount: number;
  name: string;
  email: string;
  date: string;
}

const ThankYou = () => {
  const [donation, setDonation] = useState<DonationData | null>(null);
  const [mealCount, setMealCount] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const donationData = sessionStorage.getItem("donation");
    
    if (!donationData) {
      // If no donation data exists, redirect to donation page
      navigate("/donate");
      return;
    }
    
    try {
      const parsedData: DonationData = JSON.parse(donationData);
      setDonation(parsedData);
      
      // Calculate approximate number of meals (assuming $10 = 3 meals)
      const meals = Math.floor((parsedData.amount / 10) * 3);
      setMealCount(meals);
    } catch (error) {
      console.error("Error parsing donation data:", error);
      navigate("/donate");
    }
  }, [navigate]);
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "I just donated to Iftar Giving Tree!",
          text: `I provided ${mealCount} iftar meals to those in need. Join me in making a difference this Ramadan.`,
          url: window.location.origin,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open(
        `https://twitter.com/intent/tweet?text=I just provided ${mealCount} iftar meals through @IftarGivingTree! Join me in making a difference this Ramadan. &url=${window.location.origin}`,
        "_blank"
      );
    }
  };
  
  if (!donation) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4 font-playfair">Thank You for Your Donation!</h1>
            
            <p className="text-lg mb-6">
              Your generosity will help provide warm iftar meals to those in need during Ramadan.
            </p>
            
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4 font-playfair">Donation Summary</h2>
              
              <div className="space-y-2 mb-4">
                <p>
                  <span className="font-medium">Amount:</span> ${donation.amount.toFixed(2)}
                </p>
                <p>
                  <span className="font-medium">Date:</span> {new Date(donation.date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Impact:</span> Approximately {mealCount} iftar meals
                </p>
              </div>
              
              <p className="text-sm text-muted-foreground">
                A receipt has been sent to {donation.email}
              </p>
            </div>
            
            <div className="space-y-4">
              <Button onClick={handleShare} variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share Your Impact
              </Button>
              
              <div className="pt-4">
                <Link to="/">
                  <Button variant="link">Return to Homepage</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
