# UCF Coastal — Center for Integrated Coastal Research

A responsive, multi-page static website based on the faculty-provided content. The architecture includes a homepage, About, People (with a searchable, filterable directory preview), Research (including CARES and WETFEET project listings), six research-theme detail pages, two project profiles, Impact, Education, Resources and Giving. The homepage has seven focused sections: unchanged hero, image-led coastal context, research themes, featured projects with portfolio scale, research stories and events, audience pathways, and a dedicated Stay Connected section with email and social/podcast links.

## Preview

Open `index.html` in a browser. No build step or package installation is required. Main navigation opens dedicated pages; internal links connect themes, projects, people, education, facilities and events. Client-side search and filtering are available on the People directory and on Research themes and facilities.

## Implementation notes

- Every page now embeds UCF’s maintained shared university header. A separate, compact UCF Coastal navigation follows it for center-level wayfinding; this local navigation is not a recreation of the university header.
- Pages load UCF Athena Framework v1.3.2 before the local stylesheet and use Athena’s UCF Sans Serif Alt and UCF Condensed Alt typefaces. The center navigation uses a charcoal band beneath the official UCF global header; the footer is black with white copy and restrained gold accents. Cards use fine neutral borders rather than repeated heavy gold bars; gold is reserved for actions and focused separators.
- The homepage borrows broad content patterns from UCF examples: a strong image-led feature and concise pathways; research discovery and events shaped for a center’s audiences; and current stories/resources. It does not copy another site’s design or unverified metrics. Review the [UCF homepage](https://www.ucf.edu/), [Research Cyberinfrastructure](https://rci.research.ucf.edu/), [FIEA](https://fiea.ucf.edu/), and [Digital Learning](https://digitallearning.ucf.edu/) for examples of UCF content presentation.
- Coastal, laboratory and People-directory portraits currently load from Unsplash as illustrative placeholders throughout the homepage, section-page heroes, research/project cards, facilities directory, selected editorial features and People directory demo profiles. They are not documentation of UCF Coastal work, facilities or researchers. Replace them with approved, licensed UCF/project imagery and accurate captions/credits before launch; confirm responsive crops, dimensions and UCF’s image/page-weight budgets for the CMS.
- All content in the supplied faculty text—including program status, project details, dates, counts, funding, outcomes, partnerships, facilities, contact and social destinations—requires confirmation by content owners. Contradictory figures and expired dates were omitted. Dates and descriptions that remain in the prototype should be checked before publication.
- Contact links use the address supplied in the faculty text. Give links use its proposed UCF Foundation URL; confirm the fund and URL with UCF Foundation before use.
- Newsletter signup is represented as an email inquiry because no approved Mailchimp embed or integration settings were supplied.
- The People page includes a demonstration expert directory using invented placeholder names/titles, placeholder college affiliations and illustrative portraits because no verified profile records were supplied. It is visibly labeled as demo data and tagged `noindex`. Replace all sample entries and images with confirmed expert profiles before launch, then remove the demo notice and `noindex` tag.
- Research themes, projects and the facilities section on Research share image-led discovery cards; facilities retain a reusable search + checkbox-filter pattern (`data-directory`, `data-directory-item`, `data-filter-value` in `script.js`) consistent with the Directory Page template in `docs/page-templates.md`. Resources now focuses on seminars, publications and media. The CARES and WETFEET profiles include project news/update sections; dated news should be confirmed by the project teams before publication.

## Accessibility and performance

The page uses semantic landmarks, a skip link, keyboard-operable mobile navigation, visible focus, live search/filter feedback, responsive layouts and reduced-motion support. Filter chips are implemented as labeled checkboxes (not custom widgets) to keep them keyboard- and screen-reader-accessible without added JavaScript complexity. Verify with the approved UCF global header and content platform, then test against WCAG 2.2 AA and current UCF performance budgets before publication.


