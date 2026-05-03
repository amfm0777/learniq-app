// src/data/premiumTest.js
// Test Premium — Inteligencias Múltiples de Howard Gardner + Estilos Cognitivos

export const PREMIUM_TEST_INTRO = {
  title: 'Test Premium Avanzado',
  subtitle: 'Perfil completo de inteligencias y estilos cognitivos',
  description:
    'Un análisis profundo en 40 preguntas que evalúa tus 8 Inteligencias Múltiples (Gardner), tu estilo cognitivo y recomendaciones personalizadas de carrera y aprendizaje.',
  duration: '12–18 min',
  questions: 40,
  includes: [
    '8 Inteligencias Múltiples de Gardner',
    'Perfil de estilos cognitivos',
    'Análisis de fortalezas y áreas de mejora',
    'Recomendaciones de carreras afines',
    'Plan personalizado de aprendizaje',
    'Informe detallado exportable',
  ],
};

// Categorías: LG=Lingüística, LM=Lógico-Matemática, ES=Espacial,
//             MI=Musical, KC=Corporal-Kinestésica, IN=Intrapersonal,
//             IE=Interpersonal, NT=Naturalista
export const PREMIUM_QUESTIONS = [
  // --- LINGÜÍSTICA ---
  {
    id: 1,
    section: 'Inteligencias Múltiples',
    text: 'Disfruto jugar con las palabras, crear poemas o contar historias.',
    category: 'LG',
    scale: true,
  },
  {
    id: 2,
    section: 'Inteligencias Múltiples',
    text: 'Me resulta fácil explicar conceptos complejos de manera clara y sencilla.',
    category: 'LG',
    scale: true,
  },
  {
    id: 3,
    section: 'Inteligencias Múltiples',
    text: 'Leo habitualmente por placer y disfruto de la literatura.',
    category: 'LG',
    scale: true,
  },
  {
    id: 4,
    section: 'Inteligencias Múltiples',
    text: 'Me gusta debatir y convencer a otros con argumentos sólidos.',
    category: 'LG',
    scale: true,
  },
  {
    id: 5,
    section: 'Inteligencias Múltiples',
    text: 'Aprendo idiomas nuevos con relativa facilidad.',
    category: 'LG',
    scale: true,
  },
  // --- LÓGICO-MATEMÁTICA ---
  {
    id: 6,
    section: 'Inteligencias Múltiples',
    text: 'Disfruto resolver puzzles, acertijos y problemas matemáticos.',
    category: 'LM',
    scale: true,
  },
  {
    id: 7,
    section: 'Inteligencias Múltiples',
    text: 'Busco patrones y relaciones lógicas en cualquier situación.',
    category: 'LM',
    scale: true,
  },
  {
    id: 8,
    section: 'Inteligencias Múltiples',
    text: 'Tiendo a pensar de manera estructurada y paso a paso.',
    category: 'LM',
    scale: true,
  },
  {
    id: 9,
    section: 'Inteligencias Múltiples',
    text: 'Me interesa la ciencia, la programación o las matemáticas.',
    category: 'LM',
    scale: true,
  },
  {
    id: 10,
    section: 'Inteligencias Múltiples',
    text: 'Me gusta clasificar, categorizar y analizar datos.',
    category: 'LM',
    scale: true,
  },
  // --- ESPACIAL ---
  {
    id: 11,
    section: 'Inteligencias Múltiples',
    text: 'Tengo buena orientación espacial y rara vez me pierdo.',
    category: 'ES',
    scale: true,
  },
  {
    id: 12,
    section: 'Inteligencias Múltiples',
    text: 'Disfruto diseñar, dibujar o crear cosas visuales.',
    category: 'ES',
    scale: true,
  },
  {
    id: 13,
    section: 'Inteligencias Múltiples',
    text: 'Puedo imaginar con claridad cómo quedaría algo antes de crearlo.',
    category: 'ES',
    scale: true,
  },
  {
    id: 14,
    section: 'Inteligencias Múltiples',
    text: 'Me resulta fácil leer mapas, planos y gráficos tridimensionales.',
    category: 'ES',
    scale: true,
  },
  {
    id: 15,
    section: 'Inteligencias Múltiples',
    text: 'Noto los detalles visuales que otros pasan por alto.',
    category: 'ES',
    scale: true,
  },
  // --- MUSICAL ---
  {
    id: 16,
    section: 'Inteligencias Múltiples',
    text: 'Identifico fácilmente el ritmo, melodía o tono de una canción.',
    category: 'MI',
    scale: true,
  },
  {
    id: 17,
    section: 'Inteligencias Múltiples',
    text: 'Toco un instrumento o me gustaría aprender uno.',
    category: 'MI',
    scale: true,
  },
  {
    id: 18,
    section: 'Inteligencias Múltiples',
    text: 'La música influye significativamente en mi estado emocional.',
    category: 'MI',
    scale: true,
  },
  {
    id: 19,
    section: 'Inteligencias Múltiples',
    text: 'Recuerdo las canciones con facilidad y noto cuando hay errores musicales.',
    category: 'MI',
    scale: true,
  },
  {
    id: 20,
    section: 'Inteligencias Múltiples',
    text: 'Estudiar con música me ayuda a concentrarme mejor.',
    category: 'MI',
    scale: true,
  },
  // --- CORPORAL-KINESTÉSICA ---
  {
    id: 21,
    section: 'Inteligencias Múltiples',
    text: 'Aprendo mejor haciendo las cosas con mis manos.',
    category: 'KC',
    scale: true,
  },
  {
    id: 22,
    section: 'Inteligencias Múltiples',
    text: 'Soy hábil en deportes, danza u otras actividades físicas.',
    category: 'KC',
    scale: true,
  },
  {
    id: 23,
    section: 'Inteligencias Múltiples',
    text: 'Me resulta difícil estar quieto durante mucho tiempo.',
    category: 'KC',
    scale: true,
  },
  {
    id: 24,
    section: 'Inteligencias Múltiples',
    text: 'Tengo buena coordinación mano-ojo y precisión física.',
    category: 'KC',
    scale: true,
  },
  {
    id: 25,
    section: 'Inteligencias Múltiples',
    text: 'Gesticulo mucho y uso el cuerpo para expresarme.',
    category: 'KC',
    scale: true,
  },
  // --- INTRAPERSONAL ---
  {
    id: 26,
    section: 'Inteligencias Múltiples',
    text: 'Me conozco bien a mí mismo: mis fortalezas, debilidades y emociones.',
    category: 'IN',
    scale: true,
  },
  {
    id: 27,
    section: 'Inteligencias Múltiples',
    text: 'Prefiero trabajar solo y a mi propio ritmo.',
    category: 'IN',
    scale: true,
  },
  {
    id: 28,
    section: 'Inteligencias Múltiples',
    text: 'Reflexiono profundamente antes de tomar decisiones importantes.',
    category: 'IN',
    scale: true,
  },
  {
    id: 29,
    section: 'Inteligencias Múltiples',
    text: 'Tengo claros mis valores, metas y propósito de vida.',
    category: 'IN',
    scale: true,
  },
  {
    id: 30,
    section: 'Inteligencias Múltiples',
    text: 'Disfruto la soledad creativa y los momentos de introspección.',
    category: 'IN',
    scale: true,
  },
  // --- INTERPERSONAL ---
  {
    id: 31,
    section: 'Inteligencias Múltiples',
    text: 'Entiendo fácilmente cómo se sienten los demás.',
    category: 'IE',
    scale: true,
  },
  {
    id: 32,
    section: 'Inteligencias Múltiples',
    text: 'Soy bueno resolviendo conflictos y mediando entre personas.',
    category: 'IE',
    scale: true,
  },
  {
    id: 33,
    section: 'Inteligencias Múltiples',
    text: 'Prefiero aprender y trabajar en grupo.',
    category: 'IE',
    scale: true,
  },
  {
    id: 34,
    section: 'Inteligencias Múltiples',
    text: 'La gente suele venir a mí en busca de consejo.',
    category: 'IE',
    scale: true,
  },
  {
    id: 35,
    section: 'Inteligencias Múltiples',
    text: 'Me adapto bien a diferentes tipos de personas y situaciones sociales.',
    category: 'IE',
    scale: true,
  },
  // --- NATURALISTA ---
  {
    id: 36,
    section: 'Inteligencias Múltiples',
    text: 'Disfruto estar en la naturaleza y observar el mundo natural.',
    category: 'NT',
    scale: true,
  },
  {
    id: 37,
    section: 'Inteligencias Múltiples',
    text: 'Me interesa la biología, la ecología o el medio ambiente.',
    category: 'NT',
    scale: true,
  },
  {
    id: 38,
    section: 'Inteligencias Múltiples',
    text: 'Soy bueno clasificando y distinguiendo especies de animales o plantas.',
    category: 'NT',
    scale: true,
  },
  {
    id: 39,
    section: 'Inteligencias Múltiples',
    text: 'Me preocupa el medio ambiente y la sostenibilidad del planeta.',
    category: 'NT',
    scale: true,
  },
  {
    id: 40,
    section: 'Inteligencias Múltiples',
    text: 'Percibo patrones en la naturaleza que otros no notan fácilmente.',
    category: 'NT',
    scale: true,
  },
];

