import { Language } from '../utils/i18n';

export interface Option {
  text: string;
  level: number;
}

export interface Question {
  category: string;
  dimension: string;
  description: string;
  question: string;
  options: Option[];
}

export interface Level {
  name: string;
  description: string;
}

// Define the assessment data with translations
export const getAssessmentData = (language: Language): Question[] => {
  if (language === 'ar') {
    return [
      // الفئة الأولى: العمليات
      {
        category: "العمليات",
        dimension: "الرقمنة",
        description: "مدى رقمنة عمليات الإنتاج والتصنيع",
        question: "ما مدى رقمنة عمليات الإنتاج والتصنيع في المصنع؟",
        options: [
          { text: "لا يوجد أي استخدام للتقنيات الرقمية", level: 0 },
          { text: "يوجد استخدام محدود للتقنيات الرقمية في بعض الأقسام", level: 1 },
          { text: "تم رقمنة العمليات الأساسية فقط", level: 2 },
          { text: "يتم استخدام الأنظمة الرقمية في معظم العمليات", level: 3 },
          { text: "معظم العمليات مترابطة رقميًا", level: 4 },
          { text: "جميع العمليات رقمية ومتكاملة مع بعضها البعض", level: 5 },
        ],
      },
      {
        category: "العمليات",
        dimension: "إدارة الموارد",
        description: "استخدام نظام متكامل لإدارة موارد المؤسسة",
        question: "هل يتم استخدام نظام متكامل لإدارة موارد المؤسسة؟",
        options: [
          { text: "لا يوجد نظام", level: 0 },
          { text: "يتم دراسة تطبيق النظام", level: 1 },
          { text: "تم البدء في تنفيذ النظام جزئيًا", level: 2 },
          { text: "يتم استخدام النظام في بعض الأقسام", level: 3 },
          { text: "النظام مطبق بشكل كامل", level: 4 },
          { text: "النظام مطبق ومتكامل مع جميع الإدارات والعمليات", level: 5 },
        ],
      },
      {
        category: "العمليات",
        dimension: "البيانات اللحظية",
        description: "توفر بيانات لحظية من خطوط الإنتاج",
        question: "ما مدى توفر بيانات لحظية من خطوط الإنتاج؟",
        options: [
          { text: "لا يتم جمع بيانات", level: 0 },
          { text: "يتم جمع البيانات يدويًا", level: 1 },
          { text: "توجد أجهزة استشعار تجمع بيانات جزئية", level: 2 },
          { text: "يتم جمع البيانات رقميًا ولكن لا يتم تحليلها", level: 3 },
          { text: "البيانات تُحلل وتُستخدم لتحسين الأداء", level: 4 },
          { text: "البيانات لحظية وتُستخدم باستمرار لتحسين الإنتاجية", level: 5 },
        ],
      },
      {
        category: "العمليات",
        dimension: "جدولة الإنتاج",
        description: "استخدام أنظمة متقدمة لجدولة وتحسين الإنتاج",
        question: "هل يتم استخدام أنظمة متقدمة لجدولة وتحسين الإنتاج؟",
        options: [
          { text: "لا يوجد أي نظام", level: 0 },
          { text: "يوجد تخطيط يدوي فقط", level: 1 },
          { text: "يتم استخدام جداول بسيطة", level: 2 },
          { text: "يتم استخدام برنامج جدولة مستقل", level: 3 },
          { text: "يتم استخدام نظام ذكي يساعد في تحسين الجدولة", level: 4 },
          { text: "يوجد نظام متقدم للجدولة يعمل تلقائيًا بناءً على البيانات اللحظية", level: 5 },
        ],
      },
      {
        category: "العمليات",
        dimension: "مراقبة الجودة",
        description: "مراقبة جودة المنتجات بشكل رقمي",
        question: "هل تتم مراقبة جودة المنتجات بشكل رقمي خلال عملية الإنتاج؟",
        options: [
          { text: "لا توجد مراقبة جودة", level: 0 },
          { text: "يتم الفحص يدويًا بعد الإنتاج", level: 1 },
          { text: "يتم الفحص يدويًا أثناء بعض مراحل الإنتاج", level: 2 },
          { text: "يوجد بعض الأجهزة لمراقبة الجودة", level: 3 },
          { text: "تتم مراقبة الجودة رقميًا في أغلب المراحل", level: 4 },
          { text: "تتم مراقبة الجودة بشكل رقمي وتلقائي طوال مراحل الإنتاج", level: 5 },
        ],
      },
      {
        category: "العمليات",
        dimension: "تتبع المنتجات",
        description: "استخدام تقنيات تتبع في الإنتاج",
        question: "هل تُستخدم تقنيات تتبع (مثل الرموز الشريطية أو الترددات اللاسلكية) في الإنتاج؟",
        options: [
          { text: "لا يتم تتبع المنتجات", level: 0 },
          { text: "يتم تتبع بعض المنتجات يدويًا", level: 1 },
          { text: "يتم استخدام الرموز الشريطية في مراحل محددة", level: 2 },
          { text: "يتم استخدام تتبع إلكتروني في معظم المراحل", level: 3 },
          { text: "يتم الربط بين التتبع الرقمي والمخزون", level: 4 },
          { text: "تُستخدم تقنيات تتبع رقمية متقدمة في جميع مراحل الإنتاج والمخازن", level: 5 },
        ],
      },
      // الفئة الثانية: التكنولوجيا
      {
        category: "التكنولوجيا",
        dimension: "البنية التحتية",
        description: "توفر البنية التحتية الرقمية",
        question: "ما مدى توفر البنية التحتية الرقمية داخل المصنع؟",
        options: [
          { text: "لا توجد بنية تحتية رقمية", level: 0 },
          { text: "توجد بنية بسيطة لا تغطي كل الأقسام", level: 1 },
          { text: "توجد بنية تحتية جيدة لكنها غير متكاملة", level: 2 },
          { text: "توجد بنية تحتية قوية تغطي معظم الأقسام", level: 3 },
          { text: "البنية التحتية متكاملة وتدعم العمليات الرقمية", level: 4 },
          { text: "البنية التحتية رقمية متكاملة وتدعم التحول الكامل", level: 5 },
        ],
      },
      {
        category: "التكنولوجيا",
        dimension: "الأجهزة الذكية",
        description: "استخدام تقنيات الأجهزة الذكية",
        question: "هل يتم استخدام تقنيات الأجهزة الذكية لمتابعة المعدات والأصول؟",
        options: [
          { text: "لا يتم استخدام أي تقنيات", level: 0 },
          { text: "استخدام محدود في أقسام محددة", level: 1 },
          { text: "يتم استخدام بعض المستشعرات لمتابعة الأعطال", level: 2 },
          { text: "يتم استخدام أجهزة ذكية لرصد الأداء", level: 3 },
          { text: "يتم ربط الأجهزة الذكية مع النظام التشغيلي", level: 4 },
          { text: "تُستخدم أجهزة ذكية ومتصلة بالنظام بشكل لحظي وشامل", level: 5 },
        ],
      },
      {
        category: "التكنولوجيا",
        dimension: "تحليلات البيانات",
        description: "استخدام تحليلات البيانات لاتخاذ القرارات",
        question: "هل يتم استخدام تحليلات البيانات لاتخاذ قرارات تشغيلية؟",
        options: [
          { text: "لا يتم جمع أو تحليل بيانات", level: 0 },
          { text: "يتم تحليل بيانات بشكل يدوي", level: 1 },
          { text: "يتم استخدام جداول بيانات للتحليل", level: 2 },
          { text: "يتم استخدام أدوات تحليل بسيطة", level: 3 },
          { text: "التحليلات تُستخدم في بعض القرارات", level: 4 },
          { text: "يتم استخدام التحليلات المتقدمة لاتخاذ قرارات لحظية", level: 5 },
        ],
      },
      {
        category: "التكنولوجيا",
        dimension: "الأمن السيبراني",
        description: "حماية الأنظمة من التهديدات الإلكترونية",
        question: "هل الأنظمة مؤمنة ضد التهديدات الإلكترونية؟",
        options: [
          { text: "لا توجد أي إجراءات أمنية", level: 0 },
          { text: "توجد حماية أساسية فقط", level: 1 },
          { text: "يتم تحديث الحماية يدويًا", level: 2 },
          { text: "يتم استخدام أنظمة حماية تلقائية", level: 3 },
          { text: "يتم مراقبة الشبكة ضد التهديدات", level: 4 },
          { text: "يوجد نظام متكامل للأمن السيبراني ويتم اختباره دوريًا", level: 5 },
        ],
      },
      {
        category: "التكنولوجيا",
        dimension: "قابلية التكامل",
        description: "قدرة الأنظمة على التكامل مع التقنيات المستقبلية",
        question: "ما مدى قدرة الأنظمة الحالية على التكامل مع تقنيات مستقبلية؟",
        options: [
          { text: "الأنظمة قديمة ولا تقبل التحديث", level: 0 },
          { text: "يمكن تعديل بعض الأنظمة", level: 1 },
          { text: "يمكن دمج بعض الأدوات الحديثة", level: 2 },
          { text: "الأنظمة مرنة نسبيًا", level: 3 },
          { text: "الأنظمة تقبل التكامل بشروط", level: 4 },
          { text: "الأنظمة قابلة للتكامل بشكل كامل مع أي تقنية جديدة", level: 5 },
        ],
      },
      // الفئة الثالثة: التنظيم
      {
        category: "التنظيم",
        dimension: "خطة التحول",
        description: "وجود خطة واضحة للتحول الرقمي",
        question: "هل لدى المؤسسة خطة واضحة للتحول الرقمي؟",
        options: [
          { text: "لا توجد أي خطة", level: 0 },
          { text: "توجد أفكار غير مكتوبة", level: 1 },
          { text: "توجد خطة أولية بدون تنفيذ", level: 2 },
          { text: "توجد خطة قيد التنفيذ", level: 3 },
          { text: "الخطة تنفذ جزئيًا", level: 4 },
          { text: "يوجد خطة مكتملة ومدعومة من الإدارة وتُنفذ بالكامل", level: 5 },
        ],
      },
      {
        category: "التنظيم",
        dimension: "دعم الإدارة",
        description: "دعم الإدارة العليا للتحول الرقمي",
        question: "هل تدعم الإدارة العليا توجه التحول الرقمي؟",
        options: [
          { text: "لا يوجد دعم", level: 0 },
          { text: "يوجد دعم لفظي فقط", level: 1 },
          { text: "يتم دعم بعض المبادرات", level: 2 },
          { text: "الإدارة تشارك جزئيًا", level: 3 },
          { text: "الإدارة تشارك في التنفيذ", level: 4 },
          { text: "الإدارة العليا داعمة ومشاركة في القيادة الرقمية", level: 5 },
        ],
      },
      {
        category: "التنظيم",
        dimension: "تدريب العاملين",
        description: "تدريب العاملين على المهارات الرقمية",
        question: "هل يتم تدريب العاملين على المهارات الرقمية؟",
        options: [
          { text: "لا توجد برامج تدريب", level: 0 },
          { text: "يتم التدريب عند الحاجة فقط", level: 1 },
          { text: "توجد برامج محدودة", level: 2 },
          { text: "يتم تدريب فرق مختارة", level: 3 },
          { text: "يتم التدريب في أغلب الأقسام", level: 4 },
          { text: "يوجد برنامج تدريبي مستمر وشامل لكافة الموظفين", level: 5 },
        ],
      },
      {
        category: "التنظيم",
        dimension: "ثقافة الابتكار",
        description: "وجود ثقافة تشجع الابتكار",
        question: "هل توجد ثقافة تشجع الابتكار واستخدام التقنيات الحديثة؟",
        options: [
          { text: "لا يوجد اهتمام بالتقنية", level: 0 },
          { text: "يتم تقبل التقنية عند الضرورة", level: 1 },
          { text: "يتم تجربة تقنيات عند الحاجة", level: 2 },
          { text: "يوجد توجه بسيط للتحديث", level: 3 },
          { text: "يتم تشجيع بعض الأفكار", level: 4 },
          { text: "تسود ثقافة الابتكار والتجريب وتبني التقنيات الحديثة", level: 5 },
        ],
      },
      {
        category: "التنظيم",
        dimension: "فريق التحول",
        description: "وجود فريق متخصص للتحول الرقمي",
        question: "هل يوجد فريق متخصص بقيادة التحول الرقمي داخل المصنع؟",
        options: [
          { text: "لا يوجد أي فريق", level: 0 },
          { text: "يتم تعيين مسؤول واحد فقط", level: 1 },
          { text: "توجد لجنة مؤقتة", level: 2 },
          { text: "يوجد فريق بدوام جزئي", level: 3 },
          { text: "الفريق موجود في بعض الأقسام", level: 4 },
          { text: "يوجد فريق مختص بدوام كامل بقيادة تنفيذ التحول الرقمي", level: 5 },
        ],
      },
    ];
  } else {
    return [
      // Category One: Operations
      {
        category: "Operations",
        dimension: "Digitization",
        description: "Extent of digitization in production and manufacturing operations",
        question: "What is the level of digitization in production and manufacturing operations in the factory?",
        options: [
          { text: "No digital technologies are used", level: 0 },
          { text: "Limited use of digital technologies in some departments", level: 1 },
          { text: "Only basic operations are digitized", level: 2 },
          { text: "Digital systems are used in most operations", level: 3 },
          { text: "Most operations are digitally interconnected", level: 4 },
          { text: "All operations are digital and fully integrated", level: 5 },
        ],
      },
      {
        category: "Operations",
        dimension: "Resource Management",
        description: "Use of integrated system for enterprise resource management",
        question: "Is an integrated system used for enterprise resource management?",
        options: [
          { text: "No system exists", level: 0 },
          { text: "System implementation is under study", level: 1 },
          { text: "Partial system implementation has begun", level: 2 },
          { text: "System is used in some departments", level: 3 },
          { text: "System is fully implemented", level: 4 },
          { text: "System is implemented and integrated with all departments and operations", level: 5 },
        ],
      },
      {
        category: "Operations",
        dimension: "Real-time Data",
        description: "Availability of real-time data from production lines",
        question: "What is the level of real-time data availability from production lines?",
        options: [
          { text: "No data collection", level: 0 },
          { text: "Data is collected manually", level: 1 },
          { text: "Sensors collect partial data", level: 2 },
          { text: "Data is collected digitally but not analyzed", level: 3 },
          { text: "Data is analyzed and used to improve performance", level: 4 },
          { text: "Real-time data is continuously used to improve productivity", level: 5 },
        ],
      },
      {
        category: "Operations",
        dimension: "Production Scheduling",
        description: "Use of advanced systems for production scheduling and optimization",
        question: "Are advanced systems used for production scheduling and optimization?",
        options: [
          { text: "No system exists", level: 0 },
          { text: "Only manual planning exists", level: 1 },
          { text: "Simple schedules are used", level: 2 },
          { text: "Independent scheduling software is used", level: 3 },
          { text: "Smart system helps optimize scheduling", level: 4 },
          { text: "Advanced scheduling system operates automatically based on real-time data", level: 5 },
        ],
      },
      {
        category: "Operations",
        dimension: "Quality Monitoring",
        description: "Digital quality monitoring during production",
        question: "Is product quality monitored digitally during the production process?",
        options: [
          { text: "No quality monitoring exists", level: 0 },
          { text: "Manual inspection after production", level: 1 },
          { text: "Manual inspection during some production stages", level: 2 },
          { text: "Some quality monitoring devices exist", level: 3 },
          { text: "Quality is monitored digitally in most stages", level: 4 },
          { text: "Quality is monitored digitally and automatically throughout production", level: 5 },
        ],
      },
      {
        category: "Operations",
        dimension: "Product Tracking",
        description: "Use of tracking technologies in production",
        question: "Are tracking technologies (such as barcodes or RFID) used in production?",
        options: [
          { text: "No product tracking", level: 0 },
          { text: "Some products tracked manually", level: 1 },
          { text: "Barcodes used in specific stages", level: 2 },
          { text: "Electronic tracking used in most stages", level: 3 },
          { text: "Digital tracking integrated with inventory", level: 4 },
          { text: "Advanced digital tracking technologies used throughout production and warehouses", level: 5 },
        ],
      },
      // Category Two: Technology
      {
        category: "Technology",
        dimension: "Infrastructure",
        description: "Availability of digital infrastructure",
        question: "What is the level of digital infrastructure availability within the factory?",
        options: [
          { text: "No digital infrastructure exists", level: 0 },
          { text: "Basic infrastructure that doesn't cover all departments", level: 1 },
          { text: "Good infrastructure but not integrated", level: 2 },
          { text: "Strong infrastructure covering most departments", level: 3 },
          { text: "Infrastructure is integrated and supports digital operations", level: 4 },
          { text: "Infrastructure is fully digital and supports complete transformation", level: 5 },
        ],
      },
      {
        category: "Technology",
        dimension: "Smart Devices",
        description: "Use of smart device technologies",
        question: "Are smart device technologies used to monitor equipment and assets?",
        options: [
          { text: "No technologies are used", level: 0 },
          { text: "Limited use in specific departments", level: 1 },
          { text: "Some sensors used to monitor malfunctions", level: 2 },
          { text: "Smart devices used to monitor performance", level: 3 },
          { text: "Smart devices linked with operational system", level: 4 },
          { text: "Smart devices connected to system in real-time comprehensively", level: 5 },
        ],
      },
      {
        category: "Technology",
        dimension: "Data Analytics",
        description: "Use of data analytics for decision making",
        question: "Is data analytics used for operational decisions?",
        options: [
          { text: "No data collection or analysis", level: 0 },
          { text: "Data analyzed manually", level: 1 },
          { text: "Spreadsheets used for analysis", level: 2 },
          { text: "Simple analysis tools used", level: 3 },
          { text: "Analytics used in some decisions", level: 4 },
          { text: "Advanced analytics used for real-time decision making", level: 5 },
        ],
      },
      {
        category: "Technology",
        dimension: "Cybersecurity",
        description: "Protection against electronic threats",
        question: "Are systems secured against electronic threats?",
        options: [
          { text: "No security measures exist", level: 0 },
          { text: "Basic protection only", level: 1 },
          { text: "Protection updated manually", level: 2 },
          { text: "Automatic protection systems used", level: 3 },
          { text: "Network monitored against threats", level: 4 },
          { text: "Integrated cybersecurity system with periodic testing", level: 5 },
        ],
      },
      {
        category: "Technology",
        dimension: "Integration Capability",
        description: "System capability to integrate with future technologies",
        question: "What is the current system capability to integrate with future technologies?",
        options: [
          { text: "Systems are old and don't accept updates", level: 0 },
          { text: "Some systems can be modified", level: 1 },
          { text: "Some modern tools can be integrated", level: 2 },
          { text: "Systems are relatively flexible", level: 3 },
          { text: "Systems accept integration under conditions", level: 4 },
          { text: "Systems are fully compatible with any new technology", level: 5 },
        ],
      },
      // Category Three: Organization
      {
        category: "Organization",
        dimension: "Transformation Plan",
        description: "Existence of clear digital transformation plan",
        question: "Does the organization have a clear digital transformation plan?",
        options: [
          { text: "No plan exists", level: 0 },
          { text: "Unwritten ideas exist", level: 1 },
          { text: "Initial plan without implementation", level: 2 },
          { text: "Plan under implementation", level: 3 },
          { text: "Plan partially implemented", level: 4 },
          { text: "Complete plan supported by management and fully implemented", level: 5 },
        ],
      },
      {
        category: "Organization",
        dimension: "Management Support",
        description: "Top management support for digital transformation",
        question: "Does top management support the digital transformation direction?",
        options: [
          { text: "No support exists", level: 0 },
          { text: "Verbal support only", level: 1 },
          { text: "Some initiatives supported", level: 2 },
          { text: "Management partially involved", level: 3 },
          { text: "Management involved in implementation", level: 4 },
          { text: "Top management supportive and involved in digital leadership", level: 5 },
        ],
      },
      {
        category: "Organization",
        dimension: "Staff Training",
        description: "Training staff on digital skills",
        question: "Are staff trained on digital skills?",
        options: [
          { text: "No training programs exist", level: 0 },
          { text: "Training only when needed", level: 1 },
          { text: "Limited programs exist", level: 2 },
          { text: "Selected teams are trained", level: 3 },
          { text: "Training in most departments", level: 4 },
          { text: "Continuous and comprehensive training program for all employees", level: 5 },
        ],
      },
      {
        category: "Organization",
        dimension: "Innovation Culture",
        description: "Existence of culture encouraging innovation",
        question: "Is there a culture that encourages innovation and use of modern technologies?",
        options: [
          { text: "No interest in technology", level: 0 },
          { text: "Technology accepted only when necessary", level: 1 },
          { text: "Technologies tried when needed", level: 2 },
          { text: "Basic orientation towards updates", level: 3 },
          { text: "Some ideas encouraged", level: 4 },
          { text: "Culture of innovation, experimentation and adoption of modern technologies prevails", level: 5 },
        ],
      },
      {
        category: "Organization",
        dimension: "Transformation Team",
        description: "Existence of specialized digital transformation team",
        question: "Is there a specialized team leading digital transformation within the factory?",
        options: [
          { text: "No team exists", level: 0 },
          { text: "Only one responsible person assigned", level: 1 },
          { text: "Temporary committee exists", level: 2 },
          { text: "Part-time team exists", level: 3 },
          { text: "Team exists in some departments", level: 4 },
          { text: "Full-time specialized team leading digital transformation implementation", level: 5 },
        ],
      },
    ];
  }
};

