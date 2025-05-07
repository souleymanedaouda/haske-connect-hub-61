
import { useParams } from 'react-router-dom';
import Communities from '@/components/community/Communities';

const Community = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-haske-dark-orange">
          {id ? "Détails de la Communauté" : "Communautés"}
        </h1>
        
        {id ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-haske-orange to-haske-yellow"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Détails de la communauté #{id}</h2>
              <p className="text-gray-600">
                Cette page affichera les détails de la communauté sélectionnée, y compris les discussions, 
                fichiers partagés, événements, et modules d'apprentissage.
              </p>
            </div>
          </div>
        ) : (
          <Communities />
        )}
      </div>
    </div>
  );
};

export default Community;
