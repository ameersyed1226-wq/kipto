export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'core' | 'extended';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string; // gradient description or custom mock
  category: string;
  features: string[];
  client: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin?: string;
  github?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: 'Received' | 'In Discussion' | 'Scheduled';
  consultationDate?: string;
}
