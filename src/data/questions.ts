import { Category } from '../types/game.types';
import styled from 'styled-components';

export const categories: Category[] = [
  {
    id: 'history',
    name: 'التاريخ العالمي',
    icon: '📜',
    questions: [
      { 
        value: 100, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false, 
        image: "https://cdn.pixabay.com/photo/2018/04/04/18/45/ball-3290624_1280.jpg" 
      },
      { 
        value: 200, 
        question: "في أي عام بدأت الحرب العالمية الأولى؟", 
        answer: "1914",
        answered: false,
        image: "https://cdn.pixabay.com/photo/2018/04/04/18/45/ball-3290624_1280.jpg"
      },
      { 
        value: 300, 
        question: "من هو القائد الذي قاد حملة تحرير أمريكا الجنوبية من الاستعمار الإسباني؟", 
        answer: "سيمون بوليفار",
        answered: false ,
        image: "https://cdn.pixabay.com/photo/2018/04/04/18/45/ball-3290624_1280.jpg"
      },
      { 
        value: 400, 
        question: "ما هي الحضارة التي بنت الأهرامات في مصر؟", 
        answer: "الحضارة الفرعونية",
        answered: false ,
        image: "https://cdn.pixabay.com/photo/2018/04/04/18/45/ball-3290624_1280.jpg"
      },
      { 
        value: 500, 
        question: "متى سقطت الإمبراطورية الرومانية الغربية؟", 
        answer: "عام 476 ميلادية",
        answered: false ,
        image: "https://cdn.pixabay.com/photo/2018/04/04/18/45/ball-3290624_1280.jpg"
      }
    ]
  },
  {
    id: 'geography',
    name: 'جغرافيا',
    icon: '🌍',
    questions: [
      { 
        value: 100, 
        question: "ما هي أكبر قارة في العالم من حيث المساحة؟", 
        answer: "آسيا",
        answered: false,
        audio: "https://cdn.pixabay.com/download/audio/2023/03/13/audio_623611207e.mp3?filename=horror-hit-logo-142395.mp3" 
      },
      { 
        value: 200, 
        question: "ما هو أطول نهر في العالم؟", 
        answer: "نهر النيل",
        answered: false ,
        audio: "https://cdn.pixabay.com/download/audio/2023/03/13/audio_623611207e.mp3?filename=horror-hit-logo-142395.mp3"
      },
      { 
        value: 300, 
        question: "ما هي عاصمة البرازيل؟", 
        answer: "برازيليا",
        answered: false ,
        audio: "https://cdn.pixabay.com/download/audio/2023/03/13/audio_623611207e.mp3?filename=horror-hit-logo-142395.mp3"
      },
      { 
        value: 400, 
        question: "ما هي الدولة التي تحتوي على أكبر عدد من السكان في العالم؟", 
        answer: "الصين",
        answered: false,
        video: "https://www.youtube.com/watch?v=k6UG_N0XNzI"
      },
      { 
        value: 500, 
        question: "ما هو المضيق الذي يفصل بين آسيا وأمريكا الشمالية؟", 
        answer: "مضيق بيرنغ",
        answered: false ,
        video: "https://www.youtube.com/watch?v=k6UG_N0XNzI"
      }
    ]
  },
  {
    id: 'science',
    name: 'علوم',
    icon: '🔬',
    questions: [
      { 
        value: 100, 
        question: "ما هو العنصر الكيميائي الذي رمزه O؟", 
        answer: "الأكسجين",
        answered: false ,
        video: "https://www.youtube.com/watch?v=k6UG_N0XNzI"
      },
      { 
        value: 200, 
        question: "من هو العالم الذي اكتشف الجاذبية؟", 
        answer: "إسحاق نيوتن",
        answered: false ,
        video: "https://www.youtube.com/watch?v=k6UG_N0XNzI"
      },
      { 
        value: 300, 
        question: "ما هي أصغر وحدة في الكائنات الحية؟", 
        answer: "الخلية",
        answered: false ,
        video: "https://www.youtube.com/watch?v=k6UG_N0XNzI"
      },
      { 
        value: 400, 
        question: "ما اسم المجرة التي تقع فيها الأرض؟", 
        answer: "مجرة درب التبانة",
        answered: false ,
        video: "https://www.youtube.com/watch?v=k6UG_N0XNzI"
      },
      { 
        value: 500, 
        question: "ما هي النظرية التي طورها ألبرت أينشتاين وتربط بين الكتلة والطاقة؟", 
        answer: "النظرية النسبية",
        answered: false ,
        video: "https://www.youtube.com/watch?v=k6UG_N0XNzI"
      }
    ]
  },
  {
    id: 'sports',
    name: 'رياضة',
    icon: '⚽',
    questions: [
      { 
        value: 100, 
        question: "في أي رياضة يُستخدم مصطلح 'هاتريك'؟", 
        answer: "كرة القدم",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي الدولة التي فازت بأكبر عدد من كؤوس العالم لكرة القدم؟", 
        answer: "البرازيل",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد اللاعبين في فريق كرة السلة؟", 
        answer: "خمسة لاعبين",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو أسرع إنسان في العالم؟", 
        answer: "يوسين بولت",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي الرياضة التي تُلعب في ويمبلدون؟", 
        answer: "التنس",
        answered: false 
      }
    ]
  },
  {
    id: 'tech',
    name: 'تكنولوجيا',
    icon: '💻',
    questions: [
      { 
        value: 100, 
        question: "من هو مؤسس شركة مايكروسوفت؟", 
        answer: "بيل جيتس",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول حاسوب إلكتروني في العالم؟", 
        answer: "إنياك (ENIAC)",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي لغة البرمجة الأكثر استخداماً في العالم؟", 
        answer: "جافاسكريبت",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم الروبوت الذي أرسلته ناسا إلى المريخ في عام 2021؟", 
        answer: "بيرسيفيرانس",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي تقنية تخزين البيانات المتسلسلة التي تعتمد عليها العملات الرقمية؟", 
        answer: "بلوكتشين",
        answered: false 
      }
    ]
  }
];

export const getInitialCategories = (): Category[] => {
  try {
    // Try to get categories from localStorage first
    const savedCategories = localStorage.getItem('trivia-game-categories');
    if (savedCategories) {
      return JSON.parse(savedCategories);
    }
  } catch (error) {
    console.error('Error loading categories from localStorage:', error);
  }
  
  // Fall back to default categories if localStorage is empty or fails
  return categories;
};

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 8px;
`;

const PageButton = styled.button`
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: #e0e0e0;
  }
`;

const PageNumber = styled.button<{ isActive: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${props => props.isActive ? '#8c52ff' : '#ddd'};
  background-color: ${props => props.isActive ? '#8c52ff' : '#fff'};
  color: ${props => props.isActive ? '#fff' : '#333'};
  cursor: pointer;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.isActive ? '#7b44e0' : '#f0f0f0'};
  }
`;

const PageEllipsis = styled.span`
  margin: 0 8px;
`;

const PageJump = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
`;

const PageJumpInput = styled.input`
  width: 60px;
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

const ItemsPerPageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
  
  select {
    padding: 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`; 