# AGENT.md

# UCF Website Generation Agent Specification

Version: 2.0

Status: Production Standard

Purpose:

This document defines the behavior, decision-making framework, workflow, constraints, validation requirements, and expected outputs for AI systems generating University of Central Florida websites, web pages, content structures, information architecture, metadata, schema, and user experiences.

This document serves as the primary operational specification for AI website generation.

---

# Mission

Generate websites that are:

- Unmistakably UCF
- Discovery-focused
- User-centered
- Search-friendly
- AI-discoverable
- Athena-compatible
- Accessible
- Maintainable
- Scalable

The objective is not to generate visually impressive websites.

The objective is to generate websites that help users:

- Discover
- Understand
- Engage
- Take Action

---

# Required Standards

All generated websites SHALL comply with:

```text
design-system.md

content-strategy.md

information-architecture.md

page-templates.md

search-ai-optimization.md

schema-standards.md

technical-standards.md
```

---

# Decision Hierarchy

## AGENT-001 Decision Priority Order

When standards conflict, the following priority order SHALL apply:

```text
1. Accessibility

2. User Task Completion

3. Information Architecture

4. Content Strategy

5. Search & AI Optimization

6. Schema Standards

7. Technical Standards

8. Design System
```

---

## AGENT-002 Conflict Resolution

The agent SHALL prioritize helping users successfully complete tasks.

Visual design preferences SHALL NEVER override:

- Accessibility
- Usability
- Discoverability

---

# Core Principles

## AGENT-101 Discovery First

Every website SHALL function as a discovery platform.

Every page SHALL create opportunities for continued exploration.

Users should be guided toward:

- Programs
- Services
- Experts
- Facilities
- Research Areas
- Opportunities
- Events

Dead-end experiences should be avoided.

---

## AGENT-102 Search First

Search SHALL be treated as the primary discovery mechanism.

Navigation SHALL provide context and orientation.

Large content ecosystems SHOULD rely on:

- Search
- Directories
- Filters
- Related Content

before increasing navigation complexity.

---

## AGENT-103 User Intent First

Information SHALL be organized around:

- Tasks
- Goals
- Questions
- Outcomes

Information SHALL NOT be organized around:

- Departments
- Administrative ownership
- Reporting structures
- Internal organizational models

---

## AGENT-104 Knowledge Graph First

Generated experiences SHALL strengthen the institutional knowledge graph.

Content SHALL be modeled as connected entities.

---

# Website Type Detection

## AGENT-201 Website Classification

Before generation begins, the agent SHALL determine website type.

Supported website types include:

```text
University Website

College Website

Department Website

Research Center

Research Institute

Academic Program

Research Program

Service Website

Initiative Website

Partnership Website

Facility Website

Funding Website

Event Website

Microsite

Campaign Website
```

---

## AGENT-202 Template Selection

The agent SHALL select templates from:

```text
page-templates.md
```

before generating content.

Generated content SHALL align with the selected template.

---

# Content Type Routing

## AGENT-301 Required Mapping

The agent SHALL use the appropriate template and schema for all content types.

Examples:

```text
Expert Profile
    → Expert Template
    → Person + ProfilePage

Program
    → Program Template
    → EducationalOccupationalProgram

Service
    → Service Template
    → Service

Facility
    → Facility Template
    → Place

Research Area
    → Research Area Template
    → DefinedTerm + WebPage

Event
    → Event Template
    → Event
```

---

# Generation Workflow

## AGENT-401 Website Generation Process

All website generation SHALL follow this sequence.

### Step 1

Identify website type.

---

### Step 2

Identify audiences.

---

### Step 3

Identify primary user goals.

---

### Step 4

Identify organizational goals.

---

### Step 5

Select applicable templates.

---

### Step 6

Generate information architecture.

---

### Step 7

Generate navigation structure.

---

### Step 8

Generate content structure.

---

### Step 9

Generate metadata recommendations.

---

### Step 10

Generate schema recommendations.

---

### Step 11

Generate relationship model.

---

### Step 12

Validate output against standards.

---

# Content Inventory Rules

## AGENT-501 Existing Content First

Before creating content, determine whether the content already exists within the ecosystem.

---

## AGENT-502 Single Source of Truth

The agent SHOULD reuse existing institutional content whenever authoritative sources exist.

Avoid creating duplicate:

- Programs
- People
- Services
- Events
- Locations

---

## AGENT-503 Content Expansion

When possible:

Prefer:

```text
Expand

Improve

Consolidate
```

Before:

```text
Create New Content
```

---

# Information Architecture Rules

## AGENT-601 Navigation Depth

Generated websites SHALL maintain:

```text
Maximum Navigation Depth = 2
```

Preferred Structure:

```text
Homepage

Section

Detail Page
```

---

## AGENT-602 Search Requirements

Search SHALL be included when:

```text
More than 50 records exist.
```

Examples:

- Experts
- Programs
- Facilities
- Services
- Research Areas

---

## AGENT-603 Directories

Large collections SHALL be represented as directories rather than long static pages.

---

# Directory Rules

## AGENT-701 Automatic Directory Creation

If content quantity exceeds:

```text
50 Items
```

the agent SHALL generate:

- Directory
- Search
- Filtering
- Pagination

---

## AGENT-702 Strategic Directories

Supported strategic directories include:

```text
Expert Directory

Program Directory

Service Directory

Facility Directory

Research Area Directory

Event Directory

Partner Directory

Funding Opportunity Directory
```

---

## AGENT-703 Directory Features

Directories SHALL include:

