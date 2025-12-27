import React, { useEffect, useLayoutEffect, useRef } from "react";
import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows, focusWindow } = useWindowStore();
    const win = windows?.[windowKey];

    const ref = useRef(null);
    const dragRef = useRef(null);
    const savedRect = useRef(null);

    // Small initial offsets for certain windows so they don't open directly
    // under the Finder or other docked UI. Values are simple px strings.
    const INITIAL_WINDOW_POS = {
      txtfile: { left: "120px", top: "80px" },
      imgfile: { left: "120px", top: "80px" },
    };

    if (!win) return null;

    const { isOpen, isMinimized, isMaximized, zIndex } = win;

    /* ---------------------------------------------------------
       OPEN / CLOSE (FIXED)
    --------------------------------------------------------- */
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      // ✅ OPEN
      if (isOpen) {
        el.style.display = "block";

        // If the window has no savedRect (first open) and no explicit
        // left/top set, apply an initial offset for better visibility.
        if (!savedRect.current) {
          const pos = INITIAL_WINDOW_POS[windowKey];
          if (pos && !el.style.left && !el.style.top) {
            gsap.set(el, { left: pos.left, top: pos.top });
          }
        }

        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
        );
      }
      // ✅ CLOSE
      else {
        gsap.to(el, {
          opacity: 0,
          scale: 0.85,
          y: 20,
          duration: 0.25,
          onComplete: () => {
            el.style.display = "none";

            // ✅ FULL RESET AFTER CLOSE
            savedRect.current = null;
            dragRef.current?.enable();

            gsap.set(el, {
              width: "",
              height: "",
              left: "",
              top: "",
              clearProps: "x,y",
            });
          },
        });
      }
    }, [isOpen]);

    /* ---------------------------------------------------------
       DRAGGABLE
    --------------------------------------------------------- */
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
        bounds: window,
      });

      dragRef.current = instance;
      return () => instance.kill();
    }, []);

    /* ---------------------------------------------------------
       MINIMIZE
    --------------------------------------------------------- */
    useEffect(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      if (isMinimized) {
        gsap.to(el, {
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.25,
          onComplete: () => {
            el.style.display = "none";
          },
        });
      } else {
        el.style.display = "block";

        // ✅ Restore original size if needed
        if (!isMaximized && savedRect.current) {
          gsap.set(el, {
            left: savedRect.current.left,
            top: savedRect.current.top,
            width: savedRect.current.width,
            height: savedRect.current.height,
          });
        }

        gsap.to(el, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.25,
        });
      }
    }, [isMinimized, isMaximized, isOpen]);

    /* ---------------------------------------------------------
       MAXIMIZE / RESTORE
    --------------------------------------------------------- */
    useEffect(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      gsap.set(el, { clearProps: "x,y" });

      if (isMaximized) {
        if (!savedRect.current) {
          const rect = el.getBoundingClientRect();
          savedRect.current = {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
          };
        }

        dragRef.current?.disable();

        gsap.to(el, {
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        if (savedRect.current) {
          dragRef.current?.enable();

          gsap.to(el, {
            left: savedRect.current.left,
            top: savedRect.current.top,
            width: savedRect.current.width,
            height: savedRect.current.height,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    }, [isMaximized, isMinimized, isOpen]);

    /* ---------------------------------------------------------
       FOCUS
    --------------------------------------------------------- */
    const handleFocus = () => {
      if (isOpen) focusWindow(windowKey);
    };

    /* ---------------------------------------------------------
       RENDER (NEVER UNMOUNTS)
    --------------------------------------------------------- */
    return (
      <section
        id={windowKey}
        ref={ref}
        className="absolute"
        style={{ zIndex, display: "none" }}
        onMouseDown={handleFocus}
      >
        <Component {...props} />
      </section>
    );
  };

  return Wrapped;
};

export default WindowWrapper;
