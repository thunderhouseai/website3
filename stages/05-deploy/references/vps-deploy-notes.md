# VPS deploy notes — ThunderHouse infra

## Known infrastructure

- Hostinger Linux VPS ("VM2" setup)
- Docker with Coolify (app platform) and Traefik (reverse proxy / SSL)
- Postgres and an n8n server also run on this host — the site deploy must not
  touch their containers, networks, or ports.
- Claude Code is installed on the VPS: use it ONLY for stage 05 verification and
  debugging (logs, Traefik routes, container status). Never for editing site code.

## Deployment shape

- Site deploys as a Coolify application from the Git repo (Dockerfile build pack,
  Next.js standalone output, container port 3000 unless changed).
- Traefik routing and Let's Encrypt SSL are handled by Coolify when the domain is
  attached to the app — do not hand-edit Traefik config for the site.
- Always deploy to a Coolify preview/staging domain first; production domain is
  attached only after the verification checklist passes.

## Cautions

- Resource headroom: n8n + Postgres + builds share one VPS. Prefer building the
  image via Coolify's build (watch memory) — if builds OOM, build in CI (GitHub
  Actions) and deploy the image instead; note this fallback in the runbook.
- DNS: thunderhouseai.com A record must point at the VPS IP before domain attach;
  TTL down to 300s ahead of cutover shortens rollback time.
- Rollback = reattach the domain to the previous app/deployment in Coolify.
  Keep the old site's app paused, not deleted, for at least a week post-cutover.
