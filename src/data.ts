/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, UXGuidelineCheck } from "./types";

// Dynamic image paths using the generated assets
export const IMAGES = {
  profile: "../src/assets/images/profile_3d_avatar_1780563131813.png",
  leykart: "../src/assets/images/leykart_ecommerce_1780563150539.png",
  digisop: "../src/assets/images/digisop_app_1780563167795.png",
  ezyid: "../src/assets/images/ezyid_security_1780563189212.png",
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "leykart",
    title: "Leykart E-commerce",
    tagline: "Revolutionizing B2B & B2C Shopping Structures",
    category: "E-Commerce & Digital Commerce",
    description: "A major transformation of a legacy wholesale system into a high-converting, modern storefront with frictionless checkout experiences.",
    thumbnail: IMAGES.leykart,
    problem: "Legacy wholesale e-commerce platform with high drop-off rates and complex multi-page checkouts that took wholesale merchants an average of 14 minutes to complete, resulting in lost conversions.",
    solution: "Implemented a streamlined glassmorphic cart management solution, consolidated a 5-step checkout into a single dynamic drawer, and established a modular responsive Design System.",
    challenge: "Handling complex client accounts, tax exceptions, and volume pricing tiers without overwhelming the viewport or cluttering the primary user flow.",
    role: "Lead UX/UI Designer",
    duration: "8 Months (2021)",
    toolsUsed: ["Figma", "Adobe Illustrator", "HTML5", "CSS3 / Tailwind", "JavaScript"],
    keyInsights: [
      "Wholesale buyers prioritize efficiency and bulk re-orders over discovery browsing.",
      "A sticky, sidebar cart widget lowered friction, boosting Average Order Value by 19%.",
      "Inline validation during tax-id lookup saved customer service teams hours of manual verification."
    ],
    userResearchSteps: [
      "Conducted 1:1 user interviews with 15 key industrial bulk purchasing managers.",
      "Built low-fidelity interactive wireframes to validate sequential tax-code verification.",
      "Run tree testing on category taxonomies to ensure intuitive inventory exploration."
    ],
    keyMetrics: [
      { value: "64% Faster", label: "Checkout Duration (14m down to 2.4m)" },
      { value: "+42% orders", label: "Increase in Mobile Order Volume" },
      { value: "94% Score", label: "Post-Launch System Usability Scale (SUS)" }
    ]
  },
  {
    id: "digisop",
    title: "DIGI SOP App",
    tagline: "Digitizing Enterprise Frontline Workflows",
    category: "Enterprise Productivity & Industrial Tech",
    description: "An offline-first highly-responsive enterprise app converting paper binders into slick, safe standard-operating-procedures.",
    thumbnail: IMAGES.digisop,
    problem: "Frontline industrial technicians in harsh environments relied on physical binders for Standard Operating Procedures (SOPs), leading to auditing errors, compliance delays, and high safety incident rates.",
    solution: "Designed and prototyped an offline-first, tablet-optimized work execution application, with strict touch-target considerations (Fitts's Law), micro-animated checksheets, and quick dark-mode toggling for low-light warehouses.",
    challenge: "Engaging older generation factory workers who were resistant to digital migration, in challenging factory conditions (dust, noise, grease glove handling).",
    role: "Lead Product Designer & Prototyper",
    duration: "12 Months (2022 - 2023)",
    toolsUsed: ["Figma", "Adobe After Effects", "Vanilla JS", "Core Java", "SQL"],
    keyInsights: [
      "Physical environments dictate design density; targets must be extra large (min 60px) when workers wear heavy safety gloves.",
      "Offline-first sync guarantees peace of mind in concrete thick-wall shielded industrial structures.",
      "Clear color-coded priority states (Critical, Warning, Normal) reduced system-level operational hazards by 82%."
    ],
    userResearchSteps: [
      "Shadowed refinery and floor workers for 5 days to map ambient glare, glove grip, and task interruptions.",
      "Utilized paper prototypes in high-noise zones to test visual readability and alert status feedback loops.",
      "Conducted usability testing with heavy industrial gloves to calibrate button size and tap tolerances."
    ],
    keyMetrics: [
      { value: "-82% Errors", label: "Operational Line Compliance Failures" },
      { value: "1.5s Loading", label: "Asset Rendering under low connectivity" },
      { value: "100% Active", label: "User Migration and complete binder phase-out" }
    ]
  },
  {
    id: "ezyid",
    title: "EZYiD Security",
    tagline: "Sleek Secure Identity & Asset Ecosystem",
    category: "Cybersecurity & Identity Admin",
    description: "A centralized secure identity console with bento-grid modules, high-contrast states, and automated status alerts.",
    thumbnail: IMAGES.ezyid,
    problem: "Enterprise security operators struggled with chaotic, multi-tab terminal dashboards to manage cyber identity badges and security clearance keys, resulting in severe operator fatigue and onboarding delays.",
    solution: "Built a consolidated, single-screen SecOps identity canvas with advanced bento-grid data representation, real-time activation lists, and robust alert feedback.",
    challenge: "Integrating high-density cryptographic raw strings and legacy system statuses without sacrificing layout harmony or cognitive comfort.",
    role: "Senior Graphic Designer & Frontend Liaison",
    duration: "6 Months (2024)",
    toolsUsed: ["Figma", "Adobe Photoshop", "React", "TypeScript", "SQL APIs"],
    keyInsights: [
      "A unified dashboard canvas is vastly superior to tabs for high-alert scenarios.",
      "Keyboard shortcuts integrated directly in visual tooltips drastically boost power-user performance.",
      "Subtle glowing states for expired tokens immediately draw focus to security vulnerabilities."
    ],
    userResearchSteps: [
      "Conducted mental model mapping session with 6 expert cybersecurity analysts.",
      "Ran dark-mode usability labs measuring optical fatigue across 8-hour shift cycles.",
      "Mapped access escalation paths using conceptual affinity mapping diagrams on Figma."
    ],
    keyMetrics: [
      { value: "+52% Action", label: "Faster threat screening and resolution times" },
      { value: "0 Incidents", label: "Critical system clearance leaks in Year 1" },
      { value: "3,200 Node", label: "Scales gracefully under heavy concurrent traffic" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "UX/UI & Creative Direction",
    skills: [
      {
        name: "Figma",
        level: 98,
        description: "Pixel-perfect mockups, comprehensive cloud Design Systems, high-fidelity auto-layout prototyping, component states.",
        useCases: ["Creating full design systems", "Interactive responsive wireframing", "Handoff to engineers"]
      },
      {
        name: "Adobe Photoshop & Illustrator",
        level: 92,
        description: "Vector branding systems, pixel-perfect icon sets, image retouching, composites, print-ready layouts.",
        useCases: ["Asset styling", "Custom visual graphics", "Brand books"]
      },
      {
        name: "Adobe After Effects",
        level: 85,
        description: "Micro-interactions, state transitions, motion system designs, explainer media, SVG body-moving Lottie exports.",
        useCases: ["UI motion guides", "Interactive feedback animation", "Product teasers"]
      }
    ]
  },
  {
    name: "Engineering & Implementation",
    skills: [
      {
        name: "Frontend (HTML/CSS/JS)",
        level: 88,
        description: "Writing highly responsive layouts, semantically compliant markup, elegant custom animations, component optimization.",
        useCases: ["Translating designs directly to React/Tailwind", "Responsive single-page structures", "Interactive micro-behaviors"]
      },
      {
        name: "Core Java & OOP",
        level: 70,
        description: "Solid foundational knowledge in object-oriented structures, algorithms, data types, and logical architecture.",
        useCases: ["Backend model comprehension", "Enterprise state structure alignment"]
      },
      {
        name: "SQL Databases",
        level: 75,
        description: "Relational schema structures, querying, data relation modeling, optimization of high-speed data tables.",
        useCases: ["Formulating data flows", "Aligning design structures with database entities"]
      }
    ]
  }
];

export const UX_GUIDELINES: UXGuidelineCheck[] = [
  {
    id: "proximity",
    name: "Law of Proximity (Gestalt)",
    criterion: "Grouping associated project blocks with intentional, clean margin intervals.",
    status: true,
    explanation: "Related pieces of card actions and metadata are visually consolidated using precise Tailwind margin/padding ratios rather than indiscriminate spacing."
  },
  {
    id: "fitts",
    name: "Fitts's Law (Ease of Target)",
    criterion: "Clickable targets meet the minimum 44px standard with clear hover indicators.",
    status: true,
    explanation: "All core buttons, drawer tags, and external social icons have minimum bounding taps of 48px to prevent misplaced inputs, especially on mobile viewpoints."
  },
  {
    id: "feedback",
    name: "Immediate Feedback (Affordance)",
    criterion: "All inputs, hover interactions, and cards respond visually.",
    status: true,
    explanation: "Hovering over cards, text boxes, and action zones activates elegant micro-transitions, scaling, or ambient color illumination."
  },
  {
    id: "wcag",
    name: "Contrast & Accessibility (WCAG AA)",
    criterion: "Color values provide contrast greater than 4.5:1.",
    status: true,
    explanation: "Combines an ultradark deep charcoal background `#0b0c10` with high-contrast electric neon cyan `#45f3ff` and crisp white/silver body text for optical comfort."
  }
];