// Scale options for Likert-style questions
export const SCALE_OPTIONS = [
  { id: 1, label: 'Muy en desacuerdo', short: '1', value: 1 },
  { id: 2, label: 'En desacuerdo', short: '2', value: 2 },
  { id: 3, label: 'Neutral', short: '3', value: 3 },
  { id: 4, label: 'De acuerdo', short: '4', value: 4 },
  { id: 5, label: 'Muy de acuerdo', short: '5', value: 5 },
];

export const PREMIUM_INTELLIGENCES = {
  LG: {
    label: 'Lingüística',
    emoji: '📝',
    color: '#7C3AED',
    gradient: ['#7C3AED', '#5B21B6'],
    description:
      'Habilidad para usar el lenguaje con precisión, tanto oral como escrito. Incluye la poesía, narrativa, retórica y la capacidad lingüística.',
    careers: ['Escritor/a', 'Periodista', 'Abogado/a', 'Profesor/a de idiomas', 'Traductor/a', 'Locutor/a'],
    famous: 'Shakespeare, García Márquez, Obama',
    studyTips: [
      'Escribe resúmenes de lo aprendido',
      'Crea historias con los conceptos clave',
      'Debate y discute los temas en voz alta',
    ],
  },
  LM: {
    label: 'Lógico-Matemática',
    emoji: '🔢',
    color: '#3B82F6',
    gradient: ['#3B82F6', '#1D4ED8'],
    description:
      'Capacidad para razonar de forma deductiva, resolver problemas matemáticos y pensar de manera científica y sistemática.',
    careers: ['Ingeniero/a', 'Científico/a', 'Programador/a', 'Contador/a', 'Analista de datos', 'Físico/a'],
    famous: 'Einstein, Hawking, Ada Lovelace',
    studyTips: [
      'Usa tablas y esquemas lógicos',
      'Aplica problemas reales a los conceptos',
      'Aprende mediante la experimentación',
    ],
  },
  ES: {
    label: 'Espacial',
    emoji: '🎨',
    color: '#EC4899',
    gradient: ['#EC4899', '#BE185D'],
    description:
      'Habilidad para percibir el mundo visual-espacial con precisión y transformar o modificar las percepciones iniciales.',
    careers: ['Arquitecto/a', 'Diseñador/a gráfico', 'Piloto', 'Escultor/a', 'Cirujano/a', 'Fotógrafo/a'],
    famous: 'Da Vinci, Picasso, Frank Lloyd Wright',
    studyTips: [
      'Usa mapas conceptuales con colores',
      'Visualiza los conceptos como imágenes',
      'Aprende con diagramas y modelos 3D',
    ],
  },
  MI: {
    label: 'Musical',
    emoji: '🎵',
    color: '#F59E0B',
    gradient: ['#F59E0B', '#D97706'],
    description:
      'Sensibilidad ante el ritmo, la melodía, el timbre y la armonía. Capacidad para percibir, discriminar, transformar y expresarse a través de la música.',
    careers: ['Músico/a', 'Compositor/a', 'Director/a de orquesta', 'Productor musical', 'Terapeuta musical'],
    famous: 'Mozart, Beethoven, Björk, Miles Davis',
    studyTips: [
      'Convierte listas de conceptos en canciones',
      'Estudia con música instrumental de fondo',
      'Usa ritmos para memorizar secuencias',
    ],
  },
  KC: {
    label: 'Corporal-Kinestésica',
    emoji: '⚡',
    color: '#10B981',
    gradient: ['#10B981', '#059669'],
    description:
      'Habilidad para usar el propio cuerpo de manera fina o gruesa para expresarse o para resolver problemas. Control motor preciso.',
    careers: ['Deportista', 'Bailarín/a', 'Cirujano/a', 'Actor/actriz', 'Fisioterapeuta', 'Artesano/a'],
    famous: 'Michael Jordan, Simone Biles, Charlie Chaplin',
    studyTips: [
      'Aprende caminando o en movimiento',
      'Usa objetos físicos para representar conceptos',
      'Experimenta prácticas antes de teorizar',
    ],
  },
  IN: {
    label: 'Intrapersonal',
    emoji: '🧘',
    color: '#8B5CF6',
    gradient: ['#8B5CF6', '#6D28D9'],
    description:
      'Capacidad de conocerse a uno mismo profundamente, manejar las emociones propias, motivaciones y metas con precisión.',
    careers: ['Psicólogo/a', 'Filósofo/a', 'Escritor/a', 'Investigador/a', 'Emprendedor/a', 'Coach personal'],
    famous: 'Sigmund Freud, Frida Kahlo, Nietzsche',
    studyTips: [
      'Lleva un diario de aprendizaje reflexivo',
      'Estudia en soledad y a tu propio ritmo',
      'Conecta cada concepto con tu experiencia personal',
    ],
  },
  IE: {
    label: 'Interpersonal',
    emoji: '🤝',
    color: '#EF4444',
    gradient: ['#EF4444', '#DC2626'],
    description:
      'Habilidad para entender las intenciones, motivaciones y deseos de los demás, y para trabajar eficazmente con personas.',
    careers: ['Líder', 'Maestro/a', 'Político/a', 'Terapeuta', 'Trabajador/a social', 'Vendedor/a'],
    famous: 'Nelson Mandela, Oprah Winfrey, Gandhi',
    studyTips: [
      'Aprende en grupos de estudio',
      'Enseña lo aprendido a otras personas',
      'Participa en debates y foros',
    ],
  },
  NT: {
    label: 'Naturalista',
    emoji: '🌿',
    color: '#84CC16',
    gradient: ['#84CC16', '#65A30D'],
    description:
      'Habilidad para reconocer y categorizar objetos y patrones naturales. Sensibilidad al mundo natural y sus fenómenos.',
    careers: ['Biólogo/a', 'Ecólogo/a', 'Veterinario/a', 'Geógrafo/a', 'Chef', 'Paisajista'],
    famous: 'Charles Darwin, Jane Goodall, David Attenborough',
    studyTips: [
      'Aprende en contacto con la naturaleza',
      'Clasifica y categoriza la información como en taxonomía',
      'Relaciona conceptos con fenómenos naturales',
    ],
  },
};
