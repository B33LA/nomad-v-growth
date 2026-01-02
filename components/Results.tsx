import React from 'react';
import { TrendingUp, Users, Calendar, Target } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// More realistic data - showing growth over 6 months
const data = [
  { name: 'Month 1', meetings: 8, emails: 1200 },
  { name: 'Month 2', meetings: 15, emails: 2100 },
  { name: 'Month 3', meetings: 23, emails: 2800 },
  { name: 'Month 4', meetings: 31, emails: 3200 },
  { name: 'Month 5', meetings: 38, emails: 3500 },
  { name: 'Month 6', meetings: 45, emails: 3800 },
];

// Realistic stats
const stats = [
  {
    icon: Calendar,
    value: '20+',
    label: 'Qualified Meetings',
    subtext: 'Per Month Average',
    color: 'text-brand-red'
  },
  {
    icon: TrendingUp,
    value: '23%',
    label: 'Average Reply Rate',
    subtext: 'Across All Channels',
    color: 'text-brand-red'
  },
  {
    icon: Users,
    value: '2,500+',
    label: 'Decision Makers',
    subtext: 'Reached Monthly',
    color: 'text-brand-red'
  },
  {
    icon: Target,
    value: '75%',
    label: 'Show-Up Rate',
    subtext: 'For Booked Calls',
    color: 'text-brand-red'
  }
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brand-red text-sm font-bold uppercase tracking-widest px-4 py-1 border border-brand-red/30 bg-brand-red/5">
              Real Results
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            The Numbers <span className="text-brand-red">Speak</span> For Themselves
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            We don't just send emails and hope for the best. Every campaign is tracked, optimized, and refined for maximum ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-brand-black border border-neutral-800 p-6 hover:border-brand-red/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="text-brand-red group-hover:scale-110 transition-transform" size={32} />
                    <div className={`text-4xl font-black ${stat.color} tracking-tighter`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold uppercase text-sm tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-brand-gray text-xs">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="bg-brand-black border border-neutral-800 p-8 shadow-2xl hover:border-brand-red/30 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-red animate-pulse"></span>
                Meeting Pipeline Growth
              </h3>
              <span className="text-brand-gray text-xs uppercase tracking-wider">6-Month Avg</span>
            </div>
            
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorMeetings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E63946" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#E63946" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#666" 
                    fontSize={11} 
                    tickLine={false} 
                    axisLine={{ stroke: '#333' }}
                  />
                  <YAxis 
                    stroke="#666" 
                    fontSize={11} 
                    tickLine={false} 
                    axisLine={{ stroke: '#333' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1D23', 
                      border: '1px solid #E63946', 
                      borderRadius: '0',
                      color: '#fff',
                      padding: '8px 12px'
                    }}
                    itemStyle={{ color: '#E63946', fontWeight: 'bold' }}
                    labelStyle={{ color: '#999', fontSize: '12px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="meetings" 
                    stroke="#E63946" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorMeetings)"
                    name="Qualified Meetings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 pt-6 border-t border-neutral-800">
              <div className="flex items-center justify-between text-xs">
                <p className="text-brand-gray uppercase tracking-wider">
                  <span className="text-brand-red font-bold">+462%</span> Growth Rate
                </p>
                <p className="text-brand-gray">
                  Data: Q4 2024
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Social Proof Bar */}
        <div className="bg-gradient-to-r from-brand-black via-brand-charcoal to-brand-black border-y border-neutral-800 py-8 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-white text-2xl font-black mb-1">$2.4M+ in Pipeline Generated</p>
              <p className="text-brand-gray text-sm">For our clients in the last 6 months</p>
            </div>
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-brand-redDark transition-all whitespace-nowrap hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
            >
              Get Similar Results
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Results;