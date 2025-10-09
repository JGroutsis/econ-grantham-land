const Disclosure = () => {
  return (
    <section className="w-full bg-secondary py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Disclosure and Disclaimer</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All information is provided in good faith but without warranty. Buyers must rely on their own enquiries, including the NSW Planning Portal and council records. Measurements, zoning, services, environmental constraints and permissible uses are subject to survey and council approval. Nothing on this page constitutes financial or legal advice.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">References</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• NSW Planning Portal Spatial Viewer – property planning information</li>
              <li>• Blacktown City Council – local government area for Grantham Farm</li>
              <li>• Public listings for Edward Street Grantham Farm showing R2 zoning on comparable lots</li>
              <li>• Local listings noting proximity to Riverstone and Vineyard stations, Windsor Road and the M7</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclosure;
