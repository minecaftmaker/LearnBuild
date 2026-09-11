# Production authentication

The UI supports a local demo session so GitHub Pages can still be explored. For real accounts, configure a backend such as Supabase:

- Email/password provider
- Google OAuth
- Apple Sign in
- Email verification and password reset
- Row-level security for progress, projects, profiles and classroom data

Required frontend variables: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
Never expose a Supabase service-role key in the browser.
