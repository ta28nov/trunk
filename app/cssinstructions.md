# CSS ARCHITECTURE REFACTOR — AUTONOMOUS DESIGN DECISION

## ROLE

Act as a Senior Frontend Architect + CSS Architect + UI/UX Engineer.

Your task is to inspect the existing project and independently redesign/refactor
the CSS architecture so that it is scalable, maintainable, understandable,
responsive, and suitable for continued AI-assisted development.

DO NOT blindly follow a predefined folder structure.

DO NOT assume that CSS Modules, global CSS, component CSS, styled solutions,
or any other specific architecture must be used.

You are responsible for determining the architecture that best fits the
ACTUAL project after inspecting the codebase.

---

# 1. FIRST: AUDIT THE CURRENT CSS SYSTEM

Before changing anything:

- inspect the entire existing CSS architecture
- inspect globals.css
- inspect all components
- inspect page structures
- inspect imports
- inspect CSS selectors
- inspect media queries
- inspect CSS variables/tokens
- inspect duplicated styles
- inspect overrides
- inspect specificity conflicts
- inspect !important usage
- inspect layout hacks
- inspect absolute positioning
- inspect z-index usage
- inspect responsive rules
- inspect page-specific styles
- inspect reusable component styles

Determine:

- what is genuinely global
- what belongs to a component
- what belongs to a page
- what should become a design token
- what should remain local
- what should be removed
- what should be consolidated
- what should be split
- what should be renamed
- what is technical debt

Do not modify the code until this analysis is complete.

---

# 2. DO NOT PRESERVE THE CURRENT ARCHITECTURE

The current CSS architecture is not a constraint.

You may:

- split files
- merge files
- rename files
- move styles
- create new style layers
- remove unnecessary files
- introduce CSS Modules
- retain global CSS where appropriate
- create component-scoped styles
- create page-scoped styles
- restructure design tokens
- change naming conventions
- reorganize responsive rules

Choose whatever architecture produces the clearest result.

Do not introduce complexity merely because a CSS methodology recommends it.

---

# 3. ARCHITECTURE MUST FOLLOW THE PROJECT

Do not force the project into a generic architecture.

The final structure must emerge from:

- actual component boundaries
- actual page boundaries
- actual reuse
- actual visual system
- actual responsive behavior
- actual complexity

If two components genuinely share a style,
create an appropriate shared abstraction.

If two components only look superficially similar,
do not force them into the same abstraction.

If a style is used once and belongs clearly to one component,
keep it local rather than creating unnecessary global infrastructure.

---

# 4. DEFINE CLEAR STYLE OWNERSHIP

Every meaningful style rule should have an obvious owner.

The owner may be:

- global system
- design token system
- shared component
- page
- page section
- feature/module

The architecture should make it immediately obvious:

"Where should I edit this style?"

A developer or AI agent should not need to search a giant stylesheet
to discover where a component's layout is controlled.

---

# 5. GLOBAL CSS

Keep only genuinely global concerns globally.

Determine yourself what belongs here.

Typical candidates may include:

- CSS reset
- base document behavior
- design tokens
- typography foundations
- accessibility foundations
- global utility primitives
- global states
- root-level behavior

But do not automatically place all of these globally.

Make the decision based on the project.

Global CSS must not become a dumping ground.

---

# 6. DESIGN TOKENS

Inspect the current visual language and determine whether it has a coherent
token system.

If necessary, organize tokens for:

- colors
- typography
- spacing
- sizing
- containers
- borders
- radii
- shadows
- z-index
- transitions
- easing
- responsive breakpoints

Do not create tokens for every individual value.

Create tokens when a value represents a meaningful design decision
or is reused consistently.

Avoid duplicate semantic values representing the same thing.

Example of what to avoid:

--yellow
--gold
--brand-yellow
--accent-yellow
--primary-gold

when they all represent the same design role.

Use semantic naming where appropriate.

---

# 7. COMPONENT STYLES

Determine which parts of the application are genuine components
with independent visual behavior.

Their styles should be organized so that:

- styles are easy to locate
- styles do not leak unexpectedly
- responsive behavior remains understandable
- component-specific layout stays with the component
- component internals do not pollute unrelated pages

Do not split CSS into tiny files simply to increase the file count.

A component should have a coherent styling boundary.

---

# 8. PAGE STYLES

Page-level styles should control page composition rather than
implementation details belonging to child components.

Determine independently what qualifies as page-level styling.

Examples may include:

- page composition
- section relationships
- page-specific layout
- page-specific background treatment
- page-level responsive composition

Do not move everything into page CSS merely because it appears on a page.

---

# 9. RESPONSIVE ARCHITECTURE

Review responsive CSS as part of the refactor.

Do not simply move existing media queries into different files.

Determine:

- which responsive rules belong to components
- which belong to pages
- which are genuinely global
- whether breakpoints are coherent
- whether several breakpoints solve the same problem
- whether rules are duplicated
- whether desktop styles are being repeatedly patched for mobile

Simplify where possible.

Responsive behavior should remain understandable after the refactor.

---

# 10. REMOVE CSS PATCH CHAINS

Identify patterns such as:

```css
.foo {}
.foo-mobile {}
.foo-fix {}
.foo-final {}
.foo-final-fix {}