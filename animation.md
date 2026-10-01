# PROMPT 02 — TRANSPORTATION WEBSITE

## CONTENT + INFORMATION ARCHITECTURE + REAL-WORLD MOTION + RESPONSIVE UX

Build a complete multi-page transportation / trucking company website based on the provided questionnaire PDF.

The PDF is the **single source of truth for business content**.

Do not invent:

* vehicles
* vehicle quantities
* routes
* pricing
* customers
* certifications
* years of experience
* statistics
* testimonials
* partners
* locations
* services
* licenses
* operational capabilities

If information is missing, create the correct UI/content placeholder structure but do not fabricate the actual business information.

---

# 01. PRIMARY OBJECTIVE

The website must communicate:

```text
WHO WE ARE
↓
WHAT WE TRANSPORT
↓
WHAT VEHICLES WE HAVE
↓
WHAT SERVICES WE PROVIDE
↓
WHERE WE OPERATE
↓
WHICH ROUTES WE SERVE
↓
HOW WE OPERATE
↓
WHY CUSTOMERS CAN TRUST US
↓
REAL OPERATIONAL EVIDENCE
↓
CONTACT
↓
REQUEST A QUOTE
```

The website must feel:

```text
Modern
Minimal
Professional
Alive
Trustworthy
Fast
Easy to understand
```

It must NOT feel like:

```text
Generic corporate template
Overloaded logistics dashboard
Animation showcase
3D experiment
One-page landing page
```

---

# 02. REFERENCE STUDY REQUIREMENT

Before implementing the visual experience, the AI agent MUST inspect real existing transportation/logistics websites.

Do not rely only on generic design knowledge.

Use external browser/search/MCP tools when available.

At minimum inspect:

### Reference A — Transigo Freight

https://transigo.framer.website/

Study:

* navigation
* hero composition
* statistics section
* About section
* service presentation
* working process
* operational proof
* testimonial interaction
* CTA placement
* pricing structure
* page hierarchy
* sticky/scroll behavior
* image transitions
* card interactions

Transigo demonstrates a multi-section logistics narrative rather than simply putting services into a grid. Its actual structure includes Hero → Stats → About → Services → Working Process → operational/proof sections → Team → Trust → Testimonials → Pricing.

---

### Reference B — CargoFlow

https://framer.elliotli.dev/template/cargoflow

Study:

* minimal spacing
* service cards
* scroll effects
* sticky scrolling
* text effects
* slideshow/ticker patterns
* service detail architecture
* responsive behavior
* CMS content architecture

CargoFlow explicitly exposes `Scroll Effects`, `Sticky Scrolling`, `Text Effects`, `Slideshows/Tickers`, `Appear Effects` and responsive layouts.

---

### Reference C — Freightly

https://www.framer.com/marketplace/templates/freightly/

Study:

* conversion-oriented homepage
* How It Works section
* shipment/tracking presentation
* pricing
* quote form
* testimonials
* FAQ
* CTA hierarchy
* mobile responsiveness

Its documented structure specifically combines Hero, Services, How It Works, Pricing, Shipment Highlights, Quote Request, Testimonials, FAQ and CTA sections.

---

### Reference D — Awwwards interaction patterns

Study actual examples tagged with:

* Scroll
* Storytelling
* Card Stacking
* Card Scroll Animation
* Image Transition
* Horizontal Scroll
* Mobile Overlay Gallery
* Unusual Navigation
* Microinteraction
* Responsive

Awwwards' own inspiration library exposes these as separate interaction patterns.

---

# 03. IMPORTANT RESEARCH RULE

Do NOT copy a reference website wholesale.

Instead extract:

```text
REFERENCE WEBSITE
↓
OBSERVE
↓
IDENTIFY PATTERN
↓
UNDERSTAND WHY IT WORKS
↓
ADAPT TO TRANSPORTATION CONTENT
↓
IMPLEMENT
```

For every major interaction, the agent should internally identify:

```text
Reference:
What was observed:
Interaction pattern:
Why it works:
Transportation adaptation:
Desktop behavior:
Mobile behavior:
Fallback:
```

---

# 04. FULL PAGE ARCHITECTURE

The website must NOT be treated as a single homepage.

Minimum architecture:

