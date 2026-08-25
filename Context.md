# Project Context — Vassu Infotech Website

## Overview
Vassu Infotech is an enterprise IT infrastructure, GPU AI compute, cloud DevOps, and custom software engineering firm based in Ahmedabad, Gujarat, India.

## Design System & Architecture (Flat 2.0 / Modern Semi-Flat Standard)
- **Standard**: 2026 Flat 2.0 (Modern Semi-Flat Design) across all 23 HTML pages.
- **Visual Aesthetic**: Anti-slop, clean architectural precision, hairline borders (`1px solid var(--rule)` / `#DEE1DF`), subtle elevation (`--shadow-flat-card`), crisp typography.
- **Palette**:
  - Primary Dark / Tinted Charcoal: `#111513` (`--bg-primary-dark`, `--text-primary`)
  - Forest Green Accent: `#1B5E20` (`--green`, `--green-hover: #144818`, `--green-subtle: #E8F0E9`)
  - Slate Secondary: `#323634` (`--text-secondary`)
  - Tinted Muted: `#525654` (`--text-muted`)
  - Hairline Rule / Border: `#DEE1DF` (`--rule`, `--rule-subtle: #EBEEEC`)
  - Light Tinted Surfaces: `#FDFEFD` (`--bg-card`), `#F8FAF8` (`--bg-card-hover`), `#F0F3F1` (`--bg-subtle`)
- **Typography**:
  - Display / Headings: `Manrope`, 500/600/700/800
  - Body: `Inter` / `DM Sans`, 400/500/600
  - Specs / Code / SLA tags: `JetBrains Mono`, 400/500/600
- **Navigation & Mobile**: Full-width sticky header (`.nav`) with backdrop blur, accessible desktop navigation links, responsive mobile drawer (`#mobile-drawer`), quick WhatsApp action button.
- **Layout Patterns**:
  - Hub & Landing Pages: Hero with live typewriter and animated canvas particles, metric strips, Swiss structured capabilities rows/cards, differentiator matrix, client trust marquee, interactive FAQ accordion, high-contrast CTA banner.
  - Detail Pages (14 Services + 2 Case Studies): Dedicated 2-column layout (`.detail-layout-grid`) with breadcrumb banner (`.detail-banner`), key metric strip (`.metric-strip-grid`), hero media (`.detail-hero-media`), engineering specification matrix (`.spec-grid`, `.spec-box`), feature checklists (`.flat-checklist`), SLA highlight banners (`.sla-banner-card`), and sticky directory sidebar with active state highlighting (`.detail-sidebar-wrap`, `.sidebar-panel`, `.sidebar-cta-box`).

## Complete File & Directory Inventory (23 HTML Pages)
```
d:\public_html\
├── css/
│   └── style.css            # Complete Flat 2.0 Design System & component tokens (Section 33)
├── js/
│   └── main.js              # Native Vanilla JS interaction engine (drawer, scroll, accordion, particles, typewriter, counters)
├── images/                  # High-resolution datacenter, server hardware, and solution photography
├── portfolio/               # Case study detail pages
│   ├── document-audit-ai-engine.html             # AI Document Audit & OCR Engine Case Study
│   └── fintech-virtualization-deployment.html    # GIFT City Fintech Virtualization Cluster Case Study
├── services/                # 14 Service subpage detail pages
│   ├── advanced-surveillance.html                # 4K AI Video Surveillance & Cloud NVR
│   ├── cloud-migration-devops.html               # Multi-Cloud Migration & DevOps CI/CD
│   ├── custom-software-development.html          # Custom Enterprise Software & SaaS
│   ├── cyber-shield-pro.html                     # Enterprise Cybersecurity & Managed SOC
│   ├── data-center-architecture.html             # Tier III/IV Data Center Architecture
│   ├── enterprise-virtualization.html            # VMware vSphere 8 & Proxmox VE Ceph
│   ├── global-hardware-supply.html               # Genuine OEM Hardware Procurement & Supply
│   ├── gpu-server-rental-for-ai.html             # NVIDIA H100/A100 GPU AI Compute Racks
│   ├── infrastructure-deployment.html            # Turnkey Datacenter & Rack Deployment
│   ├── omni-channel-contact-centers.html         # VoIP Telephony & Contact Center Systems
│   ├── secure-network-fabric.html                # Enterprise SD-WAN & 10G/40G/100G Fabric
│   ├── server-amc-support.html                   # 24/7 Managed Server AMC & 4-Hr SLA
│   ├── server-rental-ahmedabad.html              # Dedicated Enterprise Server Rentals
│   └── visual-collaboration-solutions.html       # Boardroom AV & Teams/Zoom Rooms
├── 404.html                                      # Flat 2.0 404 Error page
├── compliance-and-security.html                  # SLA Guarantees, ISO 27001 & Compliance Matrix
├── contact-us.html                               # RFQ Engineering Quote & Branch Offices Portal
├── faq.html                                      # Technical FAQ & Hardware Specifications
├── index.html                                    # Flagship Redesigned Flat 2.0 Homepage
├── portfolio.html                                # Case Studies Showcase Hub
├── services.html                                 # Comprehensive 14-Service Catalog Hub
├── sitemap.xml                                   # Complete 23-page XML sitemap
├── robots.txt                                    # AI & search engine crawler directives
├── llm.txt                                       # Context summary for AI agents
├── RULES.md                                      # Operating guidelines & standards
├── Context.md                                    # Current living context document (Section 8.1)
└── Changelog.md                                  # Complete change history (Section 8.1)
```

## Key Technical Integrations & Protocols
- **Pure Native Execution**: 100% native HTML5/CSS3/Vanilla JS with 0 external build tools or runtime bloat.
- **Zero Tailwind CDN**: CDN Tailwind scripts completely purged from all active site pages.
- **SEO & Schema**: Fully structured JSON-LD schemas (`@type: "TechArticle"`, `"Service"`, `"BreadcrumbList"`, `"LocalBusiness"`) across every single page.
- **WhatsApp Integration**: Live floating container (`.whatsapp-float-container`) linked to `wa.me/919173743336` and context-specific CTAs across all pages.
