import { useState } from 'react';
import { Layers } from 'lucide-react';

const Comparison = () => {
  const [activeTab, setActiveTab] = useState('batch-vs-streaming');

  const comparisons = [
    {
      id: 'batch-vs-streaming',
      title: 'Batch vs Streaming',
      desc: 'How data architectures differ by timing',
      leftBox: {
        title: 'Batch Processing',
        items: [
          'Processes data over a massive window of time',
          'High latency (hours to days)',
          'Requires storing all data before processing',
          'Complex queries spanning historical data are easy',
          'Example: Apache Hadoop (MapReduce)'
        ],
        color: 'blue'
      },
      rightBox: {
        title: 'Stream Processing',
        items: [
          'Processes data as continuous streams natively',
          'Low latency (milliseconds to seconds)',
          'Processes data individually or in micro-batches',
          'Complex queries requiring state logic are harder',
          'Example: Apache Kafka, Apache Spark Streaming'
        ],
        color: 'emerald'
      }
    },
    {
      id: 'sql-vs-nosql',
      title: 'SQL vs NoSQL',
      desc: 'Approaches to storing data',
      leftBox: {
        title: 'SQL Databases',
        items: [
          'Predefined, rigid schema',
          'Vertically scalable (upgrading CPU/RAM)',
          'ACID compliant (Atomicity, Consistency, Isolation, Durability)',
          'Best for complex multi-row transactions',
          'Example: PostgreSQL, MySQL'
        ],
        color: 'indigo'
      },
      rightBox: {
        title: 'NoSQL Databases',
        items: [
          'Dynamic schema (JSON/Document based)',
          'Horizontally scalable (adding commodity servers)',
          'BASE compliant (Basically Available, Soft-state, Eventually-consistent)',
          'Best for rapid scaling and unstructured data',
          'Example: MongoDB, Cassandra'
        ],
        color: 'orange'
      }
    },
    {
      id: 'hadoop-vs-spark',
      title: 'Hadoop vs Spark',
      desc: 'The evolution of Big Data processing',
      leftBox: {
        title: 'Apache Hadoop',
        items: [
          'Processes data on disk (I/O intensive)',
          'Best for massive, one-pass batch jobs',
          'Linearly scalable and highly fault tolerant',
          'Slower performance',
          'Primary framework: MapReduce'
        ],
        color: 'yellow'
      },
      rightBox: {
        title: 'Apache Spark',
        items: [
          'Processes data in memory (RAM intensive)',
          'Best for iterative queries and machine learning',
          'Up to 100x faster than Hadoop in memory',
          'More costly infrastructure (requires more RAM)',
          'Supports streaming and batch processing natively'
        ],
        color: 'cyan'
      }
    }
  ];

  const activeData = comparisons.find(c => c.id === activeTab);

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'emerald': return 'bg-emerald-50 border-emerald-200 text-emerald-800';
      case 'indigo': return 'bg-indigo-50 border-indigo-200 text-indigo-800';
      case 'orange': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'yellow': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'cyan': return 'bg-cyan-50 border-cyan-200 text-cyan-800';
      default: return 'bg-slate-50 border-slate-200 text-slate-800';
    }
  };

  const getHeaderColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-600';
      case 'emerald': return 'bg-emerald-600';
      case 'indigo': return 'bg-indigo-600';
      case 'orange': return 'bg-orange-500';
      case 'yellow': return 'bg-yellow-500';
      case 'cyan': return 'bg-cyan-500';
      default: return 'bg-slate-600';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Architecture Comparisons</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Big Data engineering is about tradeoffs. Compare classical architectures and paradigms side by side.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {comparisons.map(comp => (
          <button
            key={comp.id}
            onClick={() => setActiveTab(comp.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2 ${
              activeTab === comp.id
                ? 'bg-indigo-600 text-white transform scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Layers size={18} />
            {comp.title}
          </button>
        ))}
      </div>

      {/* Comparison View */}
      {activeData && (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-500">
          <div className="p-8 text-center border-b border-slate-100 bg-slate-50">
            <h2 className="text-2xl font-bold text-slate-800">{activeData.title}</h2>
            <p className="text-slate-500 mt-2">{activeData.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Box */}
            <div className={`p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-200 ${getColorClasses(activeData.leftBox.color)}`}>
              <div className={`inline-block px-4 py-1.5 rounded-lg text-white font-bold mb-6 shadow-sm ${getHeaderColorClasses(activeData.leftBox.color)}`}>
                {activeData.leftBox.title}
              </div>
              <ul className="space-y-6">
                {activeData.leftBox.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="font-bold opacity-50 shrink-0">0{idx + 1}</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Box */}
            <div className={`p-8 md:p-12 ${getColorClasses(activeData.rightBox.color)}`}>
              <div className={`inline-block px-4 py-1.5 rounded-lg text-white font-bold mb-6 shadow-sm ${getHeaderColorClasses(activeData.rightBox.color)}`}>
                {activeData.rightBox.title}
              </div>
              <ul className="space-y-6">
                {activeData.rightBox.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="font-bold opacity-50 shrink-0">0{idx + 1}</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>
      )}
    </div>
  );
};

export default Comparison;
