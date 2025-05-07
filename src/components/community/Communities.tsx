
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CommunityCard from './CommunityCard';
import { Input } from '@/components/ui/input';

const communitiesData = [
  {
    id: 1,
    name: "Développeurs Web",
    description: "Groupe pour les passionnés de développement web front-end et back-end.",
    members: 1245,
    topics: ["JavaScript", "React", "Node.js", "API"],
    image: "https://source.unsplash.com/random/400x200?code,web"
  },
  {
    id: 2,
    name: "Marketing Digital",
    description: "Stratégies et astuces pour le marketing digital en Afrique.",
    members: 890,
    topics: ["Social Media", "SEO", "Content", "Analytics"],
    image: "https://source.unsplash.com/random/400x200?marketing,digital"
  },
  {
    id: 3,
    name: "Startups Africaines",
    description: "Écosystème des startups africaines, financement et growth hacking.",
    members: 1560,
    topics: ["Entrepreneuriat", "Funding", "Scaling", "Business Model"],
    image: "https://source.unsplash.com/random/400x200?startup,africa"
  },
  {
    id: 4,
    name: "Design & UX",
    description: "Communauté dédiée au design, à l'UX et à l'expérience utilisateur.",
    members: 720,
    topics: ["UI", "UX", "Figma", "Design Thinking"],
    image: "https://source.unsplash.com/random/400x200?design,ux"
  },
  {
    id: 5,
    name: "Intelligence Artificielle",
    description: "Explorer les applications de l'IA dans le contexte africain.",
    members: 650,
    topics: ["Machine Learning", "Data Science", "NLP", "Ethics"],
    image: "https://source.unsplash.com/random/400x200?ai,technology"
  },
  {
    id: 6,
    name: "Leadership & Management",
    description: "Développez vos compétences en leadership et gestion d'équipe.",
    members: 980,
    topics: ["Soft Skills", "Team Management", "Communication", "Strategy"],
    image: "https://source.unsplash.com/random/400x200?leadership,team"
  }
];

const Communities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCommunities = communitiesData.filter(community => 
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-haske-dark-orange">
          Communautés à découvrir
        </h2>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative md:w-1/2">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher une communauté..."
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
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white haske-gradient hover:opacity-90">
              Suggestions pour vous
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map(community => (
            <CommunityCard key={community.id} {...community} />
          ))}
        </div>
        
        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Aucune communauté ne correspond à votre recherche</p>
            <p className="text-haske-orange mt-2">Essayez d'autres mots-clés ou créez votre propre communauté !</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communities;
