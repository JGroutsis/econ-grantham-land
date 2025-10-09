import { Button } from "@/components/ui/button";
import econLogo from "@/assets/econproperty-logo.png";

const Header = () => {
  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById('enquiry-form');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <img 
          src={econLogo} 
          alt="Econ Property" 
          className="h-8 md:h-10"
        />
        <Button 
          onClick={scrollToEnquiry}
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
