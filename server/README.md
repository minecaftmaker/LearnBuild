# LearnBuild backend

GitHub Pages serves the frontend. This folder describes the production service boundary for features that require trusted execution: account profiles, synced progress, project saves, code judging, classrooms and provider integrations.

Recommended services:
- Supabase Auth/Postgres for identity and synchronized data.
- A sandbox runner for student code with CPU, memory, time and filesystem quotas.
- Object storage for project artifacts.
- A queue for long-running evaluations.

Never execute arbitrary student code inside the GitHub Pages browser process or a shared unrestricted server process.