- Search
- Filters
- Categories
- Relationships
- Sort Controls
- Pagination

---

# Relationship Engine

## AGENT-801 Relationship Requirement

Every major entity SHALL connect to related entities whenever available.

---

## AGENT-802 Minimum Relationship Standard

Strategic entities SHOULD connect to a minimum of:

```text
3 Related Entities
```

when possible.

---

## AGENT-803 Examples

### Research Area

```text
Experts

Facilities

Projects
```

---

### Expert

```text
Research Areas

Publications

Grants
```

---

### Program

```text
Faculty

Services

Events
```

---

### Facility

```text
Experts

Research Areas

Projects
```

---

# Homepage Generation Rules

## AGENT-901 Homepage Structure

Recommended homepage sections:

```text
1. Hero

2. Search

3. Audience Pathways

4. Discovery Areas

5. Trust Signals

6. Featured Content

7. News & Events

8. CTA
```

---

## AGENT-902 Homepage Purpose

The homepage SHALL support:

- Discovery
- Orientation
- Engagement
- Search

---

## AGENT-903 Prohibited Patterns

Avoid:

- Long welcome messages
- Administrative introductions
- Leadership messages
- Organizational history as primary content

---

# Content Generation Rules

## AGENT-1001 Voice

Generated content SHALL be:

- Expert
- Human
- Accessible
- Helpful
- Evidence-Based
- Confident

---

## AGENT-1002 Reading Level

Target:

```text
8th–10th Grade Reading Level
```

Exception:

Specialized research content.

---

## AGENT-1003 AI Content Restrictions

Avoid unsupported claims such as:

```text
World-Class

Leading-Edge

Transformative

Premier

State-of-the-Art
```

unless supported by evidence.

---

## AGENT-1004 Evidence Preference

When available, support claims using:

- Funding
- Awards
- Rankings
- Publications
- Outcomes
- Statistics
- Partnerships

---

# Design Rules

## AGENT-1101 Design System Compliance

Generated designs SHALL comply with:

```text
design-system.md
```

---

## AGENT-1102 Visual Priorities

Prioritize:

- Clarity
- Readability
- Accessibility
- Consistency

Over:

- Visual novelty
- Decorative effects

---

# Schema Rules

## AGENT-1201 Schema Requirement

Generate schema whenever an appropriate schema type exists.

---

## AGENT-1202 Required Schema Mapping

```text
Program
→ EducationalOccupationalProgram

Person
→ Person + ProfilePage

Service
→ Service

Research Area
→ DefinedTerm + WebPage

Facility
→ Place

Event
→ Event

News
→ NewsArticle

Publication
→ ScholarlyArticle
```

---

## AGENT-1203 JSON-LD

JSON-LD SHALL be the preferred schema implementation format.

---

# Accessibility Rules

## AGENT-1301 Accessibility Requirement

All generated experiences SHALL comply with:

```text
WCAG 2.2 AA
```

---

## AGENT-1302 Accessibility Features

Required:

- Keyboard Navigation
- Semantic HTML
- Focus Visibility
- Alt Text
- Form Labels
- Proper Heading Structure

---

# Performance Rules

## AGENT-1401 Core Web Vitals

Target Requirements:

```yaml
LCP:
  < 2.5s

INP:
  < 200ms

CLS:
  < 0.1
```

---

## AGENT-1402 Homepage Budget

Target:

```yaml
< 3MB
```

---

## AGENT-1403 JavaScript Budget

Target:

```yaml
< 300KB Compressed
```

---

# Assumption Handling

## AGENT-1501 Missing Information

When required information is unavailable:

1. Follow documented standards.
2. Follow established UCF patterns.
3. State assumptions explicitly.
4. Avoid inventing organizational facts.

---

## AGENT-1502 Fact Integrity

The agent SHALL NOT:

- Invent departments
- Invent programs
- Invent faculty
- Invent rankings
- Invent research accomplishments

---

# Required Deliverables

## AGENT-1601 Website Outputs

Generated websites SHOULD include:

- Website Purpose
- Audience Analysis
- Information Architecture
- Navigation Structure
- Page Inventory
- Template Mapping
- Content Recommendations
- Component Recommendations
- Metadata Recommendations
- Schema Recommendations
- Entity Relationships
- CTA Recommendations

---

## AGENT-1602 Page Outputs

Generated pages SHOULD include:

- Purpose
- Audience
- User Goals
- Required Sections
- CTA Strategy
- Metadata
- Schema
- Related Entities
- Search Considerations

---

# AI Generation Anti-Patterns

## AGENT-1701 Prohibited Outputs

Do NOT generate:

- Deep navigation structures
- Duplicate content
- Organization-first architectures
- Generic marketing language
- Empty directories
- Large FAQ dumps
- Unsearchable content collections
- Excessive animations
- Decorative complexity

---

# Output Validation

## AGENT-1801 Validation Checklist

Before completing generation verify:

✓ Discovery-focused architecture

✓ Search-first design

✓ Correct template selection

✓ Appropriate schema mapping

✓ Required relationships present

✓ Trust signals included

✓ Accessibility requirements supported

✓ Navigation depth compliant

✓ Search requirements met

✓ Directory requirements met

✓ Knowledge graph strengthened

✓ AI discoverability supported

---

# Success Criteria

A successful generated website:

- Feels unmistakably UCF
- Supports Athena standards
- Supports discovery
- Supports search
- Supports AI retrieval
- Supports accessibility
- Supports long-term scalability
- Strengthens institutional knowledge

The website should function as a discovery and engagement platform rather than a traditional organizational website.