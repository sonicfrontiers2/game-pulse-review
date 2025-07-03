
import { Button } from "@/components/ui/button";
import { Play, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/50 to-background py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat bg-[length:60px_60px]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Discover Top-Rated Games</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent leading-tight">
            Game Reviews
            <span className="block">Made Simple</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the best games, read honest reviews from real players, and share your own gaming experiences with our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-animation">
              <Play size={20} className="mr-2" />
              Explore Games
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
            >
              Write a Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
