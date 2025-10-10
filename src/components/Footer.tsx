import econLogo from "@/assets/econproperty-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img 
            src={econLogo} 
            alt="Econ Property" 
            className="h-8 brightness-0 invert"
          />
          <p className="text-sm md:text-base text-center md:text-right">
            Your Trusted Partner in Property
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
