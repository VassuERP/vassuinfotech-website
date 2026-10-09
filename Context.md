# Project Context: Vassu Infotech Website

## Overview

Vassu Infotech is an enterprise IT infrastructure, multi-vendor server support, GPU AI compute, refurbished hardware, and custom software engineering firm based in Bodakdev, Ahmedabad, Gujarat, India, with field presence across Gujarat, Mumbai, and Bengaluru.

## Business Pillars & Core Revenue Architecture

The website spotlights six core revenue pillars at the forefront of the user journey, search architecture (SEO/AEO/GEO), and navigation:

1. **Server AMC & Multi-Vendor Support** (`services/server-amc-support.html`): Dell PowerEdge, HPE ProLiant, and Lenovo ThinkSystem server maintenance with guaranteed 4-hour on-site SLA backed by local Bodakdev cold spares inventory.
2. **Server Rental & Private GPU Compute** (`services/server-rental-ahmedabad.html`): Turnkey bare-metal 1U–4U compute rentals and dedicated private GPU compute (NVIDIA A100/H100/RTX) for AI/ML workloads, compliance-friendly on-premise or colocation.
3. **New Enterprise Server Sales** (`services/global-hardware-supply.html`): Direct OEM enterprise server procurement and build-to-order hardware fulfillment for Dell, HPE, and Lenovo.
4. **Certified Refurbished Servers** (`services/refurbished-servers.html`): Rigorously inspected pre-owned enterprise servers (Dell R640/R740/R750, HPE DL360/DL380 Gen9/Gen10, Lenovo SR650) with 5-stage testing, 48-hour burn-in stress benchmarking, up to 1-year warranty, and 50%–70% CapEx savings.
5. **Server Components & OEM Spares** (`services/server-components-spares.html`): Genuine OEM Intel Xeon/AMD EPYC processors, DDR4/DDR5 ECC Registered RAM, enterprise NVMe/SAS drives, PERC/SmartArray RAID cards, redundant PSUs, caddies/rails, available for immediate Bodakdev pickup or emergency dispatch.
6. **Custom Software Engineering** (`services/custom-software-development.html`): Custom enterprise ERP, multi-tenant SaaS platforms, microservices architecture, and GIFT City financial integrations.

Secondary and specialized engineering solutions are grouped under **"Specialized Infrastructure & Cloud Engineering"**:
- 07 // GPU AI Compute Racks (`services/gpu-server-rental-for-ai.html`)
- 08 // Infrastructure Deployment (`services/infrastructure-deployment.html`)
- 09 // Data Center Architecture (`services/data-center-architecture.html`)
- 10 // Enterprise Virtualization (`services/enterprise-virtualization.html`)
- 11 // Cloud Migration & DevOps (`services/cloud-migration-devops.html`)
- 12 // Secure Network Fabric (`services/secure-network-fabric.html`)
- 13 // Cyber Shield Pro SOC (`services/cyber-shield-pro.html`)
- 14 // Visual Collaboration & CCTV (`services/visual-collaboration-solutions.html`)

## Design System & Architecture (2026 Enterprise Bright Mode Standard)

- **Standard**: 2026 Enterprise Bright Mode Design System across all 25 HTML pages.
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
- **Navigation & Mobile**: Frosted white glass header (`.nav`) with backdrop blur (`blur(20px)`), structured two-tier desktop dropdown menu (`.nav-dropdown-menu` with Core Server Solutions & Specialized Engineering), responsive mobile drawer (`#mobile-drawer`), quick WhatsApp action button.
- **Layout Patterns**:
  - Hub & Landing Pages: Executive Enterprise Architecture Hero with high-clarity typography and 3-Pillar Enterprise Matrix (`.hero-pillars-grid`) directly linking to Server AMC (< 4 Hours SLA), Dedicated Rentals & GPU (Zero Egress Private Compute), and Refurbished & OEM Spares (50%-70% CapEx Savings), followed by 4-column base telemetry proof bar, interactive capabilities bento matrix leading with the 6 core pillars, GPU AI compute rack bento, floating case study glass cards, certified technology ecosystem shields, client trust 6-card interactive showcase grid with verified deployment metrics, interactive FAQ accordion, high-impact cyber console CTA banner.
  - Detail Pages (16 Services + 2 Case Studies): Dedicated 2-column layout (`.detail-layout-grid`) with light breadcrumb banner (`.detail-banner`), key metric strip (`.metric-strip-grid`), hero media (`.detail-hero-media`), engineering specification matrix (`.spec-grid`, `.spec-box`), feature checklists (`.flat-checklist`), SLA highlight banners (`.sla-banner-card`), and sticky directory sidebar with active state highlighting (`.detail-sidebar-wrap`, `.sidebar-panel`, `.sidebar-cta-box`).

## Complete File & Directory Inventory (27 HTML Pages)

