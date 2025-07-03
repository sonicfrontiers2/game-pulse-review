
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const navigate = useNavigate();

  // Mock games data - in a real app, this would come from an API
  const featuredGames = [
    {
      id: "1",
      title: "Cyberpunk 2077",
      genre: "RPG",
      rating: 4.2,
      reviewCount: 1247,
      price: "$59.99",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      id: "2",
      title: "The Witcher 3",
      genre: "Action RPG",
      rating: 4.8,
      reviewCount: 2341,
      price: "$39.99",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: "3",
      title: "Elden Ring",
      genre: "Action RPG",
      rating: 4.7,
      reviewCount: 1876,
      price: "$59.99",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: "4",
      title: "God of War",
      genre: "Action",
      rating: 4.6,
      reviewCount: 1523,
      price: "$49.99",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "5",
      title: "Horizon Zero Dawn",
      genre: "Action RPG",
      rating: 4.5,
      reviewCount: 1342,
      price: "$29.99",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "6",
      title: "Red Dead Redemption 2",
      genre: "Action",
      rating: 4.4,
      reviewCount: 1987,
      price: "$59.99",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const newGames = featuredGames.slice(0, 3);
  const topRated = [...featuredGames].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const handleGameClick = (gameId: string) => {
    navigate(`/game/${gameId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Featured Games
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular and highly-rated games in our community
            </p>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-secondary">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="new">New Releases</TabsTrigger>
              <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredGames.map((game) => (
                  <GameCard
                    key={game.id}
                    {...game}
                    onClick={() => handleGameClick(game.id)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newGames.map((game) => (
                  <GameCard
                    key={game.id}
                    {...game}
                    onClick={() => handleGameClick(game.id)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="top-rated">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topRated.map((game) => (
                  <GameCard
                    key={game.id}
                    {...game}
                    onClick={() => handleGameClick(game.id)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-secondary/50 to-primary/10 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Join Our Gaming Community</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Share your gaming experiences, discover new favorites, and connect with fellow gamers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Sign Up Free
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
