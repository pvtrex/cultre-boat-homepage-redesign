import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed: boolean;
  closeOnClickAway?: boolean;
  isHeaderScrolled?: boolean;
}

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#5227FF', '#220a46'],
  items = [],
  displaySocials = false,
  displayItemNumbering = false,
  className,
  logoUrl = '',
  menuButtonColor = '#ffffff',
  openMenuButtonColor = '#ffffff',
  accentColor = '#5227FF',
  isFixed = true,
  closeOnClickAway = true,
  isHeaderScrolled = false,
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    const preContainer = preLayersRef.current;
    if (!panel || !preContainer) return;

    const layers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
    preLayerElsRef.current = layers;

    const offscreen = position === 'left' ? -100 : 100;
    gsap.set([panel, ...layers], { xPercent: offscreen });
    if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
  }, [menuButtonColor, position]);

  const playOpen = useCallback(() => {
    gsap.to([...preLayerElsRef.current, panelRef.current], {
      xPercent: 0,
      duration: 0.6,
      ease: 'power4.out',
    });
  }, []);

  const playClose = useCallback(() => {
    const offscreen = position === 'left' ? -100 : 100;
    gsap.to([...preLayerElsRef.current, panelRef.current], {
      xPercent: offscreen,
      duration: 0.4,
      ease: 'power3.in',
    });
  }, [position]);

  const toggleMenu = () => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    target ? playOpen() : playClose();
  };

  return (
    <div className={`sm-scope z-40 ${isFixed ? 'fixed top-0 left-0 w-screen h-screen' : 'w-full h-full'}`}>
      <div className={(className ?? '') + ' staggered-menu-wrapper relative w-full h-full z-40'}>

        <div ref={preLayersRef} className="sm-prelayers absolute top-0 right-0 bottom-0 z-[5]">
          {colors.map((c, i) => (
            <div key={i} className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: c }} />
          ))}
        </div>

        <header
          className={`absolute top-0 right-0 flex justify-end ${
            isHeaderScrolled ? 'pt-3' : 'pt-5'
          } pr-4 z-20`}
        >
          <button ref={toggleBtnRef} onClick={toggleMenu} className="p-2">
            <span className="block w-[24px] h-[18px] relative">
              <span ref={plusHRef} className="absolute top-0 left-0 w-full h-[2px] bg-current" />
              <span className="absolute top-1/2 left-0 w-full h-[2px] bg-current -translate-y-1/2" />
              <span ref={plusVRef} className="absolute bottom-0 left-0 w-full h-[2px] bg-current" />
            </span>
          </button>
        </header>

        <aside
          ref={panelRef}
          className="staggered-menu-panel absolute top-0 right-0 h-full flex flex-col p-[6em_2em_2em_2em] z-10 backdrop-blur-[12px]"
          style={{
            backgroundColor: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
          }}
        >
          <ul className="sm-panel-list flex flex-col gap-2">
            {items.map((it, idx) => (
              <li key={idx} className="sm-panel-itemWrap relative overflow-hidden leading-none">
                <a
                  href={it.link}
                  className="sm-panel-item relative font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase inline-block pr-[1.4em]"
                  style={{ color: 'hsl(var(--foreground))' }}
                  onClick={() => toggleMenu()}
                >
                  <span className="sm-panel-itemLabel inline-block">
                    {it.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default StaggeredMenu;
