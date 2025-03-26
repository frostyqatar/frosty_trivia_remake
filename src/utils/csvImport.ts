import Papa from 'papaparse';

// Helper function to detect and fix common CSV encoding issues
const detectAndFixEncoding = (fileContent: string): string => {
  // Check for UTF-8 BOM (Byte Order Mark)
  if (fileContent.charCodeAt(0) === 0xFEFF) {
    console.log('Removing UTF-8 BOM marker');
    fileContent = fileContent.substring(1);
  }
  
  // Check for common encoding issues
  if (fileContent.includes('\uFFFD')) {
    console.warn('CSV contains replacement characters, possibly due to encoding issues');
  }
  
  return fileContent;
};

export const importQuestionsFromCSV = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    // Check file type
    if (!file.name.toLowerCase().endsWith('.csv')) {
      return reject(new Error('Please upload a valid CSV file'));
    }

    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return reject(new Error('File size exceeds 10MB limit'));
    }

    // First read the file to check encoding
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (!event.target || typeof event.target.result !== 'string') {
        return reject(new Error('Failed to read the CSV file'));
      }
      
      // Fix encoding issues
      const fileContent = detectAndFixEncoding(event.target.result);
      
      // Use Papa Parse with the fixed content
      Papa.parse(fileContent, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim().toLowerCase(),
        complete: (results) => {
          if (results.errors && results.errors.length > 0) {
            const errorMsg = results.errors.map(err => `Line ${err.row}: ${err.message}`).join('; ');
            return reject(new Error(`CSV parsing errors: ${errorMsg}`));
          }

          if (!results.data || results.data.length === 0) {
            return reject(new Error('No data found in CSV file'));
          }

          // Validate required columns
          const requiredColumns = ['category', 'question', 'answer'];
          
          // Fix the type error by adding a type assertion for results.data[0]
          const firstRow = results.data[0] as Record<string, unknown>;
          const headers = Object.keys(firstRow);
          
          const missingColumns = requiredColumns.filter(col => !headers.includes(col));
          
          if (missingColumns.length > 0) {
            return reject(new Error(`Missing required columns: ${missingColumns.join(', ')}`));
          }

          // Process the parsed CSV data
          console.log('Raw CSV data:', results.data);

          const questions = results.data.map((row: any, index: number) => {
            // Validate required fields in each row
            if (!row.category || !row.question || !row.answer) {
              console.warn(`Row ${index + 2} has missing required fields. Row data:`, row);
            }

            // Extract and normalize the category name
            const categoryName = row.category?.trim() || '';
            
            // Log details of the processed row
            console.log(`Processing row ${index}:`, {
              originalCategory: row.category,
              normalizedCategory: categoryName,
              question: row.question?.substring(0, 30) + '...'
            });

            return {
              category: categoryName,
              question: row.question?.trim() || '',
              answer: row.answer?.trim() || '',
              value: parseInt(row.value) || 100,
              image: row.image?.trim() || '',
              audio: row.audio?.trim() || '',
              video: row.video?.trim() || '',
              batch: row.batch?.trim() || 'default'
            };
          }).filter((q: any) => q.question && q.category);
          
          if (questions.length === 0) {
            return reject(new Error('No valid questions found in CSV file. Ensure all required fields (category, question, answer) are filled'));
          }

          resolve(questions);
        },
        error: (error: Error) => {
          reject(new Error(`Failed to parse CSV: ${error.message}`));
        }
      });
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read the CSV file'));
    };
    
    // Read the file as text with UTF-8 encoding
    reader.readAsText(file, 'UTF-8');
  });
}; 