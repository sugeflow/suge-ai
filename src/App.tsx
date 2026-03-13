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
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-white/60">
                Selected Works
              </span>

              <h1 className="font-display text-[clamp(4rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.06em] text-white">
                苏格 AI
              </h1>

              <div className="font-display text-[clamp(3rem,7vw,5.8rem)] leading-[0.98] tracking-[-0.05em] text-[var(--color-muted)]">
                <div>把复杂的事，</div>
                <div>做得很简单。</div>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] md:text-xl">
              这里收录的是 sugeflow 做过的产品、流程和界面。
              它们不是概念，也不是摆拍用的 demo。它们能运行，能使用，也会继续进化。
            </p>
          </div>

          <Card className="overflow-hidden p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Focus
                </p>
                <p className="mt-2 font-display text-2xl">现在在做什么</p>
              </div>
              <Badge className="border-[var(--color-accent)]/30 bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                Updated 2026
              </Badge>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {[
                ["关注问题", "把复杂任务变成清楚、直接的产品体验"],
                ["工作方式", "原型、上线、迭代，而不是反复讲概念"],
                ["判断标准", "有用，好用，经得起重复使用"],
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
            title="先看做成了什么。"
            description="挑几件最能代表判断和执行力的作品。少一点解释，多一点结果。"
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
            title="作品按类型归档。"
            description="按问题和做法来整理，比按时间排序更接近真实的工作方式。"
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
              title="好产品不靠堆功能。"
              description="我更在意取舍、完成度和持续迭代。技术只是材料，体验才是最后留下来的东西。"
            />
          </Card>
          <Card className="p-8">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                ["产品判断", "知道该做什么，也知道什么应该删掉。"],
                ["执行速度", "尽快把东西做出来，再用真实反馈把它磨对。"],
                ["完成度", "界面、流程和细节要像一个整体，而不是拼起来的功能。"],
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
              持续发布正在成形的产品与实验。
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
