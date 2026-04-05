import { useState, useEffect } from 'react';
import { Database, Filter, ArrowRight, BarChart3, Server, Activity, Smartphone, CheckCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock chart data
const initialData = [
  { time: '00:00', events: 120 },
  { time: '04:00', events: 210 },
  { time: '08:00', events: 800 },
  { time: '12:00', events: 1400 },
  { time: '16:00', events: 900 },
  { time: '20:00', events: 400 },
];

const steps = [
  {
    id: 1,
    name: 'Ingestion',
    icon: <Smartphone size={24} />,
    desc: 'Generating and collecting event data (e.g. via Apache Kafka)',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Processing',
    icon: <Activity size={24} />,
    desc: 'Filtering and aggregating in real-time (e.g. via Apache Spark)',
    color: 'bg-purple-500'
  },
  {
    id: 3,
    name: 'Storage',
    icon: <Database size={24} />,
    desc: 'Persisting processed data (e.g. into HDFS or NoSQL)',
    color: 'bg-emerald-500'
  },
  {
    id: 4,
    name: 'Visualization',
    icon: <BarChart3 size={24} />,
    desc: 'Serving data to BI dashboards for final insights',
    color: 'bg-orange-500'
  }
];

const Demo = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      if (activeStep < steps.length) {
        timer = setTimeout(() => {
          setActiveStep(prev => prev + 1);
        }, 2000); // Advance step every 2s
      } else if (activeStep === steps.length) {
        // At final step, populate the chart
        timer = setTimeout(() => {
          setChartData(initialData);
          setIsPlaying(false);
        }, 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, activeStep]);

  const handleStartSimulation = () => {
    setActiveStep(1);
    setChartData([]);
    setIsPlaying(true);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Mock Data Pipeline Demo</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Watch a simulated data flow moving from raw ingestion through processing, storage, and finally arriving at a visualization dashboard.
        </p>
        
        <button 
          onClick={handleStartSimulation}
          disabled={isPlaying}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95"
        >
          {activeStep === steps.length && !isPlaying ? 'Restart Simulation' : isPlaying ? 'Simulating Pipeline...' : 'Start Data Pipeline'}
        </button>
      </div>

      {/* The Visual Pipeline Pipeline */}
      <div className="relative mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative w-full md:w-1/4">
              
              {/* Connector Line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-1 bg-slate-200 z-[-1]">
                  <div 
                    className={`h-full ${isPlaying && activeStep > step.id ? 'bg-green-400' : 'bg-transparent'} transition-all duration-1000 ease-linear`} 
                    style={{ width: activeStep > step.id ? '100%' : '0%' }}
                  />
                </div>
              )}
              
              {/* Node Circle */}
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white z-10 transition-all duration-500 shadow-md border-4 border-white ${
                  activeStep >= step.id ? step.color : 'bg-slate-300'
                } ${activeStep === step.id && isPlaying ? 'ring-4 ring-indigo-200 shadow-xl scale-125' : ''}`}
              >
                {activeStep > step.id ? <CheckCircle size={24} /> : step.icon}
              </div>
              
              {/* Node Info */}
              <div className={`mt-6 text-center px-4 transition-all duration-500 ${activeStep >= step.id ? 'opacity-100' : 'opacity-40 grayscale'}`}>
                <h3 className="font-bold text-slate-800 text-lg">{step.name}</h3>
                <p className="text-xs text-slate-500 mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Output / Result Console */}
      <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden p-8 border hover:border-slate-700 transition-colors">
        <h3 className="text-white font-bold text-xl mb-6 border-b border-slate-700 pb-4 flex items-center gap-2">
          <Server className="text-indigo-400" />
          Live Dashboard Output
        </h3>
        
        <div className="h-80 w-full bg-slate-800 rounded-xl relative flex items-center justify-center p-4">
          
          {activeStep < 4 ? (
            <div className="text-center text-slate-400 animate-pulse">
              <Server size={48} className="mx-auto mb-4 opacity-50" />
              <p>Waiting for data from earlier pipeline stages...</p>
              {isPlaying && <p className="text-sm mt-2 text-indigo-400">Processing stage: {steps[activeStep-1]?.name}</p>}
            </div>
          ) : chartData.length === 0 ? (
            <div className="text-center text-orange-400">
              <BarChart3 size={48} className="mx-auto mb-4 animate-bounce" />
              <p>Rendering Visualization...</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                  itemStyle={{ color: '#818cf8' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="events" 
                  stroke="#6366f1" 
                  fillOpacity={1} 
                  fill="url(#colorEvents)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}

        </div>
      </div>
    </div>
  );
};

export default Demo;
