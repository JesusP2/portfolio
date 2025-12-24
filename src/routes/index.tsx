import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({ component: Portfolio });

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Jaxitank",
    period: "May 2022 - Present",
    description:
      "Here I've been helping build very complex web forms for the National Association of Realtors. Unified multiple projects into a single monorepo, which made everyone's life easier, and cut our CI/CD pipeline times from 10 minutes down to just 2-3. I've also enjoyed mentoring teammates through pair programming sessions.",
  },
  {
    title: "Fullstack Developer",
    company: "Kuayolo",
    period: "May 2020 - May 2022",
    description:
      "This is where my web journey began. I started building APIs with node and express, deploying apps to GCP and maintaining SPAs with React and Vue.",
  },
];

const skills = {
  frontend: ["React", "Vue", "Next.js", "TypeScript"],
  backend: ["Node", "Bun", "Express", "NestJS"],
  cloud: ["Azure", "AWS", "GCP/Firebase", "Cloudflare"],
  tools: ["Turborepo", "CI/CD", "Docker"],
};

const projects = [
  {
    name: "Omokage",
    description:
      "A chat app to talk with LLMs, built in just 10 days during a clonathon (clone + hackathon). The goal was to recreate t3.chat. It's local-first and works completely offline.",
    tags: ["LLM", "Local-first", "Offline"],
  },
  {
    name: "NotMyAnimeList",
    description:
      "A tracker for anime, manga, and light novels. But it's not just tracking - it also has minigames like 'Guess the anime opening' (more on the way (hopefully)).",
    tags: ["Anime", "Tracker", "Minigames"],
  },
  {
    name: "Tanstack Faster",
    description:
      "An experiment to build the fastest possible ecommerce site using TanStack Start.",
    tags: ["TanStack", "Performance", "Ecommerce"],
  },
  {
    name: "Nimonikku",
    description:
      "Mnemonic flashcards app, Anki-style, but with AI features to help you learn smarter.",
    tags: ["AI", "Learning", "Flashcards"],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">// Hello, I'm</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Jesus Perez Perez
              </h1>
              <p className="text-primary text-xl font-medium">
                Software Engineer
              </p>
            </div>
            <p className="max-w-2xl text-muted-foreground leading-relaxed">
              I'm a web developer from Mexico trying to build cool stuff for the
              web. I've been building things for over 6 years now and I've had
              the chance to collaborate with some great teams along the way.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:jesusprzprz.e@gmail.com"
                className={buttonVariants({ variant: "default" })}
              >
                Get in touch
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
                // things I've been building for fun
              </p>
              <h2 className="text-2xl font-bold">Projects</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
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
                // places I've had the chance to grow
              </p>
              <h2 className="text-2xl font-bold">Experience</h2>
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

      {/* Contact Section */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                // I'd love to hear from you
              </p>
              <h2 className="text-2xl font-bold">Contact</h2>
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

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                // my favorite tools to work with
              </p>
              <h2 className="text-2xl font-bold">Skills & Technologies</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
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
                  <CardTitle>Backend</CardTitle>
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
                  <CardTitle>Cloud & Infrastructure</CardTitle>
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
                  <CardTitle>Tools & DevOps</CardTitle>
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
