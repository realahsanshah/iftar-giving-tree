
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { HandHeart, DollarSign } from "lucide-react";

interface DonationFormProps {
  compact?: boolean;
  showTitle?: boolean;
}

export const DonationForm = ({ compact = false, showTitle = true }: DonationFormProps) => {
  const [amount, setAmount] = useState<number | string>("");
  const [customAmount, setCustomAmount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const presetAmounts = [10, 25, 50, 100];
  
  const handlePresetAmountClick = (value: number) => {
    setCustomAmount(false);
    setAmount(value);
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setAmount(value);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount) {
      toast({
        title: "Error",
        description: "Please select or enter a donation amount",
        variant: "destructive",
      });
      return;
    }
    
    if (!name) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      // Save donation info to session storage for the thank you page
      sessionStorage.setItem("donation", JSON.stringify({
        amount: Number(amount),
        name,
        email,
        date: new Date().toISOString(),
      }));
      
      navigate("/thank-you");
    }, 1500);
  };
  
  return (
    <Card className={`bg-card ${compact ? "w-full" : "w-full max-w-md mx-auto"}`}>
      {showTitle && (
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl font-playfair">
            <HandHeart className="h-6 w-6 text-primary" />
            Donate to Provide Iftars
          </CardTitle>
        </CardHeader>
      )}
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Choose Donation Amount
            </label>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
              {presetAmounts.map((preset) => (
                <Button
                  key={preset}
                  type="button"
                  variant={amount === preset ? "default" : "outline"}
                  className={`${
                    amount === preset ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => handlePresetAmountClick(preset)}
                >
                  ${preset}
                </Button>
              ))}
            </div>
            
            <div className="mt-2">
              <div className="flex items-center">
                <span className="bg-muted flex items-center justify-center h-10 w-10 rounded-l-md border border-r-0">
                  <DollarSign className="h-4 w-4" />
                </span>
                <Input
                  type="text"
                  inputMode="decimal"
                  placeholder="Custom amount"
                  className="rounded-l-none"
                  value={customAmount ? amount : ""}
                  onChange={(e) => {
                    setCustomAmount(true);
                    handleCustomAmountChange(e);
                  }}
                  onFocus={() => setCustomAmount(true)}
                />
              </div>
              
              <p className="text-xs text-muted-foreground mt-1">
                Each $10 provides approximately 3 iftar meals
              </p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={loading || !amount}
          >
            {loading ? "Processing..." : "Donate Now"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Your donation is secure and encrypted. Tax-deductible receipts will be emailed.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
