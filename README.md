# AI Workflow Builder SaaS

A production-grade AI-powered workflow automation platform that lets users visually design, execute, and scale complex automations using a drag-and-drop canvas—powered by modern AI models and a full SaaS infrastructure.

Built with scalability, extensibility, and real-world business use cases in mind.

## Overview

This is a no-code/low-code workflow automation engine inspired by tools like n8n and Zapier, enhanced with AI-native capabilities.

Users can build workflows visually, connect triggers, process data with AI, and execute background jobs reliably at scale.

## Key Features
### Visual Workflow Builder
- Drag-and-drop canvas powered by React Flow
- Node-based architecture for maximum flexibility
- Real-time workflow construction and editing

### Trigger System
- Webhook triggers
- Stripe events
- Google Forms / external integrations
- Manual & scheduled triggers

### AI Integrations
- OpenAI
- Anthropic Claude
- Google Gemini
- AI-powered processing nodes (summarization, classification, generation)

### Communication Nodes
- Discord integrations
- Slack messaging workflows
- Automated notifications & alerts

### HTTP & API Node
- Fully configurable HTTP request node
- Supports REST APIs, headers, auth, and payload transformations

### Background Execution Engine
- Powered by Inngest
- Reliable async job processing
- Queue-based workflow execution

### SaaS & Monetization Layer
- Polar payments integration
- Subscription-based access control
- Paywalls for workflow usage limits

### Authentication & Security
- Built with Better Auth
- Secure session management
- Role-based access control (RBAC-ready)

### Data Layer
- Prisma ORM
- Neon Postgres
- Fully type-safe database layer

### Developer Experience
- tRPC for end-to-end type safety
- Full TypeScript architecture
- Modular, scalable codebase

### Monitoring & Observability
- Sentry error tracking
- AI-assisted monitoring & debugging insights

### Production Stack
- Next.js 15 App Router
- Server + client hybrid architecture
- Optimized for SaaS deployment

### AI-Powered Engineering Workflow
- CodeRabbit AI PR reviews
- Automated code quality checks
- Git-based professional development workflow

## Architecture
`Frontend (Next.js + React Flow)
        ->
API Layer (tRPC)
        ->
Workflow Engine (Node-based execution system)
        ->
Queue System (Inngest)
        ->
Database (Prisma + Neon Postgres)`

## Tech Stack
- Frontend: Next.js 15, React, React Flow, TypeScript
- Backend: Node.js, tRPC
- Database: PostgreSQL (Neon), Prisma ORM
- Auth: Better Auth
- Jobs: Inngest
- Payments: Polar
- Monitoring: Sentry
- AI Providers: OpenAI, Claude, Gemini

## Use Cases
- Marketing automation workflows
- AI content pipelines
- Customer support automation
- Data processing pipelines
- SaaS integration workflows
- Internal business automation tools

## Status

- Currently in active development
