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
  {
    title: "My GSOC Journey: The 2-Month Sprint from Doubt to Done",
    date: "Jun 2025",
    claps: 392,
    tags: ["GSOC", "Open Source"],
    link: "/blogs/gsoc-journey",
    isExternal: false,
  },
  {
    title: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
    date: "Feb 2025",
    claps: 104,
    tags: ["Authentication", "TypeScript", "MongoDB"],
    link: "https://medium.com/@ashutoshx7",
    isExternal: true,
  }
];

export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}
