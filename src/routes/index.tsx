import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
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
      "Consultant providing technical support for the development of web applications for National Association of Realtors. Developed frontend and backend solutions using Vite, React, and Express, with deployments hosted on Azure Cloud. Established development standards for git, eslint, and typescript while unifying projects into a single monorepo using Turborepo. Optimized CI/CD pipelines from 8-10 minutes down to 2-3 minutes, migrated legacy projects from JavaScript/CRA to TypeScript/Vite, and mentored developers through pair programming.",
  },
  {
    title: "Fullstack Developer",
    company: "Kuayolo",
    period: "May 2020 - May 2022",
    description:
      "Built and maintained web applications and APIs using Node, Express, and NestJS. Worked extensively with Firebase and GCP for backend services, while developing and maintaining SPA websites using Vue and React.",
  },
];

const skills = {
  frontend: ["React", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  backend: ["Node.js", "Express", "NestJS", "REST APIs"],
  cloud: ["Azure", "AWS", "GCP", "Firebase", "Cloudflare"],
  tools: ["Git", "Turborepo", "CI/CD", "Docker", "ESLint", "Redis"],
};

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
              Fullstack developer with 6+ years of experience focused in web
              development. Experienced working with international teams using
              React.js and Node.js. Passionate about clean code, developer
              experience, and continuous improvement.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="default" asChild>
                <a href="mailto:jesusprzprz.e@gmail.com">
                  <span>Get in touch</span>
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/jesus-perez-962401230/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                </a>
              </Button>
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
                // What I work with
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

      {/* Experience Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                // Where I've worked
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
              <p className="text-muted-foreground text-sm">// Let's connect</p>
              <h2 className="text-2xl font-bold">Contact</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="default" asChild>
                <a href="mailto:jesusprzprz.e@gmail.com">
                  jesusprzprz.e@gmail.com
                </a>
              </Button>
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
