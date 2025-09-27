import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { Sling as Hamburger } from "hamburger-react";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children?: React.ReactNode; // Added for background content
}

export const StaggeredMenu: React.FC<
  StaggeredMenuProps
> = ({
  position = "right",
  colors = ["#B19EEF", "#5227FF"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = "/src/assets/logos/reactbits-gh-white.svg",
  menuButtonColor = "#fff",
  openMenuButtonColor = "#fff",
  changeMenuColorOnOpen = true,
  accentColor = "#5227FF",
  open,
  setOpen,
  onMenuOpen,
  onMenuClose,
  children, // Added for background content
}: StaggeredMenuProps) => {
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const backgroundRef = useRef<HTMLDivElement | null>(null); // Added for background blur

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const textWrapRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>([
    "Menu",
    "Close",
  ]);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<
    gsap.core.Tween | gsap.core.Timeline | null
  >(null);
  const spinTweenRef = useRef<gsap.core.Timeline | null>(
    null
  );
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(
    null
  );
  const colorTweenRef = useRef<gsap.core.Tween | null>(
    null
  );
  const blurTweenRef = useRef<gsap.core.Tween | null>(null); // Added for blur animation

  const toggleBtnRef = useRef<HTMLButtonElement | null>(
    null
  );
  const busyRef = useRef(false);

  const itemEntranceTweenRef =
    useRef<gsap.core.Tween | null>(null);

  // Sync the openRef with the open prop
  useLayoutEffect(() => {
    if (open !== undefined) {
      openRef.current = open;
    }
  }, [open]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const background = backgroundRef.current;

      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner)
        return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(
          preContainer.querySelectorAll(".sm-prelayer")
        ) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === "left" ? -100 : 100;
      gsap.set([panel, ...preLayers], {
        xPercent: offscreen,
      });

      // Initialize background blur
      if (background) {
        gsap.set(background, {
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
        });
      }

      gsap.set(plusH, {
        transformOrigin: "50% 50%",
        rotate: 0,
      });
      gsap.set(plusV, {
        transformOrigin: "50% 50%",
        rotate: 90,
      });
      gsap.set(icon, {
        rotate: 0,
        transformOrigin: "50% 50%",
      });

      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current)
        gsap.set(toggleBtnRef.current, {
          color: menuButtonColor,
        });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const animateBackgroundBlur = useCallback(
    (opening: boolean) => {
      const background = backgroundRef.current;
      if (!background) return;

      blurTweenRef.current?.kill();

      if (opening) {
        blurTweenRef.current = gsap.to(background, {
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        blurTweenRef.current = gsap.to(background, {
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
          duration: 0.3,
          ease: "power2.in",
        });
      }
    },
    []
  );

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(
      panel.querySelectorAll(".sm-panel-itemLabel")
    ) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll(
        ".sm-panel-list[data-numbering] .sm-panel-item"
      )
    ) as HTMLElement[];
    const socialTitle = panel.querySelector(
      ".sm-socials-title"
    ) as HTMLElement | null;
    const socialLinks = Array.from(
      panel.querySelectorAll(".sm-socials-link")
    ) as HTMLElement[];

    const layerStates = layers.map(el => ({
      el,
      start: Number(gsap.getProperty(el, "xPercent")),
    }));
    const panelStart = Number(
      gsap.getProperty(panel, "xPercent")
    );

    if (itemEls.length)
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length)
      gsap.set(numberEls, {
        ["--sm-num-opacity" as any]: 0,
      });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length)
      gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        {
          xPercent: 0,
          duration: 0.5,
          ease: "power4.inOut",
        },
        i * 0.07
      );
    });

    const lastTime = layerStates.length
      ? (layerStates.length - 1) * 0.01
      : 0;
    const panelInsertTime =
      lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 1.2;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      {
        xPercent: 0,
        duration: panelDuration,
        ease: "power4.inOut",
      },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.45;
      const itemsStart =
        panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" },
        },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            ["--sm-num-opacity" as any]: 1,
            stagger: { each: 0.04, from: "start" },
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart =
        panelInsertTime + panelDuration * 0.4;

      if (socialTitle)
        tl.to(
          socialTitle,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          socialsStart
        );
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            onComplete: () => {
              gsap.set(socialLinks, {
                clearProps: "opacity",
              });
            },
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const itemEls = Array.from(
      panel.querySelectorAll(".sm-panel-itemLabel")
    ) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll(
        ".sm-panel-list[data-numbering] .sm-panel-item"
      )
    ) as HTMLElement[];
    const socialTitle = panel.querySelector(
      ".sm-socials-title"
    ) as HTMLElement | null;
    const socialLinks = Array.from(
      panel.querySelectorAll(".sm-socials-link")
    ) as HTMLElement[];

    // Animate items out first, then the panel
    const tl = gsap.timeline({
      onComplete: () => {
        busyRef.current = false;
      },
    });

    // Animate items out (reverse of opening animation)
    if (itemEls.length) {
      tl.to(
        itemEls,
        {
          yPercent: 140,
          rotate: 10,
          duration: 0.4,
          ease: "power3.in",
          stagger: { each: 0.05, from: "end" }, // Reverse stagger direction
        },
        0
      );
    }

    if (numberEls.length) {
      tl.to(
        numberEls,
        {
          duration: 0.3,
          ease: "power2.in",
          ["--sm-num-opacity" as any]: 0,
          stagger: { each: 0.06, from: "end" }, // Reverse stagger direction
        },
        0.05
      );
    }

    if (socialTitle || socialLinks.length) {
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          0.1
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 25,
            opacity: 0,
            duration: 0.35,
            ease: "power3.in",
            stagger: { each: 0.06, from: "end" }, // Reverse stagger direction
          },
          0.1
        );
      }
    }

    // Then animate the panel and layers out
    const all: HTMLElement[] = [...layers, panel];
    const offscreen = position === "left" ? -100 : 100;

    tl.to(
      all,
      {
        xPercent: offscreen,
        duration: 0.32,
        ease: "power3.in",
        overwrite: "auto",
      },
      0.2
    ); // Start after items have begun animating out

    closeTweenRef.current = tl;
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();

    if (opening) {
      gsap.set(icon, {
        rotate: 0,
        transformOrigin: "50% 50%",
      });
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: "power3.inOut" } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening
          ? openMenuButtonColor
          : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.18,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [
      openMenuButtonColor,
      menuButtonColor,
      changeMenuColorOnOpen,
    ]
  );

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current
          ? openMenuButtonColor
          : menuButtonColor;
        gsap.set(toggleBtnRef.current, {
          color: targetColor,
        });
      } else {
        gsap.set(toggleBtnRef.current, {
          color: menuButtonColor,
        });
      }
    }
  }, [
    changeMenuColorOnOpen,
    menuButtonColor,
    openMenuButtonColor,
  ]);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? "Menu" : "Close";
    const targetLabel = opening ? "Close" : "Menu";
    const cycles = 3;

    const seq: string[] = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === "Menu" ? "Close" : "Menu";
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;

    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: "power4.out",
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    if (setOpen) setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateIcon(target);
    animateColor(target);
    animateText(target);
    animateBackgroundBlur(target); // Added blur animation
  }, [
    playOpen,
    playClose,
    animateIcon,
    animateColor,
    animateText,
    animateBackgroundBlur,
    onMenuOpen,
    onMenuClose,
    setOpen,
  ]);

  const handleHamburgerToggle = useCallback(
    (toggled: boolean) => {
      if (toggled !== openRef.current) {
        toggleMenu();
      }
    },
    [toggleMenu]
  );

  return (
    <div className="sm-scope w-full h-full relative">
      {/* Background content with blur effect */}
      <div
        ref={backgroundRef}
        className={`absolute inset-0 z-0 transition-all duration-300 `}>
        {children}
      </div>

      {/* Menu overlay and content */}
      <div
        className={
          (className ? className + " " : "") +
          "staggered-menu-wrapper relative w-full h-full z-40"
        }
        style={
          accentColor
            ? ({
                ["--sm-accent" as any]: accentColor,
              } as React.CSSProperties)
            : undefined
        }
        data-position={position}
        data-open={open || undefined}>
        <div
          ref={preLayersRef}
          className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
          aria-hidden="true">
          {(() => {
            const raw =
              colors && colors.length
                ? colors.slice(0, 4)
                : ["#1e1e22", "#35353c"];
            let arr = [...raw];
            if (arr.length >= 3) {
              const mid = Math.floor(arr.length / 2);
              arr.splice(mid, 1);
            }
            return arr.map((c, i) => (
              <div
                key={i}
                className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                style={{ background: c }}
              />
            ));
          })()}
        </div>

        <header
          className="staggered-menu-header absolute top-0 right-0 w-full flex items-center justify-end p-[2em] bg-transparent pointer-events-none z-20"
          aria-label="Main navigation header">
          <div className="pointer-events-auto border rounded-full">
            <Hamburger
              hideOutline
              rounded
              size={24}
              color={`${open ? "#fff" : menuButtonColor}`}
              toggled={openRef.current}
              onToggle={handleHamburgerToggle}
            />
          </div>
        </header>

        <aside
          id="staggered-menu-panel"
          ref={panelRef}
          className=" rounded-bl-[0px] absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_1em_2em_1em] text-[#EFEFE6] 
          overflow-y-auto z-10 bg-dark "
          aria-hidden={!openRef.current}>
          <div className=" absolute top-10 font-robotomono ml-4 tracking-medium font-bold text-sm flex items-center gap-4">
            <p className="-mt-1">OSWALDO</p>
            {/* <ThemeSwitcher /> */}
          </div>
          <div className="sm-panel-inner flex-1 flex flex-col gap-5 font-brockmann font-brockmann-nyc">
            <ul
              className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2 text-[10px]"
              role="list"
              data-numbering={
                displayItemNumbering || undefined
              }>
              {items && items.length ? (
                items.map((it, idx) => (
                  <li
                    className="sm-panel-itemWrap relative overflow-hidden leading-none my-2 ml-4"
                    key={it.label + idx}>
                    <span
                      className="sm-panel-itemNumber absolute text-light left-0 top-0 text-white opacity-100" // Changed to opacity-100
                      style={{} as any}>
                      {(idx + 1)
                        .toString()
                        .padStart(2, "0")}
                    </span>
                    <Link
                      className=" text-light overflow-hidden pl-4 sm-panel-item relative text-white font-semibold text-[3rem]  md:text-[3.5rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em] hover:text-green "
                      href={it.link}
                      aria-label={it.ariaLabel}
                      data-index={idx + 1}>
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                        {it.label}
                      </span>
                    </Link>
                  </li>
                ))
              ) : (
                <li
                  className="sm-panel-itemWrap relative overflow-hidden leading-none"
                  aria-hidden="true">
                  <span className="sm-panel-item relative text-white font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                    <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                      No items
                    </span>
                  </span>
                </li>
              )}
            </ul>

            {displaySocials &&
              socialItems &&
              socialItems.length > 0 && (
                <div
                  className="sm-socials mt-auto pt-8 flex flex-col gap-3 font-robotomono ml-8 text-light"
                  aria-label="Social links">
                  <h3 className="sm-socials-title m-0 text-[12px] font-sm text-white uppercase">
                    Socials
                  </h3>
                  <ul
                    className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap text-[10px]"
                    role="list">
                    {socialItems.map((s, i) => (
                      <li
                        key={s.label + i}
                        className="sm-socials-item">
                        <Link
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm-socials-link hover:text-green text-[10px] uppercase text-white no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StaggeredMenu;