// Define recommendations based on score
export const getRecommendations = (score: number, language: Language): string[] => {
  const roundedScore = Math.round(score);
  
  if (language === 'ar') {
    if (roundedScore <= 1) {
      return [
        "بدء برنامج تدريبي للعاملين حول أساسيات الصناعة 4.0",
        "تقييم البنية التحتية الحالية وتحديد الفجوات التكنولوجية",
        "وضع خطة استراتيجية أولية للتحول الرقمي"
      ];
    } else if (roundedScore <= 2) {
      return [
        "تحويل العمليات الورقية إلى أنظمة رقمية أساسية",
        "تدريب العاملين على استخدام الأنظمة الرقمية",
        "بدء مشاريع تجريبية صغيرة للأتمتة"
      ];
    } else if (roundedScore <= 3) {
      return [
        "تكامل الأنظمة المختلفة عبر منصة موحدة",
        "تحسين عمليات سلسلة التوريد مع الموردين",
        "تنفيذ حلول تحليل البيانات لتحسين العمليات"
      ];
    } else if (roundedScore <= 4) {
      return [
        "تنفيذ حلول الذكاء الاصطناعي في مجالات محددة",
        "أتمتة العمليات الروتينية باستخدام RPA",
        "تحسين تجربة العملاء من خلال التحليلات التنبؤية"
      ];
    } else {
      return [
        "الاستمرار في الابتكار وتبني التقنيات الناشئة",
        "تحسين كفاءة الطاقة والاستدامة من خلال IoT",
        "تعزيز التعاون مع الشركاء في سلسلة القيمة"
      ];
    }
  } else {
    if (roundedScore <= 1) {
      return [
        "Start training program for staff on Industry 4.0 basics",
        "Assess current infrastructure and identify technology gaps",
        "Develop initial strategic plan for digital transformation"
      ];
    } else if (roundedScore <= 2) {
      return [
        "Convert paper processes to basic digital systems",
        "Train staff on using digital systems",
        "Start small pilot projects for automation"
      ];
    } else if (roundedScore <= 3) {
      return [
        "Integrate different systems through a unified platform",
        "Improve supply chain operations with suppliers",
        "Implement data analytics solutions to improve operations"
      ];
    } else if (roundedScore <= 4) {
      return [
        "Implement AI solutions in specific areas",
        "Automate routine processes using RPA",
        "Improve customer experience through predictive analytics"
      ];
    } else {
      return [
        "Continue innovation and adoption of emerging technologies",
        "Improve energy efficiency and sustainability through IoT",
        "Enhance collaboration with value chain partners"
      ];
    }
  }
};

