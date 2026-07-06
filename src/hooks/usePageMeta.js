import { useEffect } from 'react';
import { setPageMeta } from '../utils/seo';

export function usePageMeta(meta) {
  useEffect(() => {
    setPageMeta(meta);
  }, [meta.title, meta.description]);
}