```
d:\VassuInfotech\vassuinfotech-website\
├── css/
│   └── style.css            # Complete Enterprise High-Tech Design System & component tokens
├── js/
│   └── main.js              # Native Vanilla JS interaction engine (drawer, scroll, accordion, particles, typewriter, counters, spotlight, parallax)
├── images/                  # High-resolution datacenter, server hardware, client logos, and solution photography
├── blog/                    # 7 In-depth technical guides (SEO/AEO/GEO high-intent content)
│   ├── server-repair-services-ahmedabad-guide.html     # Enterprise Server Repair in Ahmedabad Guide (4-hr SLA & Diagnostics)
│   ├── enterprise-server-supplier-ahmedabad-guide.html # Enterprise Server Supplier in Ahmedabad Guide (Dell/HPE & Refurbished)
│   ├── server-amc-vs-ad-hoc-support-ahmedabad.html     # Server AMC vs Ad-Hoc Support in Ahmedabad
│   ├── dedicated-server-rental-ahmedabad-guide.html    # Dedicated Server Rental in Ahmedabad Guide
│   ├── gpu-vs-cpu-server-for-ai-training-india.html    # GPU vs CPU Server Rentals for AI Training Guide
│   ├── on-premise-vs-cloud-server-india-enterprise.html# On-Premise vs Cloud Server Guide
│   └── vmware-to-proxmox-migration-india-guide.html    # VMware to Proxmox Migration Guide
├── portfolio/               # Case study detail pages
│   ├── document-audit-ai-engine.html             # AI Document Audit & OCR Engine Case Study
│   └── fintech-virtualization-deployment.html    # GIFT City Fintech Virtualization Cluster Case Study
├── services/                # 16 Service subpage detail pages
│   ├── server-amc-support.html                   # 01 // Server AMC & Multi-Vendor Support (Dell/HPE/Lenovo)
│   ├── server-rental-ahmedabad.html              # 02 // Enterprise Server Rentals (Bare-metal & GPU)
│   ├── global-hardware-supply.html               # 03 // New Enterprise Server Sales (OEM Procurement)
│   ├── refurbished-servers.html                  # 04 // Certified Refurbished Servers (48-hr Burn-in)
│   ├── server-components-spares.html             # 05 // Server Components & OEM Spares (RAM/CPU/RAID/PSU)
│   ├── custom-software-development.html          # 06 // Custom Enterprise Software & SaaS Engineering
│   ├── gpu-server-rental-for-ai.html             # 07 // NVIDIA GPU AI Compute Racks
│   ├── infrastructure-deployment.html            # 08 // Turnkey Datacenter & Rack Deployment
│   ├── data-center-architecture.html             # 09 // Tier III/IV Data Center Architecture
│   ├── enterprise-virtualization.html            # 10 // Enterprise Virtualization (VMware/Proxmox VE)
│   ├── cloud-migration-devops.html               # 11 // Multi-Cloud Migration & DevOps CI/CD
│   ├── secure-network-fabric.html                # 12 // Enterprise SD-WAN & 10G/40G/100G Fabric
│   ├── cyber-shield-pro.html                     # 13 // Enterprise Cybersecurity & Managed SOC
│   ├── visual-collaboration-solutions.html       # 14 // Boardroom AV, Teams/Zoom Rooms & CCTV
│   ├── advanced-surveillance.html                # 4K AI Video Surveillance & Cloud NVR
│   └── omni-channel-contact-centers.html         # VoIP Telephony & Contact Center Systems
├── 404.html                                      # High-Tech 404 Error page
├── compliance-and-security.html                  # SLA Guarantees, Data Protection & Compliance Governance Matrix
├── contact-us.html                               # RFQ Engineering Quote & Branch Offices Portal
├── faq.html                                      # Technical FAQ & Hardware Specifications
├── index.html                                    # Flagship Enterprise Homepage with 6 Core Pillars Spotlighted
├── portfolio.html                                # Case Studies Showcase Hub
├── services.html                                 # Comprehensive Services Catalog Hub (Core vs Specialized)
├── sitemap.xml                                   # Complete 25-page XML sitemap
├── robots.txt                                    # AI & search engine crawler directives
├── llm.txt                                       # Context summary for AI agents & AEO/GEO crawlers
├── RULES.md                                      # Operating guidelines & standards
├── Context.md                                    # Current living context document (Section 8.1)
└── Changelog.md                                  # Complete change history (Section 8.1)
```

## Key Technical Integrations & Standards

- **Pure Native Execution**: 100% native HTML5/CSS3/Vanilla JS with 0 external build tools or runtime bloat.
- **Zero Tailwind CDN**: CDN Tailwind scripts completely purged from all active site pages.
- **SEO, AEO & GEO Structured Data**: Fully validated Schema.org JSON-LD graphs (`@type: "Service"`, `"FAQPage"`, `"BreadcrumbList"`, `"LocalBusiness"`, `"Organization"`) across all pages.
- **Strict Hard Rules Alignment**: Completely purged unverified trust badges (including Google Preferred Source badge) per Hard Rule 2.
- **WhatsApp Integration**: Live floating container (`.whatsapp-float-container`) linked to `wa.me/919173743336` and context-specific CTAs across all pages.
