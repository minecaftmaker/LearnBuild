# LearnBuild architecture

LearnBuild is a static-first educational platform. GitHub Pages serves the web client. Authentication, synced progress and future classrooms are adapters, not hard-coded into lessons.

## Layers
- `src/data`: curriculum content and progression.
- `src/components`: reusable learning UI.
- `src/pages`: product surfaces.
- `src/lib`: browser services and integration boundaries.
- `labs/`: language-specific starter projects.
- `docs/`: curriculum and platform design.
- `supabase/`: optional hosted auth/data schema.

The project intentionally separates content from rendering so educators can add hundreds of lessons without rewriting UI.
