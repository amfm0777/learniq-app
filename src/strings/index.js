import es from './es';
import en from './en';

const lang = process.env.EXPO_PUBLIC_LANG || 'es';
export default lang === 'en' ? en : es;
