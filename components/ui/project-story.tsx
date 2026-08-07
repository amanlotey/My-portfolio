"use client";

import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

type ProjectKey =
  | "mindvault"
  | "movieradar"
  | "skilllens"
  | "manova"
  | "voicedesk";

interface ProjectPreviewData {
  image: string;
  title: string;
  subtitle: string;
  stack: string;
  href: string;
  actionLabel: string;
}

const projects: Record<ProjectKey, ProjectPreviewData> = {
  mindvault: {
    image: "/images/notes_generator.png",
    title: "MindVault",
    subtitle: "A private place for thoughts, feelings, and everyday moments.",
    stack: "React · Express · MongoDB",
    href: "https://github.com/amanlotey/MindVault",
    actionLabel: "View project",
  },
  movieradar: {
    image: "/images/m_1.png",
    title: "MovieRadar",
    subtitle: "Film discovery designed for the device people keep closest.",
    stack: "React Native · Expo · Appwrite",
    href: "https://github.com/amanlotey/MovieRadar",
    actionLabel: "View project",
  },
  skilllens: {
    image: "/images/skilllens.png",
    title: "SkillLens",
    subtitle:
      "Turns the gap between a resume and a role into a clear learning plan.",
    stack: "Next.js · TypeScript · Groq",
    href: "https://github.com/amanlotey/SkillLens",
    actionLabel: "View project",
  },
  manova: {
    image: "/images/manova.png",
    title: "Manova",
    subtitle:
      "Real search data, converted into prioritized SEO and AEO decisions.",
    stack: "Next.js · PostgreSQL · AI",
    href: "https://manova.pro",
    actionLabel: "View live product",
  },
  voicedesk: {
    image: "/images/voicedesk.jpg",
    title: "VoiceDesk",
    subtitle: "A real-time AI voice assistant built for actual business calls.",
    stack: "OpenAI Realtime · SIP · WebRTC",
    href: "https://github.com/amanlotey/AI-receptionist",
    actionLabel: "View project",
  },
};

