create table if not exists profiles(id uuid primary key, display_name text, xp integer default 0, streak integer default 0, created_at timestamptz default now());
create table if not exists lesson_progress(user_id uuid, lesson_id text, completed boolean default false, best_score integer default 0, attempts integer default 0, updated_at timestamptz default now(), primary key(user_id,lesson_id));
alter table profiles enable row level security;
alter table lesson_progress enable row level security;
