import {
  Fingerprint,
  Gavel,
  ScrollText,
  ShieldCheck,
  Zap,
  Scale,
  Lock,
  HeartHandshake,
  UserRoundCheck,
  Clock3,
  Rocket,
  BrainCircuit,
  Phone,
  FileSearch,
  Target,
  Briefcase,
} from "lucide-react";

export const services = [
  {
    icon: Fingerprint,
    title: "Prisão em Flagrante",
    description:
      "Atuação imediata para garantir seus direitos desde o primeiro momento da prisão.",
  },
  {
    icon: Gavel,
    title: "Audiência de Custódia",
    description:
      "Defesa técnica presencial na audiência que decide a manutenção da prisão.",
  },
  {
    icon: ScrollText,
    title: "Revogação de Prisão Preventiva",
    description:
      "Pedidos fundamentados para restabelecer a liberdade do investigado ou réu.",
  },
  {
    icon: ShieldCheck,
    title: "Habeas Corpus",
    description:
      "Medida constitucional para combater ilegalidades e abusos contra a liberdade.",
  },
  {
    icon: Zap,
    title: "Habeas Corpus Urgente",
    description:
      "Ação de alta prioridade, elaborada e protocolada em regime de urgência.",
  },
  {
    icon: Scale,
    title: "Defesa Criminal Estratégica",
    description:
      "Estratégias jurídicas personalizadas para cada fase do processo criminal.",
  },
];

export const differentials = [
  { icon: Lock, title: "Sigilo Absoluto", description: "Discrição total sobre cada caso e informação compartilhada." },
  { icon: HeartHandshake, title: "Atendimento Humanizado", description: "Escuta atenta, respeito e clareza em cada etapa." },
  { icon: UserRoundCheck, title: "Defesa Personalizada", description: "Cada caso é tratado com estratégia sob medida." },
  { icon: Clock3, title: "Disponibilidade", description: "Atendimento ágil, inclusive em situações de urgência." },
  { icon: Rocket, title: "Rapidez", description: "Resposta imediata em momentos que exigem ação." },
  { icon: BrainCircuit, title: "Estratégia Jurídica", description: "Planejamento técnico e visão processual apurada." },
];

export const process = [
  { icon: Phone, title: "Primeiro Contato", description: "Contato inicial confidencial pelo WhatsApp para entender a situação." },
  { icon: FileSearch, title: "Análise do Caso", description: "Estudo aprofundado dos autos, provas e circunstâncias." },
  { icon: Target, title: "Definição da Estratégia", description: "Construção de uma linha de defesa técnica e personalizada." },
  { icon: Briefcase, title: "Atuação Jurídica", description: "Execução processual firme em todas as instâncias necessárias." },
];

export const videos = [
  { id: "aitbTIJSgJo", title: "Atuação em Audiência" },
  { id: "IglWBf8oEEk", title: "Defesa Criminal" },
];

export const practiceAreas = [
  {
    category: "Direito Criminal",
    badge: "Especialidade",
    items: [
      "Lavagem de Capitais",
      "Crimes Dolosos Contra a Vida",
      "Crimes Contra o Patrimônio",
      "Crimes Contra a Honra",
      "Crimes Ambientais",
      "Crimes Praticados por Funcionários e Gestores Públicos",
      "Crimes Contra a Ordem Econômica e Tributária",
      "Crimes Licitatórios",
      "Lei de Drogas",
      "Extradição Ativa e Passiva",
      "Prisão em Flagrante",
      "Audiência de Custódia",
      "Habeas Corpus",
    ],
  },
  {
    category: "Direito Cível",
    items: [
      "Ação Civil Ex Delicto",
      "Ação de Perdas e Danos",
      "Responsabilidade Civil",
      "Responsabilidade Médica e Estética",
    ],
  },
  {
    category: "Direito Imobiliário",
    items: [
      "Anulação de Leilão de Imóveis",
      "Imissão e Reintegração na Posse (Desocupação)",
      "Assessoria em Arrematações de Leilão Judicial e Extrajudicial",
      "Usucapião Judicial e Extrajudicial",
    ],
  },
  {
    category: "Direito Tributário",
    items: [
      "Repetição de Indébito Tributário e Isenção",
      "Isenção de Imposto sobre a Propriedade de Veículo Automotor (IPVA) e Imposto de Renda (IR)",
      "Repetição de indébito de Imposto sobre Transmissão de bens imóveis (ITBI), IPVA e demais impostos",
    ],
  },
];