```text
/
├── /about
├── /fleet
│   └── /fleet/[vehicle]
├── /services
│   └── /services/[service]
├── /cargo
├── /routes
│   └── /routes/[route]
├── /pricing
├── /operations
├── /trust
├── /contact
├── /quote
├── /404
├── /privacy
└── /terms
```

Optional if supported by actual company information:

```text
/case-studies
/trips
/news
/gallery
```

---

# 05. GLOBAL PAGE STRUCTURE

Every page must have:

```text
Header
↓
Page Hero
↓
Main Content
↓
Relevant CTA
↓
Footer
```

But do NOT use the same hero structure on every page.

Page heroes should have variations:

```text
Full visual hero
Editorial hero
Split hero
Image hero
Minimal text hero
Breadcrumb hero
```

---

# 06. HOMEPAGE

Homepage should not simply be:

```text
Hero
Services
About
Contact
```

Instead construct a visual narrative.

Recommended sequence:

```text
01 Hero
02 Company Snapshot
03 Fleet
04 Services
05 Cargo
06 Routes
07 How We Operate
08 Operational Evidence
09 Trust
10 Company Story
11 Quote CTA
12 Contact
```

---

# 07. HOMEPAGE HERO

The hero should communicate immediately:

```text
Company name
Core transportation service
Primary operating area
Primary CTA
Secondary CTA
```

Use real fleet/road/yard photography if available.

Preferred composition:

```text
------------------------------------------------
HEADER
------------------------------------------------

Large headline

Supporting statement

[ GET A QUOTE ]   [ VIEW FLEET ]

                         Large truck image
                         / road visual
------------------------------------------------
```

Do not overload hero with information.

---

# 08. HERO ANIMATION — REAL IMPLEMENTATION PATTERN

Do not simply fade everything in.

Use a choreographed entrance:

```text
Page load
↓
Image / background reveal
↓
Headline reveal
↓
Supporting text
↓
CTA
↓
Secondary visual detail
```

Possible implementation:

```text
image:
clip-path reveal

heading:
translateY + opacity

description:
small stagger

CTA:
translateY + opacity

secondary image:
scale 1 → 1.03
```

Duration should remain short.

Hero should become usable almost immediately.

---

# 09. HERO SCROLL BEHAVIOR

On scroll:

```text
Hero image
    ↓
slight scale
    ↓
slight vertical movement

Hero text
    ↓
slight fade / translate

Next section
    ↓
reveals naturally
```

Do NOT:

* lock the entire page
* force a huge scroll distance
* use aggressive zoom
* hide the CTA
* create scroll-jacking
* make the user wait for animation

---

# 10. COMPANY SNAPSHOT

Use a compact section inspired by the statistics/capability treatment seen in logistics templates such as Transigo.

Possible data:

```text
Vehicles
Routes
Years
Drivers
Coverage
Customers
```

Only use values from the questionnaire.

Layout:

```text
-------------------------------------
01
VEHICLES

02
ROUTES

03
COVERAGE

04
EXPERIENCE
-------------------------------------
```

Use subtle counter animation.

Counter runs once.

---

# 11. FLEET SECTION

Do not present fleet as a generic card grid.

Use a visual fleet showcase.

Desktop:

```text
------------------------------------------------
| VEHICLE IMAGE       | Vehicle information     |
|                     |                        |
|                     | Type                   |
|                     | Capacity               |
|                     | Dimensions             |
|                     | Quantity               |
|                     | [ VIEW DETAILS ]       |
------------------------------------------------
```

Alternative:

```text
Category list
      ↓
Selected vehicle
      ↓
Large image
      ↓
Specifications
```

---

# 12. FLEET INTERACTION

Use interaction inspired by product/service showcase websites.

Desktop:

```text
Hover vehicle
↓
Image movement
↓
Specification panel reveal
↓
Arrow movement
```

Mobile:

```text
Tap vehicle
↓
Expand
↓
Specifications
↓
CTA
```

Never depend on hover for essential information.

---

# 13. FLEET SCROLL PATTERN

For an important fleet section, use horizontal scrolling or sticky presentation ONLY if it improves comprehension.

Example:

```text
                 ┌─────────────┐
                 │ VEHICLE 01  │
                 └─────────────┘

                 ↓ scroll

                 ┌─────────────┐
                 │ VEHICLE 02  │
                 └─────────────┘

                 ↓ scroll

                 ┌─────────────┐
                 │ VEHICLE 03  │
                 └─────────────┘
```

