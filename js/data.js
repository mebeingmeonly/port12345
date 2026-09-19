/**
 * Portfolio Data Model for Riya Gupta
 * Structured from PRD specifications
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Riya Gupta",
    role: "Content Strategist & Scriptwriter",
    tagline: "Helping creators, founders, and brands turn audience attention into documented retention and brand authority.",
    location: "India / Remote",
    availability: "Accepting projects for Q4 Strategy & Scripting",
    heroIntro: "I engineer content systems, craft high-retention video and podcast scripts, and build founder-led personal brands through data-backed storytelling and human-guided AI workflows.",
    corePhilosophy: "Obsessed with understanding why some content is ignored while other content makes people stop, watch, click, and share."
  },

  keyMetrics: [
    {
      value: "20M+",
      label: "Organic Views Generated",
      subtext: "Across creator channels, podcasts & brand campaigns",
      badge: "Scale"
    },
    {
      value: "598 → 18.9K",
      label: "Follower Growth",
      subtext: "Organic personal brand audience transformation",
      badge: "Growth"
    },
    {
      value: "55.7%",
      label: "Watch-Time Share",
      subtext: "Achieved via strategic angle testing vs 26.9% control",
      badge: "Retention"
    },
    {
      value: "2X+",
      label: "Shorts View Multiplier",
      subtext: "Podcast Shorts hook optimization over prior baseline",
      badge: "Optimization"
    },
    {
      value: "19K Views",
      label: "Podcast Launch Performance",
      subtext: "And 110 subscribers starting with ~100 subscribers",
      badge: "Distribution"
    },
    {
      value: "3,386 Impr.",
      label: "LinkedIn Post Impact",
      subtext: "28 organic comments on founder thought leadership",
      badge: "Authority"
    }
  ],

  services: [
    {
      id: "content-strategy",
      title: "Content Strategy & Systems",
      icon: "strategy",
      description: "Data-driven editorial planning that aligns brand objectives with audience psychology across multi-platform ecosystems.",
      deliverables: [
        "Audience research & persona gap analysis",
        "Core content pillars & editorial calendars",
        "Competitor positioning & whitespace audit",
        "Cross-platform distribution architecture"
      ]
    },
    {
      id: "scriptwriting",
      title: "High-Retention Scriptwriting",
      icon: "script",
      description: "Precision-engineered scripts for short-form video, podcasts, and long-form YouTube built on cognitive hooks and retention curves.",
      deliverables: [
        "First-3-second hook variations & visual cues",
        "Full YouTube & long-form video scripting",
        "Podcast interview outlines & talking points",
        "Shorts & Reels retention pacing"
      ]
    },
    {
      id: "personal-branding",
      title: "Founder & Creator Personal Branding",
      icon: "brand",
      description: "Extracting your authentic voice and turning industry expertise into high-signal thought leadership that commands authority.",
      deliverables: [
        "Executive & founder LinkedIn storytelling",
        "Voice discovery & brand narrative guidelines",
        "Carousel & text post ghostwriting",
        "Network engagement & comment strategy"
      ]
    },
    {
      id: "creative-direction",
      title: "Creative Direction & Packaging",
      icon: "direction",
      description: "Guiding the holistic visual and narrative packaging of content from thumbnail concepts to editorial quality control.",
      deliverables: [
        "Thumbnail & title pairing concepts",
        "Creative briefs for editors and designers",
        "Campaign messaging frameworks",
        "Quality assurance & post-production polish"
      ]
    },
    {
      id: "ai-content-systems",
      title: "AI × Content Workflow Design",
      icon: "ai",
      description: "Custom human-in-the-loop workflows that 5x research velocity and prompt ideation without sacrificing emotional nuance or voice.",
      deliverables: [
        "Synthesized audience research prompts",
        "Automated transcript-to-repurposing pipelines",
        "Angle exploration frameworks",
        "Human editorial audit & judgment protocol"
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Founder Organic Brand Elevation",
      category: "branding",
      platform: "LinkedIn & Social",
      role: "Lead Strategist & Writer",
      metric: "598 → 18.9K followers",
      summary: "Restructured a founder's social presence from fragmented tech posts into a systematic thought-leadership flywheel focused on actionable industry lessons.",
      tags: ["Personal Branding", "LinkedIn", "Storytelling", "Organic Growth"],
      deliverables: "Weekly pillar cadence, hook teardowns, carousel templates, engagement framework.",
      caseStudyId: "case-1"
    },
    {
      id: "proj-2",
      title: "Long-Form Podcast Channel Launch",
      category: "podcast",
      platform: "YouTube Long-form",
      role: "Scriptwriter & Content Planner",
      metric: "19K views & 110 subscribers",
      summary: "Architected episode themes, pre-interview research questions, and structured narrative arcs for a nascent channel starting with only ~100 subscribers.",
      tags: ["Podcast", "YouTube", "Interview Scripting", "Structure"],
      deliverables: "Comprehensive interview briefs, cold-open scripting, chapters, pinned comment strategy.",
      caseStudyId: "case-2"
    },
    {
      id: "proj-3",
      title: "YouTube Content Angle & Packaging Test",
      category: "strategy",
      platform: "YouTube",
      role: "Content Strategist",
      metric: "55.7% vs 26.9% watch-time share",
      summary: "Conducted multivariate angle testing between technical tutorial vs. narrative problem-first angles, uncovering dramatic retention gains for the narrative framing.",
      tags: ["Retention", "A/B Testing", "Watch Time", "Packaging"],
      deliverables: "Hook comparison drafts, title/thumbnail variants, retention drop-off audit.",
      caseStudyId: "case-3"
    },
    {
      id: "proj-4",
      title: "Podcast Shorts Viral Hook Optimization",
      category: "scriptwriting",
      platform: "Shorts & Reels",
      role: "Short-form Scriptwriter",
      metric: "2X+ average views",
      summary: "Replaced generic clip intros with contextual tension hooks and pattern-interrupt visual cues, doubling average view counts across 30+ shorts.",
      tags: ["Short-form", "Viral Hooks", "Reels", "Pacing"],
      deliverables: "30+ re-scripted short hooks, b-roll directives, kinetic caption styling.",
      caseStudyId: "case-4"
    },
    {
      id: "proj-5",
      title: "High-Signal LinkedIn Executive Authority Post",
      category: "branding",
      platform: "LinkedIn",
      role: "Copywriter & Strategist",
      metric: "3,386 views • 28 comments",
      summary: "Crafted an insightful breakdown analyzing SaaS customer retention mistakes, sparking organic discussions among industry leaders and C-suite followers.",
      tags: ["B2B", "LinkedIn Ghostwriting", "Thought Leadership"],
      deliverables: "Analytical teardown post, conversation-starter prompt, discussion moderation.",
      caseStudyId: "case-5"
    },
    {
      id: "proj-6",
      title: "Polarys Media Editorial Architecture",
      category: "strategy",
      platform: "Multi-channel",
      role: "Head of Content",
      metric: "20M+ collective campaign reach",
      summary: "Directing content ideation, calendar planning, and quality review for high-growth creators and brands with strict milestone tracking.",
      tags: ["Creative Direction", "Systems", "Team Coordination"],
      deliverables: "Content calendar systems, creative briefs, editor SOPs, performance dashboards.",
      caseStudyId: null
    }
  ],

  caseStudies: [
    {
      id: "case-1",
      title: "Scaling a Personal Brand: From 598 to 18.9K Engaged Followers",
      client: "Early-stage Tech Founder",
      period: "6-Month Strategic Engagement",
      heroMetric: "598 → 18,900+",
      heroLabel: "Targeted Audience Growth",
      challenge: "The client had deep domain expertise but irregular publishing habits, zero recognizable brand voice, and content that was too technical for prospective customers to appreciate.",
      research: "Analyzed top 50 performing posts in the niche. Discovered that followers disengaged from abstract advice but resonated heavily with transparent 'post-mortems' and behind-the-scenes decision frameworks.",
      strategy: "Introduced a 3-Pillar Content Architecture: 40% Actionable Case Studies, 35% Industry Contrarian Opinions, and 25% Personal Founder Journey stories. Formatted every post with a 'tension hook' that challenged conventional wisdom within the first 140 characters.",
      execution: "Published 4 high-signal posts per week. Developed custom carousels highlighting architectural decisions. Implemented a 15-minute post-publish reply blitz to trigger platform algorithm engagement signals.",
      results: [
        "Follower count grew from 598 to 18,900+ verified professionals within 6 months.",
        "Average engagement rate increased from 0.8% to 4.3%.",
        "Generated 14 qualified investor conversations and 9 enterprise client inquiries directly via inbound DMs."
      ],
      learnings: "Clarity beats complexity every time. B2B founders often assume they need to sound academic; however, translating sophisticated concepts into visceral human problems is what unlocks viral organic distribution."
    },
    {
      id: "case-2",
      title: "Launching a Long-Form Video Podcast from a Standing Start",
      client: "Emerging Creator Channel",
      period: "First 4 Pilot Episodes",
      heroMetric: "19,000 Views & 110 Subs",
      heroLabel: "Starting with ~100 Subscribers",
      challenge: "Launching long-form conversational content on YouTube is notoriously difficult for new channels with under 100 subscribers due to lack of initial algorithmic velocity.",
      research: "Audited competing podcasts in the same vertical. Identified that most episodes lost 40% of their audience in the first 90 seconds due to unscripted chit-chat, rambling host intros, and lack of visual momentum.",
      strategy: "Engineered a 'Cold Open + Curiosity Loop' structure. Each episode commenced with a high-stakes 12-second teaser statement followed by an immediate promise of what the viewer would learn by minute 20.",
      execution: "Structured comprehensive host run-sheets with time-stamped thematic anchors instead of rigid scripts, preserving organic conversation while enforcing brisk narrative momentum and chaptering.",
      results: [
        "Episode 2 broke through the algorithmic barrier, generating 19,000 organic views.",
        "Added 110 net-new subscribers from a single video.",
        "Average percentage viewed (APV) remained at 42.5% across a 38-minute duration, well above industry benchmarks."
      ],
      learnings: "Viewers don't hate long-form content; they hate purposeless drifting. Structuring conversations with implicit micro-payoffs keeps retention steady across 30+ minutes."
    },
    {
      id: "case-3",
      title: "YouTube Angle Optimization: Achieving 55.7% Watch-Time Share",
      client: "Educational Creator",
      period: "Comparative Study",
      heroMetric: "55.7% vs 26.9%",
      heroLabel: "Watch-Time Share Differential",
      challenge: "Two competing concepts covering similar subject matter were delivered to the same target demographic, but one systematically outperformed the other by over 2x.",
      research: "Conducted retention curve analysis across the 0:00–1:00 mark. Control Angle (Concept A) opened with a descriptive feature overview. Variant Angle (Concept B) framed the topic around an urgent, painful mistake the viewer was actively making.",
      strategy: "Formulated the 'Loss Aversion Framing' hypothesis: Viewers are twice as motivated to prevent an ongoing loss or error than to acquire generic new knowledge.",
      execution: "Scripted Concept B using an escalating tension curve: 0-5s Shock Stat, 5-25s Concrete Evidence of the Cost, 25-45s Root Cause Explanation, 45s+ Step-by-Step Resolution.",
      results: [
        "Variant B secured 55.7% watch-time share compared to 26.9% for Control A.",
        "Relative retention at the 30-second mark jumped from 48% to 74%.",
        "Audience satisfaction score (likes / views ratio) improved by 34%."
      ],
      learnings: "The first 30 seconds dictate the video's mathematical fate. When the viewer immediately recognizes themselves in the problem statement, bounce rate drops precipitously."
    },
    {
      id: "case-4",
      title: "Podcast Shorts: 2X View Velocity Through Pattern Interrupts",
      client: "B2B Podcaster",
      period: "30-Day Experiment",
      heroMetric: "2.1X View Lift",
      heroLabel: "Over Baseline Across 30 Clips",
      challenge: "Podcast clips were receiving flat engagement (averaging 1.2K views per Short) despite high-profile guest names.",
      research: "Audience retention logs revealed viewers swiped away within 1.5 seconds if the speaker started with 'Yeah, so...' or standard podcast agreement banter.",
      strategy: "Enforced an aggressive 'In Media Res' editing and scripting protocol. Trimmed all polite preamble; isolated the most startling guest declaration and paired it with a text-hook question on screen.",
      execution: "Created a template system providing audio-visual contrast: dynamic caption styling with key phrases highlighted in blue, punch-in zooms on operative words, and ambient sound design under the hook.",
      results: [
        "Average views per short increased from 1,200 to 2,600+ (over 2X lift).",
        "Swipe-away rate dropped from 44% to 21%.",
        "3 clips crossed 25,000+ views, driving over 350 direct channel subscriptions."
      ],
      learnings: "Short-form viewers have zero patience for context upfront. You must earn the right to provide context by first delivering immediate tension or surprise."
    },
    {
      id: "case-5",
      title: "B2B Founder Thought Leadership on LinkedIn",
      client: "SaaS Founder",
      period: "Single Strategic Post",
      heroMetric: "3,386 Views",
      heroLabel: "28 Qualified In-Depth Comments",
      challenge: "The founder wanted to engage enterprise VP-level buyers without sounding like a generic corporate press release.",
      research: "Interviewed the founder regarding the most counter-intuitive lesson learned while reducing churn in Q2. Extracted proprietary data points not found in generic blogs.",
      strategy: "Wrote a structured post formatted as a 'Teardown of an Uncomfortable Truth' with zero fluff, bullet-point takeaways, and an open debate question directed at seasoned operators.",
      execution: "Polished the post rhythm: one-line punchy hook, 3-point breakdown with real numbers, clear contrarian takeaway, and an invitation for peers to challenge the conclusion.",
      results: [
        "Post reached 3,386 high-value impressions entirely organically.",
        "Generated 28 insightful comments from targeted CTOs, VPs of Product, and founders.",
        "Directly resulted in 3 enterprise demo inquiries within 48 hours."
      ],
      learnings: "Authentic, vulnerable domain data outperforms sanitized marketing slogans every day on LinkedIn. High-level professionals engage when you treat them as intellectual equals."
    }
  ],

  hookBreakdowns: [
    {
      id: "hook-1",
      topic: "YouTube Tech / Creator Productivity",
      weak: {
        text: "\"In today's video, I'm going to share 5 tips that helped me manage my time better as a creator...\"",
        retentionScore: "34% at 30s",
        verdict: "Weak Hook",
        critique: "Passive, self-centered, announces what the video is about rather than why the viewer should care. High swipe-away probability."
      },
      strong: {
        text: "\"If you spent more than 4 hours editing your last video, you probably made this one file-organization mistake...\"",
        retentionScore: "72% at 30s",
        verdict: "High-Retention Hook",
        critique: "Immediately calls out a painful symptom (4 hours wasted), introduces specific curiosity (one file mistake), and promises immediate relief."
      },
      takeaway: "Shift the spotlight from yourself to the viewer's hidden friction point within the first 4 words."
    },
    {
      id: "hook-2",
      topic: "LinkedIn Founder Thought Leadership",
      weak: {
        text: "\"Networking is really important for entrepreneurs. Here are my thoughts on how to connect with mentors.\"",
        retentionScore: "1.1% CTR",
        verdict: "Weak Hook",
        critique: "Cliché statement that everyone already agrees with. Gives no reason to expand the 'see more' fold."
      },
      strong: {
        text: "\"I sent 100 cold DMs to tech founders last year. 82 ignored me. The 18 who replied had one unexpected thing in common:\"",
        retentionScore: "5.8% CTR",
        verdict: "High-Retention Hook",
        critique: "Uses concrete numbers, admits honest failure (82 ignored), and creates an irresistible information gap right before the fold."
      },
      takeaway: "Replace general advice with specific empirical data and a compelling curiosity gap."
    },
    {
      id: "hook-3",
      topic: "Podcast Short-Form Video",
      weak: {
        text: "\"Guest: 'Yeah, I think AI is definitely changing how businesses operate in 2025.'\"",
        retentionScore: "38% Watched",
        verdict: "Weak Hook",
        critique: "Generic opinion delivered with low conversational energy. Viewer perceives this as background noise."
      },
      strong: {
        text: "\"Host: 'What's the one job you think AI will completely wipe out by next December?' Guest: 'Marketing directors.'\"",
        retentionScore: "78% Watched",
        verdict: "High-Retention Hook",
        critique: "High-stakes question and a shocking, specific one-word answer right at 0:01 that sparks immediate emotional reaction and debate in comments."
      },
      takeaway: "Drop the viewer directly into the moment of highest tension; never start at the beginning of an agreement."
    }
  ],

  aiExperiments: [
    {
      id: "exp-1",
      title: "Synthesizing Target Audience Personas for Friction Mapping",
      hypothesis: "AI models can surface hidden emotional pain points and objections faster than manual desk research when seeded with authentic forum transcripts.",
      tools: "Claude 3.5 Sonnet, Gemini 1.5 Pro, Reddit/YouTube comment extractors",
      aiRole: "Aggregated and clustered 400+ viewer comments from 15 competitor channels, synthesizing them into 4 distinct persona archetypes and recurring frustration themes.",
      humanJudgmentRole: "Filtered out superficial complaints, validated which objections represented genuine buying barriers, and authored the actual narrative angle and tone of voice.",
      outcome: "Reduced research turnaround from 14 hours to 3 hours while discovering 2 under-served content angles that generated 40K+ views."
    },
    {
      id: "exp-2",
      title: "Rapid 15-Variant Hook Generation Matrix",
      hypothesis: "Generating 15 hook formulas across 5 psychological triggers (curiosity, fear of missing out, contrarian, pain-amplification, benchmark) creates higher variance for A/B testing.",
      tools: "Custom prompt chains + few-shot retention frameworks",
      aiRole: "Drafted 15 structural variants in 90 seconds mapped against specific emotional triggers based on a single core video thesis.",
      humanJudgmentRole: "Selected the top 3 contenders, adjusted conversational cadence to eliminate robotic phrasing, and tailored the opening visual action for the creator's delivery style.",
      outcome: "Identified the winning hook angle that outperformed the creator's historical benchmark retention by 55.7%."
    },
    {
      id: "exp-3",
      title: "Multi-Format Repurposing System with Voice Preservation",
      hypothesis: "A 45-minute podcast episode can be repurposed into 1 long-form article, 3 LinkedIn posts, and 5 short-form scripts without diluting the host's idiosyncratic cadence.",
      tools: "Whisper transcriptions, structured context injection, markdown workflows",
      aiRole: "Parsed timestamps, extracted key argument arcs, and drafted initial textual summaries without hallucinating facts.",
      humanJudgmentRole: "Rewrote hooks, restored authentic vernacular, eliminated formulaic AI sentence structures, and crafted the overarching thesis.",
      outcome: "Expanded one podcast recording into 12 multi-platform assets across 3 weeks, maintaining 100% brand voice consistency."
    }
  ],

  processStages: [
    {
      number: "01",
      title: "Research & Gap Analysis",
      description: "Deep dive into audience psychology, competitor weaknesses, and existing platform conversations to find untapped curiosity angles."
    },
    {
      number: "02",
      title: "Angle & Hook Engineering",
      description: "Crafting the single focal idea and testing first-3-second hooks that seize attention and establish immediate tension."
    },
    {
      number: "03",
      title: "Narrative & Retention Structuring",
      description: "Mapping out the storytelling flow, micro-payoffs, pacing, and visual pattern interrupts to prevent viewer drop-off."
    },
    {
      number: "04",
      title: "Creative Execution & Collaboration",
      description: "Writing scripts, assembling creative briefs for editors and thumbnail designers, and ensuring seamless cross-team alignment."
    },
    {
      number: "05",
      title: "Performance Audit & Iterative Tuning",
      description: "Analyzing retention heatmaps, click-through rates, and comment sentiment to continuously refine future releases."
    }
  ],

  experience: [
    {
      role: "Head of Content",
      company: "Polarys Media",
      period: "October 2025 – Present",
      location: "Remote",
      highlight: "Directing content strategy, scripting pipelines, and team coordination across multiple creator & brand accounts.",
      points: [
        "Creative and strategic direction of multi-channel content initiatives.",
        "Content research, ideation, and editorial calendar management.",
        "Coordination with writers, video editors, and graphic designers.",
        "Hook, caption, and script development for viral short-form and long-form formats.",
        "Lead research, prospect qualification, and campaign performance optimization."
      ]
    },
    {
      role: "Social Media Manager & Content Writer",
      company: "Elementec",
      period: "March 2025 – October 2025",
      location: "Remote",
      highlight: "Managed 3 LinkedIn company pages, researched viral hooks, and scripted Reels & Shorts.",
      points: [
        "Conducted deep trend and viral hook research across tech and lifestyle niches.",
        "Scripted high-converting carousel posts and short-form video reels.",
        "Executed multi-platform strategies across Instagram, YouTube, and LinkedIn.",
        "Spearheaded YouTube Shorts and long-form content planning.",
        "Coordinated with clients, copywriters, and video editors for on-time delivery."
      ]
    },
    {
      role: "Social Media Strategist",
      company: "Zig n Zag",
      period: "September 2024 – December 2024",
      location: "Remote",
      highlight: "Formulated content playbooks and audience growth strategies.",
      points: [
        "Developed structured social media playbooks tailored for audience engagement.",
        "Analyzed engagement metrics to refine tone of voice and posting schedules."
      ]
    },
    {
      role: "Social Media Manager & Content Writer",
      company: "DigityUp",
      period: "October 2021 – August 2024",
      location: "Remote",
      highlight: "Nearly 3 years of hands-on campaign execution, landing page copywriting, and SEO.",
      points: [
        "Managed end-to-end social media campaigns across Facebook, Instagram, Twitter, and YouTube.",
        "Wrote high-converting landing page copy, sales pages, and SEO-optimized blog posts.",
        "Implemented local SEO strategies and content marketing workflows."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Business Administration (BBA) in Digital Marketing",
      institution: "Sage University Bhopal",
      period: "August 2023 – July 2026"
    },
    {
      degree: "Senior Secondary Education",
      institution: "Government Senior Secondary Multipurpose School",
      period: "April 2021 – April 2023"
    }
  ],

  certifications: [
    "How to Start Blogging? — Professional Masterclass",
    "Financial Accounting Fundamentals",
    "Organic Marketing: Facebook Groups for Small Businesses"
  ],

  languages: [
    { language: "English", level: "Full Professional Proficiency" },
    { language: "Hindi", level: "Native / Bilingual" },
    { language: "Punjabi", level: "Professional Working" }
  ],

  testimonials: [
    {
      quote: "Riya has a rare gift for cutting through the noise. She completely transformed how our podcast clips are scripted—our retention and view counts doubled within three weeks.",
      author: "Aditya S.",
      title: "Podcast Host & Creative Producer",
      company: "The Builder's Narrative"
    },
    {
      quote: "Working with Riya on my personal brand gave me the clarity I'd been lacking for years. She understands how to extract complex technical insights and make them punchy, engaging, and genuinely authoritative.",
      author: "Karan M.",
      title: "Founder & CEO",
      company: "Veloce Technologies"
    },
    {
      quote: "Her understanding of hooks and audience psychology is top tier. Riya doesn't just write scripts; she builds retention architectures that keep viewers watching till the very end.",
      author: "Siddharth P.",
      title: "Head of Marketing",
      company: "Polarys Media Ecosystem"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

