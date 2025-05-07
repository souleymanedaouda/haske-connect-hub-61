
import { useState } from 'react';
import { Filter, Search, ShoppingBag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const marketplaceItems = [
  // ... more items will be here in a real application
  {
    id: 1,
    title: "Développement de site web responsive",
    provider: "Mamadou S.",
    rating: 4.8,
    reviews: 24,
    price: "À partir de 150 000 FCFA",
    category: "Développement",
    image: "https://source.unsplash.com/random/100x100?web,development"
  },
  {
    id: 2,
    title: "Consultation en marketing digital",
    provider: "Fatima L.",
    rating: 4.6,
    reviews: 18,
    price: "20 000 FCFA / heure",
    category: "Marketing",
    image: "https://source.unsplash.com/random/100x100?marketing"
  },
  {
    id: 3,
    title: "Formation personnalisée en data science",
    provider: "Jean K.",
    rating: 4.9,
    reviews: 32,
    price: "300 000 FCFA / formation",
    category: "Formation",
    image: "https://source.unsplash.com/random/100x100?data,science"
  },
  {
    id: 4,
    title: "Design graphique et identité de marque",
    provider: "Sofia O.",
    rating: 4.7,
    reviews: 41,
    price: "À partir de 100 000 FCFA",
    category: "Design",
    image: "https://source.unsplash.com/random/100x100?design,brand"
  },
  {
    id: 5,
    title: "Développement d'application mobile",
    provider: "Ibrahim M.",
    rating: 4.8,
    reviews: 15,
    price: "À partir de 200 000 FCFA",
    category: "Développement",
    image: "https://source.unsplash.com/random/100x100?mobile,app"
  },
  {
    id: 6,
    title: "Gestion des médias sociaux",
    provider: "Aisha T.",
    rating: 4.5,
    reviews: 22,
    price: "50 000 FCFA / mois",
    category: "Marketing",
    image: "https://source.unsplash.com/random/100x100?social,media"
  },
  {
    id: 7,
    title: "Création de contenu vidéo",
    provider: "Kouamé D.",
    rating: 4.7,
    reviews: 29,
    price: "À partir de 75 000 FCFA",
    category: "Multimédia",
    image: "https://source.unsplash.com/random/100x100?video,content"
  },
  {
    id: 8,
    title: "Analyse de données et business intelligence",
    provider: "Fatou S.",
    rating: 4.9,
    reviews: 17,
    price: "25 000 FCFA / heure",
    category: "Analyse",
    image: "https://source.unsplash.com/random/100x100?data,analysis"
  }
];

const categories = [
  "Tous",
  "Développement",
  "Marketing",
  "Design",
  "Formation",
  "Analyse",
  "Multimédia"
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  
  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-haske-dark-orange flex items-center">
            <ShoppingBag className="mr-2 h-7 w-7" />
            Marketplace
          </h1>
          <Button className="haske-button-primary">
            Proposer un service
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative md:w-2/3">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher un service..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filtrer
            </button>
          </div>
        </div>
        
        <Tabs defaultValue="Tous" className="mb-8">
          <TabsList className="mb-6 overflow-x-auto flex flex-nowrap">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="flex-shrink-0"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="Tous" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map(item => (
                <Card key={item.id} className="haske-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={item.image} alt={item.provider} />
                        <AvatarFallback className="bg-haske-cream text-haske-orange">
                          {item.provider.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{item.provider}</p>
                        <div className="flex items-center">
                          <span className="text-sm font-medium">{item.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({item.reviews} avis)</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm bg-haske-cream text-haske-dark-orange px-2 py-1 rounded-full">{item.category}</span>
                      <span className="text-sm font-medium text-haske-orange">{item.price}</span>
                    </div>
                    
                    <Button className="w-full bg-haske-orange hover:bg-haske-dark-orange text-white">
                      Contacter
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {categories.slice(1).map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                  <Card key={item.id} className="haske-card">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={item.image} alt={item.provider} />
                          <AvatarFallback className="bg-haske-cream text-haske-orange">
                            {item.provider.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{item.provider}</p>
                          <div className="flex items-center">
                            <span className="text-sm font-medium">{item.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">({item.reviews} avis)</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm bg-haske-cream text-haske-dark-orange px-2 py-1 rounded-full">{item.category}</span>
                        <span className="text-sm font-medium text-haske-orange">{item.price}</span>
                      </div>
                      
                      <Button className="w-full bg-haske-orange hover:bg-haske-dark-orange text-white">
                        Contacter
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Marketplace;
