import { GraduationCap } from "lucide-react";

const Schools = () => {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-start gap-4">
          <GraduationCap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Schools</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Nearby schools include Riverstone Public School and Riverstone High School. Catchments change. Please verify on the NSW Planning Portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;
