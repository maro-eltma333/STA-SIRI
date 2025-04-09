import { useState, useEffect } from 'react';
import { useLanguageStore } from '@/utils/i18n';
import { getTranslation } from '@/utils/translations';
import { getAssessmentData, Question, Option } from '@/data/assessmentData';
import { toast } from 'sonner';

interface AssessmentScreenProps {
  answers: (number | null)[];
  setAnswers: (answers: (number | null)[]) => void;
  onComplete: () => void;
}

const AssessmentScreen = ({ answers, setAnswers, onComplete }: AssessmentScreenProps) => {
  const { language } = useLanguageStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  useEffect(() => {
    setQuestions(getAssessmentData(language));
  }, [language]);

  const totalQuestions = questions.length;

  // Update answers when language changes to maintain selected options
  useEffect(() => {
    if (answers.length !== totalQuestions) {
      setAnswers(new Array(totalQuestions).fill(null));
    }
  }, [questions, setAnswers, answers.length, totalQuestions]);

  const selectOption = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (answers[currentQuestion] === null) {
      toast.error(getTranslation(language, 'assessment.chooseAnswerAlert'), {
        className: 'bg-red-50 border-l-4 border-red-500 text-red-700',
        duration: 3000,
        position: 'top-center',
        icon: '⚠️',
        style: {
          borderRadius: '0.5rem',
          padding: '1rem 1.5rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          background: 'rgba(254, 242, 242, 0.9)',
        },
      });
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete();
    }
  };

  // Calculate progress
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  // Handle empty questions array
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  // Make sure the current question index is valid
  const safeCurrentQuestion = Math.min(currentQuestion, questions.length - 1);
  const question = questions[safeCurrentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Progress bar */}
      <div className="progress-container mb-2 sm:mb-3">
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text text-sm">
          <span>
            {getTranslation(language, 'assessment.questionCount')
              .replace('{current}', (safeCurrentQuestion + 1).toString())
              .replace('{total}', totalQuestions.toString())}
          </span>
          <span>
            {getTranslation(language, 'assessment.progressPercent')
              .replace('{percent}', Math.round(progress).toString())}
          </span>
        </div>
      </div>

      {/* Dimension info */}
      <div className="dimension-info mb-2 sm:mb-3 p-2 sm:p-3 bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-lg shadow-sm">
        <div className="dimension-title text-base font-semibold text-gray-800 mb-0.5">
          {question.category}
        </div>
        <div className="dimension-description text-sm text-gray-600 leading-relaxed">
          {question.dimension}: {question.description}
        </div>
      </div>

      {/* Question card */}
      <div className="assessment-card p-2 sm:p-3 md:p-4">
        <div className="question-header mb-2 sm:mb-3">
          <div className="question-title text-base">{question.question}</div>
          <div className="question-number text-sm">{safeCurrentQuestion + 1}/{totalQuestions}</div>
        </div>

        {/* Options */}
        <div className="options space-y-2">
          {question.options.map((option: Option, index: number) => (
            <div 
              key={index}
              className={`option ${answers[safeCurrentQuestion] === index ? 'selected' : ''} p-3 rounded-lg border-2 transition-all duration-300 hover:border-sta-primary hover:shadow-md`}
              onClick={() => selectOption(index)}
            >
              <span className="text-sm flex-1">
                {option.text}
              </span>
              {answers[safeCurrentQuestion] === index && (
                <span className="text-green-500 text-xl font-bold">✓</span>
              )}
            </div>
          ))}
        </div>

        {/* Rating scale */}
        <div className="rating-scale mt-2 sm:mt-3 p-1.5">
          {[0, 1, 2, 3, 4, 5].map((level) => {
            const levelName = questions.length > 0 && 
                             questions[0].options && 
                             questions[0].options.length > 0
              ? questions[0].options.find(opt => opt.level === level)?.text.split(' ')[0]
              : `Level ${level}`;
            
            const isActive = safeCurrentQuestion >= 0 && 
                           safeCurrentQuestion < questions.length &&
                           answers[safeCurrentQuestion] !== null && 
                           typeof answers[safeCurrentQuestion] === 'number' &&
                           questions[safeCurrentQuestion].options && 
                           questions[safeCurrentQuestion].options[answers[safeCurrentQuestion] as number] &&
                           questions[safeCurrentQuestion].options[answers[safeCurrentQuestion] as number].level === level;

            const getLevelColor = (level: number) => {
              if (!isActive) return 'bg-gray-100';
              switch (level) {
                case 0:
                  return 'bg-red-500';
                case 1:
                  return 'bg-orange-500';
                case 2:
                  return 'bg-yellow-500';
                case 3:
                  return 'bg-blue-500';
                case 4:
                  return 'bg-gray-500';
                case 5:
                  return 'bg-green-500';
                default:
                  return 'bg-gray-100';
              }
            };
            
            return (
              <div 
                key={level} 
                className={`rating-level ${isActive ? 'active' : ''} ${getLevelColor(level)} text-sm p-1`}
                data-level={level}
              >
                {levelName || `Level ${level}`}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="navigation mt-2 sm:mt-3 gap-2">
        <button 
          className="btn btn-secondary px-3 py-1.5 text-sm" 
          onClick={prevQuestion}
          disabled={safeCurrentQuestion === 0}
        >
          {getTranslation(language, 'assessment.prevButton')}
        </button>
        <button 
          className="btn btn-primary px-3 py-1.5 text-sm" 
          onClick={nextQuestion}
        >
          {safeCurrentQuestion === totalQuestions - 1 
            ? getTranslation(language, answers[safeCurrentQuestion] === null ? 'assessment.chooseAnswerButton' : 'assessment.showResultsButton')
            : getTranslation(language, answers[safeCurrentQuestion] === null ? 'assessment.chooseAnswerButton' : 'assessment.nextButton')}
        </button>
      </div>
    </div>
  );
};

export default AssessmentScreen;
