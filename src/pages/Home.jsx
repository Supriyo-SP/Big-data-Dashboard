import { useState, useMemo } from 'react';
import conceptsData from '../data/concepts.json';
import ConceptCard from '../components/concepts/ConceptCard.jsx';
import { Search, Filter } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(conceptsData.map(c => c.category))];

  const filteredConcepts = useMemo(() => {
    return conceptsData.filter(concept => {
      const matchesSearch = concept.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            concept.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          {/* Abstract background shapes */}
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.1,-46.2C90.4,-33.3,96.3,-16.6,95.5,-0.5C94.7,15.7,87.3,31.4,77.7,45.4C68.1,59.3,56.4,71.5,41.9,78.5C27.4,85.6,10.2,87.6,-5.7,85.2C-21.6,82.8,-36.2,76.1,-50.2,68.4C-64.2,60.8,-77.7,52.2,-85.4,39.6C-93.1,27.1,-95.1,10.7,-92.9,-5C-90.8,-20.6,-84.6,-35.4,-75,-47.5C-65.5,-59.5,-52.7,-68.8,-39.2,-76.4C-25.7,-84.1,-11.4,-90.1,2.8,-94.1C17,-98.1,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Demystifying <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Big Data</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl leading-relaxed">
            Explore advanced big data concepts through this interactive learning dashboard. 
            Compare architectures, understand paradigms, and see how modern data pipelines are built.
          </p>
        </div>
      </section>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search concepts..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none shadow-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <div className="flex items-center text-slate-500 mr-2">
            <Filter size={18} className="mr-1" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredConcepts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredConcepts.map(concept => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center">
          <div className="bg-slate-100 p-6 rounded-full mb-4">
            <Search size={40} className="text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No concepts found</h3>
          <p className="text-slate-500">We couldn't find anything matching your search criteria. Try a different term.</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="mt-6 px-6 py-2 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
