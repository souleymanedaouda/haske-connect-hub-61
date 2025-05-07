
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-haske-cream to-white py-12 md:py-20">
      <div className="pattern-dots absolute inset-0 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-haske-dark-orange mb-6">
              Connectez-vous à l'innovation africaine
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Rejoignez Haské Connect, la communauté qui rassemble les jeunes talents autour de
              l'entrepreneuriat, l'innovation et le développement personnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="haske-button-primary" asChild>
                <Link to="/community">
                  Rejoindre une communauté
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="haske-button-secondary" asChild>
                <Link to="/courses">Découvrir les formations</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-slide-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-40 h-40 bg-haske-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse-light"></div>
              <div className="absolute bottom-0 -right-4 w-40 h-40 bg-haske-orange rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-light"></div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-24 bg-gradient-to-r from-haske-orange to-haske-yellow relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-40" 
                      style={{ backgroundImage: `url('https://source.unsplash.com/featured/600x200?african,tech,innovation')` }}
                    ></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <div 
                        className="w-16 h-16 rounded-full border-4 border-white -mt-12 mr-4 bg-cover bg-center"
                        style={{ backgroundImage: `url('https://source.unsplash.com/featured/100x100?african,student')` }}
                      ></div>
                      <div>
                        <h3 className="font-bold">Chroniques de Haské</h3>
                        <p className="text-sm text-gray-500">Inspiration quotidienne</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700">"L'innovation est la rencontre entre la créativité et la persévérance. Ensemble, nous pouvons transformer l'Afrique."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
