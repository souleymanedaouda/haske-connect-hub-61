
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "L'importance de la technologie dans l'entrepreneuriat africain",
      description: "Découvrez comment les entrepreneurs africains utilisent la technologie pour résoudre des problèmes locaux.",
      category: "Inspiration",
      image: "https://source.unsplash.com/featured/600x400?african,entrepreneur,tech"
    },
    {
      id: 2,
      title: "5 compétences essentielles pour réussir dans le numérique",
      description: "Les compétences techniques et soft skills que tout jeune africain devrait développer.",
      category: "Éducation",
      image: "https://source.unsplash.com/featured/600x400?african,student,coding"
    },
    {
      id: 3,
      title: "L'histoire de success de Khadija, développeuse web autodidacte",
      description: "Comment une jeune passionnée est devenue développeuse en moins d'un an.",
      category: "Success Story",
      image: "https://source.unsplash.com/featured/600x400?african,woman,laptop"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <div className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-haske-dark-orange flex items-center">
            <Book className="mr-2 h-6 w-6" />
            Chroniques de Haské
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border border-haske-orange text-haske-orange hover:bg-haske-orange hover:text-white transition-colors"
              aria-label="Chronique précédente"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border border-haske-orange text-haske-orange hover:bg-haske-orange hover:text-white transition-colors"
              aria-label="Chronique suivante"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full">
                <Card className="haske-card">
                  <div className="md:grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-haske-orange to-haske-yellow h-64 md:h-auto">
                      <div className="h-full w-full bg-cover bg-center opacity-80" 
                           style={{ backgroundImage: `url('${slide.image}')` }}>
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-haske-cream text-haske-dark-orange text-xs font-medium mb-4">
                          {slide.category}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-gray-700">{slide.description}</p>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-cover bg-center" 
                               style={{ backgroundImage: `url('https://source.unsplash.com/featured/100x100?african,profile,${slide.id}')` }}></div>
                          <span className="ml-2 text-sm font-medium">Par l'équipe Haské</span>
                        </div>
                        <button className="text-haske-orange font-medium hover:text-haske-dark-orange transition-colors">
                          Lire plus
                        </button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                currentSlide === index ? 'bg-haske-orange' : 'bg-haske-cream'
              }`}
              aria-label={`Aller à la chronique ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
