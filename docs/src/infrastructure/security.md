# Security

## Never Commit

Database passwords, JWT secrets, Supabase service-role keys, private API keys,
production credentials. Use environment variables — see [Environments](environments.md).

## Rules

- Production communication over HTTPS.
- Configure CORS explicitly on the backend once it exists.
- Validate all input (DTOs on the backend).
- Protect admin routes — see [Authorization](../backend/authorization.md).
- Do not expose internal stack traces in production error responses.
- Frontend never talks to Postgres/Supabase directly — see
  [Technology Stack → Architectural Boundary](tech-stack.md#architectural-boundary).
- Privileged Supabase credentials (service-role key) stay server-side only.

## Non-Functional Requirement

NFR-006 (Security): access control, validation, and reasonable security controls —
see [Requirements](../project/requirements.md).
