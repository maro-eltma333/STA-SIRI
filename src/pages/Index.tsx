import { useState, useEffect } from 'react';
import { useLanguageStore, applyLanguageToDocument } from '@/utils/i18n';
import Header from '@/components/Header';
import StartScreen from '@/components/StartScreen';
import AssessmentScreen from '@/components/AssessmentScreen';
import ResultsScreen from '@/components/ResultsScreen';
import { getAssessmentData } from '@/data/assessmentData';

const Index = () => {
  const { language } = useLanguageStore();
  const [screen, setScreen] = useState<'start' | 'assessment' | 'results'>('start');
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  
  // Apply language direction on load and when language changes
  useEffect(() => {
    applyLanguageToDocument(language);
  }, [language]);
  
  // Initialize answers array
  useEffect(() => {
    const questions = getAssessmentData(language);
    setAnswers(new Array(questions.length).fill(null));
  }, [language]);
  
  const startAssessment = () => {
    setScreen('assessment');
  };
  
  const completeAssessment = () => {
    setScreen('results');
  };
  
  const restartAssessment = () => {
    const questions = getAssessmentData(language);
    setAnswers(new Array(questions.length).fill(null));
    setScreen('start');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {screen === 'start' && <StartScreen onStart={startAssessment} />}
        
        {screen === 'assessment' && (
          <AssessmentScreen 
            answers={answers} 
            setAnswers={setAnswers} 
            onComplete={completeAssessment} 
          />
        )}
        
        {screen === 'results' && (
          <ResultsScreen 
            answers={answers} 
            questions={getAssessmentData(language)}
            onRestart={restartAssessment} 
          />
        )}
      </main>
      
      <footer className="bg-sta-dark text-white py-4 text-center text-sm">
        <div className="container mx-auto px-4">
          STA Academy © {new Date().getFullYear()} - SIRI Factory Readiness Assessment
        </div>
      </footer>
    </div>
  );
};

export default Index;
