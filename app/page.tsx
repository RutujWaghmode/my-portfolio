import { profile, skills, experience, projects } from "@/lib/data";

const nav = ["Home", "About", "Skills", "Experience", "Projects", "Resume", "Contact"];

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, React.ReactNode> = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" {...common}/><path d="m3 7 9 6 9-6" {...common}/></>,
    phone: <><path d="M6.6 3.5 9 3l1.7 4-2.2 1.5a15 15 0 0 0 6.2 6.2l1.5-2.2 4 1.7-.5 2.4a2 2 0 0 1-2.2 1.5C10 17.2 6.8 14 5.9 6.5a2 2 0 0 1 .7-3Z" {...common}/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" {...common}/><circle cx="12" cy="10" r="2.5" {...common}/></>,
    github: <><path d="M9 19c-4 .9-4-2-5.5-2.5M14.5 19v-3.1c0-1 .1-1.4-.5-2 2.2-.2 4.5-1.1 4.5-5a3.9 3.9 0 0 0-1-2.7 3.6 3.6 0 0 0-.1-2.7s-.8-.3-2.8 1a9.6 9.6 0 0 0-5.2 0c-2-1.3-2.8-1-2.8-1a3.6 3.6 0 0 0-.1 2.7 3.9 3.9 0 0 0-1 2.7c0 3.9 2.3 4.8 4.5 5-.5.5-.5 1.2-.5 2V19" {...common}/></>,
    linkedin: <><path d="M5 8v11M5 5v.1M9 19v-6a4 4 0 0 1 8 0v6M9 11V8" {...common}/></>,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="4" {...common}/><circle cx="12" cy="12" r="4" {...common}/><circle cx="17.5" cy="6.8" r=".8" fill="currentColor"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" {...common}/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" {...common}/></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" {...common}/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" {...common}/></>,
    download: <><path d="M12 3v11M8 10l4 4 4-4M5 21h14" {...common}/></>,
    sun: <><circle cx="12" cy="12" r="4" {...common}/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" {...common}/></>,
  };
  return <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">{paths[name]}</svg>;
}

