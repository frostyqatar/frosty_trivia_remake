import { Category } from '../types/game.types';


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
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      

    ],
  },
  {
    id: 'history2',
    name: '2التاريخ العالمي',
    icon: '📜',
    questions: [
      { 
        value: 100, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      

    ],
  },
  {
    id: 'history3',
    name: '3التاريخ العالمي',
    icon: '📜',
    questions: [
      { 
        value: 100, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      

    ],
  },
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

export const resetToDefaultCategories = (): Category[] => {
  // This function always returns the original hardcoded categories,
  // completely bypassing localStorage
  return [...categories]; // Return a fresh copy of the defaults
};