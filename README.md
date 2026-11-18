# Vishak — SOC Analyst Portfolio

Personal portfolio site showcasing my SOC investigations, digital forensics case studies and certifications.

**Live site:** https://vishak-portfolio-two.vercel.app/

## What's on the site

- **Projects** — SOC-style investigations with full write-ups:
  - [Operation Honeynet Collapse](https://vishak-SOC.github.io/security-writeups/tryhackme/honeynet-collapse/) — multi-OS ransomware forensics (Linux, Windows, macOS) using Volatility 3, Autopsy and Registry Explorer
  - [Operation First Shift](https://vishak-SOC.github.io/security-writeups/tryhackme/first-shift/) — SIEM triage and phishing investigation using Splunk, Wireshark and CyberChef
  - Active Directory detection lab (in progress)
- **Certifications** — Cisco Networking Academy and TryHackMe
- **Threat intel feed** — latest headlines pulled from The Hacker News RSS
- **Contact** — LinkedIn, GitHub and email

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router), React 19, TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vitest](https://vitest.dev/) and React Testing Library for tests
- Deployed on [Vercel](https://vercel.com/)

## Run locally

```bash
git clone https://github.com/vishak-SOC/vishak-portfolio.git
cd vishak-portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

Optional environment variables (in `.env.local`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL used in metadata |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity analytics ID |

## Credits

Built on the open-source [myCyberPortfolio](https://github.com/fxrhan/myCyberPortfolio) template by Farhan Ansari (MIT License), customised with my own content, projects and design changes.

## License

[MIT](LICENSE)
