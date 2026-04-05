import { useParams, Link, Navigate } from 'react-router-dom';
import conceptsData from '../data/concepts.json';
import { ArrowLeft, CheckCircle2, XCircle, Lightbulb, Pickaxe, Share2 } from 'lucide-react';

const ConceptDetail = () => {
  const { id } = useParams();
  const concept = conceptsData.find(c => c.id === id);

  if (!concept) {
    return <Navigate to="/" />;
  }

  const related = concept.relatedConcepts.map(rId => 
    conceptsData.find(c => c.id === rId)
  ).filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header Navigation */}
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors font-medium">
        <ArrowLeft size={18} className="mr-2" />
        Back to Dashboard
      </Link>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-8 md:p-12 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            {concept.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{concept.title}</h1>
          <p className="text-indigo-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            {concept.description}
          </p>
        </div>

        <div className="p-8 md:p-12">
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-amber-100 p-2 rounded-lg"><Lightbulb className="text-amber-600" /></div>
                <h2 className="text-2xl font-bold text-slate-800">Key Points</h2>
              </div>
              <ul className="space-y-4">
                {concept.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700 items-start">
                    <span className="text-indigo-500 font-bold mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-cyan-100 p-2 rounded-lg"><Pickaxe className="text-cyan-600" /></div>
                <h2 className="text-2xl font-bold text-slate-800">Common Use Cases</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {concept.useCases.map((useCase, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-green-500" />
                Advantages
              </h3>
              <ul className="space-y-3">
                {concept.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 mt-8 md:mt-0">
                <XCircle className="text-red-500" />
                Limitations
              </h3>
              <ul className="space-y-3">
                {concept.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Concepts */}
          {related.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-purple-100 p-2 rounded-lg"><Share2 className="text-purple-600" /></div>
                <h2 className="text-2xl font-bold text-slate-800">Related Concepts</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {related.map(rel => (
                  <Link 
                    key={rel.id} 
                    to={`/concept/${rel.id}`}
                    className="border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group"
                  >
                    <h4 className="font-bold text-slate-800 group-hover:text-indigo-700 mb-1">{rel.title}</h4>
                    <p className="text-xs text-slate-500">{rel.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConceptDetail;
