
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
      {/* Watercolor painting animation for specific objects */}
      <div className="absolute inset-0 z-10 mix-blend-multiply">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          
          {/* Paint the umbrella yellow */}
          <ellipse 
            cx="25" cy="15" rx="12" ry="6"
            className="watercolor-paint watercolor-umbrella"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Paint tomatoes red */}
          <circle 
            cx="65" cy="45" r="4"
            className="watercolor-paint watercolor-tomato"
            style={{ animationDelay: '1.2s' }}
          />
          <circle 
            cx="70" cy="50" r="3.5"
            className="watercolor-paint watercolor-tomato"
            style={{ animationDelay: '1.5s' }}
          />
          <circle 
            cx="62" cy="52" r="3"
            className="watercolor-paint watercolor-tomato"
            style={{ animationDelay: '1.8s' }}
          />
          
          {/* Paint leafy greens */}
          <ellipse 
            cx="15" cy="40" rx="6" ry="9"
            className="watercolor-paint watercolor-leafy-green"
            style={{ animationDelay: '2.5s' }}
          />
          <ellipse 
            cx="22" cy="50" rx="5" ry="8"
            className="watercolor-paint watercolor-leafy-green"
            style={{ animationDelay: '2.8s' }}
          />
          
          {/* Paint fruit stand oranges */}
          <circle 
            cx="80" cy="60" r="4"
            className="watercolor-paint watercolor-fruit-orange"
            style={{ animationDelay: '3.5s' }}
          />
          <circle 
            cx="85" cy="65" r="3.5"
            className="watercolor-paint watercolor-fruit-orange"
            style={{ animationDelay: '3.8s' }}
          />
          
          {/* Paint vegetables green */}
          <ellipse 
            cx="45" cy="70" rx="8" ry="6"
            className="watercolor-paint watercolor-vegetable-green"
            style={{ animationDelay: '4.2s' }}
          />
          
          {/* Paint purple eggplants */}
          <ellipse 
            cx="35" cy="65" rx="5" ry="7"
            className="watercolor-paint watercolor-eggplant"
            style={{ animationDelay: '4.8s' }}
          />
          
          {/* Paint market stand wood brown */}
          <rect 
            x="10" y="75" width="80" height="6" rx="2"
            className="watercolor-paint watercolor-wood"
            style={{ animationDelay: '5.5s' }}
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
