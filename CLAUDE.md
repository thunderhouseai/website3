# site-production — ICM workspace

You are the single agent operating this ICM workspace. It produces the ThunderHouse AI
website (thunderhouseai.com) and is reusable for future client sites.

## How to operate

1. On any task, read `CONTEXT.md` (this folder) to route to the correct stage.
2. Enter the stage folder and read its `CONTEXT.md`. That contract is your entire job.
3. Load ONLY the files listed in the stage's Inputs table. Nothing else.
4. Write outputs ONLY to that stage's `output/` folder.
5. Never modify another stage's files. Never read a later stage's outputs.

## Commands

- `setup` — run the onboarding questionnaire in `setup/questionnaire.md`, then write
  answers into `_config/brand.md`, `_config/design-tokens.md`, `_config/motion-spec.md`.
- `run stage NN` — execute the numbered stage per its CONTEXT.md contract.
- `status` — list each stage's output folder contents and report pipeline position.

## Rules

- Stage outputs are edit surfaces. Always treat the file on disk as the approved
  version, even if it differs from what you previously wrote. The human edits between
  stages; their edits are the decision.
- Creative stages (01, 02, 03) contain checkpoints. Stop and wait for the human at
  each one. Do not proceed past a checkpoint without an explicit answer.
- Run the stage audit before writing final output. If a check fails, fix it first.
- `_config/` and `references/` are read-only during stage runs. Only `setup` writes
  to `_config/`.
- Canonical sources: design values live in `_config/design-tokens.md` until stage 03
  emits `shared/constants/tokens.ts`; after that, tokens.ts is canonical for code.
