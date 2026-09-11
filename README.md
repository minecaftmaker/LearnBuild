# LearnBuild 🧩

**Learn technology by rebuilding it.**

LearnBuild is being built as a full learning platform—not a static tutorial list. The product combines a W3Schools-style reference library, Duolingo-style progression, project-based learning, coding playgrounds, hosting/server education, achievements, community surfaces and a path toward real synced accounts and isolated code execution.

## What is in the platform now

- **10 technical tracks** covering web, JavaScript, Python, Git, databases, servers/networking, Linux/containers, cloud/hosting, compilers/languages, and security/reliability.
- **200 core lessons** with concepts, build tasks, checks and capstones.
- **100 practice challenges** for active recall and hands-on repetition.
- **60 project specifications** ranging from a tiny Git implementation to databases, compilers, servers and the full LearnBuild capstone.
- **16 language labs** covering Python, JavaScript, TypeScript, Go, Rust, Java, C, C++, C#, Kotlin, Ruby, PHP, Swift, Assembly, SQL, Bash and Lua.
- **Product UI** for home dashboard, library/search, tracks, daily practice, project studio, hosting lab, community, leaderboard, profile, settings and sign-in.
- **Gamification** with XP, streaks, progress, badges and completion state.
- **Hosting Lab** that teaches static hosting → DNS → HTTPS → CI/CD → logs → health checks → containers → scaling.
- **Production auth hooks** for Supabase email/password, Google OAuth and Apple OAuth when environment variables are configured.
- **Backend contracts** for progress, profiles, code judging and trusted service boundaries.
- **GitHub Pages deployment** through Actions.
- **Manifest tooling** so the repository can generate a complete `MANIFEST.md` from the actual working tree.

The repository is intentionally well over the small-demo scale and is structured so additional lessons, challenges, projects and languages can be added without rewriting the application shell.

## Learning loop

**Tiny lesson → example → prediction → build → check → reflection → XP → project → deploy.**

The curriculum is designed as a long-form journey of roughly **12–24 months** for a motivated younger learner, with optional acceleration for adults.

## Product architecture

```text
LearnBuild/
├── .github/workflows/       # GitHub Pages deployment
├── config/                  # Feature flags and curriculum rules
├── curriculum/              # Existing long-form track source
├── data/                    # 200 lessons + 100 challenges
├── projects/                # 60 project specs
├── languages/               # Multi-language lab guides
├── labs/                    # Runnable language starters
├── server/                  # Trusted-service boundary and contracts
├── scripts/                 # Repository tooling
├── docs/                    # Product, teaching, auth and architecture docs
├── public/                  # Static assets
├── src/                     # React/Vite product
└── supabase/                # Optional database/auth schema
```

## Authentication

The browser can run in local demo mode on GitHub Pages. For real multi-device accounts, configure Supabase using `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. The auth integration supports email/password plus Google and Apple OAuth through the Supabase client.

Never expose a Supabase service-role key in the frontend.

## Code execution

LearnBuild does **not** pretend that arbitrary student code can safely execute inside a GitHub Pages browser tab. The production architecture separates the frontend from a trusted judge service that can run code in disposable, resource-limited sandboxes. See `server/contracts/judge.md` and `docs/ARCHITECTURE_FULL.md`.

## Local development

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

Generate a complete working-tree manifest with:

```bash
npm run manifest
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Configure GitHub Pages to use **GitHub Actions**. The Vite app is designed for the repository subpath.

## Next production layer

The foundation is now large enough to support the next serious implementation stage: real Supabase sessions wired into every auth button, synced progress/projects, classrooms and teacher tools, and a hardened multi-language code judge. Those pieces belong behind trusted services rather than being faked inside a static page.
