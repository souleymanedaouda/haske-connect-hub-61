
import ProfilePreview from '@/components/profile/ProfilePreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-haske-dark-orange">Mon profil</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <ProfilePreview />
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="activity">
              <TabsList className="mb-8 w-full">
                <TabsTrigger value="activity" className="flex-1">Activité</TabsTrigger>
                <TabsTrigger value="courses" className="flex-1">Formations</TabsTrigger>
                <TabsTrigger value="communities" className="flex-1">Communautés</TabsTrigger>
                <TabsTrigger value="settings" className="flex-1">Paramètres</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Activité récente</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-haske-orange pl-4 py-2">
                    <p className="font-medium">A terminé le module "Bases du HTML"</p>
                    <p className="text-sm text-gray-600">Il y a 2 jours</p>
                  </div>
                  <div className="border-l-4 border-haske-orange pl-4 py-2">
                    <p className="font-medium">A rejoint la communauté "Développeurs Web"</p>
                    <p className="text-sm text-gray-600">Il y a 4 jours</p>
                  </div>
                  <div className="border-l-4 border-haske-orange pl-4 py-2">
                    <p className="font-medium">A commenté dans "Stratégies pour les startups africaines"</p>
                    <p className="text-sm text-gray-600">Il y a 1 semaine</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="courses" className="p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Mes formations</h2>
                <p className="text-gray-600">
                  Affichage de vos formations en cours et terminées.
                </p>
              </TabsContent>
              
              <TabsContent value="communities" className="p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Mes communautés</h2>
                <p className="text-gray-600">
                  Affichage des communautés dont vous êtes membre.
                </p>
              </TabsContent>
              
              <TabsContent value="settings" className="p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Paramètres du compte</h2>
                <p className="text-gray-600">
                  Gérez vos informations personnelles et préférences de compte.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
