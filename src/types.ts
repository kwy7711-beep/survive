export interface Character {
  id: string;
  name: string;
  age: number;
  gender: 'M' | 'F';
  job: string;
  appearance: string;
  personality: string;
  romanceStyle: string;
  traits: string[];
  clothing: string;
  survivalItem: string;
  lostItem: string;
  mbti: string;
  enneagram: string;
  image?: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export interface Scenario {
  id: string;
  title: string;
  background: string;
  details: string[];
}

export interface EscapeRoute {
  id: string;
  title: string;
  description: string;
}

export interface EscapeBranch {
  id: string;
  title: string;
  description: string;
}
