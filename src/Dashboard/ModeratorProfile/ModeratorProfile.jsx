
import useRole from "../../hooks/useRole";
import UseAuth from "../../hooks/UseAuth";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { BookOpen, Users, MessageSquare, TrendingUp, Award, Eye } from 'lucide-react';

const ModeratorProfile = () => {
  // Mock data - replace with your actual hooks
    const {user} = UseAuth();
    const role = useRole();

  const statistics = {
    totalScholarship: 145,
    totalApplication: 2847,
    totalReview: 324
  };

  // Chart data
  const barData = [
    { name: 'Jan', applications: 400, scholarships: 240 },
    { name: 'Feb', applications: 300, scholarships: 139 },
    { name: 'Mar', applications: 200, scholarships: 980 },
    { name: 'Apr', applications: 278, scholarships: 390 },
    { name: 'May', applications: 189, scholarships: 480 },
    { name: 'Jun', applications: 239, scholarships: 380 },
  ];

  const pieData = [
    { name: 'Approved', value: 400, color: '#10B981' },
    { name: 'Pending', value: 300, color: '#F59E0B' },
    { name: 'Rejected', value: 200, color: '#EF4444' },
    { name: 'Under Review', value: 100, color: '#8B5CF6' },
  ];

  const statsCards = [
    {
      title: 'Total Scholarships',
      value: statistics?.totalScholarship || 0,
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      change: '+12%'
    },
    {
      title: 'Total Applications',
      value: statistics?.totalApplication || 0,
      icon: <Users className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600',
      change: '+8%'
    },
    {
      title: 'Total Reviews',
      value: statistics?.totalReview || 0,
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      change: '+23%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img 
                src={user?.photoURL} 
                className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-blue-50" 
                alt="Profile" 
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.displayName}
              </h1>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-medium">{role[0]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} text-white`}>
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {card.change}
                    </div>
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-2">{card.title}</h3>
                <p className="text-3xl font-bold text-gray-900">{card.value.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Monthly Overview</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Eye className="w-4 h-4" />
                <span>Last 6 months</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="applications" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="scholarships" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Application Status</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                <span>Current month</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value) => <span className="text-sm text-gray-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Review Applications', color: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
              { label: 'Manage Scholarships', color: 'bg-green-50 text-green-700 hover:bg-green-100' },
              { label: 'Generate Reports', color: 'bg-purple-50 text-purple-700 hover:bg-purple-100' },
              { label: 'View Analytics', color: 'bg-orange-50 text-orange-700 hover:bg-orange-100' }
            ].map((action, index) => (
              <button
                key={index}
                className={`${action.color} px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModeratorProfile;