export const caseStudies = [
  {
    id: "appointix",
    title: "Appointix",
    slug: "/work/appointix",
    status: "Active Prototype",
    category: "Proprietary Product · AI Marketplace",
    headline: "AI-Powered Hyperlocal Service Marketplace",
    desc: "An intelligent marketplace connecting households with local service providers. Automates natural language request parsing, proximity ranking, and real-time scheduling.",
    whatWeBuilt: "Multilingual Gemini AI voice parser, proximity routing, WebSocket scheduling, and cross-platform Expo React Native app.",
    technologies: ["Next.js 16", "Expo React Native", "Google Gemini AI", "Firebase", "WebSockets", "Tailwind CSS"],
    image: "/appointix.jpeg",
    imageAlt: "Appointix AI-powered hyperlocal service marketplace interface",
    evidenceBadge: "Implemented in Appointix Platform",
    client: "Internal Venture / SaaS",
    year: "2025",
    metrics: [
      { label: "Request Parsing Speed", value: "< 250ms" },
      { label: "Multi-language Support", value: "Urdu / English / Roman" },
      { label: "Architecture", value: "Event-Driven Realtime" }
    ],
    challenge: "Traditional service booking platforms rely on static menus that fail non-technical users. Appointix addresses this by letting clients speak or type freely in their native language to automatically classify, dispatch, and coordinate local vetted technicians.",
    solution: "We engineered an end-to-end voice-to-booking pipeline utilizing Google Gemini AI. The system extracts intents, geocodes target locations, ranks providers by proximity and rating, and dispatches real-time WebSocket booking requests directly to service technicians' mobile devices.",
    features: [
      "Natural Language Voice & Text Dispatcher",
      "Dynamic Radius Matching & Realtime Geolocation",
      "Instant Technician Confirmation with WebSockets",
      "In-App Verified Rating & Automated Invoicing Engine"
    ]
  },
  {
    id: "auratalk",
    title: "AuraTalk AI",
    slug: "/work/auratalk",
    status: "Internal R&D Prototype",
    category: "Internal R&D · Neural Video Avatar",
    headline: "Real-Time Neural Lip-Sync & Emotion Video Engine",
    desc: "An interactive video assistant platform combining live camera emotion tracking, CUDA-accelerated Wav2Lip neural lip-sync, and local Llama 3 LLM intelligence.",
    whatWeBuilt: "Real-time pipeline connecting MediaPipe facial emotion tracking with CUDA-accelerated Wav2Lip video generation and local Llama 3 LLM memory.",
    technologies: ["PyTorch CUDA", "Wav2Lip Pipeline", "Google MediaPipe", "FastAPI WebSockets", "Local Llama 3", "WebRTC"],
    image: "/AIAvatar.jpg",
    imageAlt: "AuraTalk real-time neural avatar video assistant interface",
    evidenceBadge: "Implemented in AuraTalk AI Prototype",
    client: "SAWERA TECHS R&D Lab",
    year: "2025",
    metrics: [
      { label: "Neural Audio Latency", value: "< 180ms" },
      { label: "Emotion Detection FPS", value: "60 FPS Native" },
      { label: "Video Generation", value: "CUDA Accelerated" }
    ],
    challenge: "Conversational AI assistants typically lack visual embodiment and empathetic non-verbal feedback. Traditional 3D avatars feel artificial and lack realistic human micro-expressions and sync.",
    solution: "Our neural engineering lab created AuraTalk AI: a real-time conversational avatar with photorealistic video synthesis. By processing user camera video through MediaPipe for micro-expression analysis and streaming voice tokens to a GPU-accelerated Wav2Lip pipeline, AuraTalk produces fluid lip-synced video replies with contextual facial empathy.",
    features: [
      "Sub-200ms Neural Audio & Lip-Sync Synthesis",
      "Continuous 468-point 3D Facial Mesh Tracking",
      "Context-Aware Emotional Intelligence with Local LLM",
      "Zero-latency Browser Video Streaming via WebSockets"
    ]
  },
  {
    id: "petstan",
    title: "Petstan",
    slug: "/work/petstan",
    status: "Active Prototype",
    category: "Proprietary Platform · 3D Marketplace",
    headline: "Interactive 3D WebGL Multi-Vendor Pet Platform",
    desc: "A modern e-commerce platform featuring an interactive 3D hero experience rendered in WebGL, health documentation filtering, and a transaction and order management system.",
    whatWeBuilt: "Interactive WebGL 3D hero showcase, multi-vendor filtering, revenue management dashboards, and order management system on PostgreSQL.",
    technologies: ["Next.js 14", "Three.js", "React Three Fiber", "PostgreSQL", "Zustand", "Tailwind CSS"],
    image: "/petstan.jpeg",
    imageAlt: "Petstan 3D interactive multi-vendor pet marketplace interface",
    evidenceBadge: "Implemented in Petstan 3D Marketplace",
    client: "Petstan E-Commerce",
    year: "2024 - 2025",
    metrics: [
      { label: "3D Frame Performance", value: "60 FPS Smooth" },
      { label: "Plugin Requirement", value: "Zero Plugins" },
      { label: "Database Scaling", value: "High-Concurrency ACID" }
    ],
    challenge: "High-value pet purchases require extraordinary transparency regarding veterinary health records, pedigree ancestry, and vendor authenticity, while demanding an engaging, premium digital shopping journey.",
    solution: "We engineered an interactive WebGL 3D spatial experience allowing prospective pet owners to view interactive digital models alongside verified veterinary digital passports. The platform includes a complete multi-vendor backend with split payments and escrow protection.",
    features: [
      "Hardware-Accelerated WebGL 3D Hero Interactions",
      "Verified Veterinary & Vaccination Digital Record Vault",
      "Multi-vendor Vendor Portal with Realtime Order Tracking",
      "Ultra-Fast Search with Complex Multi-Facet Filtering"
    ]
  }
];

