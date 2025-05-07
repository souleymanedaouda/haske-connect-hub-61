
import Hero from '@/components/home/Hero';
import FeaturedContent from '@/components/home/FeaturedContent';
import QuickAccess from '@/components/home/QuickAccess';
import Communities from '@/components/community/Communities';
import Courses from '@/components/courses/Courses';
import MarketplacePreview from '@/components/marketplace/MarketplacePreview';
import ProfilePreview from '@/components/profile/ProfilePreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturedContent />
      <QuickAccess />
      
      <div className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-haske-dark-orange">Explorez Haské Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connectez-vous, apprenez et innovez avec une communauté de jeunes talents africains partageant les mêmes objectifs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Communities />
            <Courses />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MarketplacePreview />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-haske-dark-orange">Mon profil</h2>
              <ProfilePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
