
import { User, MapPin, Book, Award, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProfilePreview = () => {
  const user = {
    name: "Aminata Diallo",
    bio: "Développeuse web passionnée | Mentor tech | Fan de React et d'innovation sociale",
    location: "Dakar, Sénégal",
    skills: ["React", "UX Design", "Node.js", "Leadership"],
    stats: {
      coursesCompleted: 7,
      quizzesSucceeded: 12,
      communityContributions: 25
    },
    badges: [
      { id: 1, name: "Tech Pioneer", description: "A complété 5+ cours tech" },
      { id: 2, name: "Résolveur de Problèmes", description: "A proposé 3+ solutions approuvées" },
      { id: 3, name: "Communauté Active", description: "Participe régulièrement aux discussions" }
    ],
    currentLearning: {
      course: "Marketing Digital pour Entrepreneurs",
      progress: 65
    },
    profileImage: "https://source.unsplash.com/random/300x300?portrait,african,woman,professional"
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-haske-orange to-haske-yellow"></div>
      <div className="px-6 pt-0 pb-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-4">
          <div className="h-32 w-32 rounded-full border-4 border-white bg-haske-light-brown flex items-center justify-center text-white overflow-hidden">
            {user.profileImage ? (
              <img src={user.profileImage} alt={user.name} className="h-full w-full object-cover" />
            ) : (
              <User className="h-16 w-16" />
            )}
          </div>
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
                <Award className="h-8 w-8 mb-2" />
                <p className="font-medium text-sm text-center">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">En cours d'apprentissage</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium mb-2">{user.currentLearning.course}</p>
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
