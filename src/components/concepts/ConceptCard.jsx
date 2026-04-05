import { Link } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';

const ConceptCard = ({ concept }) => {
  return (
    <Link to={`/concept/${concept.id}`} className="block group h-full">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-4">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 w-max">
              <Layers size={14} />
              {concept.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
            {concept.title}
          </h3>
          
          <p className="text-slate-600 text-sm flex-grow line-clamp-3">
            {concept.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {concept.comparisonTags.map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between group-hover:bg-indigo-50 transition-colors">
          <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-700">Explore concept</span>
          <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
};

export default ConceptCard;
