import { createFileRoute } from "@tanstack/react-router";
import { useIntlayer } from "react-intlayer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { useI18nHTMLAttributes } from "@/hooks/useI18nHTMLAttributes";

export const Route = createFileRoute("/{-$locale}/")({
  component: Portfolio,
});

const skills = {
  frontend: ["React", "Vue", "Next.js", "TypeScript"],
  backend: ["Node", "Bun", "Express", "NestJS"],
  cloud: ["Azure", "AWS", "GCP/Firebase", "Cloudflare"],
  tools: ["Turborepo", "CI/CD", "Docker"],
};

function Portfolio() {
  useI18nHTMLAttributes();
  const content = useIntlayer("portfolio");

  const experiences = [
    {
      title: content.experience.items.jaxitank.title,
      company: "Jaxitank",
      period: "May 2022 - Present",
      description: content.experience.items.jaxitank.description,
    },
    {
      title: content.experience.items.kuayolo.title,
      company: "Kuayolo",
      period: "May 2020 - May 2022",
      description: content.experience.items.kuayolo.description,
    },
  ];

  const projects = [
    {
      name: "Omokage",
      description: content.projects.items.omokage.description,
      tags: ["LLM", "Local-first", "Offline"],
      url: "https://omokage.app",
    },
    {
      name: "NotMyAnimeList",
      description: content.projects.items.notMyAnimeList.description,
      tags: ["Anime", "Tracker", "Minigames"],
      url: "https://notmyanimelist.com",
    },
    {
      name: "Tanstack Faster",
      description: content.projects.items.tanstackFaster.description,
      tags: ["TanStack", "Performance", "Ecommerce"],
      url: "https://tanstack-faster.jesusp2.com/",
    },
    {
      name: "Nimonikku",
      description: content.projects.items.nimonikku.description,
      tags: ["AI", "Learning", "Flashcards"],
      url: "https://nimonikku.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  {content.hero.greeting}
                </p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Jesus Perez Perez
                </h1>
                <p className="text-primary text-xl font-medium">
                  {content.hero.title}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LocaleSwitcher />
              </div>
            </div>
            <p className="max-w-2xl text-muted-foreground leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:jesusprzprz.e@gmail.com"
                className={buttonVariants({ variant: "default" })}
              >
                {content.hero.cta}
              </a>
              <a
                href="https://linkedin.com/in/jesus-perez-962401230/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                {content.projects.comment}
              </p>
              <h2 className="text-2xl font-bold">{content.projects.title}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                      >
                        {project.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                {content.experience.comment}
              </p>
              <h2 className="text-2xl font-bold">{content.experience.title}</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle>{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <CardDescription>{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                {content.skills.comment}
              </p>
              <h2 className="text-2xl font-bold">{content.skills.title}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{content.skills.categories.frontend}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{content.skills.categories.backend}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{content.skills.categories.cloud}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{content.skills.categories.tools}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                {content.contact.comment}
              </p>
              <h2 className="text-2xl font-bold">{content.contact.title}</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:jesusprzprz.e@gmail.com"
                className={buttonVariants({ variant: "default" })}
              >
                jesusprzprz.e@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/jesus-perez-962401230/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Jesus Perez Perez
          </p>
        </div>
      </footer>
    </div>
  );
}
