
import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CommunityCardProps {
  id: number;
  name: string;
  description: string;
  members: number;
  topics: string[];
  image?: string;
}

const CommunityCard = ({ id, name, description, members, topics, image }: CommunityCardProps) => {
  // Generate a consistent image for each community based on its ID
  const getImageUrl = () => {
    const categories = ['tech', 'business', 'education', 'africa', 'innovation', 'community'];
    const category = categories[id % categories.length];
    return image || `https://source.unsplash.com/random/600x400?${category},africa`;
  };

  return (
    <Card className="haske-card h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={getImageUrl()} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <Users className="h-4 w-4 mr-1" />
          <span className="text-sm">{members} membres</span>
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {topics.slice(0, 3).map((topic, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 bg-haske-cream text-haske-dark-orange text-xs rounded-full"
              >
                {topic}
              </span>
            ))}
            {topics.length > 3 && (
              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{topics.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <Button className="w-full haske-gradient" as="a" href={`/community/${id}`}>
          Rejoindre
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
