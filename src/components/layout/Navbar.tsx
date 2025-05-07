
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Bell, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Communautés', href: '/community' },
    { name: 'Formations', href: '/courses' },
    { name: 'Marketplace', href: '/marketplace' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-haske-orange">Haské<span className="text-haske-yellow">Connect</span></span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:text-haske-orange hover:border-haske-orange transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>
            <Link to="/profile">
              <Button variant="outline" className="rounded-full border-haske-orange text-haske-orange hover:bg-haske-orange hover:text-white">
                <User className="h-5 w-5 mr-2" />
                <span>Profil</span>
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-haske-orange focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-haske-cream hover:border-haske-orange hover:text-haske-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-3 pr-4 py-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-gray-600" />
              </Button>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="rounded-full border-haske-orange text-haske-orange">
                  <User className="h-5 w-5 mr-2" />
                  <span>Profil</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
