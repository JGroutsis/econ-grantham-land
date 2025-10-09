import { CheckCircle } from "lucide-react";

const Highlights = () => {
  const highlights = [
    "Vacant unregistered land in Grantham Farm",
    "Located within Blacktown City Council",
    "Surrounded by ongoing residential growth across the Riverstone precinct",
    "Connectivity to Riverstone and Vineyard train stations, with links to Windsor Road and the M7",
    "Everyday amenity nearby including Rouse Hill Town Centre and Sydney Business Park",
  ];

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Highlights</h2>
        
        <ul className="space-y-4">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
