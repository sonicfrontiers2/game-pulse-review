
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Calendar, Users, Gamepad2 } from "lucide-react";
import Header from "@/components/Header";
import ReviewCard from "@/components/ReviewCard";

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock game data - in a real app, this would come from an API
  const game = {
    id: id,
    title: "Cyberpunk 2077",
    genre: "RPG",
    rating: 4.2,
    reviewCount: 1247,
    price: "$59.99",
    image: "photo-1605810230434-7631ac76ec81",
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamour, and ceaseless body modification.",
    releaseDate: "December 10, 2020",
    developer: "CD Projekt Red",
    platforms: ["PC", "PlayStation", "Xbox"],
    features: ["Open World", "Single Player", "Character Customization", "Futuristic Setting"],
    systemRequirements: {
      minimum: "GTX 780 or Radeon RX 470, 8GB RAM, i5-3570K",
      recommended: "GTX 1060 or RX 580, 12GB RAM, i7-4790"
    }
  };

  const reviews = [
    {
      username: "GamerPro2024",
      rating: 5,
      comment: "After the recent updates, this game has become absolutely incredible. The story is engaging, the graphics are stunning, and the gameplay is smooth. Night City feels alive and immersive.",
      date: "2 weeks ago",
      helpful: 24
    },
    {
      username: "TechReviewer",
      rating: 4,
      comment: "Great game with amazing visuals and story. Some minor bugs here and there but overall a fantastic experience. The character development system is deep and rewarding.",
      date: "1 month ago",
      helpful: 18
    },
    {
      username: "CasualPlayer",
      rating: 3,
      comment: "Decent game but had some performance issues on my setup. The story is good but I expected more from the open world activities. Worth playing if you're into RPGs.",
      date: "3 weeks ago",
      helpful: 12
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-secondary"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Games
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <img
                src={`https://images.unsplash.com/${game.image}?w=800&h=450&fit=crop`}
                alt={game.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold">{game.title}</h1>
                <Badge className="bg-primary text-primary-foreground">{game.genre}</Badge>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  {renderStars(game.rating)}
                  <span className="text-lg font-medium">{game.rating}/5</span>
                  <span className="text-muted-foreground">({game.reviewCount} reviews)</span>
                </div>
                <span className="text-3xl font-bold text-primary">{game.price}</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {game.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary" />
                  <span>Released: {game.releaseDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-primary" />
                  <span>Developer: {game.developer}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 size={20} className="text-primary" />
                  <span>Platforms: {game.platforms.join(", ")}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {game.features.map((feature, index) => (
                  <Badge key={index} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Minimum:</h4>
                  <p className="text-sm text-muted-foreground">{game.systemRequirements.minimum}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Recommended:</h4>
                  <p className="text-sm text-muted-foreground">{game.systemRequirements.recommended}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                  Share Game
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Player Reviews</h2>
            <Button className="bg-primary hover:bg-primary/90">
              Write a Review
            </Button>
          </div>

          <div className="space-y-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GameDetail;
