# APLITE

APLITE is payment identity infrastructure for verified businesses.

It replaces repeated bank-detail sharing with verified payment identifiers that are safer to share, easier to manage, and easier for partners to resolve when money needs to move.

Live site: https://aplite-dhsa.vercel.app

Repository: https://github.com/Havcker243/APLITE

## Why This Exists

Businesses still send sensitive payment details through email threads, shared spreadsheets, PDFs, and messaging apps.

That creates three major problems.

1. Fraud risk

Payment details can be swapped or tampered with during business email compromise attacks.

2. Operational drag

Accounts payable teams repeatedly collect, verify, and re-enter the same vendor information.

3. Compliance exposure

Raw bank details move through workflows without strong encryption, verification, or audit trails.

APLITE solves this by creating a verified payment identity layer for businesses.

## Product Vision

Business payment identity should work like an email address.

A company should be able to share one stable identifier instead of repeatedly exposing raw bank details. That identifier should remain useful even when payout rails, bank accounts, or team members change.

APLITE is designed for accounts payable teams, marketplaces, vendor networks, contractor platforms, and B2B software products that need trustworthy payout information.

## How It Works

APLITE uses a Unique Payment Identifier, called a UPI.

A UPI is safe to share publicly. The sensitive payout coordinates behind it are encrypted, verified, and only exposed through controlled resolution.

The flow is:

1. A business signs up.

2. The business completes KYB verification.

3. The business registers payment rails such as ACH, domestic wire, or SWIFT.

4. APLITE encrypts and stores sensitive payout details.

5. The business receives a verified UPI.

6. Partners use the UPI to resolve accurate payment coordinates when authorized.

7. Resolution activity can be logged and controlled.

## Core Capabilities

### Verified Payment Identity

Organizations complete a Know Your Business flow before receiving a verified payment identity.

The onboarding process collects legal entity details, ownership information, documents, and verification method details before a submission enters review.

### Encrypted Payment Accounts

Payment account data is encrypted before storage.

The system is designed so sensitive bank details are not casually copied through emails, spreadsheets, or support workflows.

### Child UPIs

Verified businesses can create scoped child UPIs tied to specific payment accounts.

Each child UPI can be shared, disabled, reactivated, or managed independently.

### Admin Review Queue

Internal reviewers can inspect verification sessions, view uploaded documents, approve submissions, reject submissions, and track risk levels.

### Public Lookup

Partners can look up verified business profiles and resolve UPIs through supported resolution flows.

## Screenshots

### Homepage

![APLITE homepage](pics/Hompage.png)

### Dashboard

![APLITE dashboard](pics/Dashboard.png)

### Payment Accounts

![APLITE payment accounts](pics/Accounts.png)

### UPIs

![APLITE UPIs](pics/UPIS.png)

### Resolution

![APLITE resolution search](pics/search.png)

## Technology Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS, Radix UI

Backend: FastAPI and Python

Database: PostgreSQL through Supabase

Authentication: Supabase Auth

Encryption: AES-256 GCM field-level encryption

Storage: Supabase Storage

Email: SendGrid

Scheduling: Cal.com

Hosting: Vercel for frontend, Render for backend

## Local Development

### Frontend

cd aplite-frontend

npm install

cp .env.example .env.local

npm run dev

### Backend

cd aplite-backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements-backend.txt

cp .env.example .env

uvicorn app.main:app --reload

### Database

psql $DATABASE_URL -f schema-final.sql

## Roadmap

1. Partner API for programmatic UPI resolution.

2. Webhook delivery when a UPI changes or is disabled.

3. Bulk UPI import and export.

4. Resolution audit logs.

5. Automated KYB checks.

6. Sanctions screening.

7. Stripe billing and usage metering.

8. Team management and role-based permissions.

9. Public API documentation and sandbox environment.

10. Internal monitoring dashboard.

## Status

APLITE is in active development.

The core KYB flow, payment account management, UPI issuance, and resolution infrastructure are operational. The product is being refined around real payout, vendor, and payment identity workflows.

Built by Oludolapo Adegbesan.
