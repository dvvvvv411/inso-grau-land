import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;
    
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};

export const formatPageTitle = (pageTitle: string) => {
  return `${pageTitle} | Heß & Partner - Rechtsanwälte Berlin`;
};