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
      label: "Area",
      value: "2,226 m² (4x 556.5 m² Lots)",
    },
    {
      label: "Services",
      value:
        "Power connected. No water connection, but located in Sydney Water expansion area. Buyers to make their own enquiries. Sydney Water: 13 20 92",
    },
  ];

  return (
    <section className="w-full bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Details</h2>

        {/* Asking Price - Prominent Display */}
        <div className="mb-8 p-6 bg-background rounded-lg border border-border">
          <dt className="font-semibold text-primary mb-1">Asking Price</dt>
          <dd className="text-3xl md:text-4xl font-bold text-foreground">$899,000</dd>
        </div>

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
            Lots 81–84 are zoned R2 Low Density Residential. Buyers should verify current zoning, lot size and services
            on the NSW Planning Portal before making any decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyDetails;
