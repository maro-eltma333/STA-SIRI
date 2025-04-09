import { Language } from './i18n';

export type TranslationKey = 
  | 'appTitle'
  | 'appSubtitle'
  | 'siriLabel'
  | 'startScreen.title'
  | 'startScreen.description1'
  | 'startScreen.description2'
  | 'startScreen.startButton'
  | 'assessment.questionCount'
  | 'assessment.progressPercent'
  | 'assessment.prevButton'
  | 'assessment.nextButton'
  | 'assessment.chooseAnswerButton'
  | 'assessment.showResultsButton'
  | 'assessment.chooseAnswerAlert'
  | 'results.title'
  | 'results.scoreLabel'
  | 'results.scoreDescription'
  | 'results.levelDescription'
  | 'results.dimensionScoresTitle'
  | 'results.restartButton'
  | 'results.printReport'
  | 'levels.0.name'
  | 'levels.0.description'
  | 'levels.1.name'
  | 'levels.1.description'
  | 'levels.2.name'
  | 'levels.2.description'
  | 'levels.3.name'
  | 'levels.3.description'
  | 'levels.4.name'
  | 'levels.4.description'
  | 'levels.5.name'
  | 'levels.5.description'
  | 'languageSwitch';

// Define the translations
export const translations: Record<Language, Record<TranslationKey, string>> = {
  ar: {
    appTitle: 'STA Academy',
    appSubtitle: 'تقييم جاهزية المصنع',
    siriLabel: 'مؤشر جاهزية الصناعة الذكية (SIRI)',
    'startScreen.title': 'مرحبًا بكم في تقييم جاهزية المصنع',
    'startScreen.description1': 'هذا التقييم يساعدك على قياس مدى جاهزية مصنعك لتطبيقات الثورة الصناعية الرابعة بناءً على معيار SIRI المعتمد من المنتدى الاقتصادي العالمي.',
    'startScreen.description2': 'سيتكون التقييم من 16 سؤالًا تغطي جميع جوانب المصنع.',
    'startScreen.startButton': 'بدء التقييم',
    'assessment.questionCount': 'السؤال {current} من {total}',
    'assessment.progressPercent': '{percent}% مكتمل',
    'assessment.prevButton': 'السابق',
    'assessment.nextButton': 'التالي',
    'assessment.chooseAnswerButton': 'اختيار إجابة',
    'assessment.showResultsButton': 'عرض النتائج',
    'assessment.chooseAnswerAlert': 'الرجاء اختيار إجابة قبل المتابعة',
    'results.title': 'نتيجة تقييم جاهزية المصنع',
    'results.scoreLabel': 'من 5',
    'results.scoreDescription': 'درجة جاهزية المصنع',
    'results.levelDescription': 'بناءً على إجاباتك، مصنعك في مستوى {level} ({description})',
    'results.dimensionScoresTitle': 'التقييم حسب الأبعاد',
    'results.restartButton': 'إعادة التقييم',
    'results.printReport': 'طباعة النتيجة',
    'levels.0.name': 'غير معرف',
    'levels.0.description': 'المصنع لم يبدأ بعد في رحلة التحول الرقمي',
    'levels.1.name': 'معرفة',
    'levels.1.description': 'بداية الوعي بالتحول الرقمي مع عمليات يدوية',
    'levels.2.name': 'رقمية',
    'levels.2.description': 'بداية استخدام الأنظمة الرقمية الأساسية',
    'levels.3.name': 'متكاملة',
    'levels.3.description': 'تكامل الأنظمة والعمليات داخل المصنع',
    'levels.4.name': 'مؤتمتة',
    'levels.4.description': 'أتمتة متقدمة للعمليات مع تحليل البيانات',
    'levels.5.name': 'ذكية',
    'levels.5.description': 'استخدام الذكاء الاصطناعي والتحول الكامل',
    'languageSwitch': 'English'
  },
  en: {
    appTitle: 'STA Academy',
    appSubtitle: 'Factory Readiness Assessment',
    siriLabel: 'Smart Industry Readiness Index (SIRI)',
    'startScreen.title': 'Welcome to Factory Readiness Assessment',
    'startScreen.description1': 'This assessment helps you measure your factory\'s readiness for Industry 4.0 applications based on the SIRI standard adopted by the World Economic Forum.',
    'startScreen.description2': 'The assessment will consist of 16 questions covering all aspects of the factory.',
    'startScreen.startButton': 'Start Assessment',
    'assessment.questionCount': 'Question {current} of {total}',
    'assessment.progressPercent': '{percent}% Complete',
    'assessment.prevButton': 'Previous',
    'assessment.nextButton': 'Next',
    'assessment.chooseAnswerButton': 'Choose Answer',
    'assessment.showResultsButton': 'Show Results',
    'assessment.chooseAnswerAlert': 'Please choose an answer before continuing',
    'results.title': 'Factory Readiness Assessment Result',
    'results.scoreLabel': 'out of 5',
    'results.scoreDescription': 'Factory Readiness Score',
    'results.levelDescription': 'Based on your answers, your factory is at {level} level ({description})',
    'results.dimensionScoresTitle': 'Assessment by Dimension',
    'results.restartButton': 'Restart Assessment',
    'results.printReport': 'Print The Result',
    'levels.0.name': 'Undefined',
    'levels.0.description': 'The factory has not yet started the digital transformation journey',
    'levels.1.name': 'Basic',
    'levels.1.description': 'Beginning awareness of digital transformation with manual operations',
    'levels.2.name': 'Digital',
    'levels.2.description': 'Starting to use basic digital systems',
    'levels.3.name': 'Integrated',
    'levels.3.description': 'Integration of systems and processes within the factory',
    'levels.4.name': 'Automated',
    'levels.4.description': 'Advanced automation of processes with data analysis',
    'levels.5.name': 'Intelligent',
    'levels.5.description': 'Use of artificial intelligence and complete transformation',
    'languageSwitch': 'العربية'
  }
};

// Function to get a translation by key
export const getTranslation = (language: Language, key: TranslationKey): string => {
  return translations[language][key] || key;
};
