import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import propertyHero from "@/assets/property-hero.png";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:0412249391";
  };

  const handleEmail = () => {
    window.location.href = "mailto:theo@econproperty.com.au";
  };

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Vacant land holding in Grantham Farm
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Lots 81–84, Edward Street
              </p>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed">
              Econ Property presents a rare land-banking opportunity in Sydney's fast-growing North West. Lots 81–84 on Edward Street, Grantham Farm are vacant unregistered land positioned among ongoing residential expansion. This page is an expression of interest only. Buyers must verify all details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleCall}
                variant="default"
                size="lg"
                className="font-medium"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Theo
              </Button>
              <Button 
                onClick={handleEmail}
                variant="accent"
                size="lg"
                className="font-medium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Theo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={propertyHero} 
                alt="Aerial view of Lots 81–84, Edward Street, Grantham Farm" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