// Define levels
export const getLevels = (language: Language): Level[] => {
  if (language === 'ar') {
    return [
      {
        name: "غير معرف",
        description: "المصنع لم يبدأ بعد في رحلة التحول الرقمي",
      },
      {
        name: "معرفة",
        description: "بداية الوعي بالتحول الرقمي مع عمليات يدوية",
      },
      {
        name: "رقمية",
        description: "بداية استخدام الأنظمة الرقمية الأساسية",
      },
      {
        name: "متكاملة",
        description: "تكامل الأنظمة والعمليات داخل المصنع",
      },
      {
        name: "مؤتمتة",
        description: "أتمتة متقدمة للعمليات مع تحليل البيانات",
      },
      {
        name: "ذكية",
        description: "استخدام الذكاء الاصطناعي والتحول الكامل",
      },
    ];
  } else {
    return [
      {
        name: "Undefined",
        description: "The factory has not yet started the digital transformation journey",
      },
      {
        name: "Basic",
        description: "Beginning awareness of digital transformation with manual operations",
      },
      {
        name: "Digital",
        description: "Starting to use basic digital systems",
      },
      {
        name: "Integrated",
        description: "Integration of systems and processes within the factory",
      },
      {
        name: "Automated",
        description: "Advanced automation of processes with data analysis",
      },
      {
        name: "Intelligent",
        description: "Use of artificial intelligence and complete transformation",
      },
    ];
  }
};
