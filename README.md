# Boston UMC

A church website built for Boston United Methodist Church. A friend who attends reached out needing a web presence quickly, so I put this together to meet their immediate needs.

## Why This Exists

The church was paying a monthly Wix subscription. For a small non-profit running on a tight budget, that recurring cost adds up. This site is deployed through GitHub and Netlify, which brings hosting cost to zero without sacrificing a clean, functional site.

## What the Site Covers

The congregation needed a few specific things and this covers all of them:

- Pastor introduction
- Service times and worship information
- Sermons via their YouTube channel
- Location with an embedded Google Map
- Handicap accessibility and parking details
- Contact information

## Tech Stack

React, Vite, and Tailwind CSS. Fully static with no backend, which is also why hosting is free.

## Running Locally

    npm install
    npm run dev

Open http://localhost:5173 in your browser.

## Deploying

Connect the repo to Netlify and it deploys automatically on every push. The free tier is more than enough for a church site.

    npm run build
    # Netlify handles the rest
