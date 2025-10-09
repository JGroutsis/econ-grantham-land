import { MapPin } from "lucide-react";

const Location = () => {
  const nearbyPlaces = [
    "Riverstone Station",
    "Vineyard Station",
    "Windsor Road",
    "M7",
    "Rouse Hill Town Centre",
    "Sydney Business Park",
  ];

  return (
    <section className="w-full bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Location</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg bg-background">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3312.8!2d150.8630!3d-33.6621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing location at 33.6621° S, 150.8630° E"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Nearby</h3>
            <ul className="space-y-3">
              {nearbyPlaces.map((place, index) => (
                <li key={index} className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-base md:text-lg">{place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
