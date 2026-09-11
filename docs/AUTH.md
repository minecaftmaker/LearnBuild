# Authentication

GitHub Pages cannot safely run a private database or hold server secrets. LearnBuild therefore uses a hosted auth adapter such as Supabase.

Providers planned: email/password, Google OAuth and Sign in with Apple. Configure providers in Supabase, then set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the deployment environment.

Never commit service-role keys. The public anon key is designed for browser clients when Row Level Security is correctly configured.
