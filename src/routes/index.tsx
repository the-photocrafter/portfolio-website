import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Youtube, Instagram, Mail, MessageCircle, ExternalLink, Camera, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import heroPortrait from "@/assets/IMG_9219.jpeg";
import ytAvatar from "@/assets/IMG_9219.jpeg";
import pjpAvatar from "@/assets/IMG_6194.jpeg";
import upjAvatar from "@/assets/IMG_1414.jpeg";
import g4 from "@/assets/IMG_2407.png";
import g5 from "@/assets/IMG_2409.png";
import g6 from "@/assets/IMG_2410.png";
import g7 from "@/assets/IMG_2411.png";
import n1 from "@/assets/IMG_3643.jpeg";
import n2 from "@/assets/IMG_3645.jpeg";
import n3 from "@/assets/IMG_3644.jpeg";
import n4 from "@/assets/IMG_3646.jpeg";
import n5 from "@/assets/IMG_3648.jpeg";
import n6 from "@/assets/IMG_3649.jpeg";
import n7 from "@/assets/IMG_3650.jpeg";
import n8 from "@/assets/IMG_3651.jpeg";
import n9 from "@/assets/IMG_3652.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const brands = ["Hollyland", "Spigen", "Ringke", "Capes India", "Sonic Lamb", "Saramonic"];

const platforms = [
  {
    title: "The Photocrafter",
    handle: "YouTube",
    tagline: "Long-form technical deep-dives, gear reviews, and professional workflow breakdowns.",
    followers: "4.3M+ Views",
    link: "https://youtube.com/@the.photocrafter?si=isBIY7bpTaUE1Psy",
    avatar: ytAvatar,
    Icon: Youtube,
    accent: "from-primary/30 to-transparent",
  },
  {
    title: "philip_james_photography",
    handle: "Instagram",
    tagline: "High-end visual storytelling, behind-the-scenes, and the art of commercial photography.",
    followers: "390K+ Views",
    link: "https://www.instagram.com/philip_james_photography?igsh=MWV1YmZucGp2c3BxZQ==",
    avatar: pjpAvatar,
    Icon: Camera,
    accent: "from-accent/30 to-transparent",
  },
  {
    title: "unfiltered.pj",
    handle: "Instagram",
    tagline: "Raw, unfiltered daily life, vlogs, and the lifestyle behind the lens.",
    followers: "66K+ Views",
    link: "https://www.instagram.com/unfiltered.pj?igsh=MTR3MGFyb2h4bmtmYg%3D%3D&utm_source=qr",
    avatar: upjAvatar,
    Icon: Instagram,
    accent: "from-primary/20 to-accent/20",
  },
];

const gallery = [
  { src: n1, span: "row-span-2 col-span-2" },
  { src: n2, span: "row-span-2" },
  { src: n3, span: "row-span-2" },
  { src: n4, span: "" },
  { src: n5, span: "" },
  { src: n6, span: "" },
  { src: n7, span: "" },
  { src: n8, span: "" },
  { src: n9, span: "" },
  { src: g4, span: "" },
  { src: g5, span: "" },
  { src: g6, span: "" },
  { src: g7, span: "" },
];

function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">PJ</span>
            <span className="hidden sm:inline">Philip James</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#platforms" className="transition hover:text-foreground">Platforms</a>
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px] shadow-primary/60 transition hover:shadow-primary/80"
          >
            Collaborate <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for brand collaborations
            </div>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Crafting Visuals.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Decoding Tech.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Philip James, a professional photographer, digital content creator, and the founder of{" "}
              <span className="text-foreground">The Photocrafters</span>. I bridge the gap between high-end technical
              gear and compelling visual storytelling. Armed with a Nikon Z6 III and a heavy editing workflow, I craft
              educational content, technical deep-dives, and aesthetic visuals — trusted by industry leaders like{" "}
              <span className="text-foreground">Hollyland</span> (Cosmo C2, Lark M2),{" "}
              <span className="text-foreground">Spigen, Ringke, Capes India, Sonic Lamb</span>, and{" "}
              <span className="text-foreground">Saramonic</span>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary/70 transition hover:scale-[1.02] hover:shadow-primary"
              >
                Let's Collaborate
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:bg-card"
              >
                View Work
              </a>
            </div>

            <div className="mt-12 border-t border-border/60 pt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
                {brands.map((b) => (
                  <span key={b} className="transition hover:text-foreground">{b}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-accent/30 opacity-60 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <img src={heroPortrait} alt="Philip James portrait" className="aspect-[4/5] w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="text-xs text-muted-foreground">Founder</p>
                    <p className="text-sm font-semibold">The Photocrafters</p>
                  </div>
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">My Platforms</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Three channels. One creative voice.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From technical deep-dives to raw daily life — pick your feed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px] hover:shadow-primary/40"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition duration-500 group-hover:opacity-100`} />
              <div className="relative flex items-start justify-between">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent opacity-70 blur" />
                  <img src={p.avatar} alt={p.title} className="relative h-16 w-16 rounded-full border-2 border-background object-cover" />
                </div>
                <p.Icon className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <div className="relative mt-6 flex flex-1 flex-col">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.handle}</p>
                <h3 className="mt-1 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-sm font-semibold text-foreground">{p.followers}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Visit Channel <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Featured Collaborations & Projects
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A selection of YouTube thumbnails, commercial shoots, and product collaborations.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card text-left focus:outline-none focus:ring-2 focus:ring-primary/60 ${g.span}`}
            >
              <img
                src={g.src}
                alt={`Project ${i + 1}`}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/0 transition group-hover:ring-primary/40" />
            </button>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-border bg-card/80 text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)); }}
            aria-label="Previous"
            className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/80 text-foreground transition hover:border-primary/60 hover:text-primary sm:left-6"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i + 1) % gallery.length)); }}
            aria-label="Next"
            className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/80 text-foreground transition hover:border-primary/60 hover:text-primary sm:right-6"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <img
            src={gallery[lightbox].src}
            alt={`Project ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_20px_80px_-20px] shadow-primary/40"
          />
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />
          <div className="relative text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Get in touch</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to build something amazing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Let's discuss how we can elevate your brand's presence through high-quality visual storytelling.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/message/MMC5NYNZJ6FQN1"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/60 p-5 text-left transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                    <p className="truncate font-semibold">Chat on WhatsApp</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </a>
              <a
                href="mailto:philipjameskarikkathra@gmail.com"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/60 p-5 text-left transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-background"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="truncate font-semibold">Send an Email</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Philip James · The Photocrafters</p>
          <p>Crafting Visuals. Decoding Tech.</p>
        </div>
      </footer>
    </div>
  );
}
