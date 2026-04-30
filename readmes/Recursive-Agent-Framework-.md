# Recursive Agent Framework

Recursive Agent Framework, also called RAF, is a multi-agent orchestration system for solving long, complex tasks through recursive decomposition, proposal, voting, execution, and evaluation.

Repository: https://github.com/Havcker243/Recursive-Agent-Framework-

Author: Oludolapo Adegbesan

Institution: Fisk University, Class of 2026

Status: Active research and development

Patent status: Provisional application pending

![RAF execution graph UI](./image.png)

## What This Project Does

Most AI agent systems give one model a task and expect it to reason through the entire problem in one pass.

That approach works for small tasks, but it becomes fragile when the task is long, ambiguous, multi-step, or larger than a single model context window.

RAF takes a different approach.

It breaks complex tasks into smaller tasks recursively. At every important decision point, multiple agents propose options and a separate group of agents votes on the best path forward.

This creates a system that can reason through longer tasks while reducing single-agent bias and making the decision process easier to inspect.

## Core Idea

Every task enters a RafNode.

The node decides whether the task is simple enough to execute directly or complex enough to decompose into smaller tasks.

That decision is not made by one model. It is made through a proposal and voting process.

1. A consortium of agents proposes what should happen next.

2. A jury of agents evaluates the proposals.

3. The selected plan is executed.

4. If the task is still complex, the process repeats recursively.

5. If the task is simple enough, an executor completes it directly.

6. A jury evaluates the result.

## Why RAF Matters

RAF is designed around three problems in current agent systems.

### Context Limits

No model can hold unlimited information.

RAF avoids forcing one model to carry everything by splitting large work into smaller, focused contexts.

### Single-Agent Fragility

One model can make mistakes, miss alternatives, or reinforce its own assumptions.

RAF uses multiple agents for proposals and separate agents for evaluation so decisions have more than one perspective.

### Lack Of Persistent Cognition

Most agents forget what happened between sessions.

RAF is the first layer of a larger vision called Computer, a universal substrate for recursive AI orchestration with experiential memory.

## Architecture

RAF is organized into three layers.

### Layer 1: Recursive Agent Framework

This is the layer currently implemented.

It handles recursive task decomposition, multi-agent proposal generation, jury voting, sibling dependencies, context refinement, API streaming, and the web interface.

### Layer 2: Experiential Memory System

This layer is designed but not fully implemented.

It will store memories as experience-rich graph data, including what happened, why it mattered, what came before, and what came after.

### Layer 3: Universal Substrate

This layer is planned as a Rust-based runtime where every action is represented as a node with typed input and output ports.

The goal is to make the system fast, observable, portable, and capable of running larger cognitive architectures.

![RAF whiteboard concept](./whiteboard.jpeg)

![RAF full implementation view](./Full%20impementation.png)

## Current Features

1. Recursive task decomposition.

2. Multi-agent proposal generation.

3. Multi-agent jury voting.

4. Sibling dependency execution.

5. JSON schema validation.

6. Context refinement design.

7. FastAPI backend.

8. WebSocket streaming.

9. React and Vite frontend.

10. OpenRouter and mock LLM adapters.

## Repository Layout

raf contains the core Python implementation.

server contains the FastAPI backend.

web contains the React and Vite frontend.

papers contains reference research papers.

handmade files contains original handwritten design material.

RAF-complete-flow.md contains the full natural-language system flow.

RAF-diagram.md contains conceptual diagrams.

RAF-project-spec.md contains the technical specification.

## Technology

Core framework: Python

API server: FastAPI

Frontend: React, Vite, Tailwind CSS

LLM routing: OpenRouter

Validation: JSON Schema

Planned memory database: SurrealDB

Planned substrate: Rust

Planned visualization: D3

Planned memory interface: Obsidian

## Deployment

The project is designed for a Vercel frontend and Render backend.

Frontend deployment uses the existing Vercel configuration.

Backend deployment runs the FastAPI server with uvicorn.

Public deployments can require users to provide their own model API keys, which keeps the hosted version safer and cheaper to operate.

## Research Direction

RAF draws from multi-agent systems, cognitive science, recursive decomposition, memory systems, and software architecture.

The long-term goal is to build a programmable machine for thought: a system where humans define goals and the machine decomposes, coordinates, evaluates, and learns through structured recursive execution.

## Roadmap

1. Implement experiential memory.

2. Add vector graph storage.

3. Build position-relative memory retrieval.

4. Add an always-on observer for memory formation.

5. Add a pre-turn memory injector.

6. Complete multi-provider LLM adapter wiring.

7. Add persistent run storage.

8. Build the Rust substrate runtime.

9. Add typed ports and event bus execution.

10. Improve real-time execution tree visualization.

## Status

RAF is an active research and engineering project.

The recursive orchestration layer is built. The memory and substrate layers are designed and remain the next major implementation targets.

Built by Oludolapo Adegbesan.
