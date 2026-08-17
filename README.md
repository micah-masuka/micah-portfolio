# Portfolio by Micah Masuka

UX Designer portfolio. Live site: [micah.digitale-tech.com](https://micah.digitale-tech.com/)

Case studies from a Logos Publicity internship and live client websites (Alfresco The Bakery, Verandah Café), plus Sanex kiosk work and coursework.

## Local

```bash
python3 scripts/serve.py 8080
```

Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/). Clean URLs work locally (`/portfolio`, `/case-studies/logos-publicity`).

## cPanel (Git deploy)

1. In cPanel → **Domains**, copy the **Document Root** for `micah.digitale-tech.com`.
2. Git Version Control → **Create**
   - Clone a Repository: **On**
   - Clone URL: `https://github.com/micah-masuka/micah-portfolio.git`
   - Repository Path: `repositories/micah-portfolio`
   - Repository Name: `Micah Portfolio`
3. After clone, **Manage** → copy the webhook URL.
4. GitHub → this repo → **Settings** → **Webhooks** → add that URL (push events).
5. Edit `.cpanel.yml` so `DEPLOYPATH` matches the document root, then **Deploy HEAD Commit**.

Do not clone into `public_html` unless that folder is only for this subdomain.