export const rndNodes = [
  {
    id: "voice-intent",
    num: "01",
    name: "VOICE & INTENT",
    title: "Multilingual Voice & Intent Engine",
    tagline: "Autonomous natural language parsing and voice orchestration R&D",
    desc: "Our conversational NLP pipeline capable of transcribing, categorizing, and geocoding spoken service requests in real time across Urdu, English, and Roman Urdu dialects without requiring structured user input.",
    tags: ["Google Gemini AI", "FastAPI", "WebSockets", "Roman Urdu NLP", "Real-Time Audio"],
    stats: [
      { value: "< 250ms", label: "INTENT PARSING" },
      { value: "98.4%", label: "ACCURACY ON DIALECTS" }
    ],
    evidenceBadge: "Implemented in Appointix Platform",
    slug: "/work/appointix",
    angle: 0
  },
  {
    id: "neural-vision",
    num: "02",
    name: "NEURAL VISION",
    title: "Real-Time Neural Lip-Sync & Vision",
    tagline: "Real-time video avatar generation and facial emotion tracking R&D",
    desc: "Our neural media pipeline combining live camera emotion detection via MediaPipe, CUDA-accelerated Wav2Lip synthesis, and local LLM context to deliver expressive conversational video avatars directly in the browser.",
    tags: ["PyTorch CUDA", "Wav2Lip Pipeline", "Google MediaPipe", "FastAPI", "Local Llama 3"],
    stats: [
      { value: "CUDA Accelerated", label: "NEURAL LIP-SYNC" },
      { value: "MediaPipe", label: "EMOTION TRACKING" }
    ],
    evidenceBadge: "Implemented in AuraTalk AI Prototype",
    slug: "/work/auratalk",
    angle: 120
  },
  {
    id: "spatial-3d",
    num: "03",
    name: "SPATIAL 3D",
    title: "Interactive WebGL & 3D Spatial Engine",
    tagline: "Hardware-accelerated browser 3D product rendering & physics",
    desc: "Our graphics pipeline pushing high-performance WebGL, custom shader materials, and React Three Fiber spatial experiences—rendering interactive 3D product environments smoothly on standard mobile and desktop browsers.",
    tags: ["Three.js", "WebGL", "React Three Fiber", "GLTF Optimization", "Physics Shaders"],
    stats: [
      { value: "Hardware WebGL", label: "BROWSER 3D" },
      { value: "Zero Plugins", label: "NATIVE RUNTIME" }
    ],
    evidenceBadge: "Implemented in Petstan 3D Marketplace",
    slug: "/work/petstan",
    angle: 240
  }
];

export const techStandards = [
  { label: "TYPE-SAFE FULL STACK", desc: "TypeScript · Next.js · React · Node.js · Python" },
  { label: "APPLIED AI & LLM SYSTEMS", desc: "Gemini Pro · Llama 3 · LangChain · RAG Architectures" },
  { label: "NEURAL AUDIO & VISION", desc: "PyTorch CUDA · MediaPipe · Realtime Wav2Lip" },
  { label: "INTERACTIVE 3D", desc: "Three.js · WebGL · Custom Shaders · React Three Fiber" },
  { label: "MODERN CLOUD & APIs", desc: "PostgreSQL · Docker · WebSockets · Supabase · Vercel" }
];

