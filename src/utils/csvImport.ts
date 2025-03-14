import Papa from 'papaparse';

export const importQuestionsFromCSV = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      encoding: 'UTF-8',
      skipEmptyLines: true,
      complete: (results) => {
        // Process the parsed CSV data
        const questions = results.data.map((row: any) => {
          return {
            category: row.category?.trim() || '',
            question: row.question?.trim() || '',
            answer: row.answer?.trim() || '',
            value: parseInt(row.value) || 100,
            image: row.image?.trim() || '',
            audio: row.audio?.trim() || '',
            video: row.video?.trim() || '',
            batch: row.batch?.trim() || 'default'
          };
        }).filter((q: any) => q.question && q.category);
        
        resolve(questions);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}; 