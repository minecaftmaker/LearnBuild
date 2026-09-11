# LearnBuild 🧩

**Learn technology by rebuilding it.**

LearnBuild is a Duolingo-inspired, project-first platform for students and adults who want to understand what is actually happening underneath modern technology.

Instead of only learning syntax, you build small versions of the systems you use: an HTTP server, Git client, database, router, shell, container, package manager, bytecode VM, compiler and hosted service.

## Learning experience

**Tiny lesson → example → prediction → build → automated check → reflection → XP → project.**

The curriculum is designed as a long-form journey of roughly **12–24 months** for a motivated learner under 14, with optional acceleration for adults.

## Tracks

- 🌐 Web Foundations
- 🌱 Git & Version Control
- 🗃️ Databases
- 🛰️ Servers & Networking
- 🐧 Linux & Containers
- ☁️ Cloud & Hosting
- 🧠 Python, JavaScript/TypeScript, Go, Rust, Java, C/C++
- ⚙️ Build Systems, interpreters and compilers
- 🛡️ Security & Reliability

## Repository architecture

```text
LearnBuild/
├── .github/workflows/          # GitHub Pages deployment
├── config/                     # Product/curriculum configuration
├── curriculum/                 # Long-form lesson source
│   ├── web/
│   ├── git/
│   ├── db/
│   ├── server/
│   ├── linux/
│   ├── cloud/
│   ├── languages/
│   ├── build/
│   └── security/
├── docs/                       # Product, pedagogy and architecture
├── labs/                       # Language-specific project starters
├── public/                     # Static assets and web manifest
├── src/
│   ├── components/             # Reusable learning UI
│   ├── data/                   # Curriculum registry and gamification
│   ├── hooks/                  # Client state hooks
│   ├── lib/                    # Storage/auth/integration boundaries
│   ├── pages/                  # Product surfaces
│   └── types/                  # Domain types
└── supabase/                   # Optional hosted auth/progress schema
```

## Authentication and sync

GitHub Pages is static hosting, so the browser client cannot safely contain private server credentials. LearnBuild therefore keeps authentication behind an adapter. The planned production integration supports **email/password, Google OAuth and Sign in with Apple**, with Supabase as the reference implementation.

Never commit service-role keys. See `docs/AUTH.md`.

## Hosting education

Hosting is part of the curriculum, not a final deployment button. Learners progress from static pages to DNS, HTTPS, CI/CD, environment configuration, logs, health checks, containers, reverse proxies and scaling.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Enable **GitHub Pages → Source: GitHub Actions** in repository settings. The Vite base path is configured for `/LearnBuild/`.

## Important implementation note

The current repository is the **platform foundation**, not a claim that secure multi-user code execution is already implemented. Real sandbox execution, OAuth provider configuration, synced progress, classrooms and production hosting labs belong in the next platform phases. This separation keeps a static GitHub Pages deployment safe while leaving room for a serious backend.

## License

See `docs/COPYRIGHT.md` for the content policy. Add a project license before accepting external contributions.
