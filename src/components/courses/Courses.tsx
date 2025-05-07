
import { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import CourseCard from './CourseCard';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const coursesData = [
  {
    id: 1,
    title: "Introduction au Développement Web",
    description: "Apprenez les bases du HTML, CSS et JavaScript pour créer vos premiers sites web.",
    instructor: "Amadou Diallo",
    level: "Débutant" as const,
    duration: "12 heures",
    modules: 8,
    progress: 65,
    category: "Tech",
    image: "https://source.unsplash.com/random/600x400?coding,web,development"
  },
  {
    id: 2,
    title: "Marketing Digital pour Entrepreneurs",
    description: "Stratégies efficaces de marketing digital pour faire croître votre business en Afrique.",
    instructor: "Fatou Ndiaye",
    level: "Intermédiaire" as const,
    duration: "10 heures",
    modules: 6,
    progress: 0,
    category: "Business",
    image: "https://source.unsplash.com/random/600x400?marketing,digital,africa"
  },
  {
    id: 3,
    title: "Design Thinking et Innovation",
    description: "Appliquez les méthodes du Design Thinking pour résoudre des problèmes complexes.",
    instructor: "Kofi Mensah",
    level: "Intermédiaire" as const,
    duration: "8 heures",
    modules: 5,
    progress: 0,
    category: "Design",
    image: "https://source.unsplash.com/random/600x400?design,thinking,innovation"
  },
  {
    id: 4,
    title: "Leadership et Management d'Équipe",
    description: "Développez vos compétences en leadership pour gérer efficacement une équipe.",
    instructor: "Aisha Mohamed",
    level: "Avancé" as const,
    duration: "15 heures",
    modules: 10,
    progress: 0,
    category: "Business",
    image: "https://source.unsplash.com/random/600x400?leadership,team,management"
  },
  {
    id: 5,
    title: "Bases de l'Intelligence Artificielle",
    description: "Comprendre les concepts fondamentaux de l'IA et son application pratique.",
    instructor: "Jean-Luc Habimana",
    level: "Débutant" as const,
    duration: "14 heures",
    modules: 7,
    progress: 0,
    category: "Tech",
    image: "https://source.unsplash.com/random/600x400?ai,artificial,intelligence"
  },
  {
    id: 6,
    title: "Personal Branding pour Professionnels",
    description: "Construisez votre marque personnelle pour vous démarquer dans votre domaine.",
    instructor: "Amina Toure",
    level: "Débutant" as const,
    duration: "6 heures",
    modules: 4,
    progress: 30,
    category: "Développement personnel",
    image: "https://source.unsplash.com/random/600x400?personal,branding,professional"
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  let filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (activeTab !== "all") {
    filteredCourses = filteredCourses.filter(course => 
      course.category.toLowerCase() === activeTab.toLowerCase()
    );
  }
  
  const myCourses = coursesData.filter(course => course.progress > 0);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-haske-dark-orange flex items-center">
          <BookOpen className="mr-2 h-6 w-6" />
          Formations
        </h2>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher un cours..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>Tous</TabsTrigger>
            <TabsTrigger value="Tech" onClick={() => setActiveTab("Tech")}>Tech</TabsTrigger>
            <TabsTrigger value="Business" onClick={() => setActiveTab("Business")}>Business</TabsTrigger>
            <TabsTrigger value="Design" onClick={() => setActiveTab("Design")}>Design</TabsTrigger>
            <TabsTrigger value="Développement personnel" onClick={() => setActiveTab("Développement personnel")}>
              Développement personnel
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Tech" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Business" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Développement personnel" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Aucun cours ne correspond à votre recherche</p>
            <p className="text-haske-orange mt-2">Essayez d'autres mots-clés ou thématiques</p>
          </div>
        )}
        
        {myCourses.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Mes formations en cours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
