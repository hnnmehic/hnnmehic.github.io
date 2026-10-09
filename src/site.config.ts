// Einzige Stelle für persönliche Daten und Medien.
// Für eine spätere Firmenseite: hier Name/Links tauschen, Farben in src/styles/tokens.css.
export const site = {
  name: 'Hanan Mehic',
  location: 'Linz, AT',
  email: 'hanan_mehic@protonmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/hanan-mehic-890563439',
    github: 'https://github.com/hnnmehic',
  },
  hero: {
    // Optional: Hintergrundbild oder -video. Leer = abstrakter Farbverlauf.
    video: { mp4: '', webm: '' },
    poster: '',
  },
  ogImage: '/media/og.jpg',
} as const;

export const stack = [
  { name: 'Swift', group: 'mobile' },
  { name: 'SwiftUI', group: 'mobile' },
  { name: 'Java', group: 'backend' },
  { name: 'Quarkus', group: 'backend' },
  { name: 'PostgreSQL', group: 'backend' },
  { name: 'Docker', group: 'devops' },
  { name: 'Kubernetes', group: 'devops' },
  { name: 'GitHub Actions', group: 'devops' },
  { name: 'GitLab CI', group: 'devops' },
  { name: 'n8n', group: 'ai' },
  { name: 'LLM APIs', group: 'ai' },
  { name: 'Figma', group: 'design' },
] as const;