const styles = `
  .project-story {
    --story-bg: #090909;
    --story-card: #151515;
    --story-copy: #858585;
    --story-white: #f5f5f5;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(5rem, 9vw, 9rem) clamp(1.25rem, 6vw, 5rem);
    background: var(--story-bg);
    isolation: isolate;
  }

  .project-story::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  .project-story__glow {
    position: absolute;
    z-index: 0;
    width: min(58rem, 92vw);
    aspect-ratio: 1;
    top: 48%;
    left: 50%;
    border-radius: 999px;
    transform: translate(-50%, -50%);
    background:
      radial-gradient(circle at 35% 40%, rgba(255, 99, 99, 0.09), transparent 32%),
      radial-gradient(circle at 65% 55%, rgba(72, 219, 251, 0.08), transparent 34%);
    filter: blur(18px);
    animation: story-breathe 9s ease-in-out infinite;
  }

  .project-story__content {
    position: relative;
    z-index: 1;
    width: min(100%, 62rem);
  }

  .project-story__eyebrow {
    margin: 0 0 1rem;
    color: rgba(255, 255, 255, 0.34);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .project-story__title {
    margin: 0 0 clamp(2rem, 4vw, 3.25rem);
    max-width: 12ch;
    color: var(--story-white);
    font-size: clamp(2.25rem, 4.8vw, 4.6rem);
    font-weight: 700;
    letter-spacing: -0.055em;
    line-height: 0.98;
  }

  .project-story__copy {
    color: var(--story-copy);
    font-size: clamp(1.05rem, 1.6vw, 1.35rem);
    font-weight: 400;
    letter-spacing: -0.015em;
    line-height: 1.78;
  }

  .project-story__copy p {
    margin: 0 0 1.35em;
    opacity: 0;
    animation: story-rise 0.8s ease forwards;
  }

  .project-story__copy p:nth-child(1) { animation-delay: 0.12s; }
  .project-story__copy p:nth-child(2) { animation-delay: 0.24s; }
  .project-story__copy p:nth-child(3) { animation-delay: 0.36s; }
  .project-story__copy p:nth-child(4) { animation-delay: 0.48s; }

  .project-story__link {
    position: relative;
    display: inline;
    padding: 0;
    border: 0;
    color: var(--story-white);
    background: transparent;
    font: inherit;
    font-weight: 700;
    letter-spacing: -0.04em;
    cursor: pointer;
  }

  .project-story__link::after {
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: -0.08em;
    height: 2px;
    background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb);
    transition: right 360ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .project-story__link:hover::after,
  .project-story__link:focus-visible::after,
  .project-story__link[aria-expanded="true"]::after {
    right: 0;
  }

  .project-story__link:focus-visible {
    outline: 2px solid rgba(72, 219, 251, 0.75);
    outline-offset: 5px;
    border-radius: 3px;
  }

  .project-preview {
    position: fixed;
    z-index: 1000;
    width: min(22rem, calc(100vw - 2rem));
    opacity: 0;
    pointer-events: none;
    transform: translateY(12px) scale(0.96);
    transition:
      opacity 220ms ease,
      transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;
  }

  .project-preview--visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scale(1);
  }

  .project-preview__inner {
    overflow: hidden;
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.25rem;
    background: rgba(21, 21, 21, 0.96);
    box-shadow:
      0 30px 70px rgba(0, 0, 0, 0.6),
      0 0 55px rgba(255, 107, 107, 0.08);
    backdrop-filter: blur(18px);
  }

  .project-preview__image-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 0.8rem;
    background: #0d0d0d;
  }

  .project-preview__image {
    object-fit: cover;
  }

  .project-preview__body {
    padding: 0.9rem 0.65rem 0.6rem;
  }

  .project-preview__topline {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .project-preview__name {
    margin: 0;
    color: var(--story-white);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .project-preview__stack {
    margin: 0.2rem 0 0;
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .project-preview__subtitle {
    margin: 0.75rem 0 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.78rem;
    line-height: 1.5;
  }

  .project-preview__action {
    display: inline-flex;
    flex: none;
    align-items: center;
    gap: 0.35rem;
    padding: 0.62rem 0.85rem;
    color: #090909;
    background: #fff;
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.14);
    font-size: 0.64rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 999px;
    transition:
      color 180ms ease,
      background 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease;
  }

  .project-preview__action:hover,
  .project-preview__action:focus-visible {
    color: #090909;
    background: #f0f0f0;
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.22);
    transform: translateY(-1px);
  }

  @keyframes story-rise {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes story-breathe {
    0%, 100% { opacity: 0.65; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
  }

  @media (max-width: 767px) {
    .project-story {
      align-items: flex-start;
      min-height: auto;
      padding-top: 6rem;
      padding-bottom: 18rem;
    }

    .project-story__title {
      max-width: 9ch;
    }

    .project-story__copy {
      line-height: 1.5;
    }

    .project-preview {
      position: fixed;
      left: 1rem !important;
      right: 1rem;
      bottom: 1rem;
      top: auto !important;
      width: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .project-story__glow,
    .project-story__copy p {
      animation: none;
    }

    .project-story__copy p {
      opacity: 1;
    }

    .project-preview,
    .project-story__link::after {
      transition: none;
    }
  }
`;

interface StoryLinkProps {
  projectKey: ProjectKey;
  children: React.ReactNode;
  activeKey: ProjectKey | null;
  onShow: (
    key: ProjectKey,
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
  ) => void;
  onMove: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onLeave: () => void;
}

function StoryLink({
  projectKey,
  children,
  activeKey,
  onShow,
  onMove,
  onLeave,
}: StoryLinkProps) {
  return (
    <button
      type="button"
      className="project-story__link"
      aria-expanded={activeKey === projectKey}
      onMouseEnter={(event) => onShow(projectKey, event)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onFocus={(event) => onShow(projectKey, event)}
      onBlur={onLeave}
      onClick={(event) => onShow(projectKey, event)}
    >
      {children}
    </button>
  );
}

interface PreviewCardProps {
  project: ProjectPreviewData | null;
  position: { x: number; y: number };
  visible: boolean;
  onEnter: () => void;
  onLeave: () => void;
}

function PreviewCard({
  project,
  position,
  visible,
  onEnter,
  onLeave,
}: PreviewCardProps) {
  if (!project) return null;

  return (
    <aside
      className={`project-preview ${visible ? "project-preview--visible" : ""}`}
      style={{ left: position.x, top: position.y }}
      aria-live="polite"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div className="project-preview__inner">
        <div className="project-preview__image-wrap">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 767px) calc(100vw - 3rem), 352px"
            className="project-preview__image"
          />
        </div>

        <div className="project-preview__body">
          <div className="project-preview__topline">
            <div>
              <h3 className="project-preview__name">{project.title}</h3>
              <p className="project-preview__stack">{project.stack}</p>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-preview__action"
            >
              {project.actionLabel}
              <ExternalLink aria-hidden="true" size={13} />
            </a>
          </div>
          <p className="project-preview__subtitle">{project.subtitle}</p>
        </div>
      </div>
    </aside>
  );
}

