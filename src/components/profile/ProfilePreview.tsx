
import { User, MapPin, Book, Award, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfilePreview = () => {
  const user = {
    name: "Aminata Diallo",
    avatar: "https://source.unsplash.com/featured/200x200?african,woman,professional",
    bio: "Développeuse web passionnée | Mentor tech | Fan de React et d'innovation sociale",
    location: "Dakar, Sénégal",
    skills: ["React", "UX Design", "Node.js", "Leadership"],
    stats: {
      coursesCompleted: 7,
      quizzesSucceeded: 12,
      communityContributions: 25
    },
    badges: [
      { id: 1, name: "Tech Pioneer", description: "A complété 5+ cours tech", icon: "https://source.unsplash.com/featured/50x50?tech,badge" },
      { id: 2, name: "Résolveur de Problèmes", description: "A proposé 3+ solutions approuvées", icon: "https://source.unsplash.com/featured/50x50?problem,solving" },
      { id: 3, name: "Communauté Active", description: "Participe régulièrement aux discussions", icon: "https://source.unsplash.com/featured/50x50?community,discussion" }
    ],
    currentLearning: {
      course: "Marketing Digital pour Entrepreneurs",
      progress: 65,
      image: "https://source.unsplash.com/featured/100x100?marketing,digital"
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-haske-orange to-haske-yellow relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: "url('https://source.unsplash.com/featured/800x200?africa,tech')" }}
        ></div>
      </div>
      <div className="px-6 pt-0 pb-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-4">
          <Avatar className="h-32 w-32 border-4 border-white">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-haske-light-brown text-white text-4xl">
              <User className="h-16 w-16" />
            </AvatarFallback>
          </Avatar>
          <div className="mt-4 md:mt-0 md:ml-6 md:mb-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{user.location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">{user.bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {user.skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-haske-cream text-haske-dark-orange rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <div className="bg-haske-cream p-2 rounded-full mb-2">
              <Book className="h-5 w-5 text-haske-orange" />
            </div>
            <p className="text-xl font-bold">{user.stats.coursesCompleted}</p>
            <p className="text-sm text-gray-600">Formations terminées</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <div className="bg-haske-cream p-2 rounded-full mb-2">
              <Award className="h-5 w-5 text-haske-orange" />
            </div>
            <p className="text-xl font-bold">{user.stats.quizzesSucceeded}</p>
            <p className="text-sm text-gray-600">Quiz réussis</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <div className="bg-haske-cream p-2 rounded-full mb-2">
              <Users className="h-5 w-5 text-haske-orange" />
            </div>
            <p className="text-xl font-bold">{user.stats.communityContributions}</p>
            <p className="text-sm text-gray-600">Contributions</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-bold mb-3">Badges gagnés</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {user.badges.map(badge => (
              <div 
                key={badge.id} 
                className="flex-shrink-0 p-3 bg-gradient-to-b from-haske-yellow to-haske-orange rounded-lg text-white min-w-[120px] flex flex-col items-center"
              >
                <div className="h-8 w-8 rounded-full bg-white mb-2 overflow-hidden">
                  <img src={badge.icon} alt={badge.name} className="h-full w-full object-cover" />
                </div>
                <p className="font-medium text-sm text-center">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">En cours d'apprentissage</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded bg-haske-cream overflow-hidden">
                <img src={user.currentLearning.image} alt={user.currentLearning.course} className="h-full w-full object-cover" />
              </div>
              <p className="font-medium">{user.currentLearning.course}</p>
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600">Progression</span>
              <span className="text-xs font-medium text-haske-orange">{user.currentLearning.progress}%</span>
            </div>
            <Progress value={user.currentLearning.progress} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
