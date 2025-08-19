
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/ec411908-4bc9-4469-a129-483fef1f28cc.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay for fade effect - opaque at top, transparent at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand - smaller and cursive */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-normal text-summare-navy mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Summare
          </h1>
        </div>

        {/* Main Heading - reduced size and weight */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-summare-navy leading-tight mb-6 animate-fade-in">
          Digitala årsredovisningar för egenföretagare
        </h2>

        {/* Subtitle */}
        <p className="text-subtitle mb-8 max-w-2xl mx-auto animate-fade-in">
          Enkelt. Snabbt. Pålitligt. Skapa professionella årsredovisningar på minuter, inte dagar.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in">
          <Button className="btn-hero text-lg">
            Skapa årsredovisning nu
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-sm text-summare-gray">
          <p>Betrodd av över 10,000+ egenföretagare i Sverige</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
