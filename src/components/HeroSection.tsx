
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
      {/* Watercolor animation overlay */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Watercolor splash 1 - Blue */}
          <circle 
            cx="20" cy="30" r="12"
            className="watercolor-splash watercolor-blue"
            style={{ animationDelay: '0.5s' }}
          />
          {/* Watercolor splash 2 - Pink */}
          <ellipse 
            cx="70" cy="20" rx="15" ry="8"
            className="watercolor-splash watercolor-pink"
            style={{ animationDelay: '1.5s' }}
          />
          {/* Watercolor splash 3 - Yellow */}
          <circle 
            cx="80" cy="60" r="14"
            className="watercolor-splash watercolor-yellow"
            style={{ animationDelay: '2.5s' }}
          />
          {/* Watercolor splash 4 - Green */}
          <ellipse 
            cx="15" cy="70" rx="12" ry="16"
            className="watercolor-splash watercolor-green"
            style={{ animationDelay: '3.5s' }}
          />
          {/* Watercolor splash 5 - Purple */}
          <circle 
            cx="45" cy="15" r="10"
            className="watercolor-splash watercolor-purple"
            style={{ animationDelay: '4.5s' }}
          />
          {/* Watercolor splash 6 - Orange */}
          <ellipse 
            cx="60" cy="80" rx="13" ry="10"
            className="watercolor-splash watercolor-orange"
            style={{ animationDelay: '5.5s' }}
          />
          {/* Additional splashes for more coverage */}
          <circle 
            cx="35" cy="50" r="8"
            className="watercolor-splash watercolor-blue"
            style={{ animationDelay: '6.5s' }}
          />
          <ellipse 
            cx="85" cy="35" rx="9" ry="6"
            className="watercolor-splash watercolor-green"
            style={{ animationDelay: '7.5s' }}
          />
        </svg>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-summare-navy mb-4">
            Summare
          </h1>
        </div>

        {/* Main Heading */}
        <h2 className="text-hero mb-6 animate-fade-in">
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
