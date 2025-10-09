const KeyDetails = () => {
  const details = [
    {
      label: "Status",
      value: "Vacant unregistered land",
    },
    {
      label: "Location",
      value: "Grantham Farm, Blacktown City Council",
    },
    {
      label: "Zoning note",
      value: "Nearby Edward Street lots are shown as R2 Low Density Residential in public listings. Buyers must verify zoning for Lots 81–84 on the NSW Planning Portal.",
    },
    {
      label: "Services",
      value: "Unknown. Buyers to make their own enquiries.",
    },
    {
      label: "Area",
      value: "Unknown. Do not estimate.",
    },
    {
      label: "Availability",
      value: "Not available to build at present while unregistered.",
    },
  ];

  return (
    <section className="w-full bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Details</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <div key={index} className="space-y-2">
              <dt className="font-semibold text-primary">{detail.label}</dt>
              <dd className="text-foreground leading-relaxed">{detail.value}</dd>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-background rounded-lg border border-border">
          <p className="text-sm leading-relaxed">
            Nearby Edward Street lots are commonly described as R2 Low Density Residential. Zoning, lot size and services for Lots 81–84 must be confirmed on the NSW Planning Portal before any decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyDetails;
