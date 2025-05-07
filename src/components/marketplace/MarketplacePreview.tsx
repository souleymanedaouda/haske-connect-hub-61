
import { Briefcase, Star, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const marketplaceItems = [
  {
    id: 1,
    title: "Développement de site web responsive",
    provider: "Mamadou S.",
    rating: 4.8,
    reviews: 24,
    price: "À partir de 150 000 FCFA",
    category: "Développement",
    image: "https://source.unsplash.com/featured/100x100?web,developer,african"
  },
  {
    id: 2,
    title: "Consultation en marketing digital",
    provider: "Fatima L.",
    rating: 4.6,
    reviews: 18,
    price: "20 000 FCFA / heure",
    category: "Marketing",
    image: "https://source.unsplash.com/featured/100x100?marketing,woman,african"
  },
  {
    id: 3,
    title: "Formation personnalisée en data science",
    provider: "Jean K.",
    rating: 4.9,
    reviews: 32,
    price: "300 000 FCFA / formation",
    category: "Formation",
    image: "https://source.unsplash.com/featured/100x100?data,science,african"
  },
  {
    id: 4,
    title: "Design graphique et identité de marque",
    provider: "Sofia O.",
    rating: 4.7,
    reviews: 41,
    price: "À partir de 100 000 FCFA",
    category: "Design",
    image: "https://source.unsplash.com/featured/100x100?design,african,woman"
  }
];

const MarketplacePreview = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-haske-dark-orange flex items-center">
            <Briefcase className="mr-2 h-6 w-6" />
            Marketplace
          </h2>
          <Button variant="link" className="text-haske-orange flex items-center" asChild>
            <Link to="/marketplace">Voir tout <ChevronRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaceItems.map(item => (
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
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
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
      </div>
    </div>
  );
};

export default MarketplacePreview;
