# Full architecture

## Browser
React/Vite UI → local-first store → optional Supabase client.

## Trusted services
Auth, progress sync, project storage and code judging live outside the static site.

## Content
Markdown lessons, challenge prompts, projects and language labs are versioned alongside the product so curriculum changes are reviewable.

## Judge isolation
Student code must run in disposable, resource-limited sandboxes. The judge should have no production credentials, no broad host filesystem access and no unrestricted network access.
