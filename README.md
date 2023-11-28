This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Adjustment for this project
In order to work with PHP and mySQL on XAMPP you can do the following step
1. Go to XAMPP Control Panel
2. Press the Config button on Apache module
3. Choose Apache (httpd.conf)
4. Search for the word "DocumentRoot"
5. Change the root to your absolute path.
6. Do the same for <Directory "change to your path">
7. Save the file and continue

Or you can simply pull the repo to the htdocs folder if you don't have any important files inside it.