// src/data/basicTest.js
// Test VARK básico — 20 preguntas sobre estilos de aprendizaje

export const BASIC_TEST_INTRO = {
  title: 'Test Básico VARK',
  subtitle: 'Descubre tu estilo de aprendizaje principal',
  description:
    'Este test de 20 preguntas identificará si eres un aprendiz Visual, Auditivo, Lecto-escritor o Kinestésico (VARK).',
  duration: '5–8 min',
  questions: 20,
};

// Categorías: V = Visual, A = Auditivo, R = Reading/Lecto, K = Kinestésico
export const BASIC_QUESTIONS = [
  {
    id: 1,
    text: 'Cuando aprendes algo nuevo, prefieres…',
    options: [
      { id: 'a', text: 'Ver diagramas, mapas o gráficos', category: 'V' },
      { id: 'b', text: 'Escuchar a alguien explicártelo', category: 'A' },
      { id: 'c', text: 'Leer un libro o manual detallado', category: 'R' },
      { id: 'd', text: 'Practicarlo directamente con tus manos', category: 'K' },
    ],
  },
  {
    id: 2,
    text: 'Cuando tienes que recordar cómo llegar a un lugar, sueles…',
    options: [
      { id: 'a', text: 'Visualizar el mapa mentalmente', category: 'V' },
      { id: 'b', text: 'Recordar las instrucciones verbales', category: 'A' },
      { id: 'c', text: 'Anotar las indicaciones paso a paso', category: 'R' },
      { id: 'd', text: 'Recordar el recorrido físico que hiciste', category: 'K' },
    ],
  },
  {
    id: 3,
    text: 'En clase, aprendes mejor cuando…',
    options: [
      { id: 'a', text: 'El profesor usa presentaciones visuales', category: 'V' },
      { id: 'b', text: 'El profesor explica con su voz de forma clara', category: 'A' },
      { id: 'c', text: 'Tienes material escrito para seguir', category: 'R' },
      { id: 'd', text: 'Participas en actividades prácticas', category: 'K' },
    ],
  },
  {
    id: 4,
    text: 'Cuando estudias para un examen, te resulta más útil…',
    options: [
      { id: 'a', text: 'Crear esquemas y mapas conceptuales', category: 'V' },
      { id: 'b', text: 'Repetir en voz alta el material', category: 'A' },
      { id: 'c', text: 'Leer y releer tus apuntes', category: 'R' },
      { id: 'd', text: 'Hacer ejercicios prácticos y casos reales', category: 'K' },
    ],
  },
  {
    id: 5,
    text: 'Al resolver un problema nuevo, tiendes a…',
    options: [
      { id: 'a', text: 'Dibujarlo o hacer un esquema', category: 'V' },
      { id: 'b', text: 'Discutirlo con alguien', category: 'A' },
      { id: 'c', text: 'Buscar información escrita', category: 'R' },
      { id: 'd', text: 'Intentar diferentes soluciones hasta encontrar una', category: 'K' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo prefieres recibir instrucciones para una nueva tarea?',
    options: [
      { id: 'a', text: 'Con una demostración visual o video', category: 'V' },
      { id: 'b', text: 'Que alguien me lo explique verbalmente', category: 'A' },
      { id: 'c', text: 'Con instrucciones escritas detalladas', category: 'R' },
      { id: 'd', text: 'Empezar y aprender sobre la marcha', category: 'K' },
    ],
  },
  {
    id: 7,
    text: 'Cuando lees un libro aburrido, te resulta más fácil si…',
    options: [
      { id: 'a', text: 'Tiene muchas imágenes e ilustraciones', category: 'V' },
      { id: 'b', text: 'Lo escuchas como audiolibro', category: 'A' },
      { id: 'c', text: 'Tienes un resumen escrito previo', category: 'R' },
      { id: 'd', text: 'Puedes pausar y aplicar lo que aprendes', category: 'K' },
    ],
  },
  {
    id: 8,
    text: 'Para concentrarte mejor, prefieres ambientes donde…',
    options: [
      { id: 'a', text: 'Haya orden visual y pocos elementos de distracción', category: 'V' },
      { id: 'b', text: 'Puedas escuchar música o ruido de fondo suave', category: 'A' },
      { id: 'c', text: 'Haya silencio total para leer', category: 'R' },
      { id: 'd', text: 'Puedas moverte o cambiar de posición', category: 'K' },
    ],
  },
  {
    id: 9,
    text: 'Al aprender un idioma nuevo, prefieres…',
    options: [
      { id: 'a', text: 'Fichas con palabras e imágenes asociadas', category: 'V' },
      { id: 'b', text: 'Escuchar y repetir palabras habladas', category: 'A' },
      { id: 'c', text: 'Leer gramática y vocabulario en textos', category: 'R' },
      { id: 'd', text: 'Hablarlo con personas nativas directamente', category: 'K' },
    ],
  },
  {
    id: 10,
    text: 'Cuando explicas algo a otra persona, sueles…',
    options: [
      { id: 'a', text: 'Dibujar o mostrar imágenes para ilustrar', category: 'V' },
      { id: 'b', text: 'Hablar mucho y dar analogías verbales', category: 'A' },
      { id: 'c', text: 'Dar referencias escritas o bibliografía', category: 'R' },
      { id: 'd', text: 'Demostrarlo con ejemplos prácticos', category: 'K' },
    ],
  },
  {
    id: 11,
    text: 'En tu tiempo libre, sueles disfrutar más de…',
    options: [
      { id: 'a', text: 'Ver películas, fotografía o arte visual', category: 'V' },
      { id: 'b', text: 'Escuchar podcasts, música o conversaciones', category: 'A' },
      { id: 'c', text: 'Leer libros, artículos o noticias', category: 'R' },
      { id: 'd', text: 'Practicar deportes o actividades manuales', category: 'K' },
    ],
  },
  {
    id: 12,
    text: 'Cuando tienes que tomar una decisión importante, prefieres…',
    options: [
      { id: 'a', text: 'Visualizar los posibles resultados', category: 'V' },
      { id: 'b', text: 'Hablar sobre el tema con alguien de confianza', category: 'A' },
      { id: 'c', text: 'Investigar y leer sobre las opciones', category: 'R' },
      { id: 'd', text: 'Probar una opción y ver qué pasa', category: 'K' },
    ],
  },
  {
    id: 13,
    text: 'Al memorizar información, te funciona mejor…',
    options: [
      { id: 'a', text: 'Asociarla con colores o imágenes mentales', category: 'V' },
      { id: 'b', text: 'Repetirla en voz alta varias veces', category: 'A' },
      { id: 'c', text: 'Escribirla varias veces', category: 'R' },
      { id: 'd', text: 'Asociarla con un movimiento o acción', category: 'K' },
    ],
  },
  {
    id: 14,
    text: 'Cuando usas tecnología para aprender, prefieres…',
    options: [
      { id: 'a', text: 'Videos e infografías', category: 'V' },
      { id: 'b', text: 'Podcasts o videollamadas', category: 'A' },
      { id: 'c', text: 'Artículos, blogs o PDFs', category: 'R' },
      { id: 'd', text: 'Simuladores o apps interactivas', category: 'K' },
    ],
  },
  {
    id: 15,
    text: 'En una reunión o clase, sueles…',
    options: [
      { id: 'a', text: 'Tomar notas con dibujos y flechas', category: 'V' },
      { id: 'b', text: 'Escuchar activamente sin tomar notas', category: 'A' },
      { id: 'c', text: 'Anotar todo lo más detallado posible', category: 'R' },
      { id: 'd', text: 'Moverte o jugar con algo mientras escuchas', category: 'K' },
    ],
  },
  {
    id: 16,
    text: 'Cuando algo no te queda claro, preguntas…',
    options: [
      { id: 'a', text: '"¿Me puedes mostrar un ejemplo o imagen?"', category: 'V' },
      { id: 'b', text: '"¿Me lo puedes explicar de nuevo?"', category: 'A' },
      { id: 'c', text: '"¿Tienes algo escrito sobre esto?"', category: 'R' },
      { id: 'd', text: '"¿Puedo intentarlo yo mismo?"', category: 'K' },
    ],
  },
  {
    id: 17,
    text: 'Tu método favorito para tomar apuntes es…',
    options: [
      { id: 'a', text: 'Mapas conceptuales y esquemas con colores', category: 'V' },
      { id: 'b', text: 'Grabar la clase o reunión', category: 'A' },
      { id: 'c', text: 'Texto largo y bien organizado', category: 'R' },
      { id: 'd', text: 'Notas breves con ejemplos prácticos', category: 'K' },
    ],
  },
  {
    id: 18,
    text: 'Cuando aprendes un deporte o habilidad física, prefieres…',
    options: [
      { id: 'a', text: 'Ver videos de técnica primero', category: 'V' },
      { id: 'b', text: 'Que te lo expliquen verbalmente', category: 'A' },
      { id: 'c', text: 'Leer un manual de instrucciones', category: 'R' },
      { id: 'd', text: 'Lanzarte directamente a practicarlo', category: 'K' },
    ],
  },
  {
    id: 19,
    text: 'Para recordar el nombre de alguien, tiendes a…',
    options: [
      { id: 'a', text: 'Asociarlo con su cara o apariencia visual', category: 'V' },
      { id: 'b', text: 'Repetir su nombre mentalmente como sonido', category: 'A' },
      { id: 'c', text: 'Escribir su nombre en algún lado', category: 'R' },
      { id: 'd', text: 'Asociarlo con algo que hiciste juntos', category: 'K' },
    ],
  },
  {
    id: 20,
    text: 'Tu mayor satisfacción al aprender es cuando…',
    options: [
      { id: 'a', text: 'Puedo "ver" claramente cómo funciona algo', category: 'V' },
      { id: 'b', text: 'Entiendo la explicación perfectamente', category: 'A' },
      { id: 'c', text: 'Puedo leer y profundizar en el tema', category: 'R' },
      { id: 'd', text: 'Lo puedo aplicar de inmediato en la práctica', category: 'K' },
    ],
  },
];

export const BASIC_RESULTS = {
  V: {
    label: 'Visual',
    emoji: '👁️',
    color: '#7C3AED',
    gradient: ['#7C3AED', '#5B21B6'],
    title: 'Aprendiz Visual',
    description:
      'Procesas la información mejor a través de imágenes, gráficos, colores y representaciones espaciales. Tu cerebro convierte conceptos abstractos en imágenes mentales vívidas.',
    strengths: [
      'Excelente memoria fotográfica',
      'Piensas en imágenes y colores',
      'Organizas bien la información espacialmente',
      'Aprecias el diseño y el orden visual',
    ],
    tips: [
      'Usa mapas mentales y diagramas',
      'Destaca con colores al estudiar',
      'Convierte textos en esquemas visuales',
      'Organiza tu espacio de estudio sin distracciones visuales',
    ],
  },
  A: {
    label: 'Auditivo',
    emoji: '🎧',
    color: '#3B82F6',
    gradient: ['#3B82F6', '#1D4ED8'],
    title: 'Aprendiz Auditivo',
    description:
      'Aprendes mejor escuchando, hablando y participando en discusiones. El sonido y el ritmo son tus aliados naturales para retener y comprender información.',
    strengths: [
      'Excelente para seguir explicaciones orales',
      'Buena memoria para conversaciones',
      'Aprende idiomas con facilidad',
      'Le va bien en debates y discusiones',
    ],
    tips: [
      'Escucha podcasts y audiolibros',
      'Repite en voz alta lo que estudias',
      'Forma grupos de estudio para debatir',
      'Usa música de fondo mientras estudias',
    ],
  },
  R: {
    label: 'Lecto-escritor',
    emoji: '📚',
    color: '#10B981',
    gradient: ['#10B981', '#059669'],
    title: 'Aprendiz Lecto-escritor',
    description:
      'Tu aprendizaje florece a través del texto escrito. Eres un ávido lector y escritor que prefiere la información presentada en palabras, ya sea leyendo o escribiendo.',
    strengths: [
      'Excelente comprensión lectora',
      'Disfruta investigar y leer extensamente',
      'Muy organizado con sus apuntes',
      'Escribe con claridad y precisión',
    ],
    tips: [
      'Toma apuntes detallados siempre',
      'Reescribe el material con tus propias palabras',
      'Lee múltiples fuentes sobre cada tema',
      'Crea resúmenes y listas estructuradas',
    ],
  },
  K: {
    label: 'Kinestésico',
    emoji: '🤲',
    color: '#F59E0B',
    gradient: ['#F59E0B', '#D97706'],
    title: 'Aprendiz Kinestésico',
    description:
      'Aprendes haciendo. Necesitas experimentar, tocar y practicar para que la información se consolide en tu memoria. Los proyectos prácticos y el movimiento son clave para ti.',
    strengths: [
      'Aprende rápido haciendo las cosas',
      'Excelente coordinación y habilidades prácticas',
      'Bueno en situaciones de resolución de problemas reales',
      'Recuerda bien experiencias físicas',
    ],
    tips: [
      'Busca experiencias prácticas siempre',
      'Haz proyectos reales con lo que aprendes',
      'Toma descansos activos mientras estudias',
      'Relaciona conceptos con ejemplos del mundo real',
    ],
  },
};
