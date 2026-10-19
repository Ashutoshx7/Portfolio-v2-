export interface Blog {
  title: string;
  date: string;
  claps: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug?: string;
  description?: string;
  readingTime?: string;
  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  content?: BlogBlock[];
}

export type BlogBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "links";
      items: {
        title: string;
        href: string;
        description: string;
      }[];
    };

export const blogsData: Blog[] = [
  {
    title: "How I Cracked GSoC 2026 with Sugar Labs",
    date: "Oct 2026",
    claps: 0,
    tags: ["GSoC", "Open Source", "Sugar Labs"],
    link: "/blogs/gsoc-2026-sugar-labs-journey",
    isExternal: false,
    slug: "gsoc-2026-sugar-labs-journey",
    readingTime: "15 min read",
    description:
      "From my first PR on January 4 to reviewing hundreds of pull requests, building a complete project demo, and getting selected for Google Summer of Code 2026.",
    heroImage: {
      src: "/blog-images/gsoc-2026-sugar-labs/journey-banner.png",
      alt: "A minimalist path through four colorful milestones, code contributions, and an open-source community.",
      width: 1672,
      height: 941,
    },
    content: [
      {
        type: "paragraph",
        text: "I wasn't even planning to do GSoC this year.",
      },
      {
        type: "paragraph",
        text: "Seriously. I had already participated in GSoC before, and this time I was mostly focused on exploring AI, building projects, and improving my engineering skills.",
      },
      {
        type: "paragraph",
        text: "Then one of my friends suggested something: since I was already going deep into AI, why not explore GSoC organizations working on interesting AI projects?",
      },
      {
        type: "paragraph",
        text: "That sounded reasonable. But I didn't want to pick an organization just because it was participating in GSoC. I wanted to find a project I would genuinely enjoy building.",
      },
      {
        type: "paragraph",
        text: "That's when I came across Sugar Labs and its idea for AI-powered activity generation: users could describe what they wanted and generate educational activities using AI.",
      },
      {
        type: "quote",
        text: "Damn, this is actually something I'd love to build.",
      },
      {
        type: "paragraph",
        text: "There was just one problem. Sugar Labs was an established GSoC organization with a long history, an active community, and plenty of competition. I knew getting selected wouldn't be easy. But I also knew that if I approached the process carefully, I could give myself a pretty good chance.",
      },
      {
        type: "heading",
        text: "January 4: the first contribution",
      },
      {
        type: "paragraph",
        text: "I originally wanted to start contributing around December 15. Then college exams happened.",
      },
      {
        type: "paragraph",
        text: "By the end of December, I was getting stressed because I hadn't made any progress. I kept thinking about how other contributors might already be working while I was stuck preparing for exams. My exams finally ended around January 3. On January 4, I started contributing to Sugar Labs.",
      },
      {
        type: "paragraph",
        text: "One advantage I had was that I wasn't completely new to open source. I already understood Git, GitHub, pull requests, code review, and how open-source communities generally work.",
      },
      {
        type: "paragraph",
        text: "Before going deep into contributions, I researched the organization itself. I looked into previous GSoC contributors, explored the communication channels, found out when community meetings happened, and tried to understand what maintainers actually valued. I wasn't just trying to figure out how to get PRs merged. I wanted to understand how the organization worked.",
      },
      {
        type: "paragraph",
        text: "My first PR was relatively small. I treated it as a way to learn the codebase, understand the development workflow, and see how maintainers reviewed contributions. Nothing particularly impressive yet. But things started getting interesting after that.",
      },
      {
        type: "links",
        items: [
          {
            title: "My first Sugar Labs PR — Music Blocks #5002",
            href: "https://github.com/sugarlabs/musicblocks/pull/5002",
            description:
              "Added tests for logo.js and expanded the palette test coverage.",
          },
        ],
      },
      {
        type: "heading",
        text: "The first important decision: listening before contributing",
      },
      {
        type: "paragraph",
        text: "I started attending Sugar Labs community meetings. And I mean actually listening—not just joining to make my name visible.",
      },
      {
        type: "paragraph",
        text: "I paid attention to the problems maintainers discussed, the features they wanted to prioritize, and the areas where the project needed help. During one meeting, a mentor mentioned that performance was an important concern in Music Blocks. Certain parts of the application weren't performing as well as they should.",
      },
      {
        type: "paragraph",
        text: "A lot of new contributors naturally gravitate toward straightforward issues. They're easier to understand, finish, and turn into a merged PR. Performance problems are different. They require investigation, profiling, architectural context, and sometimes hours spent figuring out why something behaves the way it does—with no guarantee you'll find a quick solution.",
      },
      {
        type: "paragraph",
        text: "I realized this could be an opportunity. Instead of just working on whatever issue was available, I started working on problems the maintainers actually cared about.",
      },
      {
        type: "paragraph",
        text: "Over the following weeks, I worked on performance improvements and other issues. Eventually, during one of our meetings, a mentor specifically acknowledged and thanked me for the improvements I had been making to Music Blocks.",
      },
      {
        type: "paragraph",
        text: "It was a small moment, but it meant quite a lot—not because someone had praised me, but because I could see that my contributions were starting to make a difference.",
      },
      {
        type: "links",
        items: [
          {
            title: "Lazy-load audio samples — Music Blocks #5022",
            href: "https://github.com/sugarlabs/musicblocks/pull/5022",
            description:
              "Reduced initial loading and memory usage by loading instrument samples on demand.",
          },
          {
            title: "Optimize canvas rendering — Music Blocks #5091",
            href: "https://github.com/sugarlabs/musicblocks/pull/5091",
            description:
              "Introduced a dirty-flag rendering pattern to avoid unnecessary idle updates.",
          },
          {
            title: "Reduce CPU usage — Music Blocks #5161",
            href: "https://github.com/sugarlabs/musicblocks/pull/5161",
            description:
              "Improved the rendering pipeline, ticker behavior, and turtle initialization.",
          },
        ],
      },
      {
        type: "heading",
        text: "The day Music Blocks production broke",
      },
      {
        type: "paragraph",
        text: "One of the most memorable moments happened when the production version of Music Blocks broke. A PR had been reviewed and initially looked fine, but a subsequent change introduced a problem that affected production.",
      },
      {
        type: "paragraph",
        text: "I was in college when I noticed the discussion in the Sugar Labs Matrix channel. People were trying to understand why the application wasn't behaving correctly. I thought: what if I could figure out what's actually breaking?",
      },
      {
        type: "paragraph",
        text: "When I got time, I checked the browser's network requests, looked at what was failing, and traced the problem back to its source. Eventually, I found an issue involving a browser API call, fixed it, and submitted a PR.",
      },
      {
        type: "links",
        items: [
          {
            title: "Production audio fix — Music Blocks #5300",
            href: "https://github.com/sugarlabs/musicblocks/pull/5300",
            description:
              "Loaded the p5 sound adapter so the AudioNode.connect compatibility patch applied correctly.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Something had broken in production, and I had identified and fixed it in roughly an hour of focused investigation. I was genuinely excited.",
      },
      {
        type: "quote",
        text: "You don't necessarily stand out by writing the most code. Sometimes you stand out by solving the problem that matters at the right moment.",
      },
      {
        type: "paragraph",
        text: "That experience helped me build trust with the maintainers. And that trust became important later.",
      },
      {
        type: "heading",
        text: "February 19: why I started contributing to Joplin too",
      },
      {
        type: "paragraph",
        text: "While Sugar Labs was my primary focus, I didn't want to depend entirely on one organization. GSoC is competitive, and selection involves factors beyond your control: an organization might receive fewer slots than expected, priorities can change, and other applicants can have excellent proposals too.",
      },
      {
        type: "paragraph",
        text: "When the updated organization list came out, I explored another organization and found Joplin. I began contributing there around February 19. Instead of immediately opening random issues, I reached out to maintainers to understand their expectations.",
      },
      {
        type: "paragraph",
        text: "I also asked whether they had an AI usage policy for contributors. The maintainer thought it was a good idea and decided to establish guidance around AI-assisted contributions: if contributors used AI, they should be transparent about how they used it and which parts of their work involved assistance. I liked that approach.",
      },
      {
        type: "paragraph",
        text: "Over the following weeks, I actively contributed to Joplin while continuing my work at Sugar Labs. I opened approximately 18 issues and had around 13 PRs merged.",
      },
      {
        type: "paragraph",
        text: "Balancing both organizations wasn't easy. I was attending meetings, investigating issues, submitting fixes, reviewing feedback, and keeping up with college. Some days were genuinely exhausting. But it meant I wasn't depending on a single opportunity.",
      },
      {
        type: "quote",
        text: "Choose two organizations you genuinely want to contribute to instead of putting everything into one option—but only if you have enough time to make meaningful contributions to both.",
      },
      {
        type: "heading",
        text: "March: building a proposal that actually stood out",
      },
      {
        type: "paragraph",
        text: "By March, I had spent nearly two months actively contributing. I understood the community, had interacted with maintainers, and was familiar with the technical direction of the project. Now came the proposal, and I knew I didn't want to rush it.",
      },
      {
        type: "paragraph",
        text: "Many contributors start writing proposals close to the deadline. I did the opposite and started roughly a month in advance. More time meant more chances to identify missing details, improve the ideas, build something meaningful, and get feedback.",
      },
      {
        type: "paragraph",
        text: "Especially for an AI-related project, writing an impressive-looking proposal had become relatively easy. Anyone could ask an AI model to produce a long, polished technical document. I needed to show something beyond polished writing. I wanted the proposal to prove that I understood the project and could execute it.",
      },
      {
        type: "paragraph",
        text: "I structured the document carefully, explained the architecture, added screenshots, used diagrams wherever they made an explanation clearer, and broke the implementation into manageable phases. I also built a working demo. I didn't want the proposal to be a description of what I might build; I wanted maintainers to see what I was already capable of building.",
      },
      {
        type: "paragraph",
        text: "I even included a separate Notion timeline. During community meetings, my mentor had repeatedly emphasized learning by actually doing things, so I reflected that idea in the proposal. It connected the technical plan with something the community genuinely valued—and showed that I had been paying attention.",
      },
      {
        type: "paragraph",
        text: "I kept revising until the structure, technical details, screenshots, and presentation were as strong as I could make them. Later, my mentor told me it was one of the best proposals he had seen. That meant a lot because I knew how much work had gone into it.",
      },
      {
        type: "heading",
        text: "The final eight hours before submission",
      },
      {
        type: "paragraph",
        text: "It was the final day of the proposal submission period. I had prepared the proposal, built the demo, documented the architecture, and polished everything. Then I reached out to my mentor for last-minute feedback.",
      },
      {
        type: "paragraph",
        text: "That night, he suggested adding version control to the project.",
      },
      {
        type: "quote",
        text: "Oh fuck. I have to build this now?",
      },
      {
        type: "paragraph",
        text: "It was an important suggestion. Version control would let users track changes and manage revisions of generated activities, but adding it to the existing demo at the last minute wasn't exactly part of my plan.",
      },
      {
        type: "paragraph",
        text: "Still, I decided to try. I used AI assistance to accelerate parts of the implementation, worked through the changes, updated the demo, and recorded another video showing the new functionality. The process took roughly eight hours.",
      },
      {
        type: "paragraph",
        text: "I was stressed, exhausted, and constantly thinking about the deadline, but I included the improvements before submitting. Not because last-minute work is something to celebrate, but because I was willing to respond to meaningful feedback even when implementing it was difficult.",
      },
      {
        type: "heading",
        text: "April 4: the decision that changed everything",
      },
      {
        type: "paragraph",
        text: "By this point, Sugar Labs had received an enormous amount of contribution activity. I remember seeing approximately 700 open pull requests, with contributors continuing to submit more.",
      },
      {
        type: "paragraph",
        text: "I could keep raising PRs, trying to remain one of the most active contributors, and competing on numbers until selection. But for how long? It was becoming exhausting, and I wasn't sure another PR was the most valuable thing I could do for the organization.",
      },
      {
        type: "paragraph",
        text: "During a meeting around April 4, I suggested something different to my mentor, Walter Bender: what if I helped review and organize the pending pull requests? I could identify useful changes, document my findings, and make it easier for him to decide what should be merged.",
      },
      {
        type: "paragraph",
        text: "He liked the idea, so I created a document to track the PRs I reviewed and recommended. Initially there were around 10 entries. Then 20. Then 40. And it kept growing.",
      },
      {
        type: "paragraph",
        text: "I checked whether changes made sense, whether they were useful, whether they had problems, and which contributions deserved closer attention. Walter still made the final review and merge decisions, but I was helping reduce the burden.",
      },
      {
        type: "paragraph",
        text: "Then other contributors began tagging me in their PRs and asking me to review their work. My role in the community was changing. I wasn't just another contributor submitting code; I was helping maintainers manage contributions from everyone else.",
      },
      {
        type: "heading",
        text: "From 700 open PRs to around 60",
      },
      {
        type: "paragraph",
        text: "Over approximately two weeks, the number of open PRs dropped from around 700 to roughly 60. During that period, I went through an estimated 800–1,000 pull requests as part of the review and triage effort.",
      },
      {
        type: "paragraph",
        text: "It was intense. There were days when I spent 16–20 hours working—checking PRs, reading code, updating the review document, answering contributors, and helping move the process forward.",
      },
      {
        type: "paragraph",
        text: "I wouldn't recommend that schedule as a sustainable way to work. It took a real toll on me. At the time, though, I knew the application period was approaching its final stage, and I wanted to make the most meaningful contribution I could.",
      },
      {
        type: "paragraph",
        text: "The experience changed how I thought about open source. Contributing isn't just writing code. Code review, triage, maintainability, communication, and helping other contributors are all valuable engineering work. Sometimes those activities have a much broader impact than another small code change.",
      },
      {
        type: "heading",
        text: "April 19: I'd done everything I could",
      },
      {
        type: "paragraph",
        text: "Around April 19, I understood that the organization was approaching the point where its selection recommendations would be finalized. By then, I had:",
      },
      {
        type: "list",
        items: [
          "Contributed consistently since January.",
          "Worked on performance improvements and production issues.",
          "Built relationships with maintainers through actual work.",
          "Created a detailed technical proposal and a working demo.",
          "Incorporated last-minute mentor feedback.",
          "Helped review and organize hundreds of pull requests.",
          "Contributed to Joplin alongside Sugar Labs.",
        ],
      },
      {
        type: "paragraph",
        text: "I knew I had given the application everything I reasonably could. People in the community had become very encouraging, and some seemed convinced I would get selected. But nothing was guaranteed until the official announcement.",
      },
      {
        type: "heading",
        text: "April 21–30: the waiting was worse than I expected",
      },
      {
        type: "paragraph",
        text: "Once the main application and review work was over, I reduced the time I was spending on GSoC contributions. College exams were approaching, and I needed to get back to studying. Mentally, though, I was still thinking about GSoC.",
      },
      {
        type: "paragraph",
        text: "What if I don't get selected? What if the organization receives fewer slots? What if something unexpected happens?",
      },
      {
        type: "paragraph",
        text: "I knew the proposal was strong. I knew the contributions were meaningful. I knew the maintainers appreciated my work. But selection wasn't entirely in my hands, and that was what made the waiting so stressful.",
      },
      {
        type: "paragraph",
        text: "The previous weeks had taken a toll on my mental health. I was exhausted from balancing two organizations, college, technical work, and the pressure I'd put on myself. At some point, I had to accept that I'd done my part. The rest was no longer something I could control.",
      },
      {
        type: "heading",
        text: "April 30: the selection email",
      },
      {
        type: "paragraph",
        text: "Then April 30 arrived. There had already been some discussion around the selection data, and I was beginning to feel that things might work out. But I still wanted the official confirmation.",
      },
      {
        type: "paragraph",
        text: "And finally, I received the email. I had been selected for Google Summer of Code 2026 with Sugar Labs.",
      },
      {
        type: "paragraph",
        text: "After almost four months of contributions, countless hours of debugging, hundreds of code reviews, a proposal I'd spent weeks preparing, and a lot of uncertainty, it had finally happened.",
      },
      {
        type: "paragraph",
        text: "I had also made significant progress with Joplin and received a positive selection outcome there, but Sugar Labs was my first priority. So that's what I chose.",
      },
      {
        type: "paragraph",
        text: "I was going to build the AI-powered activity generation project that had caught my attention back in January—the very project that made me decide to try GSoC again. That felt pretty special.",
      },
      {
        type: "heading",
        text: "What this journey taught me",
      },
      {
        type: "paragraph",
        text: "Looking back, the biggest difference wasn't the number of PRs I submitted. It was the way I approached contributing.",
      },
      {
        type: "paragraph",
        text: "I spent time understanding the organization, its people, its problems, and what meaningful contributions actually looked like. When performance mattered, I worked on performance. When production broke, I investigated it. When the proposal needed improvement, I built a demo and kept iterating. When maintainers were overwhelmed, I helped review. When I received feedback, I acted on it.",
      },
      {
        type: "paragraph",
        text: "None of those things guaranteed selection. Together, they helped me become someone the maintainers could trust.",
      },
      {
        type: "quote",
        text: "Don't contribute just to get selected. Become someone the organization genuinely benefits from having around.",
      },
      {
        type: "paragraph",
        text: "Also, don't confuse the amount of time you spend working with the value you create. I pushed myself extremely hard during this period, and there were things I could have managed better. You don't need to sacrifice your mental health or work 20 hours a day to be a valuable open-source contributor.",
      },
      {
        type: "paragraph",
        text: "Consistency, technical depth, communication, and choosing the right problems matter far more than simply being online all day.",
      },
      {
        type: "paragraph",
        text: "For me, this journey started on January 4 with a small contribution. It turned into performance engineering, production debugging, proposal design, working with maintainers, and helping manage a huge volume of community contributions.",
      },
      {
        type: "paragraph",
        text: "On April 30, it ended with a selection email. Or maybe that's not quite right—because getting selected was only the beginning of actually building the project. And that's the part I was most excited about.",
      },
      {
        type: "quote",
        text: "From January 4 to April 30. One hell of a journey. See you in the next one.",
      },
      {
        type: "links",
        items: [
          {
            title: "Read my GSoC 2026 proposal",
            href: "https://docs.google.com/document/d/1EcbYSfOsAO-7Sar9_KpFHqr_ZADbZsMjp9077ucNlD0/edit?usp=sharing",
            description:
              "See the complete proposal, technical plan, architecture, and timeline I submitted to Sugar Labs.",
          },
        ],
      },
    ],
  },
  {
    title: "You Are Not Ready for Open Source Just Because You Want to Start",
    date: "Jul 2026",
    claps: 0,
    tags: ["Open Source", "AI", "Learning"],
    link: "/blogs/ready-for-open-source",
    isExternal: false,
    slug: "ready-for-open-source",
    readingTime: "12 min read",
    description:
      "A practical, field-tested path for becoming useful in open source: build fundamentals, join communities, communicate clearly, reproduce issues, and learn from real review.",
    content: [
      {
        type: "paragraph",
        text: "You are not ready for open source just because you want to start. You are ready when you can open a real codebase and not panic.",
      },
      {
        type: "paragraph",
        text: "Most people skip this part. They jump directly into issues, spam \"good first issue,\" copy-paste some AI-generated patch, and then wonder why their PR gets ignored. The truth is simple: open source does not reward excitement alone. It rewards preparation.",
      },
      {
        type: "heading",
        text: "First, sharpen your axe",
      },
      {
        type: "paragraph",
        text: "Before you start contributing, spend months building your fundamentals. Not days. Not one weekend. Months.",
      },
      {
        type: "paragraph",
        text: "Learn how real apps are structured. Learn how data flows from the frontend to the backend. Learn why files live where they live. Learn how APIs talk to databases. Learn what auth really does. Learn why state management becomes messy. Learn why deployment breaks at the worst possible time.",
      },
      {
        type: "paragraph",
        text: "This is the boring phase. But this is also the phase that quietly changes everything.",
      },
      {
        type: "paragraph",
        text: "Because once your fundamentals are strong, a codebase stops looking like random files and starts looking like a system.",
      },
      {
        type: "heading",
        text: "Build one real thing first",
      },
      {
        type: "paragraph",
        text: "Before touching a serious open-source repo, build one proper project of your own. Not a todo app.",
      },
      {
        type: "paragraph",
        text: "Build something that has real parts: TypeScript, React, auth, state, API routes, Prisma, PostgreSQL, deployment, and actual user flows.",
      },
      {
        type: "paragraph",
        text: "Something messy enough to teach you pain. Something real enough to break. Something serious enough that another engineer could review it and not immediately say, \"This is tutorial code.\"",
      },
      {
        type: "paragraph",
        text: "Because until you have built something real, you will not understand why maintainers care so much about small details.",
      },
      {
        type: "heading",
        text: "Do the shadow-build",
      },
      {
        type: "paragraph",
        text: "This is the part that changed everything for me. I thought I was ready. I had watched tutorials. I had written React. I felt kind of confident. Then I opened a real open-source repo, and suddenly it felt like I was reading another language.",
      },
      {
        type: "paragraph",
        text: "That was the moment I realized I was not ready. So I went back.",
      },
      {
        type: "paragraph",
        text: "I started cloning a project from Code With Antonio, but I added one rule for myself: I would not just copy the project. I would build my own idea in parallel.",
      },
      {
        type: "paragraph",
        text: "Whatever I built in the clone, I had to translate into my own product. If the clone had database work, I had to design the schema for my own idea. If the clone had frontend work, I had to build my own version of that flow. If the clone had auth, API routes, deployment, or state management, I had to understand it deeply enough to apply it somewhere else.",
      },
      {
        type: "paragraph",
        text: "The loop was simple.",
      },
      {
        type: "list",
        items: ["Clone.", "Understand.", "Translate.", "Build your own."],
      },
      {
        type: "paragraph",
        text: "It was slow. It was frustrating. It was brutal. But it worked.",
      },
      {
        type: "paragraph",
        text: "Because after a point, I was no longer copying code. I was understanding decisions. I was seeing patterns. I was learning how real builders think.",
      },
      {
        type: "paragraph",
        text: "And when I opened that scary open-source repo again, it finally started reading like English.",
      },
      {
        type: "heading",
        text: "This matters even more now",
      },
      {
        type: "paragraph",
        text: "In the AI era, everyone can generate code. That is not the hard part anymore.",
      },
      {
        type: "paragraph",
        text: "The hard part is knowing what code should exist in the first place.",
      },
      {
        type: "paragraph",
        text: "LLMs can write a function for you, but they will not magically give you taste. They will not teach you why a system is designed a certain way. They will not make you good at reading unfamiliar codebases. They will not tell you when not to build something.",
      },
      {
        type: "paragraph",
        text: "AI can help you move faster. But fundamentals decide whether you are moving in the right direction.",
      },
      {
        type: "heading",
        text: "The real moat",
      },
      {
        type: "paragraph",
        text: "Open source is not about rushing into random issues. It is about becoming useful inside someone else's system.",
      },
      {
        type: "paragraph",
        text: "And to become useful, you need fundamentals, one real project, and enough patience to sit with a codebase until it stops feeling scary.",
      },
      {
        type: "quote",
        text: "In the AI era, fundamentals are the moat. AI is the multiplier. Sharpen the axe first. Then go contribute.",
      },
      {
        type: "heading",
        text: "Now you are ready to actually start open source",
      },
      {
        type: "paragraph",
        text: "If you have fulfilled the points above, then yes, now you are ready to start open source. But not randomly. Not blindly. With direction.",
      },
      {
        type: "paragraph",
        text: "The next step is to join a good open-source community, or aim for a structured program like Google Summer of Code or Linux Foundation Mentorship. Most people suggest these programs for a reason. Open source is vast. It has too many organizations, too many repositories, too many projects, and too many threads. When you are starting out, you need direction, and these programs give you that. They give you mentors, project ideas, timelines, communication channels, and a reason to stay consistent.",
      },
      {
        type: "paragraph",
        text: "But before you even start finding issues on GitHub, do one thing first. Join the community.",
      },
      {
        type: "heading",
        text: "Communication matters more in the AI era",
      },
      {
        type: "paragraph",
        text: "Find the organization's communication channel. It could be Discord, Slack, Matrix, a mailing list, GitHub Discussions, or whatever the community uses.",
      },
      {
        type: "paragraph",
        text: "This matters more than people think. Right now, because of AI, anyone can go to GitHub, pick an issue, ask an LLM for help, and open a PR. Code is not the rare part anymore. The rare part is communication, community engagement, and trust.",
      },
      {
        type: "paragraph",
        text: "If mentors or admins know you, if they have seen you attend meetings, ask thoughtful questions, test things properly, and communicate clearly, that matters a lot. Even if you have fewer PRs, you can still stand out more than someone who silently opened many PRs but never attended a meeting, never talked to mentors, never understood the project, and never became part of the community.",
      },
      {
        type: "quote",
        text: "Open source is not just code. It is communication. It is trust. It is showing up.",
      },
      {
        type: "heading",
        text: "Observe the community before picking a project",
      },
      {
        type: "paragraph",
        text: "Once you join the community, do not immediately ask someone to assign you an issue. First, observe.",
      },
      {
        type: "paragraph",
        text: "See how the community works. See who the active mentors are. See which mentors are actually excited about their projects. Watch which projects are discussed often. Look at GitHub activity. Are PRs being reviewed? Are issues being discussed? Are maintainers replying? Is the repo active or dead?",
      },
      {
        type: "paragraph",
        text: "If the project is active and mentors are present, use your brain and pick that project. Do not pick a dead repo just because it looks easy. You want a project where people are present, because when people are present, you learn faster.",
      },
      {
        type: "heading",
        text: "Clone the project and feel the real pain",
      },
      {
        type: "paragraph",
        text: "After picking the project, clone it locally. And listen carefully.",
      },
      {
        type: "paragraph",
        text: "The first time you set up a real open-source project locally, it will be painful. Dependencies will break. Docs may be outdated. Some command will fail. Your OS may behave differently. You will fix one thing and another thing will break.",
      },
      {
        type: "quote",
        text: "It is not hard. It is just new.",
      },
      {
        type: "paragraph",
        text: "Keep going. Once the project runs locally, do not jump into coding immediately. First, understand the codebase. Use AI properly here. Ask it to explain the project architecture. Ask it to explain the folder structure. Ask it how the data flows. Ask it where the frontend talks to the backend. Ask it to trace one feature end to end. Ask it to make a short internal doc for you.",
      },
      {
        type: "paragraph",
        text: "Then read that doc with the code open. Do not blindly trust it. Use it as a map. That is how the codebase slowly stops looking like a jungle.",
      },
      {
        type: "heading",
        text: "Stop waiting only for good first issues",
      },
      {
        type: "paragraph",
        text: "Most people say, \"Start with good first issues.\" That is okay advice, but it is not the full truth.",
      },
      {
        type: "paragraph",
        text: "This is a real project. Not every serious open-source organization has perfectly labeled beginner issues. In fact, many good organizations do not have beginner-friendly issues waiting for you, and that is completely fine.",
      },
      {
        type: "paragraph",
        text: "You have already spent time building your own projects. You have already learned fundamentals. You have to get out of the mindset that you always need a beginner-level issue.",
      },
      {
        type: "paragraph",
        text: "Look for real issues. If an issue is opened by a mentor or maintainer, that is a good signal. It usually means the issue is real, relevant, and worth solving. But even then, do not blindly trust any issue.",
      },
      {
        type: "paragraph",
        text: "Reproduce it locally. That is the key. Can you reproduce the bug on your machine? Does the issue actually exist? Can you trigger the behavior? Can you understand where it breaks?",
      },
      {
        type: "paragraph",
        text: "If yes, now you have something real to work on. A lot of random issues do not even exist anymore. Sometimes the project changed. Sometimes the bug was already fixed indirectly. Sometimes the reporter misunderstood the behavior. Sometimes the issue is too vague.",
      },
      {
        type: "paragraph",
        text: "So before solving anything, reproduce it. Once you can reproduce an issue locally, you are already ahead of most beginners.",
      },
      {
        type: "heading",
        text: "Learn only what the issue demands",
      },
      {
        type: "paragraph",
        text: "You do not need to know everything before contributing. You do not need perfection. You need enough curiosity to solve the problem in front of you.",
      },
      {
        type: "paragraph",
        text: "Pick an issue. Reproduce it. Then ask yourself what you need to understand to solve it. Maybe you need to understand one API. Maybe one component. Maybe one database flow. Maybe one platform-specific behavior. Maybe one old design decision.",
      },
      {
        type: "paragraph",
        text: "Learn that specific thing. Search about it. Read the docs. Ask AI. Read old PRs. Look at similar code in the repo. Ask mentors only after doing your homework.",
      },
      {
        type: "paragraph",
        text: "Eventually, you get more context. Then the issue starts making sense. Then the fix becomes possible.",
      },
      {
        type: "paragraph",
        text: "And when you repeat this pattern again and again, your context about the codebase increases. Your horizon increases. The codebase becomes less scary.",
      },
      {
        type: "paragraph",
        text: "That is how open source compounds.",
      },
      {
        type: "heading",
        text: "A real example from my own journey",
      },
      {
        type: "paragraph",
        text: "One example from my own journey is a Joplin PR where I had to work on a global shortcut to show or hide Joplin.",
      },
      {
        type: "links",
        items: [
          {
            title: "Joplin PR #15013",
            href: "https://github.com/laurent22/joplin/pull/15013",
            description: "Global shortcut work that led into cross-platform desktop behavior.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "When I started, I did not know how to implement global shortcuts properly. I had never deeply worked with that part before. So I studied it. I asked AI. I read the code. I already had some context about the Joplin repo because I had been contributing to it for around a month, and that context helped a lot.",
      },
      {
        type: "paragraph",
        text: "I knew where things should probably be called from. I knew how the desktop app was structured. I knew Joplin runs on Windows, macOS, and Linux.",
      },
      {
        type: "paragraph",
        text: "So I also knew one thing clearly: I could not just implement it and test it on one platform. I had to make sure it worked everywhere.",
      },
      {
        type: "paragraph",
        text: "It had to work on Windows. It had to work on macOS. It had to work on Linux.",
      },
      {
        type: "paragraph",
        text: "I implemented the shortcut and tested it. It worked on Windows. It worked on macOS. But on Ubuntu Wayland, it did not work.",
      },
      {
        type: "heading",
        text: "One issue opened ten more doors",
      },
      {
        type: "paragraph",
        text: "At first, I only knew the surface-level thing: Wayland does not support global shortcuts in the same way because of security reasons in its protocol. That itself was new learning for me.",
      },
      {
        type: "paragraph",
        text: "I started with, \"I need to implement a shortcut.\" Suddenly, I was learning about X11, Wayland, GNOME, Electron, desktop portals, Linux desktop environments, and platform-specific edge cases.",
      },
      {
        type: "paragraph",
        text: "This is what open source does. You pick one issue. Then the real world opens ten more doors.",
      },
      {
        type: "paragraph",
        text: "I talked to the mentor about it. The suggestion was practical: if it works on X11, Windows, and macOS, keep that support. For Wayland, hide the setting if the feature cannot work properly.",
      },
      {
        type: "paragraph",
        text: "So I did that and opened the PR.",
      },
      {
        type: "image",
        src: "/blog-images/open-source-ready/mentor-wayland-setting.jpeg",
        alt: "Discord conversation with a mentor about hiding the global shortcut setting on Wayland.",
        caption: "Discord conversation with mentor about X11, Wayland, and hiding the setting.",
        width: 1199,
        height: 332,
      },
      {
        type: "heading",
        text: "Then the PR discussion went deeper",
      },
      {
        type: "paragraph",
        text: "After that, another maintainer pointed something out in the PR itself. He asked why it does not work on Wayland and mentioned that there are desktop portal APIs where this could potentially work.",
      },
      {
        type: "paragraph",
        text: "And honestly, at that moment, I did not have the complete answer. I only had partial understanding.",
      },
      {
        type: "paragraph",
        text: "This is where many beginners panic, but this is normal. You will not always have the answer immediately. The important thing is not whether you know everything on day one. The important thing is what you do next.",
      },
      {
        type: "paragraph",
        text: "Do you defend your half-knowledge? Or do you go back and study? I went back and studied.",
      },
      {
        type: "image",
        src: "/blog-images/open-source-ready/pr-wayland-question.jpeg",
        alt: "Joplin pull request discussion where a maintainer asks why global shortcuts do not work on Wayland.",
        caption: "PR conversation where the maintainer questions Wayland support and points toward portal APIs.",
        width: 1200,
        height: 900,
      },
      {
        type: "paragraph",
        text: "At first, I replied with what I knew. I was on Ubuntu 24 LTS with GNOME 46. Wayland did not support global shortcuts in the way Electron was trying to register them. I found some workaround scripts, but I was not sure if that was the right direction for Joplin.",
      },
      {
        type: "paragraph",
        text: "Then the maintainer added more context. He mentioned that this could possibly work on Ubuntu 25.10, and that Ubuntu 24.04 uses GNOME 46, which does not support the required API. By the time Joplin 3.6 releases, the latest Ubuntu LTS would be 26.04, giving Ubuntu users a path to upgrade. Other distributions like Fedora, Arch, and newer Debian setups may already have this in common environments.",
      },
      {
        type: "paragraph",
        text: "Now the problem was deeper. It was no longer just, \"Wayland does not support global shortcuts.\"",
      },
      {
        type: "paragraph",
        text: "It became: which GNOME version supports the portal? Which Electron version uses it? What does Joplin currently use? What should we do until the ecosystem catches up?",
      },
      {
        type: "paragraph",
        text: "So I tested more. I literally switched from Ubuntu 24 to Ubuntu 26 beta to test the behavior again.",
      },
      {
        type: "image",
        src: "/blog-images/open-source-ready/ubuntu-gnome-testing.jpeg",
        alt: "Pull request comments discussing Ubuntu 25.10, Ubuntu 24.04 GNOME 46, Ubuntu 26.04, and testing GNOME 50.",
        caption: "Maintainer context about Ubuntu, GNOME versions, and the follow-up test on GNOME 50.",
        width: 1200,
        height: 900,
      },
      {
        type: "paragraph",
        text: "Still, it did not work.",
      },
      {
        type: "paragraph",
        text: "Then I researched more and found the real detail: GNOME 50 does have org.freedesktop.portal.GlobalShortcuts available, but Electron 40, which Joplin uses, does not use the portal through globalShortcut.register() yet. So even though the portal exists on GNOME 50, Electron still returns false on Wayland.",
      },
      {
        type: "image",
        src: "/blog-images/open-source-ready/electron-portal-followup.jpeg",
        alt: "Pull request follow-up noting Electron global shortcut portal support may be gated behind a feature flag.",
        caption: "Follow-up detail about Electron's GlobalShortcutsPortal feature flag and future Wayland support.",
        width: 1200,
        height: 591,
      },
      {
        type: "quote",
        text: "Not just: Wayland does not work. But: GNOME has the portal, Wayland needs portal-based support, but Electron 40 does not use that portal for globalShortcut.register() yet, so Joplin cannot fully support it through the current Electron behavior.",
      },
      {
        type: "paragraph",
        text: "That is a much better answer. And I only reached that answer by making a mistake, getting questioned, going back, testing again, and studying more.",
      },
      {
        type: "heading",
        text: "That is how the learning actually happens",
      },
      {
        type: "paragraph",
        text: "See how the learning increases point by point?",
      },
      {
        type: "paragraph",
        text: "First, I learned about global shortcuts. Then I learned that Joplin needs cross-platform behavior. Then I learned that Windows and macOS worked. Then I learned that Ubuntu Wayland did not. Then I learned about Wayland security restrictions. Then I learned about X11. Then I learned about GNOME versions. Then I learned about desktop portals. Then I learned that Electron 40 does not use the portal yet.",
      },
      {
        type: "paragraph",
        text: "This is the real value. The PR is not just a PR. It expands your horizon.",
      },
      {
        type: "paragraph",
        text: "And this knowledge stays with you. It will help in the next open-source project. It will help in the next desktop app. It will help in the next bug.",
      },
      {
        type: "paragraph",
        text: "This is why open source is powerful. You learn by doing real things in real codebases with real constraints.",
      },
      {
        type: "heading",
        text: "Maintainers respect learning behavior",
      },
      {
        type: "paragraph",
        text: "You do not need to know everything. You need to be honest. You need to test. You need to communicate. You need to go back and study when you do not know something.",
      },
      {
        type: "paragraph",
        text: "I made mistakes in that PR. I did not have the full answer immediately. But I kept learning. I tested more. I came back with better context.",
      },
      {
        type: "paragraph",
        text: "That is what maintainers respect. Not fake confidence. Not AI-generated explanations. Real effort. Real testing. Real learning.",
      },
      {
        type: "heading",
        text: "Read PR conversations, not just code",
      },
      {
        type: "paragraph",
        text: "Here are a few more PRs from my own journey that are worth reading if you want to understand how open-source work actually flows.",
      },
      {
        type: "links",
        items: [
          {
            title: "Joplin PR #14582",
            href: "https://github.com/laurent22/joplin/pull/14582",
            description: "A feature-request conversation with tradeoffs and review discussion.",
          },
          {
            title: "Joplin PR #14443",
            href: "https://github.com/laurent22/joplin/pull/14443",
            description: "A small formatting lesson that reinforces checking your diff before pushing.",
          },
          {
            title: "Sugar Labs Music Blocks PR #6062",
            href: "https://github.com/sugarlabs/musicblocks/pull/6062",
            description: "A community-driven PR where meeting context and testing helped the work land quickly.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Feature work is not just writing code. There are tradeoffs. There is back and forth. There is discussion about behavior. You need to understand what maintainers actually want, not just what you want to build.",
      },
      {
        type: "paragraph",
        text: "Small lessons matter too. In one PR, I learned that VS Code can add formatting changes when you commit. Small thing? Yes. But this is exactly how open source teaches you. You make a change, review points something out, you realize your editor changed extra files, and then you learn to check your diff properly before pushing. That lesson stays.",
      },
      {
        type: "paragraph",
        text: "For the Sugar Labs Music Blocks PR, we had a discussion in the meeting. Testing mattered a lot. I showed the behavior, discussed it, tested it properly, and because the context was clear, the PR got merged quickly.",
      },
      {
        type: "paragraph",
        text: "That builds reputation. People remember who tests properly. People remember who communicates. People remember who shows up in meetings. People remember who can be trusted.",
      },
      {
        type: "paragraph",
        text: "And when selection time comes for programs like GSoC or LFX, reputation matters.",
      },
      {
        type: "heading",
        text: "Selection is not only about PR count",
      },
      {
        type: "paragraph",
        text: "This is something beginners need to understand. More PRs does not always mean better.",
      },
      {
        type: "paragraph",
        text: "Someone with fewer PRs but strong communication, proper testing, consistent community presence, and trust from mentors can stand out more than someone who silently opened many random PRs.",
      },
      {
        type: "paragraph",
        text: "Mentors are not only selecting code. They are selecting a person they may work with for months.",
      },
      {
        type: "paragraph",
        text: "So they care about how you communicate. They care about whether you show up. They care about whether you understand the project. They care about whether you can learn when stuck. They care about whether you can take review without ego. They care about whether you are reliable.",
      },
      {
        type: "paragraph",
        text: "That is why community engagement matters.",
      },
      {
        type: "heading",
        text: "The actual open-source loop",
      },
      {
        type: "paragraph",
        text: "By this point, you should understand how solving an issue really goes.",
      },
      {
        type: "paragraph",
        text: "You do not become good by waiting until you know everything. You become good by entering a real codebase and learning through real problems.",
      },
      {
        type: "list",
        items: [
          "Join the community.",
          "Observe the project.",
          "Find active mentors.",
          "Pick an active repo.",
          "Clone it locally.",
          "Set it up.",
          "Use AI to understand the architecture.",
          "Find a real issue.",
          "Reproduce it.",
          "Study what the issue demands.",
          "Fix it.",
          "Test it.",
          "Open the PR.",
          "Discuss.",
          "Make mistakes.",
          "Learn from those mistakes.",
          "Improve.",
          "Repeat.",
        ],
      },
      {
        type: "paragraph",
        text: "Every time you do this, your horizon increases. Every issue makes the codebase less scary. Every review sharpens your taste. Every mistake teaches you something real. Every conversation improves your engineering communication.",
      },
      {
        type: "paragraph",
        text: "And all of this stays with you. That is how you actually grow in open source.",
      },
    ],
  },
];

export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}
