import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, Mail } from "lucide-react";
import propertyHero from "@/assets/property-hero.jpg";
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Live Off The Grid</h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Lots 81–84, Edward Street</p>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
              Econ Property presents a rare land-banking opportunity in Sydney's fast-growing North West. Lots 81–84
              Edward Street Grantham Farm are well positioned amongst the ongoing residential expansion of the area. 4x
              556.5m² lots to be sold in one line, totalling 2,226m².{" "}
            </p>

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

          <div className="relative">
            <AspectRatio
              ratio={4 / 5}
              className="w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto rounded-xl overflow-hidden shadow-lg bg-muted/20"
            >
              <img
                src={propertyHero}
                alt="Aerial view of Lots 81-84, Edward Street, Grantham Farm"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