On desktop this may become a pinned visual section.

On mobile:

```text
Swipe cards
```

Do not force horizontal page scrolling.

---

# 14. SERVICES

Use the actual service categories from the questionnaire.

Possible structure:

```text
OUR SERVICES

[ Full Truckload ]
[ Groupage ]
[ Long-term Rental ]
[ Crane / Machinery ]
[ Container ]
[ Local Delivery ]
[ Port / ICD ]
...
```

Do not invent services.

---

# 15. SERVICES INTERACTION

Use expandable service cards.

Initial:

```text
01
FULL TRUCKLOAD
                    →
```

Hover:

```text
01
FULL TRUCKLOAD
Short description
                    →
```

Click:

```text
01
FULL TRUCKLOAD
Detailed description
Supported cargo
Vehicle types
Coverage
                    −
```

This creates motion without creating unnecessary visual complexity.

---

# 16. SERVICES DETAIL PAGE

Each service detail page should contain:

```text
Hero
↓
Service description
↓
Suitable cargo
↓
Suitable vehicles
↓
Coverage
↓
Process
↓
Operational requirements
↓
Related services
↓
CTA
```

Related services should link naturally.

---

# 17. CARGO PAGE

Present cargo categories from the questionnaire.

Example:

```text
ALL

TEXTILES
STEEL
MACHINERY
WOOD
AGRICULTURE
FOOD
CONSTRUCTION
PALLETS
OVERSIZED
...
```

Use filter interaction.

When filter changes:

```text
old content
↓
short fade / scale
↓
new content
```

No page reload.

---

# 18. CARGO → VEHICLE RELATION

Where data supports it, create a relationship:

```text
Cargo
↓
Recommended vehicle
↓
Relevant service
↓
Route
↓
Quote
```

Example:

```text
MACHINERY
     ↓
CRANE TRUCK
     ↓
MACHINERY TRANSPORT
     ↓
INDUSTRIAL PARK ROUTE
     ↓
GET A QUOTE
```

This is more useful than merely displaying cargo icons.

---

# 19. ROUTES PAGE

Routes should be one of the website's signature visual sections.

Use actual:

* regions
* provinces
* cities
* industrial parks
* ports
* ICDs
* fixed routes

from the questionnaire.

---

# 20. ROUTE VISUALIZATION

Do NOT automatically build a complex Google Maps application.

For a company presentation website, a stylized route visualization may be better:

```text
ORIGIN
  ●
  │
  │
  ├───────────────●
  │               DESTINATION
  │
  ●
```

Animation:

```text
Route line
0% → 100%

Location marker
appears

Route information
reveals
```

---

# 21. ROUTE STORYTELLING

For selected important routes:

```text
01 ORIGIN
↓
02 PICKUP
↓
03 LOADING
↓
04 DEPARTURE
↓
05 IN TRANSIT
↓
06 DESTINATION
```

When scrolling:

```text
current step = active
previous = muted
next = inactive
```

Visual changes:

* route line
* location
* truck image
* supporting information

This is where scroll storytelling should be used instead of generic parallax.

---

# 22. WORKING PROCESS

Create a dedicated process section based on actual operations.

Example:

```text
01
REQUEST
↓
02
VEHICLE ASSIGNMENT
↓
03
LOADING
↓
04
SECURING
↓
05
TRANSPORT
↓
06
DELIVERY
```

Only use steps supported by actual company operations.

---

# 23. PROCESS ANIMATION

Desktop:

```text
STICKY VISUAL
        +
SCROLLING STEPS
```

Example:

```text
┌─────────────────────┐
│                     │
│   TRUCK / PHOTO     │
│                     │
└─────────────────────┘

01 Request

02 Vehicle

03 Loading

04 Transport

05 Delivery
```

As the user scrolls:

```text
Step 01
↓
visual changes
↓
Step 02
↓
visual changes
↓
Step 03
```

This is a direct adaptation of the sticky/scroll storytelling pattern rather than decorative parallax.

---

# 24. OPERATIONAL EVIDENCE

Use real photography:

```text
Fleet at yard
Loading
Unloading
Truck on road
Drivers
Office
Equipment
Cargo securing
```