export function ProjectStory() {
  const [activeKey, setActiveKey] = useState<ProjectKey | null>(null);
  const [position, setPosition] = useState({ x: 24, y: 24 });
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    Object.values(projects).forEach((project) => {
      const image = new window.Image();
      image.src = project.image;
    });

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const updatePosition = useCallback(
    (
      event:
        | React.MouseEvent<HTMLButtonElement>
        | React.FocusEvent<HTMLButtonElement>,
    ) => {
      if (window.innerWidth < 768) return;

      const cardWidth = 352;
      const cardHeight = 330;
      const viewportPadding = 20;
      const gap = 22;
      const isMouseEvent = "clientX" in event && event.clientX > 0;
      const rect = event.currentTarget.getBoundingClientRect();
      const pointerX = isMouseEvent
        ? event.clientX
        : rect.left + rect.width / 2;
      const pointerY = isMouseEvent ? event.clientY : rect.top;

      let x = pointerX - cardWidth / 2;
      let y = pointerY - cardHeight - gap;

      x = Math.max(
        viewportPadding,
        Math.min(x, window.innerWidth - cardWidth - viewportPadding),
      );

      if (y < viewportPadding) {
        y = Math.min(
          rect.bottom + gap,
          window.innerHeight - cardHeight - viewportPadding,
        );
      }

      setPosition({ x, y });
    },
    [],
  );

  const handleShow = useCallback(
    (
      key: ProjectKey,
      event:
        | React.MouseEvent<HTMLButtonElement>
        | React.FocusEvent<HTMLButtonElement>,
    ) => {
      cancelHide();
      setActiveKey(key);
      setVisible(true);
      updatePosition(event);
    },
    [cancelHide, updatePosition],
  );

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (visible) updatePosition(event);
    },
    [updatePosition, visible],
  );

  const scheduleHide = useCallback(() => {
    cancelHide();
    hideTimer.current = setTimeout(() => setVisible(false), 180);
  }, [cancelHide]);

  const activeProject = activeKey ? projects[activeKey] : null;

  const storyLinkProps = {
    activeKey,
    onShow: handleShow,
    onMove: handleMove,
    onLeave: scheduleHide,
  };

  return (
    <>
      <style>{styles}</style>
      <section className="project-story" aria-labelledby="project-story-title">
        <div className="project-story__glow" aria-hidden="true" />

        <div className="project-story__content">
          <p className="project-story__eyebrow">The story behind the work</p>
          <h2 id="project-story-title" className="project-story__title">
            I build around real friction.
          </h2>

          <div className="project-story__copy">
            <p>
              My projects usually begin with the same question: what is making
              someone&apos;s day harder than it needs to be? I first explored
              that idea with{" "}
              <StoryLink projectKey="mindvault" {...storyLinkProps}>
                MindVault
              </StoryLink>
              , a privacy-first diary that taught me how much trust, security,
              and thoughtful product design matter.
            </p>

            <p>
              Then I moved those lessons from the browser to the device people
              keep closest. With{" "}
              <StoryLink projectKey="movieradar" {...storyLinkProps}>
                MovieRadar
              </StoryLink>
              , I learned to shape discovery, authentication, and live data into
              a focused mobile experience instead of simply shrinking a website.
            </p>

            <p>
              As AI became more capable, I wanted to use it for clarity rather
              than novelty. That became{" "}
              <StoryLink projectKey="skilllens" {...storyLinkProps}>
                SkillLens
              </StoryLink>
              , which turns a confusing job search into matched skills, missing
              skills, and a practical learning plan. The same instinct led to{" "}
              <StoryLink projectKey="manova" {...storyLinkProps}>
                Manova 
              </StoryLink>
                , built from my own frustration with checking SEO data across
              separate client accounts and turning it into prioritized actions.
            </p>

            <p>
              Now I&apos;m exploring what happens when software can listen and
              respond in real time. With{" "}
              <StoryLink projectKey="voicedesk" {...storyLinkProps}>
                VoiceDesk
              </StoryLink>
              , I&apos;m bringing AI into real business calls through voice,
              calendars, and company knowledge. Different products, same
              purpose: understand the friction, then build something that gives
              people time back.
            </p>
          </div>
        </div>

        <PreviewCard
          project={activeProject}
          position={position}
          visible={visible}
          onEnter={cancelHide}
          onLeave={scheduleHide}
        />
      </section>
    </>
  );
}