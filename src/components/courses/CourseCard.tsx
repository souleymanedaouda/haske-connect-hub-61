
import { BookOpen, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  instructor: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
  modules: number;
  progress?: number;
  image?: string;
}

const CourseCard = ({ id, title, description, instructor, level, duration, modules, progress = 0, image }: CourseCardProps) => {
  return (
    <Card className="haske-card h-full flex flex-col">
      <div className="relative h-40">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: image 
              ? `url(${image})` 
              : `url(https://source.unsplash.com/random/400x200?course,${id})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>
        
        <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-xs font-medium text-haske-dark-orange">
          {level}
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">{description}</p>
        
        <div className="mb-4 flex flex-col gap-2">
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="h-4 w-4 mr-1 text-haske-orange" />
            <span>{modules} modules</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1 text-haske-orange" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Award className="h-4 w-4 mr-1 text-haske-orange" />
            <span>Par {instructor}</span>
          </div>
        </div>
        
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600">Progression</span>
              <span className="text-xs font-medium text-haske-orange">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <a 
          href={`/courses/${id}`} 
          className="w-full py-2 text-center rounded font-medium transition-colors bg-haske-orange text-white hover:bg-haske-dark-orange"
        >
          {progress > 0 ? 'Continuer' : 'Commencer'}
        </a>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