Do not use stock photography if real photos are available.

Gallery should feel like evidence.

---

# 25. GALLERY INTERACTION

Use a controlled image gallery.

Desktop:

```text
Large image
+
small thumbnails
```

Hover:

```text
image scale 1 → 1.03
```

Click:

```text
Lightbox
```

Alternative:

```text
Horizontal gallery
```

Mobile:

```text
Swipe
```

No complicated 3D gallery is necessary.

---

# 26. TRUST SECTION

Use:

```text
Commitments
Insurance
Compensation
Legal documents
Licenses
Customer references
Testimonials
```

Only show available information.

---

# 27. TRUST INTERACTION

Instead of displaying everything simultaneously:

```text
ON-TIME DELIVERY        +
CARGO INSURANCE        +
TRANSPARENT QUOTE      +
CONTRACT / VAT         +
EXPERIENCED DRIVERS    +
```

Tap:

```text
ON-TIME DELIVERY        −

Detailed explanation...
```

Use accordion.

This keeps the page clean while preserving detailed information.

---

# 28. TESTIMONIALS

If real testimonials exist:

Use a horizontal slider.

Desktop:

```text
←

QUOTE

CUSTOMER

COMPANY

                 01 / 05

→
```

Mobile:

```text
← [ testimonial ] →
```

Do not use auto-changing testimonials too aggressively.

User should control the slider.

---

# 29. PRICING PAGE

Follow questionnaire option.

Possible:

```text
No public pricing
```

Then:

```text
WHY PRICING VARIES
↓
Route
Cargo
Vehicle
Distance
Loading
Additional service
↓
REQUEST QUOTE
```

If starting price exists:

```text
FROM X
```

If detailed price table exists:

```text
Route
Vehicle
Unit
Starting price
Surcharge
VAT
```

Never invent pricing.

---

# 30. QUOTE EXPERIENCE

Quote CTA should be available throughout the website.

Desktop:

```text
GET A QUOTE
```

Mobile:

```text
CALL
ZALO
QUOTE
```

The quote form should be simple.

Required fields should be limited to information actually needed.

Possible:

```text
Pickup
Destination
Cargo
Weight
Vehicle
Date
Name
Phone
Note
```

Do not ask unnecessary questions.

---

# 31. NAVIGATION

Header should remain simple.

Desktop:

```text
LOGO

About
Fleet
Services
Cargo
Routes
Pricing
Contact

[ GET A QUOTE ]
```

Mobile:

```text
LOGO                     ☰
```

Menu opens as:

```text
HOME
ABOUT
FLEET
SERVICES
CARGO
ROUTES
PRICING
CONTACT

[ GET A QUOTE ]
```

Use staggered menu reveal.

---

# 32. HEADER SCROLL BEHAVIOR

Initial:

```text
transparent / overlay
```

After scroll:

```text
solid / elevated
```

Transition:

```text
background
opacity
blur
shadow
```

Do not make the header disappear unexpectedly.

If hiding the header on downward scroll:

```text
scroll down → hide
scroll up   → show
```

Only implement if it improves usability.

---

# 33. PAGE TRANSITIONS

Use subtle transitions between pages.

Preferred:

```text
current page
↓
quick fade / clip
↓
new page
```

Avoid cinematic 1–2 second transitions.

Navigation should feel immediate.

---

# 34. SCROLL REVEAL

Use reveal for:

* section heading
* image
* cards
* statistics
* CTA

Preferred sequence:

```text
section enters viewport
↓
heading
↓
description
↓
content
```

Do not animate every DOM element independently.

Group related elements.

---

# 35. TEXT ANIMATION

Use typography animation selectively.

Good:

```text
MOVING
YOUR
BUSINESS
```

Lines reveal sequentially.

Bad:

```text
M
o
v
i
n
g
```

Do not animate every character unless there is a very strong reason.

---

# 36. IMAGE TRANSITION

Use real transportation images as motion assets.

Patterns:

```text
image clip reveal
image scale
image position shift
image mask transition
```

Example:

```text
████████████
████████████

scroll

████████
████████████
████████████
```

Do not use excessive distortion.

---

# 37. CARD STACKING

For selected sections only:

```text
CARD 01
    ↓
CARD 02
    ↓
CARD 03
    ↓
CARD 04
```

As user scrolls:

```text
card 01
→ moves away

card 02
→ becomes primary

card 03
→ enters
```

Use this for:

* Services
* Fleet
* Process

Do NOT use card stacking everywhere.

---

# 38. HORIZONTAL SCROLL

Use only for content that naturally benefits from sequential exploration:

```text
Fleet
Services
Gallery
Routes
```

Desktop may use:

```text
scroll ↓
horizontal content →
```

But mobile must become:

```text
horizontal swipe
```

Never create horizontal overflow for the whole document.

---

# 39. MARQUEE / TICKER

A subtle ticker can be used for:

```text
SERVICES
ROUTES
CAPABILITIES
```

Example:

```text
FULL TRUCKLOAD
• CONTAINER
• LOCAL DELIVERY
• MACHINERY
• INDUSTRIAL PARK
•
```

Movement must be slow.

Pause on interaction if appropriate.

Do not use marquee for essential information.

---

# 40. FOOTER

Footer should not be an afterthought.

Structure:

```text
Company
Services
Fleet
Routes
Contact
Social
Legal

Phone
Email
Address
Working hours

[ GET A QUOTE ]
```

A final large CTA may sit above the footer:

```text
READY TO MOVE YOUR CARGO?

[ GET A QUOTE → ]
```

Use a subtle image reveal or background movement.

---

# 41. RESPONSIVE ARCHITECTURE

Do not simply shrink desktop.

Every component must be intentionally designed for:

```text
Desktop
Tablet
Mobile
```

---

# 42. DESKTOP

Allowed:

* hover
* sticky sections
* scroll storytelling
* horizontal scrolling
* card stacking
* image hover
* subtle parallax
* cursor interaction

Only where useful.

---

# 43. TABLET

Reduce:

* movement distance
* simultaneous animations
* parallax
* number of visible cards
* complex interactions

Keep:

* scroll reveal
* simple sticky sections
* swipeable cards

---

# 44. MOBILE

Mobile must be treated as a separate interaction design.

Replace:

```text
hover
```

with:

```text
tap
```

Replace:

```text
complex cursor
```

with:

```text
normal touch interaction
```

Replace:

```text
desktop horizontal interaction
```

with:

```text
native swipe carousel
```

Replace:

```text
large pinned scene
```

with:

```text
shorter sequential sections
```

if the pinned scene harms usability.

---

# 45. MOBILE NAVIGATION

Use full-screen or large overlay navigation.

Animation:

```text
menu button
↓
overlay
↓
navigation items stagger
↓
CTA appears
```

Closing:

```text
X
↓
reverse animation
```

Menu must be usable immediately.

---

# 46. MOBILE CTA

A fixed bottom CTA may be used:

```text
────────────────────────────
CALL        ZALO       QUOTE
────────────────────────────
```

Only if it does not cover important content.

It should respect:

```text
safe-area-inset-bottom
```

---

# 47. RESPONSIVE COMPONENT CONTRACT

Every component must define:

```text
Component
├── Desktop layout
├── Tablet layout
├── Mobile layout
├── Desktop interaction
├── Mobile interaction
├── Entry animation
├── Scroll behavior
├── Loading state
└── Fallback
```

---

# 48. PERFORMANCE

Do not use WebGL simply because the reference uses WebGL.

Prefer:

```text
CSS
SVG
GSAP
ScrollTrigger
CSS scroll-driven animation
```

before introducing:

```text
WebGL
Three.js
heavy canvas
video sequences
```

Use heavier technologies only when they provide a clear UX benefit.

Awwwards references frequently use scroll choreography and animation tooling, but the final transportation website must remain usable and performant.

---

# 49. MOTION PERFORMANCE

Prioritize:

```text
transform
opacity
clip-path
```

Avoid constantly animating layout properties such as:

```text
width
height
top
left
margin
padding
```

when the same visual result can be achieved through transforms.

---

# 50. REDUCED MOTION

Implement:

```text
prefers-reduced-motion
```

When enabled:

```text
remove parallax
reduce transitions
remove unnecessary movement
disable looping animation
preserve content
preserve navigation
```

---

# 51. MOTION HIERARCHY

Do not give every section the same animation intensity.

Use:

```text
LEVEL 1
Basic reveal
```

for normal content.

```text
LEVEL 2
Interactive movement
```

for Fleet / Services / Gallery.

```text
LEVEL 3
Scroll storytelling
```

for Routes / Process.

```text
LEVEL 4
Signature interaction
```

for only Hero or one major section.

The website should have visual rhythm:

```text
motion
↓
information
↓
motion
↓
information
↓
interaction
↓
CTA
```

not:

```text
motion
motion
motion
motion
motion
```

---

# 52. UX PRIORITY

The priority order is:

```text
1. Understandability
2. Navigation
3. Content
4. Mobile usability
5. Accessibility
6. Performance
7. Interaction
8. Animation
```

If animation conflicts with UX:

```text
REMOVE / REDUCE ANIMATION
```

Do not sacrifice usability for visual effects.

---

# 53. REAL-WORLD REFERENCE ADAPTATION

The implementation should specifically learn these patterns from the inspected references:

### From Transigo

Use:

```text
Stats
→ About
→ Services
→ Working Process
→ Proof / Operations
→ Trust
→ Testimonials
→ CTA
```

rather than an arbitrary collection of sections.

### From CargoFlow

Use:

```text
Minimal layout
+
Appear effects
+
Scroll effects
+
Sticky scrolling
+
Text effects
+
Ticker/slideshow
```

but selectively.

### From Freightly

Use:

```text
Service discovery
→ How it works
→ Pricing / information
→ Tracking / operational proof
→ Quote
→ Testimonials
→ FAQ
→ CTA
```

where relevant to the actual business.

### From Awwwards interaction references

Investigate and adapt:

```text
Scroll storytelling
Card stacking
Image transitions
Horizontal scroll
Mobile overlay gallery
Unusual navigation
Microinteraction
```

instead of blindly adding random animation.

---

# 54. FINAL DESIGN CHARACTER

The target should be:

```text
80% clarity
20% visual surprise
```

not:

```text
20% clarity
80% animation
```

The user should always know:

```text
Where am I?
What does this company do?
What can they transport?
Where do they operate?
What vehicles do they have?
How does the service work?
Why should I trust the company?
How do I contact them?
How do I request a quote?
```

while still feeling:

```text
"This website is alive."
```

---

# 55. FINAL IMPLEMENTATION CHECKLIST

Before considering the website complete, verify:

### Information architecture

* [ ] All required pages exist
* [ ] Every major PDF category has a destination
* [ ] Services have detail pages
* [ ] Fleet has detail pages
* [ ] Routes have detail pages
* [ ] Contact/Quote works
* [ ] Legal pages exist

### Real content

* [ ] No fabricated company information
* [ ] No fabricated statistics
* [ ] No fabricated customers
* [ ] No fabricated routes
* [ ] No fabricated pricing
* [ ] No fabricated certifications

### Motion

* [ ] Hero reveal
* [ ] Scroll reveal
* [ ] Image transitions
* [ ] Service interaction
* [ ] Fleet interaction
* [ ] Route animation
* [ ] Process storytelling
* [ ] Gallery interaction
* [ ] CTA microinteraction
* [ ] Navigation transition
* [ ] Mobile interaction

### Responsive

* [ ] Desktop
* [ ] Tablet
* [ ] Mobile
* [ ] Touch interactions
* [ ] No horizontal overflow
* [ ] No clipped text
* [ ] No broken sticky elements
* [ ] No oversized animation
* [ ] No inaccessible hover-only content

### Performance

* [ ] Lazy-load heavy images
* [ ] Optimize images
* [ ] Avoid unnecessary WebGL
* [ ] Avoid excessive DOM animation
* [ ] Use transform/opacity where possible
* [ ] Support reduced motion
* [ ] Test mobile performance

---

# 56. FINAL EXPERIENCE

The final website should feel like a combination of:

```text
REAL TRANSPORTATION BUSINESS
        +
EDITORIAL WEBSITE STRUCTURE
        +
AWWWARDS-LEVEL MOTION
        +
MODERN PRODUCT UX
        +
MOBILE-FIRST RESPONSIVENESS
```

But the business information remains the priority.

The animation should make the transportation story easier to explore, not hide it.

The user should be able to understand the company without animation, and enjoy a substantially richer experience when animation is enabled.
