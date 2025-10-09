import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
const Agent = () => {
  const handleCall = () => {
    window.location.href = "tel:0412249391";
  };
  const handleEmail = () => {
    window.location.href = "mailto:theo@econproperty.com.au";
  };
  return <section id="contact" className="w-full bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Agent</h2>
        
        <div className="bg-background rounded-lg p-6 md:p-8 shadow-lg">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Theo Groutsis</h3>
              <div className="space-y-1 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:0412249391" className="hover:text-accent transition-colors">
                    0412 249 391
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:theo@econproperty.com.au" className="hover:text-accent transition-colors">
                    theo@econproperty.com.au
                  </a>
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed">Interested in the opportunity or want to register early interest for future release. Contact Theo below and we will be in touch.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleCall} variant="default" size="lg" className="font-medium">
                <Phone className="mr-2 h-5 w-5" />
                Call Theo
              </Button>
              <Button onClick={handleEmail} variant="accent" size="lg" className="font-medium">
                <Mail className="mr-2 h-5 w-5" />
                Email Theo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Agent;