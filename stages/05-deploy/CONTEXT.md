# Stage 05 — Deploy

Job: ship the approved site to the Hostinger VPS through Coolify with zero
downtime for the existing site until cutover. This stage produces deployment
artifacts and a runbook — the human executes the cutover.

## Inputs

| Source | File/Location | Section/Scope | Why |
|---|---|---|---|
| Site source | ../04-build/output/site/ | Full project | The deliverable |
| Deploy facts | ../../_config/brand.md | Deploy facts section | Domain, repo, current method |
| VPS notes | references/vps-deploy-notes.md | Full file | Infra specifics |

## Process

1. Read Deploy facts. FIRST: confirm how the current site is served (Coolify app,
   raw container, static files). If unknown, output discovery commands for the
   founder to run on the VPS and wait for results.
2. Generate Dockerfile (Next.js standalone) + .dockerignore into the site repo.
3. Write output/runbook.md: push to Git → create Coolify app (build pack:
   Dockerfile, port, env vars, domain thunderhouseai.com) → deploy to a preview
   domain first → verify checklist → attach production domain → DNS/Traefik
   cutover → rollback procedure (reattach domain to old app).
4. CHECKPOINT: founder reviews runbook, runs preview deploy, confirms checklist.
5. Save verification results to output/deploy-log.md.

## Audit

- [ ] Runbook includes rollback path at every step past preview
- [ ] Old site remains reachable until explicit cutover step
- [ ] No secrets in the repo — env vars documented by name only
- [ ] Preview checklist covers: all routes, transitions, pillars panel, mobile,
      reduced motion, SSL, redirect www→apex (or chosen canonical)

## Outputs

| Artifact | Location | Format |
|---|---|---|
| Dockerfile + ignore | ../04-build/output/site/ | Docker |
| Runbook | output/runbook.md | Numbered steps, copy-paste commands |
| Deploy log | output/deploy-log.md | What happened, when, verified by whom |
