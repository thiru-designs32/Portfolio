/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  thumbnail: string;
  problem: string;
  solution: string;
  challenge: string;
  role: string;
  duration: string;
  toolsUsed: string[];
  keyInsights: string[];
  userResearchSteps?: string[];
  keyMetrics?: Metric[];
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    description: string;
    useCases: string[];
  }[];
}

export interface UXGuidelineCheck {
  id: string;
  name: string;
  criterion: string;
  status: boolean;
  explanation: string;
}
