import { PageList } from '../types/PageList';

export const createPageList = (currentPageNumber: number, totalNumberPages: number): PageList => {
  if (currentPageNumber >= totalNumberPages - 6) {
    return Array.from({ length: 7 }, (_, i) => totalNumberPages - 6 + i);
  }
  return [
    currentPageNumber,
    currentPageNumber + 1,
    currentPageNumber + 2,
    '...',
    totalNumberPages - 2,
    totalNumberPages - 1,
    totalNumberPages,
  ];
};
