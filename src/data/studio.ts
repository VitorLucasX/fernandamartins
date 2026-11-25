export type ServiceCategory = 'corporal' | 'facial' | 'intima' | 'metodos';

export interface StudioService {
  id: string;
  number: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  audience: string;
  summary: string;
}

export const STUDIO_INFO = {
  brandShort: 'Fernanda Martins',
  brandFull: 'Fernanda Martins, Depilação Corporal, Masculina e Feminina',
  neighborhood: 'Parque Duval de Barros · Contagem, MG',
  address: 'R. Leblon, 92 - Parque Duval de Barros, Contagem - MG, 32242-350',
  phoneDisplay: '(31) 99573-1742',
  phoneSanitized: '5531995731742',
  hoursSummary: 'Terça a sexta, 07h30 às 20h · Sábado, 09h às 18h',
  hoursShort: [
    { days: 'Terça a Sexta', time: '07:30 – 20:00' },
    { days: 'Sábado', time: '09:00 – 18:00' },
  ],
  experienceYears: '20+',
} as const;

export const STUDIO_IMAGES = {
  heroStudio: {
    src: '/src/assets/images/hero_waxing_studio_1795551540870.jpg',
    alt: 'Sala iluminada do estúdio Fernanda Martins com maca, toalhas brancas e frascos de cera caseira em Contagem',
  },
  sugarWax: {
    src: '/src/assets/images/service_sugar_wax_1795551542269.jpg',
    alt: 'Cera caseira de açúcar morna em tigela artesanal com espátula de madeira, lenços TNT e quartzo rosa',
  },
  facialBrow: {
    src: '/src/assets/images/service_facial_brow_1795551541323.jpg',
    alt: 'Cliente brasileira com pele luminosa e sobrancelhas desenhadas após atendimento facial no estúdio',
  },
  specialistDetail: {
    src: '/src/assets/images/studio_treatment_detail_1795551543354.jpg',
    alt: 'Especialista em estética preparando espátulas descartáveis e óleos calmantes para depilação corporal',
  },
} as const;

export const SERVICE_FILTERS: { id: 'todos' | ServiceCategory; label: string }[] = [
  { id: 'todos', label: 'Todos os serviços' },
  { id: 'corporal', label: 'Corporal' },
  { id: 'intima', label: 'Íntima & Brasileira' },
  { id: 'facial', label: 'Facial & Sobrancelhas' },
  { id: 'metodos', label: 'Métodos' },
];