const Title = ({ t, sub, dark }: { t: string; sub?: string; dark?: boolean }) => (
  <div className="mb-10">
    <h2 className={`text-3xl font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>{t}</h2>
    <div className="mt-3 h-1 w-10 rounded-full bg-blue-500" />
    {sub && <p className={`mt-3 ${dark ? "text-slate-300" : "text-slate-500"}`}>{sub}</p>}
  </div>
);

const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-20 px-5 py-20 sm:px-6 ${className}`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 shadow-lg shadow-slate-900/10 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="#home" className="text-lg font-extrabold tracking-tight text-white">{profile.first} <span className="text-blue-400">{profile.last}</span></a>
          <div className="hidden items-center gap-5 md:flex">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="text-xs font-medium text-slate-200 transition hover:text-blue-400">{n}</a>)}
          </div>
          <div className="rounded-full p-2 text-slate-200"><Icon name="sun" /></div>
        </nav>
        <div className="overflow-x-auto border-t border-white/5 md:hidden">
          <div className="mx-auto flex min-w-max gap-5 px-5 py-2 text-xs text-slate-300">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-blue-400">{n}</a>)}
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="scroll-mt-20 overflow-hidden bg-navy px-5 py-20 text-white sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="text-sm font-medium text-slate-200">Hello, I&apos;m</p>
              <h1 className="mt-2 text-4xl font-black leading-tight sm:text-6xl">{profile.first} <span className="text-blue-400">{profile.last}</span></h1>
              <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">{profile.role}</p>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">{profile.intro} I love turning ideas into practical, user-friendly digital products.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-bold shadow-lg shadow-blue-500/20 transition hover:bg-blue-600">View My Projects <Icon name="arrow" /></a>
                <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white/10"><Icon name="download" /> Download Resume</a>
              </div>
              <div className="mt-8 flex gap-3">
                {[['linkedin','LinkedIn',profile.links.linkedin],['github','GitHub',profile.links.github],['instagram','Instagram',profile.links.instagram],['mail','Email',`mailto:${profile.email}`]].map(([icon,label,href]) => (
                  <a key={label} href={href as string} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-blue-400 hover:text-blue-400"><Icon name={icon as string} /></a>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -right-4 -top-5 h-20 w-20 rounded-full border border-blue-400/20" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/30 to-blue-950 p-3 shadow-2xl shadow-black/20">
                <div className="grid h-full w-full place-items-center rounded-[1.5rem] border border-white/10 bg-white/5 text-center backdrop-blur-sm">
                  <div><div className="text-7xl font-black text-white/90">{profile.first[0]}{profile.last[0]}</div><p className="mt-2 text-sm text-blue-200">Developer Portfolio</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about">
          <Title t="About Me" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_.8fr]">
            <div className="space-y-5 leading-7">{profile.about.map((p) => <p key={p}>{p}</p>)}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div><p className="text-2xl font-extrabold text-blue-600">{profile.years}</p><p className="text-xs text-slate-500 sm:text-sm">Years Experience</p></div>
                <div><p className="text-2xl font-extrabold text-blue-600">BCS</p><p className="text-xs text-slate-500 sm:text-sm">Computer Science Graduate</p></div>
                <div><p className="text-2xl font-extrabold text-blue-600">PHP</p><p className="text-xs text-slate-500 sm:text-sm">Core PHP Developer</p></div>
              </div>
            </div>
            <dl className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              {([['Name',`${profile.first} ${profile.last}`,'code'],['Email',profile.email,'mail'],['Location',profile.location,'pin'],['Languages',profile.languages,'code']] as const).map(([k,v,icon]) => <div key={k} className="flex gap-4 border-b border-slate-200 py-4 last:border-0"><span className="mt-0.5 text-blue-500"><Icon name={icon}/></span><div><dt className="text-xs text-slate-500">{k}</dt><dd className="mt-1 break-words text-sm font-semibold text-slate-900">{v}</dd></div></div>)}
            </dl>
          </div>
        </Section>

        <Section id="skills" className="bg-slate-50">
          <Title t="My Skills" sub="Technologies and tools I work with" />
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((s) => <li key={s} className="group rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"><div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon name="code" /></div>{s}</li>)}
          </ul>
        </Section>

        <Section id="experience">
          <Title t="Experience" sub="My professional journey" />
          <ol className="relative ml-3 border-l-2 border-blue-100 pl-8 sm:ml-5">
            {experience.map((e) => <li key={`${e.role}-${e.company}`} className="relative mb-12 last:mb-0"><span className="absolute -left-[2.72rem] top-1 grid h-7 w-7 place-items-center rounded-full border-4 border-white bg-blue-500 text-white shadow"><Icon name="briefcase" /></span><h3 className="text-lg font-bold text-slate-900">{e.role}</h3><p className="mt-1 text-sm"><span className="font-semibold text-blue-600">{e.company}</span><span className="mx-2 text-slate-300">|</span>{e.period}</p><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">{e.points.map((p) => <li key={p}>{p}</li>)}</ul></li>)}
          </ol>
        </Section>

        <Section id="projects" className="bg-slate-50">
          <Title t="My Projects" sub="Some of the projects I have worked on" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => <article key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-40 place-items-center bg-gradient-to-br from-navy via-blue-900 to-blue-600 px-5 text-center text-lg font-bold text-white"><span>{p.name}</span></div>
              <div className="flex flex-1 flex-col p-5"><h3 className="font-bold text-slate-900">{p.name}</h3><p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{p.desc}</p><ul className="my-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{t}</li>)}</ul><div className="grid grid-cols-2 gap-3 text-sm font-bold"><a href={p.live} className="rounded-lg bg-blue-500 py-2.5 text-center text-white transition hover:bg-blue-600">Live Demo</a><a href={p.github} className="rounded-lg border border-slate-300 py-2.5 text-center text-slate-700 transition hover:bg-slate-50">GitHub</a></div></div>
            </article>)}
          </div>
        </Section>

        <Section id="resume">
          <Title t="Resume" sub="Download my resume to know more about my education, experience and skills." />
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm"><div className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-100 text-blue-600"><Icon name="download" /></div><h3 className="text-xl font-bold text-slate-900">{profile.first} {profile.last}</h3><p className="mt-1 text-sm">{profile.role}</p><a href="/resume.pdf" download className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold text-white hover:bg-blue-600"><Icon name="download"/> Download Resume</a></div>
            <dl className="grid gap-3 rounded-2xl border border-slate-200 p-7 sm:grid-cols-2">{([['Education',profile.education],['Experience',`${profile.years} Years`],['Location',profile.location],['Email',profile.email]] as const).map(([k,v]) => <div key={k} className="rounded-xl bg-slate-50 p-4"><dt className="text-xs text-slate-500">{k}</dt><dd className="mt-1 break-words text-sm font-semibold text-slate-900">{v}</dd></div>)}</dl>
          </div>
        </Section>

        <Section id="contact" className="bg-navy">
          <Title dark t="Get In Touch" sub="Feel free to contact me for any opportunities or just to say hello!" />
          <div className="grid gap-4 md:grid-cols-3">{([['Email',profile.email,'mail'],['Phone',profile.phone,'phone'],['Location',profile.location,'pin']] as const).map(([k,v,icon]) => <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white"><div className="flex items-center gap-3"><span className="text-blue-400"><Icon name={icon}/></span><p className="text-xs text-slate-400">{k}</p></div><p className="mt-3 text-sm font-semibold break-words">{v}</p></div>)}</div>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-600"><Icon name="mail"/> Send an email</a>
        </Section>
      </main>

      <footer className="bg-navy px-5 py-8 text-sm text-slate-400 sm:px-6"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3"><div><p className="font-bold text-white">{profile.first} {profile.last}</p><p>{profile.role}</p></div><div className="flex flex-wrap gap-x-5 gap-y-2">{nav.map((n)=><a key={n} href={`#${n.toLowerCase()}`} className="hover:text-white">{n}</a>)}</div></div><div className="mx-auto mt-6 max-w-6xl border-t border-white/10 pt-5 text-xs">© {new Date().getFullYear()} {profile.first} {profile.last}. All rights reserved.</div></footer>
    </div>
  );
}