export const coreServices = [
  {
    num: "01",
    title: "Full-Stack Web & Mobile Development",
    desc: "Modern, responsive web applications, SaaS dashboards, and cross-platform mobile apps engineered for speed, stability, and scale.",
    deliverables: ["Next.js & React Web Apps", "Expo React Native Mobile", "High-Concurrency Backend APIs", "Database & State Architecture"]
  },
  {
    num: "02",
    title: "AI & LLM Application Development",
    desc: "Custom AI solutions leveraging Gemini, Claude, and open-source models like Llama 3. Conversational assistants, intelligent search, and autonomous reasoning.",
    deliverables: ["Custom RAG Systems", "Autonomous Agent Workflows", "Proprietary Data Fine-Tuning", "Real-Time Streaming NLP"]
  },
  {
    num: "03",
    title: "AI Automation & Intelligent Workflows",
    desc: "Automate complex, time-consuming business processes with custom AI pipelines that ingest, parse, classify, and act on your data without manual intervention.",
    deliverables: ["Document & Invoice Extraction", "Intelligent Customer Routing", "Automated CRM Sync", "Edge-Case Error Escalation"]
  },
  {
    num: "04",
    title: "Computer Vision & Real-Time AI",
    desc: "Visual AI systems powered by MediaPipe, OpenCV, and custom neural networks for real-time facial analysis, emotion tracking, and gesture recognition.",
    deliverables: ["Facial Mesh & Landmark Tracking", "Live Video Processing", "Object Detection & Segmentation", "GPU-Accelerated Inference"]
  },
  {
    num: "05",
    title: "3D Web & Interactive Digital Platforms",
    desc: "Immersive browser-based 3D environments, interactive product configurators, and spatial web experiences powered by Three.js and WebGL.",
    deliverables: ["Hardware-Accelerated WebGL", "Interactive 3D Showcases", "Custom Shader Development", "Mobile-Optimized Frame Rates"]
  },
  {
    num: "06",
    title: "System Architecture & Technical Advisory",
    desc: "Strategic technical guidance for founders and engineering teams. We evaluate technology choices, design scalable system architectures, and audit codebases.",
    deliverables: ["Scalability & Performance Audits", "Cloud Infrastructure Design", "Security & Reliability Reviews", "CTO-Level Technical Direction"]
  }
];

export const values = [
  {
    title: "Integrity",
    desc: "We write honest code and provide straightforward advice. If an idea isn't technically sound or cost-effective, we say so upfront."
  },
  {
    title: "Collaboration",
    desc: "We work directly alongside founders as technical partners, communicating openly throughout the development lifecycle."
  },
  {
    title: "Innovation",
    desc: "We explore bleeding-edge technologies in our internal lab so our clients always benefit from battle-tested modern tools."
  },
  {
    title: "Excellence",
    desc: "Every line of code is held to strict engineering standards: type safety, modular architecture, and predictable performance."
  },
  {
    title: "Impact",
    desc: "We judge our success not by features delivered, but by measurable outcomes: faster operations, happier users, and scalable revenue."
  }
];

export const faqs = [
  {
    q: "How do we begin a new engagement?",
    a: "We start with a direct technical consultation where you share your project goals, technical constraints, and timeline. Within 48 hours, we deliver a clear technical roadmap and project proposal."
  },
  {
    q: "Do you build both mobile and web applications?",
    a: "Yes. We engineer production-grade web platforms with Next.js and cross-platform native iOS and Android apps using React Native and Expo."
  },
  {
    q: "Can you integrate AI into our existing software stack?",
    a: "Absolutely. We specialize in augmenting existing applications with custom LLMs, RAG knowledge bases, automated speech engines, and computer vision pipelines via modern REST or WebSocket APIs."
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. 100% of the intellectual property, repository commits, and custom assets developed during the project belong entirely to you upon project milestones."
  },
  {
    q: "How does SAWERA TECHS differ from traditional dev agencies?",
    a: "You work directly with hands-on systems engineers led by our Founder & CEO, Sawera Saghir. There are no project manager middlemen, no outsourced junior code, and no fluff—just disciplined, high-velocity engineering."
  }
];

