# ⚙️ QueueCTL — Python-based Job Queue Management System

QueueCTL is a lightweight, reliable **CLI-driven distributed job queue system** built in Python.  
It supports **asynchronous job execution**, **persistent storage**, **multiple worker management**, **retry & backoff**, **dead letter queues (DLQ)**, **configurable settings**, and an optional **web dashboard for live monitoring**.

---

## 🚀 Features Overview

| Category | Description |
|-----------|--------------|
| 🧱 **Core Functionality** | Job enqueueing, execution, state tracking |
| ⚙️ **Persistence** | SQLite-backed durable storage (survives restarts) |
| 🧵 **Workers** | Multiple worker processes with job locking |
| 🔁 **Retry & Backoff** | Automatic retry with exponential delay |
| 💀 **Dead Letter Queue** | Failed jobs moved to DLQ after `max_retries` |
| 🧠 **Configuration Management** | CLI-based config editing (`max_retries`, backoff) |
| 📊 **Metrics** | Average duration, job counts per state |
| 🌐 **Web Dashboard** | Minimal monitoring UI (Flask-based) |
| 💾 **Output Logging** | Captures job stdout/stderr for review |
| ⏱️ **Timeout Handling** | Jobs automatically killed after `timeout_sec` |
| 🧭 **Priority Queues** | Jobs processed based on priority value |
| 🕓 **Scheduled Jobs** | Jobs delayed until specific `run_at` timestamps |

---

## 🧩 Architecture Overview

### 🧱 **System Components**