export const STUDIO_SERVICES: StudioService[] = [
  {
    id: 'depilacao-brasileira',
    number: '01',
    name: 'Depilação brasileira',
    category: 'intima',
    categoryLabel: 'Íntima',
    audience: 'Feminina e Masculina',
    summary: 'Acabamento completo e preciso com cera morna suave para pele sensível.',
  },
  {
    id: 'depilacao-com-cera',
    number: '02',
    name: 'Depilação com cera',
    category: 'metodos',
    categoryLabel: 'Método',
    audience: 'Feminina e Masculina',
    summary: 'Aplicação tradicional em temperatura confortável com materiais 100% descartáveis.',
  },
  {
    id: 'depilacao-cera-acucar',
    number: '03',
    name: 'Depilação com cera de açúcar',
    category: 'metodos',
    categoryLabel: 'Método Artesanal',
    audience: 'Feminina e Masculina',
    summary: 'Fórmula caseira natural que adere aos fios sem agredir a barreira da pele.',
  },
  {
    id: 'depilacao-virilha',
    number: '04',
    name: 'Depilação de virilha',
    category: 'intima',
    categoryLabel: 'Íntima',
    audience: 'Feminina e Masculina',
    summary: 'Atendimento discreto, ágil e acolhedor com foco em conforto e higiene.',
  },
  {
    id: 'depilacao-intima',
    number: '05',
    name: 'Depilação íntima',
    category: 'intima',
    categoryLabel: 'Íntima',
    audience: 'Feminina e Masculina',
    summary: 'Cuidado especializado para regiões delicadas com finalização calmante.',
  },
  {
    id: 'depilacao-pernas',
    number: '06',
    name: 'Depilação das pernas',
    category: 'corporal',
    categoryLabel: 'Corporal',
    audience: 'Feminina e Masculina',
    summary: 'Meia perna ou perna inteira com remoção uniforme pelo método TNT ou cera caseira.',
  },
  {
    id: 'depilacao-axilas',
    number: '07',
    name: 'Depilação de axilas',
    category: 'corporal',
    categoryLabel: 'Corporal',
    audience: 'Feminina e Masculina',
    summary: 'Puxada firme e delicada que preserva a maciez e reduz o atrito na região.',
  },
  {
    id: 'depilacao-costas',
    number: '08',
    name: 'Depilação das costas',
    category: 'corporal',
    categoryLabel: 'Corporal',
    audience: 'Masculina e Feminina',
    summary: 'Cobertura ampla e rápida com técnica TNT para pele uniforme por semanas.',
  },
  {
    id: 'depilacao-peito',
    number: '09',
    name: 'Depilação do peito',
    category: 'corporal',
    categoryLabel: 'Corporal',
    audience: 'Masculina',
    summary: 'Remoção precisa respeitando o sentido dos fios para evitar foliculite.',
  },
  {
    id: 'depilacao-barriga',
    number: '10',
    name: 'Depilação de barriga',
    category: 'corporal',
    categoryLabel: 'Corporal',
    audience: 'Feminina e Masculina',
    summary: 'Suavidade no abdômen com cera artesanal em temperatura equilibrada.',
  },
  {
    id: 'depilacao-braco',
    number: '11',
    name: 'Depilação de braço',
    category: 'corporal',
    categoryLabel: 'Corporal',
    audience: 'Feminina e Masculina',
    summary: 'Toque sedoso do antebraço aos ombros com acabamento limpo.',
  },
  {
    id: 'depilacao-pes',
    number: '12',
    name: 'Depilação dos pés',
    category: 'corporal',
    categoryLabel: 'Corporal',
    audience: 'Feminina e Masculina',
    summary: 'Detalhamento cuidadoso no dorso dos pés e dedos.',
  },
  {
    id: 'depilacao-facial',
    number: '13',
    name: 'Depilação facial',
    category: 'facial',
    categoryLabel: 'Facial',
    audience: 'Feminina e Masculina',
    summary: 'Cuidado completo para o rosto com cera suave que respeita a pele sensível.',
  },
  {
    id: 'depilacao-buco',
    number: '14',
    name: 'Depilação de buço',
    category: 'facial',
    categoryLabel: 'Facial',
    audience: 'Feminina e Masculina',
    summary: 'Remoção delicada e rápida com mínimo desconforto.',
  },
  {
    id: 'depilacao-pescoco',
    number: '15',
    name: 'Depilação de pescoço',
    category: 'facial',
    categoryLabel: 'Facial',
    audience: 'Masculina e Feminina',
    summary: 'Contorno limpo na região do pescoço e nuca com acabamento natural.',
  },
  {
    id: 'depilacao-orelha',
    number: '16',
    name: 'Depilação de orelha',
    category: 'facial',
    categoryLabel: 'Facial',
    audience: 'Masculina e Feminina',
    summary: 'Higienização estética cuidadosa para aparência limpa e discreta.',
  },
  {
    id: 'depilacao-sobrancelhas',
    number: '17',
    name: 'Depilação de sobrancelhas',
    category: 'facial',
    categoryLabel: 'Sobrancelhas',
    audience: 'Feminina e Masculina',
    summary: 'Limpeza precisa dos fios excedentes preservando o desenho natural.',
  },
  {
    id: 'design-sobrancelhas',
    number: '18',
    name: 'Design de sobrancelhas',
    category: 'facial',
    categoryLabel: 'Sobrancelhas',
    audience: 'Feminina e Masculina',
    summary: 'Modelagem harmônica alinhada às proporções e expressão de cada rosto.',
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${STUDIO_INFO.phoneSanitized}?text=${encodeURIComponent(message)}`;
}
