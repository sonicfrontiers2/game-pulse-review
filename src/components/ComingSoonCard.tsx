
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface ComingSoonCardProps {
  title: string;
  genre: string;
  releaseDate: string;
  price: string;
  image: string;
  description: string;
}

const ComingSoonCard = ({ title, genre, releaseDate, price, image, description }: ComingSoonCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 bg-card border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}?w=400&h=225&fit=crop`}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <Badge className="absolute top-3 right-3 bg-orange-500 text-white">
          Coming Soon
        </Badge>
        <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
          {genre}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">
            {releaseDate}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex justify-between items-center w-full">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
            Wishlist
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ComingSoonCard;
