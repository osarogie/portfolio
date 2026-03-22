import React from "react"

const articles = [
  {
    title: "Analysing Flight Data",
    href: "https://medium.com/@osarogie/analysing-flight-data-8411fffa6e6a",
    publication: "Medium",
  },
  {
    title: "Birth",
    href: "https://thecommunity.ng/nosa/249/birth",
    publication: "TheCommunity",
  },
]

const projects = [
  {
    name: "Solana Pawn Shop",
    description:
      "A crypto-native lending concept that turns NFTs into quick liquidity.",
    tag: "Web3",
  },
  {
    name: "SmartHarvest",
    description:
      "Digital tools for improving agricultural operations and decision-making.",
    tag: "AgriTech",
  },
  {
    name: "GGivers",
    description:
      "A lightweight giving experience designed to make donations feel seamless.",
    tag: "FinTech",
  },
  {
    name: "TheCommunity",
    description:
      "A storytelling platform built around personal narratives and shared experiences.",
    tag: "Media",
  },
  {
    name: "A Plus - Academic Assistant",
    description:
      "A student-focused tracker for keeping coursework, goals, and progress in view.",
    tag: "EdTech",
  },
  {
    name: "Fast Klinik",
    description:
      "A hospital management product aimed at reducing operational friction.",
    tag: "HealthTech",
  },
]

const links = [
  { label: "GitHub", href: "https://github.com/osarogie" },
  { label: "Email", href: "mailto:hello@osarogie.com" },
]

export default function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-950 text-stone-100">
      <div className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_28%),linear-gradient(180deg,_#1c1917_0%,_#0c0a09_65%)]" />
        <div className="absolute left-[-6rem] top-40 -z-10 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 -z-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <header className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                Software Engineer • Creator
              </p>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Emmanuel
                <span className="block text-stone-300">Osarogie</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                I design and build useful digital products with a sharp eye for
                clarity, momentum, and human experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:w-[24rem] lg:grid-cols-1">
              <StatCard value="6+" label="Public products across health, media, finance, and education" />
              <StatCard value="2" label="Published pieces on systems, stories, and analysis" />
            </div>
          </header>

          <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-400">
                    Selected Work
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Products shaped around real-world use
                  </h2>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-300 sm:block">
                  Portfolio
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.name} {...project} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <section className="rounded-[2rem] border border-white/10 bg-stone-900/80 p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-400">
                  Writing
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Thoughts in public
                </h2>
                <div className="mt-6 space-y-4">
                  {articles.map((article) => (
                    <a
                      key={article.title}
                      href={article.href}
                      className="group block rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-200 hover:border-amber-200/40 hover:bg-white/10"
                    >
                      <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                        {article.publication}
                      </p>
                      <p className="mt-2 text-lg font-medium text-stone-100 transition group-hover:text-white">
                        {article.title}
                      </p>
                    </a>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-amber-200/20 bg-amber-100 p-6 text-stone-900 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-600">
                  Connect
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  Open to thoughtful collaboration
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-stone-700">
                  If you&apos;re building something ambitious and want a product
                  engineer who cares about polish and usefulness, let&apos;s talk.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-stone-800"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-stone-300">{label}</p>
    </div>
  )
}

function ProjectCard({
  name,
  description,
  tag,
}: {
  name: string
  description: string
  tag: string
}) {
  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-stone-950/50 p-5 transition duration-200 hover:-translate-y-1 hover:border-sky-200/30 hover:bg-stone-900">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-300">
          {tag}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-stone-400">{description}</p>
    </article>
  )
}
