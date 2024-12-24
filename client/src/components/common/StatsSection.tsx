// StatsSection.tsx
import { motion } from 'framer-motion';
import { useCounter } from '../../hooks/useCounter';

interface StatItem {
  endNumber: number;
  label: string;
  suffix: string;
  icon: string;
  color: string;
}

const StatsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stats: StatItem[] = [
    { 
      endNumber: 50000, 
      label: "Happy Students", 
      suffix: "K+", 
      icon: "👨‍🎓",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      endNumber: 1000, 
      label: "Verified Properties", 
      suffix: "+", 
      icon: "🏠",
      color: "from-teal-500 to-cyan-600"
    },
    { 
      endNumber: 98, 
      label: "Satisfaction Rate", 
      suffix: "%", 
      icon: "⭐",
      color: "from-cyan-500 to-blue-600"
    },
    { 
      endNumber: 24, 
      label: "Support Available", 
      suffix: "/7", 
      icon: "💬",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="relative -mt-16 z-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const count = useCounter(stat.endNumber);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-[#2B7A78]/5 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4`}>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {count.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default StatsSection;