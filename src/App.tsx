import { Tabs } from "@base-ui/react/tabs";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { projects } from "@/data/projects";

const categories = ["All", "AI Product", "Automation", "Creative Coding", "Open Source"] as const;

export default function App() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="min-h-screen bg-[var(--color-ink)] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-[-18rem] h-[40rem] bg-[radial-gradient(circle_at_top,rgba(246,194,93,0.22),transparent_55%)]" />
        <div className="absolute right-[-10rem] top-40 h-80 w-80 rounded-full bg-[rgba(92,173,255,0.16)] blur-3xl" />
        <div className="absolute left-[-8rem] bottom-10 h-72 w-72 rounded-full bg-[rgba(255,124,92,0.15)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 py-8 md:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-ink)]">
              <Sparkles className="size-5" />
            </div>
            <div>
              <p className="font-display text-lg leading-none">苏格AI</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Works by sugeflow
              </p>
            </div>
          </div>
          <a
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-white"
            href="https://github.com/sugeflow"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="size-4" />
            GitHub
          </a>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-8">
            <Badge>AI Portfolio</Badge>
            <div className="space-y-6">
              <h1 className="font-display max-w-4xl text-[clamp(3.6rem,10vw,7rem)] leading-[0.9] tracking-[-0.055em] md:max-w-[10ch]">
                苏格AI
                <span className="mt-2 block text-[var(--color-muted)] md:mt-3">
                  用产品、实验与界面把想法压成作品。
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] md:text-xl">
                这里展示的是 sugeflow 的 AI 产品、自动化流程、创意界面和开放实验。
                页面不是简历陈列，而是一个持续更新的创作样本库。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#featured">
                <Button size="lg">查看精选作品</Button>
              </a>
              <a href="https://github.com/sugeflow" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg">
                  GitHub 主页
                  <ArrowUpRight className="size-4" />
                </Button>
              </a>
            </div>
          </div>

          <Card className="overflow-hidden p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Snapshot
                </p>
                <p className="mt-2 font-display text-2xl">创作雷达</p>
              </div>
              <Badge className="border-[var(--color-accent)]/30 bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                Updated 2026
              </Badge>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {[
                ["作品方向", "AI 产品 / 自动化 / 创意代码"],
                ["表达方式", "Landing Page / Tooling / Workflow"],
                ["创作偏好", "高密度信息 + 强视觉气质"],
                ["主要阵地", "GitHub · sugeflow"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/8 bg-black/10 p-4">
                  <p className="text-sm text-[var(--color-muted)]">{label}</p>
                  <p className="mt-3 text-base leading-7 text-white">{value}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section id="featured" className="space-y-10">
          <SectionTitle
            eyebrow="Featured"
            title="精选作品先看结果，再看方法。"
            description="先展示最能代表苏格AI气质的项目：有产品感、有执行链路，也有明确的视觉判断。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.name}
                className="group flex min-h-[23rem] flex-col justify-between overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <Badge>{project.category}</Badge>
                    <span className="text-sm text-[var(--color-muted)]">0{index + 1}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-3xl leading-tight">{project.name}</h3>
                    <p className="text-base leading-7 text-[var(--color-muted)]">
                      {project.summary}
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/8 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-soft)]"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      查看项目
                      <ArrowUpRight className="size-4" />
                    </a>
                    {project.demo ? (
                      <a
                        className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[var(--color-accent)]"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        在线预览
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionTitle
            eyebrow="Archive"
            title="按创作类型浏览，而不是按时间堆砌。"
            description="用分类视角展示作品库，更适合把持续创作的能力和方法论表达出来。"
          />
          <Tabs.Root defaultValue="All" className="space-y-8">
            <Tabs.List className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Tabs.Tab
                  key={category}
                  value={category}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--color-muted)] transition-all data-[selected]:border-[var(--color-accent)]/50 data-[selected]:bg-[var(--color-accent)]/12 data-[selected]:text-white"
                >
                  {category}
                </Tabs.Tab>
              ))}
            </Tabs.List>
            {categories.map((category) => {
              const visible = category === "All"
                ? projects
                : projects.filter((project) => project.category === category);

              return (
                <Tabs.Panel key={category} value={category}>
                  <div className="grid gap-5 md:grid-cols-2">
                    {visible.map((project) => (
                      <Card key={`${category}-${project.name}`} className="p-6">
                        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <Badge>{project.category}</Badge>
                              <span className="text-sm text-[var(--color-muted)]">{project.year}</span>
                            </div>
                            <div>
                              <h3 className="font-display text-2xl">{project.name}</h3>
                              <p className="mt-3 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                                {project.summary}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-start gap-4 md:items-end">
                            <div className="flex max-w-sm flex-wrap gap-2 md:justify-end">
                              {project.stack.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-white/8 px-3 py-1 text-xs text-[var(--color-muted)]"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                              <a
                                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[var(--color-accent)]"
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub
                                <ArrowUpRight className="size-4" />
                              </a>
                              {project.demo ? (
                                <a
                                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
                                  href={project.demo}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Demo
                                  <ArrowUpRight className="size-4" />
                                </a>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Tabs.Panel>
              );
            })}
          </Tabs.Root>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <SectionTitle
              eyebrow="About"
              title="不是堆 demo，是建立持续产出的系统。"
              description="苏格AI聚焦的是把想法变成能运行、能展示、能复用的成果，从提示词到工具，从界面到流程。"
            />
          </Card>
          <Card className="p-8">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                ["产品化", "把实验压缩成可被他人理解和使用的界面。"],
                ["自动化", "把高频动作收敛成稳定、可重复执行的流程。"],
                ["表达力", "让技术作品具备明确的节奏、气质和识别度。"],
              ].map(([title, copy]) => (
                <div key={title}>
                  <p className="font-display text-2xl text-white">{title}</p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{copy}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <footer className="flex flex-col gap-5 border-t border-white/10 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">苏格AI</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              持续更新 sugeflow 的作品样本与创作轨迹。
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-white"
            href="https://github.com/sugeflow"
            target="_blank"
            rel="noreferrer"
          >
            前往 GitHub 主页
            <ArrowUpRight className="size-4" />
          </a>
        </footer>
      </div>
    </main>
  );
}
