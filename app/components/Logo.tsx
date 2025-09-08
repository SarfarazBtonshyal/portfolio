import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
      className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        className="relative z-10"
      >
        <motion.path 
          d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C13.5 4.5 14.9 4.9 16.1 5.6" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.path 
          d="M12 19.5C12 15.3579 15.3579 12 19.5 12C20.5 12 21.5 12.2 22.4 12.7" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.svg>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-blue-400/30"
        animate={{
          x: [0, 10, 0, -10, 0],
          y: [0, -10, 5, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
}
