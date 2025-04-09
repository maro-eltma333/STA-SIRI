import { useEffect, useState } from 'react';
import { useLanguageStore } from '@/utils/i18n';
import { getTranslation } from '@/utils/translations';
import { getAssessmentData, getLevels, Question } from '@/data/assessmentData';
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

interface ResultsScreenProps {
  answers: (number | null)[];
  questions: Question[];
  onRestart: () => void;
}

interface DimensionResult {
  dimension: string;
  category: string;
  score: number;
}

const ResultsScreen = ({ answers, questions, onRestart }: ResultsScreenProps) => {
  const { language } = useLanguageStore();
  const [dimensionResults, setDimensionResults] = useState<DimensionResult[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Calculate the overall score
    let total = 0;
    let answered = 0;
    
    answers.forEach((answer, index) => {
      if (answer !== null && index < questions.length) {
        total += questions[index].options[answer].level;
        answered++;
      }
    });
    
    const calculatedScore = answered > 0 ? total / answered : 0;
    setScore(calculatedScore);
    
    // Group results by dimension
    const results: Record<string, { total: number; count: number; category: string }> = {};
    
    questions.forEach((question, index) => {
      if (answers[index] !== null) {
        const level = question.options[answers[index] as number].level;
        
        if (!results[question.dimension]) {
          results[question.dimension] = {
            total: 0,
            count: 0,
            category: question.category,
          };
        }
        
        results[question.dimension].total += level;
        results[question.dimension].count++;
      }
    });
    
    // Convert to array and calculate averages
    const dimensionScores: DimensionResult[] = Object.keys(results).map(dimension => ({
      dimension,
      category: results[dimension].category,
      score: results[dimension].total / results[dimension].count,
    }));
    
    setDimensionResults(dimensionScores);
  }, [answers, questions]);

  // Function to get color based on score percentage
  const getScoreColor = (score: number): string => {
    const percentage = (score / 5) * 100;
    if (percentage <= 20) return '#FF0000'; // Red
    if (percentage <= 40) return '#FF6B00'; // Orange
    if (percentage <= 60) return '#FFC700'; // Yellow
    if (percentage <= 70) return '#3B82F6'; // Blue
    if (percentage <= 80) return '#6B7280'; // Gray
    return '#2FB344'; // Dark Green
  };

  // Get level description
  const roundedScore = Math.round(score);
  const levels = getLevels(language);
  const level = levels[roundedScore] || levels[0];
  
  // Print report function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="assessment-card">
      <div className="results-header">
        <h2 className="text-2xl font-bold text-sta-primary text-center mb-2">
          {getTranslation(language, 'results.title')}
        </h2>
        <div className="text-center">
          <p className="text-sm text-gray-600 print-date">
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      
      {/* Print button - hidden when printing */}
      <div className="print:hidden flex justify-end mb-4">
        <Button 
          onClick={handlePrint} 
          className="bg-sta-primary hover:bg-sta-dark text-white"
        >
          <Printer className="mr-2 h-4 w-4" />
          {getTranslation(language, 'results.printReport')}
        </Button>
      </div>
      
      {/* Score summary */}
      <div className="result-summary">
        <div className="score-circle">
          <div 
            className="circle-progress"
            style={{
              background: `conic-gradient(${getScoreColor(score)} ${(score / 5) * 100}%, #eee ${(score / 5) * 100}%)`
            }}
          >
            <span>{score.toFixed(1)}</span>
          </div>
          <div className="score-label">{getTranslation(language, 'results.scoreLabel')}</div>
        </div>
        <div className="score-description">
          <p>{getTranslation(language, 'results.scoreDescription')}</p>
          <p>
            {getTranslation(language, 'results.levelDescription')
              .replace('{level}', level.name)
              .replace('{description}', level.description)}
          </p>
        </div>
      </div>

      {/* Dimension scores */}
      <div className="dimension-scores">
        <h3 className="text-xl font-bold text-sta-dark mb-4">
          {getTranslation(language, 'results.dimensionScoresTitle')}
        </h3>
        <div className="dimensions-container">
          {dimensionResults.map((result, index) => (
            <div key={index} className="dimension-score">
              <h4>{result.dimension} ({result.category})</h4>
              <div className="dimension-info">
                <div className="score-bar-container">
                  <div className="score-bar">
                    <div 
                      className="score-bar-fill"
                      style={{ 
                        width: `${(result.score / 5) * 100}%`,
                        backgroundColor: getScoreColor(result.score)
                      }}
                    ></div>
                  </div>
                </div>
                <div className="score-value">{result.score.toFixed(1)}/5</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restart button - hidden when printing */}
      <div className="mt-8 text-center print:hidden">
        <button
          onClick={onRestart}
          className="btn btn-primary"
        >
          {getTranslation(language, 'results.restartButton')}
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
