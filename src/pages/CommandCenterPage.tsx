import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { ShieldAlert, Users, Calendar, Activity, Bell, FileText } from 'lucide-react';

const mockRegData = [
  { name: 'Mon', regs: 4 },
  { name: 'Tue', regs: 12 },
  { name: 'Wed', regs: 25 },
  { name: 'Thu', regs: 31 },
  { name: 'Fri', regs: 48 },
  { name: 'Sat', regs: 65 },
  { name: 'Sun', regs: 80 },
];

const mockEventCatData = [
  { name: 'Technical', count: 6 },
  { name: 'Non-Technical', count: 4 },
];

const mockEventDayData = [
  { name: 'Day 1', value: 5 },
  { name: 'Day 2', value: 5 },
];

const COLORS = ['#FF6A00', '#D9A441', '#FF8A1F', '#FFE2A3'];

const CommandCenterPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-12 px-4 md:px-8 font-inter">
      {/* Demo Banner */}
      <div className="bg-[#FF6A00]/20 border border-[#FF6A00] text-[#FF8A1F] px-4 py-2 rounded mb-8 flex items-center justify-center space-x-2">
        <ShieldAlert size={18} />
        <span className="text-sm font-semibold tracking-wider uppercase">Demo Mode Active - Read Only</span>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#D9A441] mb-2">
          COMMAND CENTER
        </h1>
        <p className="text-[#A9A9A5]">Organizer Dashboard & Analytics Overview</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<FileText />} title="TOTAL EVENTS" value="10" />
        <StatCard icon={<Users />} title="REGISTRATIONS" value="0" />
        <StatCard icon={<Calendar />} title="DAY 1 EVENTS" value="5" />
        <StatCard icon={<Calendar />} title="DAY 2 EVENTS" value="5" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <ChartCard title="Registration Trends (Mock)" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockRegData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#151618" />
              <XAxis dataKey="name" stroke="#A9A9A5" />
              <YAxis stroke="#A9A9A5" />
              <Tooltip
                contentStyle={{ backgroundColor: '#111214', border: '1px solid #5C421D' }}
                itemStyle={{ color: '#F5F2EA' }}
              />
              <Legend />
              <Line type="monotone" dataKey="regs" stroke="#FF6A00" strokeWidth={2} dot={{ fill: '#FF6A00', r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Events by Category">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockEventCatData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#151618" />
              <XAxis dataKey="name" stroke="#A9A9A5" />
              <YAxis stroke="#A9A9A5" />
              <Tooltip
                contentStyle={{ backgroundColor: '#111214', border: '1px solid #5C421D' }}
                cursor={{ fill: '#151618' }}
              />
              <Bar dataKey="count" fill="#D9A441" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Events by Day">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockEventDayData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {mockEventDayData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#111214', border: '1px solid #5C421D' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Recent Announcements" className="lg:col-span-2">
          <div className="space-y-4">
            <div className="p-4 bg-[#111214] border border-[#151618] rounded-lg">
              <div className="flex items-center space-x-2 text-[#FF8A1F] mb-1">
                <Bell size={16} />
                <span className="text-sm font-semibold">System Update</span>
              </div>
              <p className="text-[#A9A9A5] text-sm">Dashboard initialized for demo mode. Welcome to JEVION 2K26 command center.</p>
            </div>
            <div className="p-4 bg-[#111214] border border-[#151618] rounded-lg">
              <div className="flex items-center space-x-2 text-[#D9A441] mb-1">
                <Activity size={16} />
                <span className="text-sm font-semibold">Registration Open</span>
              </div>
              <p className="text-[#A9A9A5] text-sm">Registrations for JEVION 2K26 events are officially live globally.</p>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-[#151618] border border-[#5C421D]/30 p-6 rounded-xl flex items-center space-x-4 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF6A00]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
    <div className="p-3 bg-[#111214] rounded-lg text-[#FF6A00]">
      {icon}
    </div>
    <div>
      <p className="text-[#A9A9A5] text-xs font-semibold tracking-wider">{title}</p>
      <h3 className="text-2xl font-orbitron text-[#F5F2EA]">{value}</h3>
    </div>
  </motion.div>
);

const ChartCard = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#151618] border border-[#5C421D]/30 p-6 rounded-xl ${className}`}>
    <h3 className="text-lg font-orbitron text-[#F5F2EA] mb-6 border-b border-[#5C421D]/30 pb-2">{title}</h3>
    {children}
  </div>
);

export default CommandCenterPage;
