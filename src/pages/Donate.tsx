
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DonationForm } from "@/components/DonationForm";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Donate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2 font-playfair">Support Our Iftar Program</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Your generous donation will help provide iftar meals to those in need during Ramadan. Every contribution makes a difference.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <DonationForm />
              
              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-2 font-playfair">Where Your Money Goes</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>$10 provides iftar for 3 individuals</li>
                  <li>$25 provides iftar for a small family</li>
                  <li>$50 helps feed 15 people breaking their fast</li>
                  <li>$100 sponsors a community iftar for 30 people</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-playfair">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is my donation tax-deductible?</AccordionTrigger>
                    <AccordionContent>
                      Yes, your donation is tax-deductible. After donating, you'll receive a receipt via email that you can use for tax purposes.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Where are the iftar meals distributed?</AccordionTrigger>
                    <AccordionContent>
                      Iftar meals are distributed in local communities, refugee centers, mosques, and to families in need across various locations in the country.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I donate on behalf of someone else?</AccordionTrigger>
                    <AccordionContent>
                      Absolutely! You can make a donation in honor or memory of someone. Just include their name in the notes section during checkout.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we use industry-standard encryption to protect your payment information. We do not store your credit card details on our servers.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Can I set up a recurring donation?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can set up a monthly donation by selecting the "Make this a monthly donation" option during checkout.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-playfair">Other Ways to Contribute</h2>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Volunteer Your Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Help prepare and distribute iftar meals in your community.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Fundraise</h3>
                    <p className="text-sm text-muted-foreground">
                      Start your own fundraiser and rally your friends and family to contribute.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Corporate Sponsorship</h3>
                    <p className="text-sm text-muted-foreground">
                      Companies can sponsor entire iftar events or programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
