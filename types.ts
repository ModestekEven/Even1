
export interface Achievement {
  id: string;
  title: string;
  category: 'AI' | 'Entrepreneurship' | 'Culture' | 'Award';
  description?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}
