/**
 * Case studies follow a simple public structure:
 * Title → Overview → Background → My Role → Experience Design →
 * What I did not pursue → What I learned → Conclusion
 *
 * Only include a section when there is real content.
 */
window.MicahPortfolio = window.MicahPortfolio || {};

window.MicahPortfolio.caseStudies = {
  logos: {
    slug: 'logos',
    title: 'Restructuring the Logos Publicity Website',
    eyebrow: 'Logos Publicity · Live website',
    lede: 'The agency did not like how the site was laid out or how the pages worked. I restructured it so clients can find a service, see the work, and get in touch.',
    tags: ['UX', 'Web Design', 'Development'],
    live: { href: 'https://logospublicity.com/', label: 'Visit the live website' },
    next: { href: '/case-studies/sanex', label: 'Sanex' },
    background: [
      'Logos Publicity is a long-established advertising and communication agency. The website exists so clients can understand the agency and find the services it offers.',
      'The old site was a one-page template with a full-screen video that loaded as soon as the homepage opened. Services and work lived in two separate folders, so a service page did not lead into that service’s work.',
      'Navigation was the other break. On a large screen the links sat behind a hamburger, not in a visible menu. On a phone the template cloned that same hamburger into a second overlay, so the menu took two taps before the links appeared.'
    ],
    role: {
      title: 'Experience design and build',
      summary: 'Directors at Logos Publicity brought me in to fix the agency’s own website. They were not happy with how the site was laid out or how the pages worked, clients could not move cleanly from a service to that service’s work, mobile navigation was broken, and contact was hard to reach once you left the homepage. I reviewed the live site and the old files, mapped where the structure broke, and rebuilt the site around services with their direction. The updated site is live at logospublicity.com.',
      subsections: [
        {
          heading: 'What directors asked for',
          items: [
            'A site that reflects how the agency actually works, not a template where services and portfolio work live in separate folders.',
            'Pages that help clients understand what Logos offers, see relevant work, and get in touch without getting lost.',
            'A layout that works on phones, not just desktop, including navigation people can actually use.',
            'Contact, services, and enquiry paths that work from every page, not only from the bottom of the homepage.'
          ]
        },
        {
          heading: 'How I worked',
          items: [
            'Started by auditing the old homepage, service pages, works folder, and mobile menu against what directors said was not working.',
            'Reviewed how other agencies in Mauritius, and a few global references such as Pentagram, organise services, work, and contact on their sites.',
            'Mapped the breaks, split folders, two-tap menu, homepage-only contact, service pages that did not lead into work, before proposing a service-led structure.',
            'Built the restructure in HTML, CSS, and JavaScript, checking layouts and responsive behaviour with directors as pages took shape.',
            'Continued file cleanup, SEO updates, and content adjustments after the site went live.'
          ]
        },
        {
          heading: 'What I delivered',
          items: [
            'Service-led information architecture: home → service hub → work → contact.',
            'One-tap mobile menu drawer and a visible desktop menu with a Services dropdown.',
            'A footer with contact details, quick links, and legal pages on every page.',
            'FAQ sections on the homepage, contact page, and each main service hub.',
            'Responsive layout, typography, and spacing updates across the live site.'
          ]
        }
      ],
      meta: {
        Role: 'Intern · experience design and build',
        Team: 'Logos Publicity directors',
        Timeline: 'June 2026 – September 2026',
        Constraint: 'I wanted a rebrand. Directors said no. Structure, navigation, and contact could change.',
        Outcome: 'Live at logospublicity.com'
      }
    },
    iaFlow: {
      heading: 'Old structure vs new structure',
      intro: 'Toggle the two models, click any step for detail, or trace the client path.',
      variants: {
        old: {
          label: 'Old site',
          summary: 'Split folders, homepage contact, and dead ends.',
          layout: 'split',
          steps: [
            {
              id: 'home',
              label: 'Homepage',
              sub: 'One-page scroll',
              detail: 'A hero video loaded on arrival. About, services, work, and contact were sections on the same long page.',
              trace: 1
            },
            {
              id: 'services',
              label: '/services/',
              sub: 'Flat HTML pages',
              detail: 'Service pages like design.html and advertising.html sat as separate files. They did not link into project pages under /works/.',
              trace: 2
            },
            {
              id: 'works',
              label: '/works/',
              sub: 'Category folders',
              detail: 'Portfolio pieces lived in folders such as works/design/, works/adv/, and works/pub/, a separate tree from /services/.',
              trace: 3
            },
            {
              id: 'service-page',
              label: 'services/design.html',
              sub: 'Grid of other services',
              detail: 'Design opened on a grid of other services, not a path into packaging or publications in the works folder.',
              trace: 4
            },
            {
              id: 'work-page',
              label: 'works/design/packaging.html',
              sub: 'Isolated project',
              detail: 'A client could land on a project page with no clear route back to the service name they searched for.',
              trace: 5
            },
            {
              id: 'contact',
              label: 'Contact',
              sub: '#contact on homepage',
              detail: 'Contact details sat in a section at the bottom of index.html. From inner pages, enquiry meant going back to the homepage scroll.',
              trace: 6
            }
          ],
          breaks: [
            { between: ['service-page', 'work-page'], label: 'No linked path' }
          ]
        },
        new: {
          label: 'New site',
          summary: 'Service-led hubs with work nested underneath.',
          layout: 'linear',
          steps: [
            {
              id: 'home',
              label: 'Home',
              sub: 'Agency overview',
              detail: 'Introduces Logos Publicity and routes people into services, work, and contact.',
              trace: 1
            },
            {
              id: 'service',
              label: 'Service hub',
              sub: 'services/branding.html',
              detail: 'Each service has a hub page, Branding, Advertising, Marketing & Communication Strategy, and the rest, that introduces the offer and links into that work.',
              trace: 2
            },
            {
              id: 'work',
              label: 'Work',
              sub: 'Under the service folder',
              detail: 'Project pages now sit inside the service folder, e.g. services/branding/packaging.html, so the work stays tied to the service.',
              trace: 3
            },
            {
              id: 'contact',
              label: 'Contact',
              sub: 'contact.html',
              detail: 'contact.html is reachable from the menu and footer on every page, not only from a homepage section.',
              trace: 4
            }
          ]
        }
      }
    },
    design: [
      {
        heading: 'Competitor analysis: how other agencies share their work.',
        paragraphs: [
          'Directors were not asking for a visual rebrand. The look of the old site could stay broadly the same. What needed to change was how information was organised and shared. Before proposing a new structure, I reviewed websites from other agencies in Mauritius and a couple of global references, including Pentagram, to see how they present services, portfolio work, and contact.',
          'The pattern that stood out: agencies that made sense to a client usually led with what they offer, then showed work under that offer, not in a separate folder with no link back. That comparison helped frame the service-led restructure without copying anyone’s visual style.'
        ],
        images: [
          {
            src: '../assets/portfolio/logos-publicity/competitor-analysis.webp',
            alt: 'Competitor analysis board comparing agency websites in Mauritius and global references',
            wide: true,
            caption: 'Competitor review: how local and global agencies display services, work, and contact.'
          }
        ]
      },
      {
        heading: 'Information architecture changed from split folders to service-led paths.',
        paragraphs: [
          'The old site treated the homepage as one long page: a hero video on arrival, sections below, and contact at the bottom. Services lived in a services folder and portfolio pieces in a separate works folder. The same project could sit in works without a clear link back to the service a client had searched for.',
          'Service pages did not act as hubs. Design was a grid of other services. Advertising opened on a quote and a filter bar, not a path into billboards and campaigns. “Back” usually meant the homepage, not the service you came from.',
          'The live site is organised around services. Each one, Branding, Advertising, Marketing & Communication Strategy, and the rest, is a hub that introduces the offer and links into examples of that work. Contact is its own page, reachable from the menu at any point. The path is home → service → work → contact.'
        ],
        images: [
          {
            src: '../assets/portfolio/logos-publicity/old-design-service-page.webp',
            alt: 'Old Logos Publicity design page: a grid of other services rather than a design hub',
            caption: 'Old design page: other services in a grid, not a path into design work.'
          },
          {
            src: '../assets/portfolio/logos-publicity/new-branding-service-hub.webp',
            alt: 'New Logos Publicity branding service hub with links into packaging, publications, and related work',
            caption: 'New branding hub: introduces the service and links into that work.'
          },
          {
            src: '../assets/portfolio/logos-publicity/old-advertising-service-page.webp',
            alt: 'Old Logos Publicity advertising page with a quote and filters to other services',
            caption: 'Old advertising: quote and filters to other services; no path into campaigns.'
          },
          {
            src: '../assets/portfolio/logos-publicity/new-marketing-service-hub.webp',
            alt: 'New Logos Publicity marketing and communication strategy service hub',
            caption: 'New marketing & comm strategy: hub copy with a path into that work.'
          },
          {
            src: '../assets/portfolio/logos-publicity/branding-publications-work-page.webp',
            alt: 'Logos Publicity publications work page nested under the branding service',
            wide: true,
            caption: 'Work now lives under the service it belongs to: here, publications under Branding.'
          }
        ]
      },
      {
        heading: 'The menu took two taps. It now takes one.',
        paragraphs: [
          'On a phone, the old template added a menu button, then copied the desktop hamburger into that overlay. The first tap opened a panel. The second tap opened the actual list of links. Until that second tap, there was nothing to choose.',
          'On a large screen there was still no open menu, only the same hamburger.',
          'The live site has a visible menu on desktop. On a phone, one tap on the menu button opens a drawer with the links already there. Services are in that list. Contact is a real page, not a jump back to the homepage footer.'
        ],
        images: [
          {
            src: '../assets/portfolio/logos-publicity/old-mobile-nav-two-tap.webp',
            alt: 'Old Logos Publicity mobile homepage: first tap opens an overlay with a second hamburger and no links; second tap shows the links',
            wide: true,
            caption: 'Old mobile menu: tap 1: overlay and inner hamburger, no links yet. Tap 2: the link list appears.'
          },
          {
            src: '../assets/portfolio/logos-publicity/new-mobile-nav-drawer.webp',
            alt: 'New Logos Publicity mobile homepage: one tap opens a menu drawer with links visible, and Services expands as a dropdown',
            wide: true,
            caption: 'New mobile menu: one tap opens the drawer with links already there. Services expands in the list.'
          },
          {
            src: '../assets/portfolio/logos-publicity/old-desktop-nav.webp',
            alt: 'Old Logos Publicity desktop homepage with navigation hidden behind a hamburger',
            caption: 'Old desktop: main links sat behind a hamburger, not in an open menu.'
          },
          {
            src: '../assets/portfolio/logos-publicity/new-desktop-nav.webp',
            alt: 'New Logos Publicity desktop homepage with Home, About, Services, and Contact visible in the header',
            caption: 'New desktop: Home, About, Services, and Contact are visible. Services opens a dropdown.'
          }
        ]
      },
      {
        heading: 'The footer now works on every page.',
        paragraphs: [
          'On the old site, the footer was logo and social icons. Emails, phones, and the address lived in a contact section at the bottom of the homepage, so inner pages had no way to reach the agency from the footer.',
          'The live footer is the same everywhere: a Contact us button, quick links, full contact details, legal links, and the ACA membership mark. Clients do not have to scroll back to the homepage to find how to get in touch.'
        ],
        images: [
          {
            src: '../assets/portfolio/logos-publicity/old-footer.webp',
            alt: 'Old Logos Publicity footer: logo and social links only, no contact details or navigation',
            caption: 'Old footer: logo and social icons. No emails, phones, address, or site links.'
          },
          {
            src: '../assets/portfolio/logos-publicity/new-footer.webp',
            alt: 'New Logos Publicity footer with Contact us button, quick links, contact details, legal links, and ACA logo',
            caption: 'New footer: Contact us, quick links, contact details, Privacy Policy, Terms, and ACA logo on every page.'
          }
        ]
      },
      {
        heading: 'FAQs answer the question each page is for.',
        paragraphs: [
          'The old site had no FAQ sections. Common questions about the agency, a service, or how to enquire had nowhere to sit except buried in page copy.',
          'The live site uses accordions on the homepage (who Logos is, what they offer, how to contact), on the contact page (location and enquiry paths), and on each main service hub (what that service covers and how to brief a project). Deeper work pages carry structured FAQ data for search without repeating a visible block on every project page.'
        ],
        images: [
          {
            src: '../assets/portfolio/logos-publicity/faq-sections-homepage-mobile-desktop.webp',
            alt: 'Logos Publicity homepage FAQ accordion on mobile and desktop',
            wide: true,
            caption: 'Homepage FAQ: agency-level questions on mobile and desktop. Service hubs carry their own FAQs.'
          }
        ]
      }
    ],
    notPursued: {
      heading: 'What I did not pursue',
      paragraphs: [
        'I wanted to rebrand. Directors said no: keep the existing look, fix how the site works. Colour, photography, and tone stayed. Structure, navigation, footer, and FAQs changed.',
        'I also considered leaving /services/ and /works/ as separate folders and adding more cross-links. Faster than moving files, but a client could still land on packaging.html with no sense that it belonged to Branding. The path would still break.'
      ]
    },
    learnings: [
      'Wanting a rebrand and being told no was useful. The constraint forced the real problem: structure, not a new look.',
      'Agency sites fail on structure before they fail on visuals. Mapping the old path, and where it died, was more useful than opening Figma first.',
      'Directors signed off on pages in the browser, not a deck. Showing the live path home → service → work → contact beat explaining it.'
    ],
    conclusion: [
      'The restructured site is live at logospublicity.com. Services hold their work, contact and FAQs sit on real pages, the footer carries contact details everywhere, and clients can open the menu in one tap and move home → service → work → contact.'
    ]
  },

  alfresco: {
    slug: 'alfresco',
    title: 'Designing and developing the Alfresco Bakery website',
    eyebrow: 'Alfresco The Bakery · Live client website',
    lede: 'Designed and developed a responsive website from scratch after the bakery started getting found online. Menu and gallery are the pages people use most (1,800+ monthly product page views and 500+ monthly gallery interactions). Enquiries increased after launch.',
    tags: ['UX', 'Web Development'],
    live: { href: 'https://alfrescothebakery.com/', label: 'Visit the live website' },
    next: { href: '/case-studies/verandah-cafe', label: 'Verandah Café' },
    background: [
      'Alfresco The Bakery was gaining a lot of traction online and going viral. People were searching for the bakery, but it did not have a website of its own.',
      'Social posts were not a reliable place to land. There was no permanent site for the menu, the look of the bakery, or how to get in touch.'
    ],
    role: {
      title: 'Designer and developer',
      summary: 'I proposed the digital storefront, then designed and built the site from scratch. I have continued to maintain it.',
      points: [
        'Mapped visitor intent, menu, hours, directions, WhatsApp, into a shallow IA with homepage anchors and dedicated menu, gallery, and contact pages.',
        'Built a dual-branch hours system with live open/closed badges and per-branch contact paths.',
        'Structured eight menu categories with sticky desktop filters and a mobile category dropdown.',
        'Implemented SEO (Bakery JSON-LD, canonical URLs, WebP + srcset) and used cPanel analytics reports (page frequency and key routes) to focus on the menu and enquiry paths.',
        'Shipped a production contact form (AJAX, honeypot, rate limit, SMTP-ready PHP) on cPanel.'
      ],
      meta: {
        Role: 'Sole designer and developer',
        Team: 'Freelance · client bakery',
        Timeline: 'April 2025 – Present',
        Constraint: 'Growing fast online, two branches, no existing website.',
        Outcome: 'Live site · enquiries increased after launch'
      }
    },
    iaFlow: {
      heading: 'Before the website vs after',
      intro: 'Toggle the two models, click any step for detail, or trace how someone looking for the bakery might move through what existed online.',
      variants: {
        before: {
          label: 'Before',
          summary: 'No website, people landed wherever Google or social sent them.',
          layout: 'channels',
          anchor: {
            id: 'search',
            label: 'Someone searches',
            sub: '“Alfresco bakery”',
            detail: 'Posts were going viral and people were already looking for Alfresco. There was no permanent site to send them to.',
            trace: 1
          },
          channels: [
            {
              id: 'instagram',
              label: 'Instagram',
              sub: 'Posts & stories',
              detail: 'The bakery’s look and daily bakes lived in the feed. Menu details were buried in captions or replies.',
              trace: 2
            },
            {
              id: 'facebook',
              label: 'Facebook',
              sub: 'Page posts',
              detail: 'Updates and photos sat on the page, but there was no structured menu or gallery to browse.',
              trace: 3
            },
            {
              id: 'google',
              label: 'Google Business',
              sub: 'Hours & photos',
              detail: 'People could find opening hours and a pin on the map, not the full product range or a clear way to enquire.',
              trace: 4
            }
          ],
          gapLabel: 'No central hub',
          orphan: {
            id: 'menu-gap',
            label: 'Full menu?',
            sub: 'Hard to find',
            detail: 'If you wanted the full menu, gallery, or a reliable contact route, you had to piece it together across channels, or message and wait.',
            trace: 5
          }
        },
        after: {
          label: 'After',
          summary: 'One responsive site, homepage anchors for story and branches, dedicated pages for menu, gallery, and contact.',
          layout: 'linear',
          steps: [
            {
              id: 'home',
              label: 'Homepage',
              sub: 'Storefront + branches',
              detail: 'Introduces Alfresco and routes people toward the menu, gallery, and contact. Branch hours, open/closed status, WhatsApp, and directions sit on the homepage, not a separate locations page.',
              trace: 1
            },
            {
              id: 'menu',
              label: 'Menu',
              sub: 'Products',
              detail: 'The most visited path, 1,800+ monthly product page views. Eight categories, sticky filters on desktop, and a category dropdown on mobile.',
              trace: 2
            },
            {
              id: 'gallery',
              label: 'Gallery',
              sub: 'Visual proof',
              detail: '500+ monthly interactions. A 46-image masonry grid with an accessible lightbox, homepage teaser driving to the full gallery page.',
              trace: 3
            },
            {
              id: 'contact',
              label: 'Contact',
              sub: 'Enquire',
              detail: 'AJAX contact form, branch quick links, and WhatsApp paths, not a DM thread or a comment on a post.',
              trace: 4
            }
          ]
        }
      }
    },
    design: [
      {
        heading: 'Turning search demand into a branch-aware website.',
        paragraphs: [
          'If people were already looking for Alfresco, the site had to answer them quickly: what is on the menu, what the bakery looks like, and how to visit or enquire.',
          'I tested early versions on my laptop with a few friends while we were out for coffee, and with a waitress at one of the coffee shops we were at.'
        ],
        images: [
          {
            src: '../assets/portfolio/alfresco-the-bakery/homepage-hero.webp',
            alt: 'Alfresco The Bakery homepage hero with transparent header, photography, and View Menu and Find Us CTAs',
            wide: true,
            caption: 'Homepage hero: transparent header, primary CTAs, and editorial photography.'
          },
          {
            src: '../assets/portfolio/alfresco-the-bakery/homepage-phone-mockup.webp',
            alt: 'Alfresco The Bakery homepage on a phone',
            caption: 'Homepage on mobile: the first impression when someone searches and lands.'
          }
        ]
      },
      {
        heading: 'One homepage, two bakeries.',
        paragraphs: [
          'Alfresco has two branches with different hours, Harare open seven days, Bulawayo Thu–Sat only. Instead of a separate locations page, branch cards sit on the homepage with live open/closed badges, expandable hours accordions, and per-branch WhatsApp and directions links.',
          'The same branch information repeats on the contact page so someone enquiring can still find hours and directions without going back to the homepage.'
        ],
        images: [
          {
            src: '../assets/portfolio/alfresco-the-bakery/homepage-locations-desktop.webp',
            alt: 'Alfresco branch cards on the homepage with Open Now and Closed badges, hours, WhatsApp, and Directions',
            wide: true,
            caption: 'Branch cards: live open/closed status, hours accordion, WhatsApp and directions per branch.'
          },
          {
            src: '../assets/portfolio/alfresco-the-bakery/homepage-locations-mobile-mockup.webp',
            alt: 'Alfresco Our Branches section on a phone with Harare branch hours expanded',
            caption: 'Mobile: branch hours accordion expanded, WhatsApp and directions at thumb reach.'
          }
        ]
      },
      {
        heading: 'Menu built for phone-first browsing.',
        paragraphs: [
          'cPanel analytics shows the menu is the most visited path, 1,800+ monthly product page views. Eight categories, USD pricing, and sticky filter pills on desktop keep a long menu scannable.',
          'On mobile, the horizontal pill bar becomes a native category dropdown so filters stay usable on a small screen without horizontal scrolling.'
        ],
        images: [
          {
            src: '../assets/portfolio/alfresco-the-bakery/menu-page-desktop.webp',
            alt: 'Alfresco menu page with sticky category filter bar and espresso items',
            wide: true,
            caption: 'Desktop menu: sticky category bar, eight filters, USD pricing.'
          },
          {
            src: '../assets/portfolio/alfresco-the-bakery/menu-page-mobile-mockup.webp',
            alt: 'Alfresco menu on a phone with category dropdown selector',
            caption: 'Mobile menu: category dropdown instead of horizontal filter pills.'
          }
        ]
      },
      {
        heading: 'Contact that meets local habits.',
        paragraphs: [
          'Enquiry paths match how people actually reach a bakery in Zimbabwe, WhatsApp first, email second, form for longer messages. The contact page leads with branch emails, WhatsApp numbers, and visit links, then an AJAX form that validates on the client, rate-limits submissions, and confirms without a page reload.',
          'On mobile, contact is paired with branch info, WhatsApp first, email second, and an AJAX form for longer messages.'
        ],
        images: [
          {
            src: '../assets/portfolio/alfresco-the-bakery/contact-page-desktop.webp',
            alt: 'Alfresco contact page with reach-us links, contact form, and branch visit cards',
            wide: true,
            caption: 'Contact page: quick links, AJAX form, and branch cards with live status.'
          },
          {
            src: '../assets/portfolio/alfresco-the-bakery/contact-page-mobile-mockup.webp',
            alt: 'Alfresco contact page on a phone',
            caption: 'Mobile contact: AJAX form confirmation and branch quick links.'
          }
        ]
      }
    ],
    notPursued: {
      heading: 'Why a multi-page site',
      paragraphs: [
        'I did not start from a one-page vs multi-page debate. The bakery was already growing at a scale social posts could not hold: people searching, two branches, a full menu, a gallery, and a way to enquire.',
        'That scale is why the site is multi-page. Menu, gallery, and contact each needed a stable URL people could return to, not a long homepage they had to hunt through.'
      ]
    },
    learnings: [
      'When a business is already being found online, the site has to match that scale. A single page would have been a bottleneck, not a launch shortcut.',
      'cPanel analytics later confirmed menu and gallery were doing the work. I kept iterating those paths instead of adding extra pages.',
      'Page views describe engagement, not sales. I report them that way so the impact claim stays honest.'
    ],
    conclusion: [
      'The bakery now has a responsive website people can find when they search, then use to browse the menu and gallery, check branch hours, and move toward an enquiry via WhatsApp or the contact form. Enquiries increased after launch. Menu pages see 1,800+ monthly product views; the gallery sees 500+ monthly interactions.',
      'The page-view figures describe engagement, not sales.'
    ]
  },

  sanex: {
    slug: 'sanex',
    title: 'Sanex Skin Facts Challenge, retail kiosk',
    eyebrow: 'Sanex · Interaction design',
    confidential: true,
    gateHash: '691283faa23e8fa6ab124caa333a50a97a33c3a35e4a5a47df51d3d36d2e2ce8',
    gatePassword: 'sanex-ux',
    gateMessage: 'This project is still in progress. Recruiters: use the password from my application or email me for access.',
    lede: 'A bilingual, touch-first retail kiosk that turns Sanex skin facts into a five-question challenge and recommends a product based on what the shopper learned they did not know.',
    tags: ['UX', 'Interaction Design', 'Frontend'],
    next: { href: '/case-studies/espace-marine', label: 'Espace Marine' },
    background: [
      'This work was completed at Logos Publicity for BrandActiv, Sanex’s distributor in Mauritius. The brief was to turn a passive retail screen into a short, self-guided education moment that ends in a relevant product recommendation.',
      'The experience was built for a 43-inch landscape touchscreen kiosk (1920×1080), a laptop hidden behind the unit running the display in Chrome kiosk mode. I had not designed for this format before, so I started by researching kiosk UI patterns and reviewing the hardware dimensions and stand the client supplied.'
    ],
    role: {
      title: 'Interaction design and content direction',
      summary: 'I shaped the overall concept, question set, visual direction, and kiosk context. A developer translated it into a lightweight static web app with JSON-editable content, animations, bilingual support, and deployment-ready kiosk behaviour.',
      points: [
        'Defined the educational quiz → product discovery flow for a standing, public touchscreen.',
        'Sketched the welcome screen layout and directed Sanex branding, typography, and pack-shot placement.',
        'Supplied the five-question set, correct answers, and approved product assets.',
        'Reviewed touch-target sizing, feedback patterns, idle reset, and bilingual copy with development.',
        'Exploring how the kiosk results screen can hand off to the longer skin survey already on sanex.fr.'
      ],
      meta: {
        Role: 'Interaction design and content direction',
        Team: 'Logos Publicity · developer built the app',
        Client: 'BrandActiv (Sanex)',
        Timeline: 'June 2026 – September 2026',
        Constraint: '43-inch public kiosk, ~2 minutes, French-first, Chrome kiosk mode.'
      }
    },
    design: [
      {
        heading: 'Research and hardware context.',
        paragraphs: [
          'Before sketching, I looked at kiosk and interactive display examples on Behance and Dribbble, large touch targets, landscape layout, and how screens sit at arm’s length for standing users. The client also sent technical drawings for the 43-inch display and floor-standing base, which fixed the orientation and scale I was designing for.'
        ],
        images: [
          {
            src: '../assets/portfolio/sanex/kiosk-research-collage.webp',
            alt: 'Behance and Dribbble research collage for kiosk UI and interactive display proportions',
            wide: true,
            caption: 'Kiosk UI research: touch targets, landscape layout, and display proportions.'
          },
          {
            src: '../assets/portfolio/sanex/display-dimensions-client.webp',
            alt: 'Client-supplied technical drawing of the 43-inch kiosk display dimensions',
            caption: '43-inch kiosk display: client-supplied dimensions.'
          },
          {
            src: '../assets/portfolio/sanex/display-base-drawing-client.webp',
            alt: 'Client-supplied technical drawing of the floor-standing kiosk base',
            caption: 'Floor-standing base: tilt angles and mounting specs from the client.'
          }
        ]
      },
      {
        heading: 'From wireframe to final welcome screen design.',
        paragraphs: [
          'I started with a hand-drawn wireframe: logo, headline, start button on the left; product showcase on the right. The final front-page design kept that split layout, and the built welcome screen carried it through, Sanex branding and “Lancer le défi” on one side, rotating approved pack shots on the other.'
        ],
        images: [
          {
            src: '../assets/portfolio/sanex/main-page-wireframe-sketch.webp',
            alt: 'Hand-drawn wireframe sketch of the Sanex welcome screen layout',
            caption: 'Early wireframe: logo, copy, start button, and product area.'
          },
          {
            src: '../assets/portfolio/sanex/welcome-screen-design.webp',
            alt: 'Final welcome screen design for the Sanex Skin Knowledge Challenge front page',
            caption: 'Final welcome screen design: front page before development.'
          },
          {
            src: '../assets/portfolio/sanex/welcome-screen-french.webp',
            alt: 'Built Sanex welcome screen in French with EN language toggle and product carousel',
            wide: true,
            caption: 'Built welcome screen: French on first load, EN toggle top-right.'
          }
        ]
      },
      {
        heading: 'The question set from the client.',
        paragraphs: [
          'The five questions arrived by email from the client, skin facts and Sanex product knowledge in French. Four two-choice questions and one true/false. I used this as the content source for the built experience, with structured French overrides in the app so copy could stay editable.'
        ],
        images: [
          {
            src: '../assets/portfolio/sanex/question-set-client-email.webp',
            alt: 'Email from client with the five Sanex skin knowledge quiz questions in French',
            wide: true,
            caption: 'Client-supplied question set: the content basis for the challenge.'
          }
        ]
      },
      {
        heading: 'French-first, with English available.',
        paragraphs: [
          'Retail in Mauritius is French-first with English widely used. French is the default: the app loads with `lang: "fr"`, `<html lang="fr">`, and French copy on first paint, welcome screen, questions, feedback, product copy, and results.',
          'English is the secondary option for bilingual retail use, not the default. A top-right EN button on the welcome screen toggles FR ↔ EN for the rest of that session, UI strings, question wording, explanations, and recommendation reasons all switch together.',
          'Questions are maintained in English in the content file, with French overrides in the app, so copy updates stay structured and both languages stay in sync.'
        ]
      },
      {
        heading: 'Idle reset for public kiosk use.',
        paragraphs: [
          'The idle timer only runs after someone leaves the welcome screen, during questions or on the results screen. There is no idle timer on the welcome screen itself.',
          'After 50 seconds with no touch or key press, a bilingual pause overlay appears: “Session en pause, Vous êtes toujours là ?” Tapping Continuer, or anywhere that resets the timer, dismisses it and starts the 50-second countdown again.',
          'If there is still no input, at 65 seconds total the experience resets to the welcome screen with score and answers cleared. The overlay stays up for about 15 seconds before that auto-reset, so the next person always starts fresh.'
        ],
        images: [
          {
            src: '../assets/portfolio/sanex/inactivity-overlay-english.webp',
            alt: 'Sanex kiosk inactivity overlay, Session paused, Are you still there?',
            caption: 'Pause overlay at 50s idle: Continuer dismisses it; 65s total resets to welcome.'
          }
        ]
      },
      {
        heading: 'The full flow from start to finish.',
        paragraphs: [
          'Five mixed-format questions (four two-choice, one true/false) with instant feedback after each answer, correct highlighted green, wrong in red, explanation shown, then the user taps to continue. A progress bar and live score run throughout. After question five, the results screen shows the score, three skin-care takeaways, and one recommended Sanex product based on the first question they got wrong. If they score 5/5, they still see a product with an “excellent score” message.'
        ],
        video: {
          src: '../assets/portfolio/sanex/video/sanex-questionnaire-flow.mp4',
          poster: '../assets/portfolio/sanex/welcome-screen-french.webp',
          caption: 'Screen recording: welcome, questions, feedback, and results.',
          alt: 'Sanex Skin Facts Challenge questionnaire flow from start to finish'
        }
      },
      {
        heading: 'Feedback and results.',
        paragraphs: [
          'Every wrong answer is a teachable moment, not a fail state. The recommendation uses a learning-gap approach: the first missed question maps to a related Sanex product theme, general skin facts to Natural Prebiotic Hydratant, Zero% formulation to Zero% Extra Control roll-on, prebiotic/inulin to Natural Prebiotic Protection+ shower cream.'
        ],
        images: [
          {
            src: '../assets/portfolio/sanex/feedback-correct-answer.webp',
            alt: 'Sanex quiz correct-answer feedback screen with explanation and next button',
            caption: 'Instant feedback: correct answer, explanation, tap to continue.'
          },
          {
            src: '../assets/portfolio/sanex/results-screen.webp',
            alt: 'Sanex quiz results screen with score, takeaways, and product recommendation',
            wide: true,
            caption: 'Results: score, skin-care takeaways, and one recommended product.'
          }
        ]
      },
      {
        heading: 'Next: connecting the kiosk to sanex.fr.',
        paragraphs: [
          'The Sanex brand runs a longer skin survey on sanex.fr. The next step my director asked for is a clear handoff at the end of the kiosk challenge, so someone who finishes in-store in Mauritius can continue on the website without the two experiences feeling disconnected.',
          'The open design question is how to present that in a public booth. Chrome kiosk mode keeps people inside the app, so opening sanex.fr on the same screen is not the right pattern. The direction I am working toward: a final results-screen panel with a short line of copy (“Want to go further?”), a QR code to the sanex.fr survey, and a simple URL fallback, optional, not blocking “Rejouer le défi”. That keeps the kiosk flow self-contained while giving motivated shoppers a path to the web survey on their own phone.',
          'Still to decide with the team: exact copy in FR/EN, whether the QR goes to the survey directly or a landing page, and placement on the results screen so it reads as a next step rather than an ad.'
        ]
      }
    ],
    notPursued: {
      heading: 'Why this flow',
      paragraphs: [
        'I did not start from a product grid or a long form. The 43-inch landscape display, standing distance, and kiosk UI research pointed to large targets, a short start action, and a loop someone could finish in about two minutes.',
        'That is why the welcome screen is a split layout (start on one side, rotating packs on the other), why there are five questions, and why idle reset exists. The hardware and the shop floor set the interaction, not a catalogue of everything Sanex sells.'
      ]
    },
    learnings: [
      'Kiosk work starts with dimensions and how someone stands at the screen. Layout and timing came from that research, not from a desktop web pattern.',
      'Instant feedback after each answer is the product. The score is secondary; the explanation is what people take away.',
      'French-first was a content decision, not a toggle afterthought. Default language has to match how the store actually talks.'
    ],
    conclusion: [
      'The challenge keeps commitment low (~2 minutes, no login), gives instant learning on every answer, and ends with a soft product recommendation tied to what the shopper did not know, built as a static HTML/CSS/JS app with JSON-editable questions and a 19-product catalogue for the welcome carousel.',
      'French-first bilingual support matches how shoppers engage with Sanex in Mauritius through BrandActiv. The kiosk-to-web handoff is the next design problem: linking an in-store touch experience to the existing sanex.fr survey without breaking kiosk mode or the public-use flow.'
    ]
  },

  espace: {
    slug: 'espace',
    title: 'Research direction for a website redesign',
    eyebrow: 'Espace Marine · UX research',
    lede: 'Wrote and sent a structured website survey during my Logos Publicity internship to inform a planned client website redesign. Findings stay internal; the question set shows the research direction.',
    tags: ['UX Research', 'Website Strategy'],
    next: { href: '/case-studies/alfresco-bakery', label: 'Alfresco Bakery' },
    background: [
      'During my internship at Logos Publicity, Espace Marine was one of three UX projects I contributed to alongside the agency website restructure and the Sanex interactive display.',
      'The client was planning a website redesign. Before visual design started, the team needed a structured way to understand who visits the site today, what they struggle with, and what a better experience should help them do.',
      'I prepared the research direction, wrote the full website survey, and the survey went out. The aim was to understand how people navigate the current site, search for information, and judge content clarity, so findings could feed navigation, content structure, and UX decisions for the redesign. Response data stays with the client and the agency.'
    ],
    role: {
      title: 'UX research',
      summary: 'I drafted research goals, grouped questions by theme, aligned the question set with what the redesign needed to learn, and the survey went out before IA and UI work began.',
      points: [
        'Defined what the redesign needed to learn: visit intent, findability, content priorities, e-commerce readiness, and brand perception.',
        'Structured a 15-question survey across seven sections, from visit purpose through overall satisfaction.',
        'Balanced closed-ended formats (multi-select, scales, Likert) with open-ended prompts for barriers and missing content.',
        'Wrote a research goal for each question so findings could map directly to IA, page structure, and conversion features.'
      ],
      meta: {
        Role: 'UX research',
        Team: 'Logos Publicity',
        Timeline: 'June 2026 – September 2026',
        Constraint: 'Research before any visual redesign. Survey went out; findings stay internal.',
        Deliverable: 'Website survey and research direction'
      }
    },
    design: [
      {
        heading: 'What the research needed to answer.',
        paragraphs: [
          'The redesign could not start with pages or colours. It needed answers to four questions: who is coming to the site, what are they trying to do, where do they get stuck, and what would make them trust the brand enough to take the next step.',
          'I structured the research around those outcomes so findings could feed directly into information architecture, content priorities, and later visual design.'
        ]
      },
      {
        heading: 'Website survey.',
        paragraphs: [
          'The survey is structured to understand how users interact with the Espace Marin website: how they navigate, search for information, and evaluate content clarity. Results were intended to inform the redesign directly, especially navigation, content structure, and overall user experience.'
        ],
        subsections: [
          {
            heading: 'Section 1: Visit purpose',
            items: [
              '1. What was your main reason for visiting the website? (Select up to 2): explore available products; find information about boats; search for boating equipment; find contact information; request a quote or service; check special offers or promotions; look for after-sales or maintenance support; other.',
              'Research goal: identify user intent and the primary tasks users are trying to complete. Informs how navigation, homepage content, and category structure should be prioritised.'
            ]
          },
          {
            heading: 'Section 2: Information finding',
            items: [
              '2. Were you able to find what you were looking for easily? (Very easily / Easily / Somewhat easily / With difficulty / Not at all)',
              '3. What made it difficult? (Open-ended)',
              '4. How do you prefer to find information on a website like this? (Browse categories or menu / Use the search bar / Click visuals or featured sections / Call the company directly)',
              'Research goal: measure overall usability, identify specific barriers, and understand preferred navigation patterns for IA and search.'
            ]
          },
          {
            heading: 'Section 3: Content priority',
            items: [
              '5. What information is most important when making a decision? (Select up to 3): price; technical specifications; high-quality images; stock availability; brand information; product comparisons; usage guides or advice; customer reviews; promotions or offers.',
              '6. What information is currently missing or difficult to find? (Open-ended)',
              'Research goal: identify what users prioritise when evaluating products and highlight content gaps on the current site.'
            ]
          },
          {
            heading: 'Section 4: Online purchase readiness',
            items: [
              '7. How likely are you to purchase the following online if available? (Small accessories; maintenance products; water sports equipment; safety equipment; high-value items such as boats, engines, and electronics)',
              '8. What would make you confident to buy online from Espace Marin? (Select up to 3): live chat support; easy return policy; product reviews; product comparison tools; secure payment system; click and collect; quick quote request.',
              'Research goal: assess e-commerce readiness by product category and identify trust factors needed for conversion.'
            ]
          },
          {
            heading: 'Section 5: Website experience',
            items: [
              '9. How would you describe the amount of information on the website? (Too much / overwhelming; Slightly too much; Just right; Not enough detail)',
              '10. What frustrates you most about the current website? (Open-ended)',
              'Research goal: evaluate content balance and capture key usability pain points from real use.'
            ]
          },
          {
            heading: 'Section 6: Brand and experience',
            items: [
              '11. What type of content would make the website more engaging or useful? (Select up to 2): boat lifestyle and inspiration photos; videos of boats and marine experiences; fishing tournaments and events; customer stories and experiences; expert guides and tips; luxury boating lifestyle content.',
              '12. Which words best describe Espace Marin? (Select up to 3): premium; luxury; reliable; technical; adventurous; community-focused; practical; high-end marine specialist.',
              'Research goal: determine whether users expect a lifestyle-driven or information-driven experience and evaluate brand perception against the current digital experience.'
            ]
          },
          {
            heading: 'Section 7: Overall experience',
            items: [
              '13. Overall, how would you rate your experience on the website? (1 Very poor to 5 Excellent)',
              '14. What is the ONE improvement you would suggest? (Open-ended)',
              '15. Would you recommend this website to others? (Yes, definitely / Probably / Maybe / Probably not / No)',
              'Research goal: provide a satisfaction benchmark, capture the single most critical improvement in the user’s own words, and measure overall trust in the site.'
            ]
          }
        ]
      },
      {
        heading: 'How this fits my internship UX work.',
        paragraphs: [
          'At Logos Publicity I worked across three UX projects: restructuring the agency website (Logos Publicity), designing the Sanex retail kiosk experience, and preparing this research direction for Espace Marine.',
          'Each project sat at a different stage of the same process: understand first, structure second, design third, then learn from real use.'
        ]
      }
    ],
    notPursued: {
      heading: 'What I did not pursue',
      paragraphs: [
        'Jumping straight into visual mockups for the redesign. The survey had to go out first: visit intent, findability, content priorities, and brand perception. Screens without that would have been decoration.'
      ]
    },
    learnings: [
      'A question without a research goal is just a form. I wrote a goal under each item so findings could map to a design decision.',
      'The survey went out. I cannot publish the responses here. The public case is the method: what we needed to learn before drawing screens.',
      'Research still belongs in a portfolio if you are honest that this was not a shipped redesign.'
    ],
    conclusion: [
      'The survey went out and gave the Espace Marine redesign a structured starting point before screens were drawn. Each section maps to a concrete design decision: navigation priorities, content hierarchy, e-commerce scope, and brand tone.',
      'This was not a shipped visual redesign. Response data and the client presentation stay internal. The question set above is the research I prepared and sent during my internship.'
    ]
  },

  verandah: {
    slug: 'verandah',
    title: 'Designing and developing the Verandah Café website',
    eyebrow: 'Verandah Café · Live client website',
    lede: 'A second live hospitality site, with a different IA than Alfresco: a dedicated Visit page, café vs kitchen hours, and an online menu staff can update without uploading a new PDF.',
    tags: ['UX', 'Web Development'],
    live: { href: 'https://verandahcafe.com/', label: 'Visit the live website' },
    next: { href: '/case-studies/logos-publicity', label: 'Logos Publicity' },
    background: [
      'Verandah Café needed a website of its own. People looking for the café needed a permanent place for the menu, where to go, and how to get in touch.',
      'This is a related live client to Alfresco, not a copy of the same case. The café needed a Visit hub, split hours, and an online menu staff can update without uploading a new PDF.'
    ],
    role: {
      title: 'Designer and developer',
      summary: 'I designed and built the site from scratch. I have continued to maintain it.',
      points: [
        'Designed a six-page IA with a dedicated Visit page as the directions and hours hub.',
        'Authored menu content in a data file with 13 categories, add-on pricing, and print support.',
        'Built capsule navigation with a persistent “Plan your visit” CTA and TripAdvisor, Instagram, and WhatsApp shortcuts.',
        'Added live open-status logic and a detailed hours table (café vs kitchen).',
        'Used cPanel analytics reports to focus updates on menu, visit, and contact paths.'
      ],
      meta: {
        Role: 'Sole designer and developer',
        Team: 'Freelance · client café',
        Timeline: 'September 2025 – Present',
        Constraint: 'Split café vs kitchen hours. Menu had to be editable without uploading a new PDF.',
        Outcome: 'Live site · enquiries increased after launch'
      }
    },
    iaFlow: {
      heading: 'Before the website vs after',
      intro: 'Toggle the two models, click any step for detail, or trace how someone looking for the café might move through what existed online.',
      variants: {
        before: {
          label: 'Before',
          summary: 'Scattered listings, no single place for menu, location, and contact.',
          layout: 'channels',
          anchor: {
            id: 'search',
            label: 'Someone searches',
            sub: '“Verandah Café”',
            detail: 'People looking for the café had to guess which listing had the latest menu or the right address.',
            trace: 1
          },
          channels: [
            {
              id: 'instagram',
              label: 'Instagram',
              sub: 'Posts & stories',
              detail: 'Food photos and announcements lived in the feed. The full menu was not always easy to find.',
              trace: 2
            },
            {
              id: 'facebook',
              label: 'Facebook',
              sub: 'Page posts',
              detail: 'Updates and events sat here, separate from reviews and from anything on Google.',
              trace: 3
            },
            {
              id: 'google',
              label: 'Google Business',
              sub: 'Hours & pin',
              detail: 'Useful for hours and directions, but not a browsable menu or a dedicated contact page.',
              trace: 4
            },
            {
              id: 'tripadvisor',
              label: 'TripAdvisor',
              sub: 'Reviews',
              detail: 'Reviews and photos from visitors, helpful for social proof, not for ordering or getting in touch.',
              trace: 5
            }
          ],
          gapLabel: 'No central hub',
          orphan: {
            id: 'menu-gap',
            label: 'Menu & contact?',
            sub: 'Scattered',
            detail: 'Menu, location, and enquiry lived in different places. Nothing tied them together into one path.',
            trace: 6
          }
        },
        after: {
          label: 'After',
          summary: 'One responsive site, Home, About, Menu, Gallery, Visit, and Contact.',
          layout: 'linear',
          steps: [
            {
              id: 'home',
              label: 'Homepage',
              sub: 'Storefront',
              detail: 'Introduces Verandah Café with today’s hours, signature dishes, and routes toward the menu, visit page, and contact.',
              trace: 1
            },
            {
              id: 'about',
              label: 'About',
              sub: 'The story',
              detail: 'The Verandah story, brand atmosphere and neighbourhood positioning that Alfresco-style anchor sites do not need.',
              trace: 2
            },
            {
              id: 'menu',
              label: 'Menu',
              sub: 'What to order',
              detail: 'The busiest path, 1,000+ menu interactions. Thirteen categories, add-on chips, hash deep links, and a print stylesheet.',
              trace: 3
            },
            {
              id: 'gallery',
              label: 'Gallery',
              sub: 'Food & spaces',
              detail: 'Interior photography and dish shots that carry the Verandah atmosphere, social proof for visitors deciding whether to visit.',
              trace: 4
            },
            {
              id: 'visit',
              label: 'Visit',
              sub: 'Hours & directions',
              detail: '280+ visit-page interactions. Hours table with café vs kitchen columns, embedded map, and “Before You Arrive” info.',
              trace: 5
            },
            {
              id: 'contact',
              label: 'Contact',
              sub: 'Enquire',
              detail: '700+ page visits. A dedicated enquiry path with subject options, reservation, catering, feedback, instead of a DM on whichever platform you found first.',
              trace: 6
            }
          ]
        }
      }
    },
    design: [
      {
        heading: 'A neighbourhood café site with a clear visit path.',
        paragraphs: [
          'If people were looking for Verandah Café, the site had to answer them quickly: what is on the menu, where the café is, and how to visit or enquire.',
          'A floating capsule nav carries the full site structure, Home, About, Menu, Gallery, Visit, Contact, with a persistent “Plan your visit” CTA and Instagram, WhatsApp, and TripAdvisor shortcuts in the header.'
        ],
        images: [
          {
            src: '../assets/portfolio/verandah-cafe/homepage-tablet-mockup.webp',
            alt: 'Verandah Café homepage on a tablet mockup with hero, hours teaser, and capsule navigation',
            wide: true,
            caption: 'Homepage: hero, today’s hours, and capsule nav on tablet.'
          },
          {
            src: '../assets/portfolio/verandah-cafe/homepage-hero-desktop.webp',
            alt: 'Verandah Café homepage hero with interior photography, View Menu and Get Directions CTAs',
            wide: true,
            caption: 'Homepage layout: hero, hours block, and signature dishes section.'
          },
          {
            src: '../assets/portfolio/verandah-cafe/header-nav-desktop.webp',
            alt: 'Verandah Café capsule navigation with Plan your visit CTA and social icons',
            caption: 'Capsule nav: full IA, persistent visit CTA, and discovery shortcuts.'
          },
          {
            src: '../assets/portfolio/verandah-cafe/homepage-hours-mobile-mockup.webp',
            alt: 'Verandah Café homepage Today\'s Hours section on a phone with Open Now badge',
            caption: 'Homepage hours teaser: live open badge drives people to the Visit page.'
          }
        ]
      },
      {
        heading: 'Menu as product UI.',
        paragraphs: [
          'cPanel analytics shows the menu is the busiest path, 1,000+ interactions. Thirteen categories live in a data file so content stays editable without a CMS.',
          'Sticky filter pills, hash deep links (menu.html#burgers), and option chips that adjust displayed price keep a large menu scannable. A print stylesheet lets staff update one file and guests browse or print without a PDF workflow.'
        ],
        images: [
          {
            src: '../assets/portfolio/verandah-cafe/menu-page-desktop.webp',
            alt: 'Verandah Café menu page with sticky category pills and Sweet Waffles option chips',
            wide: true,
            caption: 'Menu page: sticky pills, add-on chips, and crepe pricing variants.'
          },
          {
            src: '../assets/portfolio/verandah-cafe/menu-print-preview.webp',
            alt: 'Verandah Café menu print preview showing Brekky section formatted for print or PDF',
            caption: 'Print stylesheet: staff update one file; guests browse or print without a PDF workflow.'
          }
        ]
      },
      {
        heading: 'Hours visitors can trust.',
        paragraphs: [
          'The dedicated Visit page is the directions and hours hub, not a buried listing. A live open badge, café vs kitchen hours (Saturday kitchen closes 1:30pm), embedded Google Maps, and a “Before You Arrive” section for parking, accessibility, and reservations policy.',
          'The same hours logic runs on the homepage teaser so someone landing from search sees today’s status before they navigate deeper.'
        ],
        images: [
          {
            src: '../assets/portfolio/verandah-cafe/visit-page-desktop.webp',
            alt: 'Verandah Café Visit page with hours table, map embed, and Before You Arrive section',
            wide: true,
            caption: 'Visit page: hours table, map, directions, and arrival info.'
          }
        ]
      },
      {
        heading: 'Gallery and brand atmosphere.',
        paragraphs: [
          'The Gallery page carries food photography and interior shots, the kind of social proof someone wants before they plan a visit. It sits between the transactional menu and the directions-focused Visit page.',
          'The About page adds the Verandah story: neighbourhood positioning, signature dishes, and interior photography separate from menu and visit paths.'
        ],
        images: [
          {
            src: '../assets/portfolio/verandah-cafe/gallery-page-desktop.webp',
            alt: 'Verandah Café Gallery page with food and interior photography in a grid layout',
            wide: true,
            caption: 'Gallery: food, spaces, and moments across a responsive grid.'
          },
          {
            src: '../assets/portfolio/verandah-cafe/about-page-desktop.webp',
            alt: 'Verandah Café About page with Our Story hero and interior photography',
            caption: 'About page: brand story and café atmosphere.'
          }
        ]
      },
      {
        heading: 'Contact and mobile reach.',
        paragraphs: [
          'The Contact page gives people a structured enquiry form with subject options (reservation, catering, feedback) instead of a DM on whichever platform they found first.',
          'On mobile, the nav drawer surfaces Call and WhatsApp alongside the full site map, matching how people actually reach a café.'
        ],
        images: [
          {
            src: '../assets/portfolio/verandah-cafe/contact-page-laptop-mockup.webp',
            alt: 'Verandah Café Contact page on a laptop mockup with enquiry form and contact details',
            wide: true,
            caption: 'Contact page: structured enquiry form and café details.'
          },
          {
            src: '../assets/portfolio/verandah-cafe/mobile-nav-drawer.webp',
            alt: 'Verandah Café mobile navigation drawer with Call and WhatsApp actions',
            caption: 'Mobile drawer: full IA plus Call and WhatsApp at thumb reach.'
          }
        ]
      }
    ],
    notPursued: {
      heading: 'Why an online menu',
      paragraphs: [
        'I did not use a PDF as the menu people download and staff re-upload every time the food changes. The menu lives in a data file on the site, so an update is an edit, not a new file to host.',
        'Guests browse it in the browser. Staff can still print from the same page if they need a paper copy. One source, not two.'
      ]
    },
    learnings: [
      'If the menu changes, the website has to change with it. A PDF workflow would have been a maintenance problem, not a design shortcut.',
      'cPanel analytics pointed at menu, contact, and location. Those stayed the priority after launch.',
      'Two hospitality sites in a row is a pattern. I keep both live because the IA choices were different, not because I need two bakery stories.'
    ],
    conclusion: [
      'The café now has a responsive website people can find when they search, then use to browse the menu and move toward a visit or an enquiry. Enquiries increased after launch. Menu, contact, and visit are the paths people use most (1,000+, 700+, and 280+ interactions).',
      'Page-view figures describe engagement, not visits to the café. Monthly human visitors have included 250+ after separating bot traffic.'
    ]
  },

  streamvault: {
    slug: 'streamvault',
    title: 'Streamvault, premium desktop streaming platform',
    eyebrow: 'Streamvault · Course project',
    lede: 'Course project at Lesley University. A desktop streaming concept with clearer navigation, honest subscription plans, and in-product help. Personas came from classmate research and secondary sources, not a live product.',
    tags: ['UX', 'UI Design', 'Product Design'],
    next: { href: '/case-studies/espace-marine', label: 'Espace Marine' },
    background: [
      'Streamvault is a premium streaming platform concept for desktop, a place to watch movies and shows that feels immersive without getting in the way.',
      'Most streaming apps share the same frustrations: navigation that hides content, plans that are hard to compare, recommendations that miss the mark, and support that sends you elsewhere when something breaks.',
      'The brief was to design a visually strong home screen, simplify how someone picks a plan, and bring help into the product with a chatbot, not a FAQ link buried off-site.'
    ],
    role: {
      title: 'UX/UI design',
      summary: 'I led research, interaction design, and visual design for a desktop streaming concept, from problem framing and competitor review through lo-fi exploration to hi-fi screens in Figma.',
      subsections: [
        {
          heading: 'User problems',
          items: [
            'Finding content fast enough without long browsing sessions.',
            'Limited customisation, especially subtitles and accessibility settings.',
            'Subscription pricing that is hard to compare before committing.',
            'Recommendations that do not reflect what someone actually watches.',
            'No quick help when something breaks mid-session.'
          ]
        },
        {
          heading: 'Research',
          items: [
            'Interviews and a survey to understand user frustrations with existing platforms.',
            'Competitor analysis of Netflix, Amazon Prime, and Showmax, layout, typography, plans, and support patterns.',
            'Secondary research into design systems, accessibility patterns, and subscription models used in streaming products.'
          ]
        },
        {
          heading: 'Possible solutions',
          items: [
            'Clear layout and structured content grids, better navigation.',
            'Subtitles and accessibility controls, improved inclusivity.',
            'Transparent plan breakdowns, simplified subscriptions.',
            'Recommendations based on preferences and history, personalisation.',
            'In-platform chatbot, real-time support.',
            'Consistent UI across screens, design system discipline.'
          ]
        }
      ],
      meta: {
        Role: 'Sole UX/UI designer',
        Team: 'Micah Masuka',
        Context: 'Course project · Lesley University',
        Constraint: 'Academic brief, desktop-only, no live users after hi-fi.',
        Tools: 'Figma'
      }
    },
    design: [
      {
        heading: 'Understanding the problem.',
        paragraphs: [
          'Before committing to screens, I mapped what people complained about most: cluttered home layouts, pricing that was hard to compare, weak recommendations, and support that arrived too late.',
          'Research pointed toward cleaner grids, subscription models you could actually read, and help that shows up in the moment, not after someone leaves to hunt for FAQs.'
        ]
      },
      {
        heading: 'Competitor analysis.',
        paragraphs: [
          'I compared Netflix, Amazon Prime, and Showmax across logos, colour, typography, content layout, and plan presentation. Streamvault aimed to avoid their common UX gaps, dense navigation, unclear tier differences, and support buried outside the product.',
          'The analysis informed Streamvault’s darker cinematic palette, clearer plan cards, and a chatbot that lives on the subscription flow instead of sending users elsewhere.'
        ],
        images: [
          {
            src: '../assets/portfolio/streamvault/competitor-analysis.webp',
            alt: 'Competitor analysis comparing Netflix, Amazon Prime, and Showmax design systems',
            wide: true,
            caption: 'Netflix, Prime, and Showmax: layout, typography, buttons, and plan patterns.'
          }
        ]
      },
      {
        heading: 'User personas.',
        paragraphs: [
          'Two personas shaped the flows. Johnstone Jones is a tech-savvy professional who wants high-quality streams and needs to understand pricing before he commits, his pain points are hard-to-find content and confusing tiers.',
          'Sarah Miko is a university student who watches when she has free time. She wants affordable quality, recommendations that actually match what she watches, and quick help when something goes wrong, not a support ticket hours later.'
        ],
        images: [
          {
            src: '../assets/portfolio/streamvault/persona-johnstone-jones.webp',
            alt: 'Johnstone Jones persona, male, 30+, tech-savvy business user',
            caption: 'Johnstone Jones: clarity on content and subscription value.'
          },
          {
            src: '../assets/portfolio/streamvault/persona-sarah-miko.webp',
            alt: 'Sarah Miko persona, female university student who streams in her free time',
            caption: 'Sarah Miko: affordable quality, better recommendations, faster help.'
          }
        ]
      },
      {
        heading: 'UI library and design system.',
        paragraphs: [
          'I built a UI library around Streamvault’s brand, deep navy backgrounds, purple primary actions, and gold accents on the wordmark. Components cover navigation, cards, buttons, inputs, and content grids so every screen shares the same visual language.',
          'Typography and colour tokens were documented alongside icons and spacing rules before moving to hi-fi screens.'
        ],
        images: [
          {
            src: '../assets/portfolio/streamvault/colors-typography.webp',
            alt: 'Streamvault brand colours and typography system',
            caption: 'Colour palette and type scale.'
          },
          {
            src: '../assets/portfolio/streamvault/ui-library-final.webp',
            alt: 'Streamvault UI library with buttons, inputs, cards, and navigation components',
            wide: true,
            caption: 'UI library: components used across all screens.'
          }
        ]
      },
      {
        heading: 'Lo-fi designs.',
        paragraphs: [
          'Lo-fi wireframes tested the core flows first, home, browse, watchlist, plans, and playback, before investing in visual polish. The focus was structure: where navigation lives, how content grids scroll, and where subscription and chatbot support sit in the journey.'
        ],
        images: [
          {
            src: '../assets/portfolio/streamvault/lofi-designs.webp',
            alt: 'Streamvault lo-fi wireframes for home, browse, plans, and playback flows',
            wide: true,
            caption: 'Lo-fi flows: structure before visual design.'
          }
        ]
      },
      {
        heading: 'Final design: home and discovery.',
        paragraphs: [
          'The home screen leads with a cinematic hero, a clear primary “Watch Now” action, and a horizontal release carousel. Sidebar shortcuts and a persistent search bar keep navigation visible without crowding the content.',
          'Browse and watchlist screens extend the same grid system, category filters up top, poster cards below, and consistent trailer actions across the catalogue.'
        ],
        images: [
          {
            src: '../assets/portfolio/streamvault/streamvault-mockup-main.webp',
            alt: 'Streamvault homepage on a desktop monitor with hero feature, content carousel, and chatbot',
            wide: true,
            caption: 'Home screen: hero feature, latest releases, and in-platform chatbot.'
          },
          {
            src: '../assets/portfolio/streamvault/homepage-final.webp',
            alt: 'Streamvault final homepage design with Captain America hero and content rows',
            caption: 'Final homepage: featured title and browse carousel.'
          },
          {
            src: '../assets/portfolio/streamvault/browse-page.webp',
            alt: 'Streamvault browse page with category filters and content grid',
            caption: 'Browse: category filters and poster grid.'
          },
          {
            src: '../assets/portfolio/streamvault/watchlist-page.webp',
            alt: 'Streamvault watchlist page with saved titles',
            caption: 'Watchlist: saved titles in one place.'
          }
        ]
      },
      {
        heading: 'Final design: playback, plans, and support.',
        paragraphs: [
          'The streaming page keeps focus on the video with playback controls, subtitle access, and related metadata. The movie information screen adds cast, synopsis, and “more like this” without leaving the browsing context.',
          'Subscription plans use side-by-side cards with clear feature lists and a confirmation step. A chatbot panel on the plans screen gives instant help while someone is comparing tiers, addressing the “no quick assistance” pain point directly.'
        ],
        images: [
          {
            src: '../assets/portfolio/streamvault/streaming-page.webp',
            alt: 'Streamvault streaming page with video player and playback controls',
            caption: 'Streaming: playback controls and subtitle access.'
          },
          {
            src: '../assets/portfolio/streamvault/movie-info-page.webp',
            alt: 'Streamvault movie information page with cast and related titles',
            caption: 'Title detail: cast, synopsis, and related content.'
          },
          {
            src: '../assets/portfolio/streamvault/plans-chatbot.webp',
            alt: 'Streamvault subscription plans with chatbot support panel',
            wide: true,
            caption: 'Plans: transparent tiers with in-platform chatbot support.'
          },
          {
            src: '../assets/portfolio/streamvault/final-screens.webp',
            alt: 'Streamvault final screen overview showing home, browse, plans, streaming, and settings flows',
            wide: true,
            caption: 'Final screens: full desktop flow from home to subscription and playback.'
          }
        ]
      }
    ],
    notPursued: {
      heading: 'What I did not pursue',
      paragraphs: [
        'A mobile-first version. The brief was desktop. I stayed on that constraint instead of stretching the case into a full product I did not research.',
        'Help as an FAQ page off-site. That is the pattern streaming apps already use. I put a chatbot on the plans flow so support shows up when someone is comparing tiers, not after they leave.'
      ]
    },
    learnings: [
      'This is a student project. Constraints were cleaner than client work, and I did not get usage data after the hi-fi screens.',
      'Competitor analysis did more to shape the plans and chatbot than the visual polish did.',
      'A premium look only lands when the underlying flows are simple. I would want real task success rates before calling the subscription flow solved.'
    ],
    conclusion: [
      'Streamvault brings the main streaming pain points into one desktop concept: navigation you can actually follow, a consistent design system, subscription plans you can compare at a glance, and a chatbot built into the flow, not added as an afterthought.',
      'Users and personas were based on classmate interviews, a survey, and secondary research. This was not a live product, and I treat it as coursework next to shipped client work.'
    ],
    pdf: {
      href: '../assets/portfolio/streamvault/streamvault-case-study.pdf',
      label: 'View full Streamvault case study (PDF)'
    }
  }
};
