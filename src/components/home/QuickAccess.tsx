
import { Users, BookOpen, Bookmark, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const QuickAccess = () => {
  const quickLinks = [
    {
      id: 1,
      title: "Rejoindre une communauté",
      description: "Connectez-vous avec d'autres passionnés et partagez vos idées",
      icon: Users,
      link: "/community",
      color: "from-haske-orange to-haske-light-orange"
    },
    {
      id: 2,
      title: "Découvrir les formations",
      description: "Apprenez de nouvelles compétences avec nos modules éducatifs",
      icon: BookOpen,
      link: "/courses",
      color: "from-haske-yellow to-haske-orange"
    },
    {
      id: 3,
      title: "Créer un espace",
      description: "Lancez votre propre communauté autour d'un sujet qui vous passionne",
      icon: Bookmark,
      link: "/community/create",
      color: "from-haske-light-orange to-haske-dark-orange"
    },
    {
      id: 4,
      title: "Explorer le marketplace",
      description: "Trouvez des services ou proposez votre expertise aux autres membres",
      icon: Share2,
      link: "/marketplace",
      color: "from-haske-dark-orange to-haske-orange"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-haske-dark-orange">
          Accès rapide
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item) => (
            <Link to={item.link} key={item.id} className="transform transition-all hover:-translate-y-1">
              <Card className="h-full border-none shadow-md hover:shadow-lg">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${item.color} p-6 rounded-t-lg`}>
                    <item.icon className="h-8 w-8 text-white mb-2" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
