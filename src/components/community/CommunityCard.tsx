
import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CommunityCardProps {
  id: number;
  name: string;
  description: string;
  members: number;
  topics: string[];
  image?: string;
}

const CommunityCard = ({ id, name, description, members, topics, image }: CommunityCardProps) => {
  return (
    <Card className="haske-card h-full flex flex-col">
      <div className="relative h-36">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: image 
              ? `url(${image})` 
              : 'url(https://source.unsplash.com/random/400x200?africa,tech)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
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
        
        <Button className="w-full haske-gradient" asChild>
          <Link to={`/community/${id}`}>Rejoindre</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
