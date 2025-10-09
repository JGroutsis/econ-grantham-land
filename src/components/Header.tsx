import { Button } from "@/components/ui/button";
import econLogo from "@/assets/econproperty-logo.png";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <img 
          src={econLogo} 
          alt="Econ Property" 
          className="h-16 md:h-20"
        />
        <Button 
          onClick={scrollToContact}
          variant="accent"
          size="sm"
          className="text-sm md:text-base"
        >
          Enquire now
        </Button>
      </div>
    </header>
  );
};

export default Header;
