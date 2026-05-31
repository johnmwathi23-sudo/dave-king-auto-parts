# Dave King Auto Parts - Auto Spare Parts E-commerce

Kenya-based auto spare parts dealer. 30 products in KES from Toyota, Lexus, Nissan, and Mercedes.

## Tech Stack

- **Frontend:** Next.js 14 (TypeScript, Tailwind CSS) — `/frontend`
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **WordPress Theme:** Dave Kng Auto Parts (parent + child theme)

## Quick Deploy

### 1. GitHub

```bash
# Create a repo at https://github.com/new (name: dave-king-auto-parts)
git remote add origin https://github.com/YOUR_USER/dave-king-auto-parts.git
git branch -M main
git push -u origin main
```

### 2. Supabase

1. Go to https://supabase.com and create a new project
2. In SQL Editor, run the contents of `supabase/schema.sql`
3. Go to Project Settings > API and copy the URL and anon key
4. In the SQL Editor, optionally run `supabase/seed.sql` to populate products

### 3. Vercel

```bash
cd frontend
vercel --prod
```

Or connect your GitHub repo at https://vercel.com/new

Set environment variables in Vercel:
- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase anon key

## Project Structure

```
├── frontend/          # Next.js storefront
│   ├── src/app/       # Pages (homepage, products/[slug])
│   └── src/lib/       # Supabase client
├── supabase/          # Database migrations
│   └── schema.sql     # Products table
├── Dave Kng Auto Parts/       # WordPress parent theme
├── Dave Kng Auto Parts-child/ # WordPress child theme (KES currency)
└── README.md
```

## Local Dev

```bash
cd frontend
cp .env.local.example .env.local
# Fill in Supabase credentials
npm install
npm run dev
```

## License

GNU General Public License v2.0
