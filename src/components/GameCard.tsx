
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface GameCardProps {
  title: string;
  genre: string;
  rating: number;
  reviewCount: number;
  price: string;
  image: string;
  onClick: () => void;
}

const GameCard = ({ title, genre, rating, reviewCount, price, image, onClick }: GameCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}
      />
    ));
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 bg-card border-border overflow-hidden"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}?w=400&h=225&fit=crop`}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {genre}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex justify-between items-center w-full">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <div className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary border border-primary/20">
            View Details
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
