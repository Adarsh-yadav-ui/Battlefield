"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Brain, Trophy, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex min-h-svh flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 pt-0 transition-all duration-500 ease-out sm:px-6 lg:px-8">
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between border border-gray-50 transition-all duration-500 ease-out dark:border-gray-700",
            isScrolled
              ? "mt-4 -translate-y-1 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              : "border-b bg-background/95 px-4 py-4 backdrop-blur supports-backdrop-filter:bg-background/60",
          ].join(" ")}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo_dark.svg"
              alt="Battlefield Logo"
              width={220}
              height={400}
              className="block dark:hidden"
            />
            <Image
              src="/logo_light.svg"
              alt="Battlefield Logo"
              width={220}
              height={400}
              className="hidden dark:block"
            />
          </div>
          <button
            className={[
              "rounded-md border border-input px-4 py-2 transition-all duration-300 hover:bg-accent",
              isScrolled ? "shadow-sm" : "",
            ].join(" ")}
          >
            {/* Clerk Sign-In Button Placeholder */}
            Sign In / Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center px-4 py-20 sm:py-32">
        <div className="max-w-3xl text-center">
          <Badge className="mb-6">The LLM Arena</Badge>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Battle AI Models Head-to-Head
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Experience the ultimate AI arena where three diverse open-source
            models compete to answer your questions. Vote for the best response
            and shape the leaderboard.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Zap className="h-4 w-4" />
              Enter the Arena
            </Button>
            <Button size="lg" variant="outline">
              View Leaderboard
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-16 text-center text-3xl font-bold">
            Why Battlefield?
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <Brain className="mb-4 h-8 w-8 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">3 AI Responses</h4>
              <p className="text-muted-foreground">
                Get diverse answers from three powerful open-source LLM models
                in every query.
              </p>
            </Card>
            <Card className="p-6">
              <Trophy className="mb-4 h-8 w-8 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">Community Voting</h4>
              <p className="text-muted-foreground">
                Vote on the best responses and directly influence which models
                rise to the top.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="mb-4 h-8 w-8 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">Public Leaderboard</h4>
              <p className="text-muted-foreground">
                Track model performance in real-time with our transparent,
                community-driven rankings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-16 text-center text-3xl font-bold">
            Loved by AI Enthusiasts
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &quot;Finally, a fair way to compare AI models without vendor
                bias. Battlefield is the future of AI evaluation.&quot;
              </p>
              <p className="font-semibold">Alex Chen</p>
              <p className="text-sm text-muted-foreground">AI Researcher</p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &quot;Using open-source models and community voting makes this
                the most transparent AI arena out there.&quot;
              </p>
              <p className="font-semibold">Jordan Lee</p>
              <p className="text-sm text-muted-foreground">ML Engineer</p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &quot;This is exactly what the open-source community needed.
                Real competition drives innovation.&quot;
              </p>
              <p className="font-semibold">Sam Patel</p>
              <p className="text-sm text-muted-foreground">
                Open Source Advocate
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &quot;The leaderboard is fascinating. You can see which models
                truly excel at different types of tasks.&quot;
              </p>
              <p className="font-semibold">Emma Watson</p>
              <p className="text-sm text-muted-foreground">Data Scientist</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="bg-muted/50 px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-3xl font-bold">Backed by Innovation</h3>
          <p className="mb-12 text-lg text-muted-foreground">
            Battlefield is built on the foundation of open-source AI and
            community collaboration. We believe in transparent, fair evaluation
            of AI models.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <p className="mb-2 text-2xl font-bold text-primary">100% Open</p>
              <p className="text-sm text-muted-foreground">
                All models are open-source and accessible
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <p className="mb-2 text-2xl font-bold text-primary">
                Community Driven
              </p>
              <p className="text-sm text-muted-foreground">
                Powered by votes from thousands of users
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <p className="mb-2 text-2xl font-bold text-primary">
                Transparent
              </p>
              <p className="text-sm text-muted-foreground">
                All rankings and data are publicly visible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-4 text-2xl font-bold">Ready to Enter the Arena?</h3>
          <p className="mb-8 text-muted-foreground">
            Join thousands of AI enthusiasts discovering which models reign
            supreme.
          </p>
          <Button size="lg" className="gap-2">
            <Zap className="h-4 w-4" />
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Battlefield Logo"
                  width={40}
                  height={40}
                />
                <span className="font-bold">Battlefield</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The ultimate LLM arena
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Arena
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Models
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Battlefield. Built with open-source AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
