import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export const dateFormat = (date: Date | number): string => {
  return format(date, 'dd MMMM yyyy', { locale: pl });
};

export const initialDate = dateFormat(Date.now());
