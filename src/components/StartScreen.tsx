import { useLanguageStore } from '@/utils/i18n';
import { getTranslation } from '@/utils/translations';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Cpu, Database } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const { language } = useLanguageStore();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="assessment-card relative overflow-hidden bg-white rounded-2xl shadow-xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-sta-light/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-sta-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4aDEydjEySDM2Vjh6bTAgMTZoMTJ2MTJIMzZWMjR6bS0xNiAwaDEydjEySDIwVjI0em0wLTE2aDEydjEySDIwVjh6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS1vcGFjaXR5PSIuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
        </div>
        
        <div className="relative z-10 p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sta-dark mb-3 sm:mb-4">
                {getTranslation(language, 'startScreen.title')}
              </h2>
              
              <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {getTranslation(language, 'startScreen.description1')}
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {getTranslation(language, 'startScreen.description2')}
                </p>
              </div>
            </motion.div>

            <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3 bg-sta-light/50 p-4 sm:p-6 rounded-xl hover:bg-sta-light/70 transition-colors duration-300"
                >
                  <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-sta-primary" />
                  <span className="text-base sm:text-lg font-medium text-center">Industry 4.0 Alignment</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3 bg-sta-light/50 p-4 sm:p-6 rounded-xl hover:bg-sta-light/70 transition-colors duration-300"
                >
                  <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-sta-primary" />
                  <span className="text-base sm:text-lg font-medium text-center">SIRI Framework</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3 bg-sta-light/50 p-4 sm:p-6 rounded-xl hover:bg-sta-light/70 transition-colors duration-300"
                >
                  <Database className="w-6 h-6 sm:w-8 sm:h-8 text-sta-primary" />
                  <span className="text-base sm:text-lg font-medium text-center">16 Questions</span>
                </motion.div>
              </div>
            </div>

            <motion.button 
              onClick={onStart}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary mt-6 sm:mt-8 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full"
            >
              <span className="flex items-center gap-2 sm:gap-3 relative z-10">
                {getTranslation(language, 'startScreen.startButton')}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
