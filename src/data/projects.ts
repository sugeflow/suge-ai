export type Project = {
  name: string;
  year: string;
  category: "AI Product" | "Automation" | "Creative Coding" | "Open Source";
  summary: string;
  stack: string[];
  href: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "auto-push-ai-news",
    year: "2026",
    category: "AI Product",
    summary: "AI 新闻聚合网站，聚焦每日更新和自动内容分发，适合作为持续运营型 AI 产品样本。",
    stack: ["TypeScript", "Automation", "Content Pipeline"],
    href: "https://github.com/zhichucode/auto-push-ai-news",
    featured: true,
  },
  {
    name: "claude-code-showcase",
    year: "2026",
    category: "Open Source",
    summary: "围绕 Claude Code 的配置、hooks、skills、agents 与工作流做成完整示例，适合展示 agent 工程化能力。",
    stack: ["Agent Workflow", "CLI", "Documentation"],
    href: "https://github.com/zhichucode/claude-code-showcase",
    featured: true,
  },
  {
    name: "ccpage",
    year: "2026",
    category: "Creative Coding",
    summary: "个人主页项目，偏展示型信息设计，能体现你的内容组织和网页表达能力。",
    stack: ["TypeScript", "Personal Brand", "Frontend"],
    href: "https://github.com/zhichucode/ccpage",
    demo: "https://i.zhichu.qzz.io/",
    featured: true,
  },
  {
    name: "dify-schedule",
    year: "2025",
    category: "Automation",
    summary: "Dify 工作流定时助手，面向自动触发与多渠道通知，是典型的 AI 工具链项目。",
    stack: ["GitHub Actions", "Workflow", "Notifications"],
    href: "https://github.com/zhichucode/dify-schedule",
    featured: true,
  },
  {
    name: "ai-web-designer",
    year: "2025",
    category: "Creative Coding",
    summary: "用 OpenAI API 来生成和编辑静态网站，方向上直接连接 AI 能力和网页设计。",
    stack: ["OpenAI", "Static Sites", "Design Tooling"],
    href: "https://github.com/zhichucode/ai-web-designer",
  },
  {
    name: "homepage",
    year: "2026",
    category: "Creative Coding",
    summary: "另一条个人站点线，适合放进作品库作为持续迭代中的展示系统。",
    stack: ["TypeScript", "Frontend", "Branding"],
    href: "https://github.com/zhichucode/homepage",
  },
  {
    name: "chatbot-pro",
    year: "2024",
    category: "AI Product",
    summary: "本地浏览器可运行的 ChatGPT clone，体现 AI 对话产品和前端交互实现能力。",
    stack: ["TypeScript", "Chat UI", "LLM"],
    href: "https://github.com/zhichucode/chatbot-pro",
    demo: "https://www.zhichi.me",
  },
  {
    name: "image-gallery-starter",
    year: "2025",
    category: "Creative Coding",
    summary: "图片画廊起手式项目，适合展示视觉内容型页面和组件化布局能力。",
    stack: ["TypeScript", "Gallery", "UI"],
    href: "https://github.com/zhichucode/image-gallery-starter",
  },
];
