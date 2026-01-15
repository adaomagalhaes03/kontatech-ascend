import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  TrendingUp,
  DollarSign,
  Calendar,
  Bell
} from 'lucide-react';
import logo from '@/assets/logo.jpeg';
import { toast } from 'sonner';

const sidebarLinks = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
  { name: 'Clientes', icon: Users, href: '#clientes' },
  { name: 'Relatórios', icon: FileText, href: '#relatorios' },
  { name: 'Configurações', icon: Settings, href: '#configuracoes' },
];

const stats = [
  { name: 'Total Clientes', value: '124', icon: Users, change: '+12%', color: 'text-blue-400' },
  { name: 'Receita Mensal', value: '45.2M Kz', icon: DollarSign, change: '+23%', color: 'text-green-400' },
  { name: 'Consultas Agendadas', value: '18', icon: Calendar, change: '+5%', color: 'text-purple-400' },
  { name: 'Taxa de Crescimento', value: '89%', icon: TrendingUp, change: '+8%', color: 'text-gold' },
];

const recentClients = [
  { name: 'Empresa ABC, Lda', plan: 'Premium', status: 'Ativo', date: '15 Jan 2026' },
  { name: 'Tech Solutions Angola', plan: 'Profissional', status: 'Ativo', date: '14 Jan 2026' },
  { name: 'Comércio Global', plan: 'Básico', status: 'Pendente', date: '13 Jan 2026' },
  { name: 'Indústria Nova, SA', plan: 'Premium', status: 'Ativo', date: '12 Jan 2026' },
  { name: 'Serviços Integrados', plan: 'Profissional', status: 'Ativo', date: '11 Jan 2026' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    const userData = localStorage.getItem('adminUser');
    
    if (!isLoggedIn) {
      navigate('/admin/login');
    } else if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUser');
    toast.success('Sessão terminada');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25 }}
        className={`fixed lg:relative z-40 h-screen w-64 bg-card/50 backdrop-blur-xl border-r border-white/10 flex flex-col ${
          isSidebarOpen ? '' : 'lg:w-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kontatech" className="h-10 w-auto rounded-lg" />
            <div>
              <h2 className="font-semibold text-sm">Kontatech</h2>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => setActiveSection(link.href.replace('#', ''))}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-gold/20 text-gold border border-gold/30'
                  : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.name}</span>
            </motion.button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10">
          <motion.button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-300"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sair</span>
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div>
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Bem-vindo de volta!</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                className="p-2 rounded-lg hover:bg-white/5 transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
              </motion.button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-semibold text-sm">
                    {user?.name?.charAt(0) || user?.email?.charAt(0) || 'A'}
                  </span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">{user?.name || 'Admin'}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Clients Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">
              <h2 className="text-lg font-semibold">Clientes Recentes</h2>
              <p className="text-sm text-muted-foreground">Últimos clientes registados</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Cliente</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Plano</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Estado</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {recentClients.map((client, index) => (
                    <motion.tr
                      key={client.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="border-t border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium">{client.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          client.plan === 'Premium' 
                            ? 'bg-gold/20 text-gold' 
                            : client.plan === 'Profissional'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-white/10 text-muted-foreground'
                        }`}>
                          {client.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          client.status === 'Ativo' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{client.date}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
