# Project Context — Vassu Infotech Website

## Overview
Vassu Infotech is an enterprise IT infrastructure, GPU AI compute, cloud DevOps, and custom software engineering firm based in Ahmedabad, Gujarat, India.

## Design System & Architecture (2026 Enterprise Bright Mode Standard)
- **Standard**: 2026 Enterprise Bright Mode Design System across all 23 HTML pages.
- **Visual Aesthetic**: Crisp Slate canvas (`#F8FAFC`), pure white elevated surfaces (`#FFFFFF`), rich emerald (`#059669`) and laser mint (`#10B981`) brand accents, mouse-tracking spotlights, fine hairline rules (`1px solid #E2E8F0`), soft ambient depth shadows (`rgba(15, 23, 42, 0.05)`), crisp Slate 900 architectural typography, and hardware telemetry consoles.
- **Palette**:
  - Crisp Ambient Base: `#F8FAFC` (`--bg-obsidian` / `--surface-off`)
  - Elevated White Surfaces: `#FFFFFF` (`--bg-surface` / `--surface-white`), `#F1F5F9` (`--bg-surface-elevated` / `--surface-light`)
  - Frosted White Cards: `rgba(255, 255, 255, 0.94)` (`--bg-card`), `#FFFFFF` (`--bg-card-hover`)
  - Rich Emerald & Neon Accents: `#059669` (`--green`), `#059669` (`--green-neon`), `#10B981` (`--green-glow`), `#047857` (`--green-hover`), `#0891B2` (`--cyan`)
  - High-Contrast Text: `#0F172A` (`--text-primary`), `#334155` (`--text-secondary`), `#64748B` (`--text-tertiary`), `#94A3B8` (`--text-muted`)
  - Luminous Hairline Rules: `#E2E8F0` (`--rule`), `rgba(5, 150, 105, 0.25)` (`--green-border`)
- **Typography**:
  - Display / Headings: `Manrope`, 500/600/700/800
  - Body: `Inter` / `DM Sans`, 400/500/600
  - Specs / Code / SLA tags: `JetBrains Mono`, 400/500/600/700
- **Navigation & Mobile**: Frosted white glass header (`.nav`) with backdrop blur (`blur(20px)`), accessible desktop navigation links, responsive mobile drawer (`#mobile-drawer`), quick WhatsApp action button.
- **Layout Patterns**:
  - Hub & Landing Pages: Hero with live hardware showcase switcher and glowing telemetry HUD, ambient laser grid with radial depth, interactive capabilities bento matrix with category filters and mouse-following spotlight glow, GPU AI compute rack bento, floating case study glass cards, certified technology ecosystem shields, client trust 6-card interactive showcase grid with verified deployment metrics, interactive FAQ accordion, high-impact cyber console CTA banner.
  - Detail Pages (14 Services + 2 Case Studies): Dedicated 2-column layout (`.detail-layout-grid`) with light breadcrumb banner (`.detail-banner`), key metric strip (`.metric-strip-grid`), hero media (`.detail-hero-media`), engineering specification matrix (`.spec-grid`, `.spec-box`), feature checklists (`.flat-checklist`), SLA highlight banners (`.sla-banner-card`), and sticky directory sidebar with active state highlighting (`.detail-sidebar-wrap`, `.sidebar-panel`, `.sidebar-cta-box`).

## Complete File & Directory Inventory (23 HTML Pages)
```
d:\public_html\
├── css/
│   └── style.css            # Complete Enterprise High-Tech Design System & component tokens
├── js/
│   └── main.js              # Native Vanilla JS interaction engine (drawer, scroll, accordion, particles, typewriter, counters, spotlight, parallax)
├── images/                  # High-resolution datacenter, server hardware, client logos, and solution photography
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
│   ├── gpu-server-rental-for-ai.html             # NVIDIA GPU AI Compute Racks
│   ├── infrastructure-deployment.html            # Turnkey Datacenter & Rack Deployment
│   ├── omni-channel-contact-centers.html         # VoIP Telephony & Contact Center Systems
│   ├── secure-network-fabric.html                # Enterprise SD-WAN & 10G/40G/100G Fabric
│   ├── server-amc-support.html                   # 24/7 Managed Server AMC & 4-Hr SLA
│   ├── server-rental-ahmedabad.html              # Dedicated Enterprise Server Rentals
│   └── visual-collaboration-solutions.html       # Boardroom AV & Teams/Zoom Rooms
├── 404.html                                      # High-Tech 404 Error page
├── compliance-and-security.html                  # SLA Guarantees, ISO 27001 & Compliance Matrix
├── contact-us.html                               # RFQ Engineering Quote & Branch Offices Portal
├── faq.html                                      # Technical FAQ & Hardware Specifications
├── index.html                                    # Flagship Redesigned Enterprise High-Tech Homepage
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
