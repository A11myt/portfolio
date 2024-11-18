import {Language} from '@/src/types/Types';

export const DateConverter = (lang: Language, date: string): string => {
  const [month, year] = date.split('-');
  const monthIndex = parseInt(month, 10) - 1;

  const writtenMonth = {
    de: ["JAN", "FEB", "MÄR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEZ"],
    en: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  };

  const monthName = writtenMonth[lang][monthIndex];
  return `${monthName} - ${year}`;
};
