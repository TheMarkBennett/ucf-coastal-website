# UCF Website Generation Instructions

This repository contains standards for generating University of Central Florida websites, pages, content, information architecture, schema, and user experiences.

Always follow:

1. AGENT.md
2. docs/information-architecture.md
3. docs/page-templates.md
4. docs/content-strategy.md
5. docs/search-ai-optimization.md
6. docs/schema-standards.md
7. docs/technical-standards.md
8. docs/design-system.md

When standards conflict, follow the priority defined in AGENT.md.

---

# Primary Objective

Generate websites that help users:

- Discover
- Understand
- Engage
- Take Action

Prioritize user needs over organizational structure.

Do not build departmental or administrative websites by default.

Build discovery-focused experiences.

---

# Website Generation Rules

Before generating any website:

1. Determine the website type.
2. Determine the primary audience.
3. Determine user goals.
4. Select the appropriate page template.
5. Build information architecture.
6. Generate content.
7. Generate metadata.
8. Generate schema recommendations.
9. Validate against applicable standards.

---

# Information Architecture Requirements

Search is the primary discovery mechanism.

Navigation provides context.

Maximum navigation depth:

Homepage
→ Section
→ Detail Page

Avoid deep navigation structures.

Prefer:

- Search
- Directories
- Related Content
- Audience Pathways

Do not organize content primarily around departments, offices, or reporting structures.

---

# Page Structure Requirements

Use templates defined in:

docs/page-templates.md

Pages should generally contain:

- 5–7 sections
- Maximum 8 sections

Only include sections that provide value.

Avoid unnecessary content.

---

# Discovery Requirements

Pages should not become dead ends.

Connect content whenever appropriate.

Examples:

Research Area
→ Experts
→ Facilities
→ Projects

Program
→ Faculty
→ Services
→ Events

Expert
→ Research Areas
→ Publications
→ Projects

Support knowledge graph development.

---

# Search Requirements

When content collections exceed 50 items:

Generate:

- Search
- Filters
- Categories
- Pagination

Examples:

- Expert Directory
- Program Directory
- Service Directory
- Facility Directory
- Research Area Directory

Prefer searchable directories over long static lists.

---

# Content Requirements

Follow:

docs/content-strategy.md

Content should be:

- Clear
- Useful
- Human
- Evidence-based
- Search-friendly
- AI-friendly

Avoid marketing fluff.

Avoid unsupported claims.

Prefer:

- Outcomes
- Evidence
- Statistics
- Awards
- Funding
- Publications

when available.

---

# Design Requirements

Follow:

docs/design-system.md

Prioritize:

- Accessibility
- Readability
- Consistency
- Simplicity

Avoid:

- Excessive animation
- Decorative complexity
- Auto-rotating content
- Unnecessary visual effects

---

# Schema Requirements

Follow:

docs/schema-standards.md

Always recommend appropriate schema.

Examples:

Program
→ EducationalOccupationalProgram

Expert Profile
→ Person + ProfilePage

Service
→ Service

Research Area
→ DefinedTerm + WebPage

Facility
→ Place

Event
→ Event

News Article
→ NewsArticle

Publication
→ ScholarlyArticle

Use JSON-LD.

---

# Accessibility Requirements

All generated experiences must support:

WCAG 2.2 AA

Required:

- Semantic HTML
- Keyboard Navigation
- Visible Focus States
- Accessible Forms
- Accessible Tables
- Accessible Search

Accessibility takes priority over aesthetics.

---

# Performance Requirements

Target:

- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

Homepage target:

- Less than 3 MB

Prefer optimized media formats:

- WebP
- AVIF

---

# AI Generation Restrictions

Do not:

- Invent programs
- Invent departments
- Invent rankings
- Invent research outcomes
- Invent statistics
- Invent partnerships
- Invent faculty members

Clearly identify assumptions when information is missing.

---

# Required Output Structure

When generating a website, provide:

1. Website Purpose
2. Primary Audiences
3. User Goals
4. Information Architecture
5. Navigation Structure
6. Page Inventory
7. Recommended Components
8. Schema Recommendations
9. Metadata Recommendations
10. CTA Strategy

When generating a page, provide:

1. Page Purpose
2. Audience
3. Recommended Template
4. Content Sections
5. CTA Strategy
6. Metadata
7. Schema
8. Related Entities

---

# Success Criteria

Successful outputs should:

- Follow repository standards
- Support discovery
- Support search
- Support AI retrieval
- Support accessibility
- Strengthen knowledge graph relationships
- Feel consistent with UCF digital experiences

If uncertain, prioritize discovery, accessibility, and user task completion.

## Current implementation notes
- The site is a multi-page static prototype: homepage, About, People (with a noindex searchable/filterable profile-directory preview until real profiles are verified), Research, Impact, Education, Resources, Giving, six research-theme pages, and two project profiles.
- Keep the homepage to seven concise sections: hero, coastal context, research themes, featured projects, research stories/events, audience pathways and a dedicated Stay Connected section. Avoid duplicating interior-page content.
- Keep main navigation pointed to dedicated destinations; use cross-links for related themes, projects, people, education, facilities, and events.
- The official UCF shared header is embedded on every page. Keep center-specific navigation secondary and do not recreate or style the university header locally.
- Load UCF Athena Framework v1.3.2 before local styles; use its UCF Sans Serif Alt / UCF Condensed Alt typography and approved component patterns. Keep UCF brand colors and accessibility standards, and avoid recreating the shared university header locally.
- Supplied faculty content is not independently verified. Confirm all claims, people, program status, projects, dates, funding, links, contact details, and giving destination with content owners.
- Use only approved UCF identity assets and licensed photography; current coastal images are placeholders.
- Preserve WCAG 2.2 AA, performance, discovery, and content governance requirements above visual preferences.