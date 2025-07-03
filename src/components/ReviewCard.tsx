
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ReviewCardProps {
  username: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

const ReviewCard = ({ username, rating, comment, date, helpful }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}
      />
    ));
  };

  return (
    <Card className="bg-card border-border hover:border-primary/30 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{username}</p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {renderStars(rating)}
            </div>
            <span className="text-sm font-medium">{rating}/5</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-foreground leading-relaxed mb-4">{comment}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <button className="hover:text-primary transition-colors">
            👍 Helpful ({helpful})
          </button>
          <button className="hover:text-primary transition-colors">
            Reply
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
