const KeyDetails = () => {
  const details = [
    {
      label: "Location",
      value: "Grantham Farm, Blacktown City Council",
    },
    {
      label: "Zoning",
      value: "R2 Low Density Residential",
    },
    {
      label: "Services",
      value: "Unknown. Buyers to make their own enquiries.",
    },
    {
      label: "Area",
      value: "~2,200 m²",
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
            Lots 81–84 are zoned R2 Low Density Residential. Buyers should verify current zoning, lot size and services on the NSW Planning Portal before making any decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyDetails;
