"use client";

import React, { useEffect, useRef } from "react";

export default function MakeoverMentor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {




    // 3. Floating Preview Image Following Cursor on Services Index
    const previewContainer = document.getElementById("floating-preview");
    const previewImg = document.getElementById("floating-preview-img") as HTMLImageElement | null;
    const previewLabel = document.getElementById("floating-preview-label");
    const serviceItems = document.querySelectorAll(".service-index-item");

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let animFrameId: number;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX + 160;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);

    function animatePreview() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      if (previewContainer) {
        previewContainer.style.left = `${currentX}px`;
        previewContainer.style.top = `${currentY}px`;
      }
      animFrameId = requestAnimationFrame(animatePreview);
    }
    animFrameId = requestAnimationFrame(animatePreview);

    const serviceMouseEnterHandlers: Array<{ el: Element; handler: () => void }> = [];
    const serviceMouseLeaveHandlers: Array<{ el: Element; handler: () => void }> = [];

    serviceItems.forEach((item) => {
      const onEnter = () => {
        const src = item.getAttribute("data-preview");
        const title = item.getAttribute("data-title");
        if (src && previewContainer && previewImg) {
          previewImg.src = src;
          if (previewLabel) previewLabel.innerText = title || "";
          previewContainer.classList.add("active");
        }
      };
      const onLeave = () => {
        if (previewContainer) {
          previewContainer.classList.remove("active");
        }
      };
      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
      serviceMouseEnterHandlers.push({ el: item, handler: onEnter });
      serviceMouseLeaveHandlers.push({ el: item, handler: onLeave });
    });

    // 4. Method Interactive Sequence Row Preview Swap
    const methodRows = document.querySelectorAll(".method-interactive-row");
    const methodSpreadImg = document.getElementById("method-spread-img") as HTMLImageElement | null;

    const methodHandlers: Array<{ el: Element; handler: () => void }> = [];

    methodRows.forEach((row) => {
      const onRowEnter = () => {
        const preview = row.getAttribute("data-preview");
        if (preview && methodSpreadImg) {
          methodSpreadImg.style.opacity = "0.35";
          setTimeout(() => {
            if (methodSpreadImg) {
              methodSpreadImg.src = preview;
              methodSpreadImg.style.opacity = "1";
            }
          }, 180);
        }
      };
      row.addEventListener("mouseenter", onRowEnter);
      methodHandlers.push({ el: row, handler: onRowEnter });
    });

    // 5. Aesthetic Taxonomy Interactive Hover Engine
    const words = document.querySelectorAll(".taxonomy-word");
    const taxonomyImg = document.getElementById("taxonomy-img-preview") as HTMLImageElement | null;
    const taxonomyDesc = document.getElementById("taxonomy-desc-preview");

    const taxonomyHandlers: Array<{ el: Element; handler: () => void }> = [];

    words.forEach((word) => {
      const onTaxonomyEnter = () => {
        // Reset all words
        words.forEach((w) => {
          const span = w.querySelector("span");
          if (span) {
            span.classList.add("text-charcoal/40");
            span.classList.remove("text-charcoal", "italic");
          }
        });

        // Highlight active word
        const activeSpan = word.querySelector("span");
        if (activeSpan) {
          activeSpan.classList.remove("text-charcoal/40");
          activeSpan.classList.add("text-charcoal", "italic");
        }

        const newSrc = word.getAttribute("data-img");
        const newDesc = word.getAttribute("data-desc");

        if (newSrc && taxonomyImg) {
          taxonomyImg.style.opacity = "0.3";
          setTimeout(() => {
            if (taxonomyImg) {
              taxonomyImg.src = newSrc;
              taxonomyImg.style.opacity = "1";
            }
          }, 160);
        }
        if (newDesc && taxonomyDesc) {
          taxonomyDesc.innerText = newDesc;
        }
      };
      word.addEventListener("mouseenter", onTaxonomyEnter);
      taxonomyHandlers.push({ el: word, handler: onTaxonomyEnter });
    });

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      cancelAnimationFrame(animFrameId);



      serviceMouseEnterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      serviceMouseLeaveHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseleave", handler));
      methodHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      taxonomyHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-ivory text-charcoal font-sans antialiased film-grain select-text">
      {/* FLOATING PREVIEW CONTAINER (FOLLOWS CURSOR ON HOVER) */}
      <div className="hidden md:block" id="floating-preview">
        <img alt="Editorial preview" className="w-full h-full object-cover filter contrast-[102%]" id="floating-preview-img" src="" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4 right-4 text-[10px] font-mono uppercase tracking-widest text-ivory-50" id="floating-preview-label" />
      </div>





      {/* SECTION 01 — THE TYPOGRAPHIC PHILOSOPHY */}
      <section className="py-32 md:py-56 px-6 md:px-14 bg-ivory-50 border-t border-stone-soft relative" id="discover">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-20 md:mb-28">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="font-mono text-xs uppercase tracking-ultra text-champagne-dark font-medium">THE PHILOSOPHY</span>
            <span className="w-12 h-[1px] bg-champagne" />
          </div>

          <div className="space-y-12 md:space-y-20">
            <div className="max-w-4xl">
              <span className="font-mono text-xs text-stone-taupe uppercase tracking-widest block mb-4">PRINCIPLE I</span>
              <h2 className="editorial-statement font-serif text-charcoal font-normal tracking-tight">
                “BEAUTY IS NOT<br />
                <span className="italic font-light">BECOMING SOMEONE ELSE.</span>”
              </h2>
            </div>
            <div className="w-full flex justify-end">
              <div className="max-w-3xl text-right">
                <span className="font-mono text-xs text-stone-taupe uppercase tracking-widest block mb-4">PRINCIPLE II</span>
                <p className="editorial-statement font-serif text-charcoal/80 font-light">
                  “IT IS DISCOVERING<br />
                  <span className="italic text-charcoal">WHAT ALREADY FEELS LIKE YOU.</span>”
                </p>
              </div>
            </div>
          </div>

          <div className="mt-28 md:mt-40 pt-10 border-t border-stone-soft flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono uppercase tracking-widest text-stone-taupe gap-4">
            <span>MAKEOVER MENTOR DOCTRINE</span>
            <span className="font-serif italic text-base capitalize tracking-normal text-charcoal">Presence over performance</span>
            <span>FOLIO REF. NY-MM25</span>
          </div>
        </div>
      </section>

      {/* SECTION 02 — THE METHOD */}
      <section className="py-28 md:py-48 px-6 md:px-14 bg-ivory border-t border-stone-soft" id="method">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="sticky top-28">
                <div className="aspect-[3/4] w-full overflow-hidden bg-stone-soft relative">
                  <img
                    alt="Editorial magazine spread: The Quiet Luxury Issue in cashmere and grace"
                    className="w-full h-full object-cover transition-opacity duration-700 ease-out"
                    id="method-spread-img"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XjoXe6eZlFy7tPhMZBDoM1x38k5K183olZSb7WMdZUQEA1kf0oj4cDSD4pLAO0ATFt9Y_ws_WuA-Y-cqWD-2pR_KQoZGuoIIrDsQM2LtQz7ZM9OGOHyDJ0UByWKASFg99_5Cu12sUwIfhAQoXiQPMLHdQcGvXwBCZBwDGDl7W1K2ZY4zqLpCJtnG4ys0ffyEQPA4m4L9n9W26UHbVIn_Wo5YV_MQEUouUuCEr9UGCJVGsY8nVAJu18FeE"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end font-mono text-[11px] tracking-widest uppercase">
                    <div>
                      <p className="font-serif text-lg tracking-normal italic normal-case text-ivory-50">Sartorial Precision</p>
                      <p className="text-white/70 text-[10px]">Natural Glow · Cashmere &amp; Grace</p>
                    </div>
                    <span className="text-champagne font-semibold">MM // SEQ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center pt-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-5 h-[1px] bg-champagne" />
                <span className="font-mono text-xs uppercase tracking-ultra text-champagne-dark font-medium">THE METHOD</span>
              </div>
              <h2 className="section-title font-serif text-charcoal font-normal mb-8">
                LESS NOISE.<br />
                <span className="italic font-light">MORE YOU.</span>
              </h2>
              <p className="text-base md:text-lg text-charcoal/70 font-light leading-relaxed max-w-xl mb-14">
                We dismantle the commercial theatre of conventional styling. We analyze bone architecture, undertone geometry, wardrobe ergonomics, and personal psychology to sculpt an effortless visual signature.
              </p>

              <div className="border-t border-charcoal/20">
                {/* 01 DISCOVER */}
                <div
                  className="group py-8 md:py-10 border-b border-charcoal/15 cursor-pointer transition-colors duration-300 hover:border-charcoal method-interactive-row"
                  data-caption="Phase I — Understand what already works"
                  data-preview="https://lh3.googleusercontent.com/aida/AEtjO1XjoXe6eZlFy7tPhMZBDoM1x38k5K183olZSb7WMdZUQEA1kf0oj4cDSD4pLAO0ATFt9Y_ws_WuA-Y-cqWD-2pR_KQoZGuoIIrDsQM2LtQz7ZM9OGOHyDJ0UByWKASFg99_5Cu12sUwIfhAQoXiQPMLHdQcGvXwBCZBwDGDl7W1K2ZY4zqLpCJtnG4ys0ffyEQPA4m4L9n9W26UHbVIn_Wo5YV_MQEUouUuCEr9UGCJVGsY8nVAJu18FeE"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-6 md:space-x-12">
                      <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium">01</span>
                      <div>
                        <h3 className="font-serif text-2xl md:text-4xl text-charcoal group-hover:italic group-hover:translate-x-2 transition-all duration-300">DISCOVER</h3>
                        <p className="text-sm md:text-base text-charcoal/70 font-light mt-2">“Understand what already works.”</p>
                        <p className="text-xs text-charcoal/60 font-light mt-1 max-w-md hidden md:block">
                          Intimate diagnostic: facial symmetry, natural pigment harmonies, posture cadence, and lifestyle realities.
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-stone-taupe group-hover:text-charcoal transition-colors">PHASE I</span>
                  </div>
                </div>

                {/* 02 DEFINE */}
                <div
                  className="group py-8 md:py-10 border-b border-charcoal/15 cursor-pointer transition-colors duration-300 hover:border-charcoal method-interactive-row"
                  data-caption="Phase II — Remove the noise"
                  data-preview="https://lh3.googleusercontent.com/aida/AEtjO1V4XI3x6rIlF1Mw1MtX-DK3lDyPMfXiyiRK76u89jNqa5374qKstw_zzY7JorcGFc1-Q1Lx-rgab5xu24_-dax5bwnCQwTk21W0nc3ldSSmZfraBYc2_XT9YJYRyPyEZG6CQLCyp0Hy830zSLxMENv4n8fwEtb6E519FbVAN4mHBME5RwuWo9OF9qjTugQtwdx5XBJUQPLhya4Cz5h48ltkQ0JmH4BXOFqY2rH71JuHqUF_yz1OR0uq6Bk"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-6 md:space-x-12">
                      <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium">02</span>
                      <div>
                        <h3 className="font-serif text-2xl md:text-4xl text-charcoal group-hover:italic group-hover:translate-x-2 transition-all duration-300">DEFINE</h3>
                        <p className="text-sm md:text-base text-charcoal/70 font-light mt-2">“Remove the noise.”</p>
                        <p className="text-xs text-charcoal/60 font-light mt-1 max-w-md hidden md:block">
                          Stripping away trend clutter. Crafting a bespoke color palette, haircut geometry, and a ten-minute daily cosmetic blueprint.
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-stone-taupe group-hover:text-charcoal transition-colors">PHASE II</span>
                  </div>
                </div>

                {/* 03 TRANSFORM */}
                <div
                  className="group py-8 md:py-10 border-b border-charcoal/15 cursor-pointer transition-colors duration-300 hover:border-charcoal method-interactive-row"
                  data-caption="Phase III — Build the version that feels like you"
                  data-preview="https://lh3.googleusercontent.com/aida/AEtjO1U70CtO0Y9H5kZrkp5C4mm8zZgm3GCruc7Z4UqlhKiRl6lOrDUCgyOtdK-kVRBJEQjWrvX4YkxnWHuHLY4xR7rC8WhfzCsJmmfGX1uOu22CEXgd9-V9nmy53J2P8RljB0JHuni2QvktZgE5Qw3Hk96uLjVHoB4vijwuyDCr07uENKf-THiOZfffn9tJG0xSTOMKXTMZSPZ5ELxZrqmj3cSyhnSN83o9-q3qj7XuudV_AENAjYAa4ZrpT8k"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-6 md:space-x-12">
                      <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium">03</span>
                      <div>
                        <h3 className="font-serif text-2xl md:text-4xl text-charcoal group-hover:italic group-hover:translate-x-2 transition-all duration-300">TRANSFORM</h3>
                        <p className="text-sm md:text-base text-charcoal/70 font-light mt-2">“Build the version that feels like you.”</p>
                        <p className="text-xs text-charcoal/60 font-light mt-1 max-w-md hidden md:block">
                          The live studio transformation: bespoke haircut sculpting, spectral shade calibration, and silhouette tailoring.
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-stone-taupe group-hover:text-charcoal transition-colors">PHASE III</span>
                  </div>
                </div>

                {/* 04 REFINE */}
                <div
                  className="group py-8 md:py-10 border-b border-charcoal/15 cursor-pointer transition-colors duration-300 hover:border-charcoal method-interactive-row"
                  data-caption="Phase IV — Make it effortless"
                  data-preview="https://lh3.googleusercontent.com/aida/AEtjO1W65uyoreI2nzvtFQzcrw3woDlBbVq1zM29ABE594ta2JLAlLsgZtkRKWLdxE_iRvuK7u5Ezs9Uw5q9YorRXXKNfdW8iG2jmz27Ejhv7HPL8JbRJEwbUSEydi6Y3cS8Ny60iJhq_suJzVm9O3LFwAwBkqSsrb7Q0XJl1ff_RWqCkTw7wjHPc3wg0tS8ECbiSXVPtvBgybn8mJ1wB9J1wlrzqEHl7lywflIHv0BUDaq81uukkpZz517-jA"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-6 md:space-x-12">
                      <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium">04</span>
                      <div>
                        <h3 className="font-serif text-2xl md:text-4xl text-charcoal group-hover:italic group-hover:translate-x-2 transition-all duration-300">REFINE</h3>
                        <p className="text-sm md:text-base text-charcoal/70 font-light mt-2">“Make it effortless.”</p>
                        <p className="text-xs text-charcoal/60 font-light mt-1 max-w-md hidden md:block">
                          Long-term stewardship: curated seasonal touchpoints, wardrobe lookbook dossier, and private concierge access.
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-stone-taupe group-hover:text-charcoal transition-colors">PHASE IV</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a className="editorial-cta font-mono text-xs uppercase tracking-widest text-charcoal" href="#consultation">
                  <span>REQUEST METHOD DOSSIER</span>
                  <span className="cta-arrow ml-2 text-champagne">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 04 — EDITORIAL SERVICES INDEX */}
      <section className="py-28 md:py-48 px-6 md:px-14 bg-ivory border-t border-stone-soft" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-charcoal/20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-[1px] bg-champagne" />
                <span className="font-mono text-xs uppercase tracking-ultra text-champagne-dark font-medium">CURATED SERVICES</span>
              </div>
              <h2 className="section-title font-serif text-charcoal font-normal">
                SERVICES INDEX.
              </h2>
            </div>
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-stone-taupe mt-4 md:mt-0">
              BY BESPOKE INTAKE &amp; PRIVATE RESIDENCY
            </p>
          </div>

          <div className="border-b border-charcoal/20">
            {/* 01 PERSONAL MAKEOVER */}
            <div
              className="service-index-item group py-10 md:py-14 border-t border-charcoal/15 transition-all duration-500 hover:pl-4 cursor-pointer relative"
              data-preview="https://lh3.googleusercontent.com/aida/AEtjO1U70CtO0Y9H5kZrkp5C4mm8zZgm3GCruc7Z4UqlhKiRl6lOrDUCgyOtdK-kVRBJEQjWrvX4YkxnWHuHLY4xR7rC8WhfzCsJmmfGX1uOu22CEXgd9-V9nmy53J2P8RljB0JHuni2QvktZgE5Qw3Hk96uLjVHoB4vijwuyDCr07uENKf-THiOZfffn9tJG0xSTOMKXTMZSPZ5ELxZrqmj3cSyhnSN83o9-q3qj7XuudV_AENAjYAa4ZrpT8k"
              data-title="01 / PERSONAL MAKEOVER"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium md:col-span-1">01</span>
                <div className="md:col-span-7">
                  <h3 className="service-headline font-serif text-charcoal font-normal group-hover:italic transition-all duration-300">
                    PERSONAL MAKEOVER
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-light mt-3 max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out overflow-hidden">
                    The holistic reimagining. Complete diagnostic of facial symmetry, hair texture sculpting, spectral color swatching, and a 24-piece core capsule wardrobe.
                  </p>
                </div>
                <div className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-stone-taupe">
                  3-Day Intensive · NYC / Paris
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="editorial-cta font-mono text-xs uppercase tracking-widest text-charcoal">
                    <span>INQUIRE</span>
                    <span className="cta-arrow ml-1 text-champagne">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 02 MAKEUP & BEAUTY */}
            <div
              className="service-index-item group py-10 md:py-14 border-t border-charcoal/15 transition-all duration-500 hover:pl-4 cursor-pointer relative"
              data-preview="https://lh3.googleusercontent.com/aida/AEtjO1V4XI3x6rIlF1Mw1MtX-DK3lDyPMfXiyiRK76u89jNqa5374qKstw_zzY7JorcGFc1-Q1Lx-rgab5xu24_-dax5bwnCQwTk21W0nc3ldSSmZfraBYc2_XT9YJYRyPyEZG6CQLCyp0Hy830zSLxMENv4n8fwEtb6E519FbVAN4mHBME5RwuWo9OF9qjTugQtwdx5XBJUQPLhya4Cz5h48ltkQ0JmH4BXOFqY2rH71JuHqUF_yz1OR0uq6Bk"
              data-title="02 / MAKEUP &amp; BEAUTY"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium md:col-span-1">02</span>
                <div className="md:col-span-7">
                  <h3 className="service-headline font-serif text-charcoal font-normal group-hover:italic transition-all duration-300">
                    MAKEUP &amp; BEAUTY
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-light mt-3 max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out overflow-hidden">
                    Technique-first instruction celebrating light and skin texture. No artificial cake formulas; mastery of your radiant ten-minute daily ritual.
                  </p>
                </div>
                <div className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-stone-taupe">
                  Private 1:1 Studio Masterclass
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="editorial-cta font-mono text-xs uppercase tracking-widest text-charcoal">
                    <span>INQUIRE</span>
                    <span className="cta-arrow ml-1 text-champagne">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 03 HAIR & STYLING */}
            <div
              className="service-index-item group py-10 md:py-14 border-t border-charcoal/15 transition-all duration-500 hover:pl-4 cursor-pointer relative"
              data-preview="https://lh3.googleusercontent.com/aida/AEtjO1XjoXe6eZlFy7tPhMZBDoM1x38k5K183olZSb7WMdZUQEA1kf0oj4cDSD4pLAO0ATFt9Y_ws_WuA-Y-cqWD-2pR_KQoZGuoIIrDsQM2LtQz7ZM9OGOHyDJ0UByWKASFg99_5Cu12sUwIfhAQoXiQPMLHdQcGvXwBCZBwDGDl7W1K2ZY4zqLpCJtnG4ys0ffyEQPA4m4L9n9W26UHbVIn_Wo5YV_MQEUouUuCEr9UGCJVGsY8nVAJu18FeE"
              data-title="03 / HAIR &amp; STYLING"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium md:col-span-1">03</span>
                <div className="md:col-span-7">
                  <h3 className="service-headline font-serif text-charcoal font-normal group-hover:italic transition-all duration-300">
                    HAIR &amp; STYLING
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-light mt-3 max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out overflow-hidden">
                    Sculptural cut calibrated to your facial bone planes, natural cowlicks, and growth patterns. Hair that behaves effortlessly without high heat.
                  </p>
                </div>
                <div className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-stone-taupe">
                  Studio Haircut &amp; Direction
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="editorial-cta font-mono text-xs uppercase tracking-widest text-charcoal">
                    <span>INQUIRE</span>
                    <span className="cta-arrow ml-1 text-champagne">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 04 PERSONAL COLOUR */}
            <div
              className="service-index-item group py-10 md:py-14 border-t border-charcoal/15 transition-all duration-500 hover:pl-4 cursor-pointer relative"
              data-preview="https://lh3.googleusercontent.com/aida-public/AB6AXuDG_MT1AF3zLL23tiZHwYA8vraBGEOfNDbw95ijJbFdh3hv9yGEIfKt0M3EJdRQn6fTW4HAWtuXasfUZHrxZx5bQg_NFLwnEBG6GKZ1U7lV2iUzF3ufa0-DvANpqzeQPYCj_cz8kkjyWtxxmIu92QNdlKRLiiqIj0zbRt8gdtWF6VAukDOtVXA-EiD7JgIHGOTindkFIkP-k_0oKUK068Dt4WHhXOl9FKTvyYuCauIWEkj5I0e0CvaM"
              data-title="04 / PERSONAL COLOUR"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium md:col-span-1">04</span>
                <div className="md:col-span-7">
                  <h3 className="service-headline font-serif text-charcoal font-normal group-hover:italic transition-all duration-300">
                    PERSONAL COLOUR
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-light mt-3 max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out overflow-hidden">
                    Precision spectral draping in calibrated north daylight. Identifying your 36 signature shades in fabrics, metals, and lip pigments.
                  </p>
                </div>
                <div className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-stone-taupe">
                  Spectral Draping Dossier
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="editorial-cta font-mono text-xs uppercase tracking-widest text-charcoal">
                    <span>INQUIRE</span>
                    <span className="cta-arrow ml-1 text-champagne">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 05 WARDROBE & IMAGE */}
            <div
              className="service-index-item group py-10 md:py-14 border-t border-charcoal/15 transition-all duration-500 hover:pl-4 cursor-pointer relative"
              data-preview="https://lh3.googleusercontent.com/aida/AEtjO1W65uyoreI2nzvtFQzcrw3woDlBbVq1zM29ABE594ta2JLAlLsgZtkRKWLdxE_iRvuK7u5Ezs9Uw5q9YorRXXKNfdW8iG2jmz27Ejhv7HPL8JbRJEwbUSEydi6Y3cS8Ny60iJhq_suJzVm9O3LFwAwBkqSsrb7Q0XJl1ff_RWqCkTw7wjHPc3wg0tS8ECbiSXVPtvBgybn8mJ1wB9J1wlrzqEHl7lywflIHv0BUDaq81uukkpZz517-jA"
              data-title="05 / WARDROBE &amp; IMAGE"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium md:col-span-1">05</span>
                <div className="md:col-span-7">
                  <h3 className="service-headline font-serif text-charcoal font-normal group-hover:italic transition-all duration-300">
                    WARDROBE &amp; IMAGE
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-light mt-3 max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out overflow-hidden">
                    Uncompromising curation of your existing closet, removing the obsolete, and sourcing key investment silhouettes tailored to your stature.
                  </p>
                </div>
                <div className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-stone-taupe">
                  Closet Audit &amp; Sourcing
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="editorial-cta font-mono text-xs uppercase tracking-widest text-charcoal">
                    <span>INQUIRE</span>
                    <span className="cta-arrow ml-1 text-champagne">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 06 OCCASION / BRIDAL */}
            <div
              className="service-index-item group py-10 md:py-14 border-t border-charcoal/15 transition-all duration-500 hover:pl-4 cursor-pointer relative"
              data-preview="https://lh3.googleusercontent.com/aida/AEtjO1XjoXe6eZlFy7tPhMZBDoM1x38k5K183olZSb7WMdZUQEA1kf0oj4cDSD4pLAO0ATFt9Y_ws_WuA-Y-cqWD-2pR_KQoZGuoIIrDsQM2LtQz7ZM9OGOHyDJ0UByWKASFg99_5Cu12sUwIfhAQoXiQPMLHdQcGvXwBCZBwDGDl7W1K2ZY4zqLpCJtnG4ys0ffyEQPA4m4L9n9W26UHbVIn_Wo5YV_MQEUouUuCEr9UGCJVGsY8nVAJu18FeE"
              data-title="06 / OCCASION &amp; BRIDAL"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <span className="font-mono text-xs md:text-sm text-champagne-dark font-medium md:col-span-1">06</span>
                <div className="md:col-span-7">
                  <h3 className="service-headline font-serif text-charcoal font-normal group-hover:italic transition-all duration-300">
                    OCCASION / BRIDAL
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-light mt-3 max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out overflow-hidden">
                    Keynote appearances, red-carpet stewardship, and couture weddings. Absolute tranquility and refined aesthetic cohesion for your defining moments.
                  </p>
                </div>
                <div className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-stone-taupe">
                  Global Travel Available
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="editorial-cta font-mono text-xs uppercase tracking-widest text-charcoal">
                    <span>INQUIRE</span>
                    <span className="cta-arrow ml-1 text-champagne">→</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — CINEMATIC DARK INTERRUPTION (#080807) */}
      <section className="py-32 md:py-48 px-6 md:px-14 bg-obsidian text-ivory-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                <img
                  alt="Macro cosmetic shimmer powder and liquid gold drops on black slate"
                  className="w-full h-full object-cover filter contrast-[108%] brightness-[0.95] hover:scale-105 transition-transform duration-1000 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG_MT1AF3zLL23tiZHwYA8vraBGEOfNDbw95ijJbFdh3hv9yGEIfKt0M3EJdRQn6fTW4HAWtuXasfUZHrxZx5bQg_NFLwnEBG6GKZ1U7lV2iUzF3ufa0-DvANpqzeQPYCj_cz8kkjyWtxxmIu92QNdlKRLiiqIj0zbRt8gdtWF6VAukDOtVXA-EiD7JgIHGOTindkFIkP-k_0oKUK068Dt4WHhXOl9FKTvyYuCauIWEkj5I0e0CvaM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 font-mono text-[10px] tracking-widest uppercase text-champagne-light">
                  STUDIO MACRO STUDY // RAW PIGMENTS &amp; MOLTEN GOLD
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-champagne" />
                <span className="font-mono text-xs uppercase tracking-ultra text-champagne-light font-medium">CINEMATIC MOMENTUM</span>
              </div>
              <h2 className="editorial-statement font-serif text-ivory-50 font-normal leading-tight mb-8">
                THE MOMENT<br />
                EVERYTHING<br />
                <span className="italic font-light text-champagne">CHANGES.</span>
              </h2>
              <p className="text-base text-stone-soft/75 font-light leading-relaxed mb-10">
                When styling ceases to be armor and becomes an honest extension of your intelligence, stature, and presence. No masquerade. Pure light.
              </p>
              <div>
                <a className="editorial-cta font-mono text-xs uppercase tracking-widest text-ivory-50 group" href="#consultation">
                  <span className="font-medium text-champagne-light">ENTER THE SANCTUARY</span>
                  <span className="cta-arrow ml-2 text-champagne">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — PERSONAL STYLE: EDITORIAL TAXONOMY */}
      <section className="py-28 md:py-48 px-6 md:px-14 bg-ivory-50 border-t border-stone-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="font-mono text-xs uppercase tracking-ultra text-champagne-dark font-medium block mb-4">AESTHETIC TAXONOMY</span>
            <h2 className="editorial-statement font-serif text-charcoal font-normal">
              “YOUR LOOK SHOULD<br />FEEL LIKE YOU.”
            </h2>
            <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-stone-taupe mt-6">
              HOVER THE REGISTERS OF THE MAKEOVER MENTOR ARCHIVE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 md:space-y-6">
              <div
                className="taxonomy-word group cursor-pointer"
                data-desc="Monolithic oatmeal cashmere, unembellished tailoring, and clean bare skin with a single brushed-gold ear cuff."
                data-img="https://lh3.googleusercontent.com/aida/AEtjO1W65uyoreI2nzvtFQzcrw3woDlBbVq1zM29ABE594ta2JLAlLsgZtkRKWLdxE_iRvuK7u5Ezs9Uw5q9YorRXXKNfdW8iG2jmz27Ejhv7HPL8JbRJEwbUSEydi6Y3cS8Ny60iJhq_suJzVm9O3LFwAwBkqSsrb7Q0XJl1ff_RWqCkTw7wjHPc3wg0tS8ECbiSXVPtvBgybn8mJ1wB9J1wlrzqEHl7lywflIHv0BUDaq81uukkpZz517-jA"
              >
                <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal/40 group-hover:text-charcoal group-hover:italic transition-all duration-500 tracking-tight block">
                  01 &nbsp; MINIMAL
                </span>
              </div>
              <div
                className="taxonomy-word group cursor-pointer"
                data-desc="Architectural silhouettes, silk crêpe blouses, neutral camel trenches, and timeless heritage proportions."
                data-img="https://lh3.googleusercontent.com/aida/AEtjO1XjoXe6eZlFy7tPhMZBDoM1x38k5K183olZSb7WMdZUQEA1kf0oj4cDSD4pLAO0ATFt9Y_ws_WuA-Y-cqWD-2pR_KQoZGuoIIrDsQM2LtQz7ZM9OGOHyDJ0UByWKASFg99_5Cu12sUwIfhAQoXiQPMLHdQcGvXwBCZBwDGDl7W1K2ZY4zqLpCJtnG4ys0ffyEQPA4m4L9n9W26UHbVIn_Wo5YV_MQEUouUuCEr9UGCJVGsY8nVAJu18FeE"
              >
                <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal group-hover:italic transition-all duration-500 tracking-tight block italic">
                  02 &nbsp; CLASSIC
                </span>
              </div>
              <div
                className="taxonomy-word group cursor-pointer"
                data-desc="Featherlight textures, diffused watercolor pigments, soft draping, and dewy luminous morning light."
                data-img="https://lh3.googleusercontent.com/aida/AEtjO1V4XI3x6rIlF1Mw1MtX-DK3lDyPMfXiyiRK76u89jNqa5374qKstw_zzY7JorcGFc1-Q1Lx-rgab5xu24_-dax5bwnCQwTk21W0nc3ldSSmZfraBYc2_XT9YJYRyPyEZG6CQLCyp0Hy830zSLxMENv4n8fwEtb6E519FbVAN4mHBME5RwuWo9OF9qjTugQtwdx5XBJUQPLhya4Cz5h48ltkQ0JmH4BXOFqY2rH71JuHqUF_yz1OR0uq6Bk"
              >
                <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal/40 group-hover:text-charcoal group-hover:italic transition-all duration-500 tracking-tight block">
                  03 &nbsp; SOFT
                </span>
              </div>
              <div
                className="taxonomy-word group cursor-pointer"
                data-desc="Asymmetrical lines, sharp precision bob haircuts, bold textural contrasts, and unapologetic ease."
                data-img="https://lh3.googleusercontent.com/aida/AEtjO1U70CtO0Y9H5kZrkp5C4mm8zZgm3GCruc7Z4UqlhKiRl6lOrDUCgyOtdK-kVRBJEQjWrvX4YkxnWHuHLY4xR7rC8WhfzCsJmmfGX1uOu22CEXgd9-V9nmy53J2P8RljB0JHuni2QvktZgE5Qw3Hk96uLjVHoB4vijwuyDCr07uENKf-THiOZfffn9tJG0xSTOMKXTMZSPZ5ELxZrqmj3cSyhnSN83o9-q3qj7XuudV_AENAjYAa4ZrpT8k"
              >
                <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal/40 group-hover:text-charcoal group-hover:italic transition-all duration-500 tracking-tight block">
                  04 &nbsp; MODERN
                </span>
              </div>
              <div
                className="taxonomy-word group cursor-pointer"
                data-desc="Deep obsidian palettes, sculpted brow architecture, sharp graphic tailoring, and commanding stage poise."
                data-img="https://lh3.googleusercontent.com/aida/AEtjO1W65uyoreI2nzvtFQzcrw3woDlBbVq1zM29ABE594ta2JLAlLsgZtkRKWLdxE_iRvuK7u5Ezs9Uw5q9YorRXXKNfdW8iG2jmz27Ejhv7HPL8JbRJEwbUSEydi6Y3cS8Ny60iJhq_suJzVm9O3LFwAwBkqSsrb7Q0XJl1ff_RWqCkTw7wjHPc3wg0tS8ECbiSXVPtvBgybn8mJ1wB9J1wlrzqEHl7lywflIHv0BUDaq81uukkpZz517-jA"
              >
                <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal/40 group-hover:text-charcoal group-hover:italic transition-all duration-500 tracking-tight block">
                  05 &nbsp; BOLD
                </span>
              </div>
              <div
                className="taxonomy-word group cursor-pointer"
                data-desc="Molten champagne accents, candlelight reflection, velvet textures, and effortless cinematic drama."
                data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuDG_MT1AF3zLL23tiZHwYA8vraBGEOfNDbw95ijJbFdh3hv9yGEIfKt0M3EJdRQn6fTW4HAWtuXasfUZHrxZx5bQg_NFLwnEBG6GKZ1U7lV2iUzF3ufa0-DvANpqzeQPYCj_cz8kkjyWtxxmIu92QNdlKRLiiqIj0zbRt8gdtWF6VAukDOtVXA-EiD7JgIHGOTindkFIkP-k_0oKUK068Dt4WHhXOl9FKTvyYuCauIWEkj5I0e0CvaM"
              >
                <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal/40 group-hover:text-charcoal group-hover:italic transition-all duration-500 tracking-tight block">
                  06 &nbsp; GLAMOROUS
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] bg-stone-soft overflow-hidden">
                <img
                  alt="Selected aesthetic mood portrait"
                  className="w-full h-full object-cover transition-opacity duration-700 ease-out"
                  id="taxonomy-img-preview"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XjoXe6eZlFy7tPhMZBDoM1x38k5K183olZSb7WMdZUQEA1kf0oj4cDSD4pLAO0ATFt9Y_ws_WuA-Y-cqWD-2pR_KQoZGuoIIrDsQM2LtQz7ZM9OGOHyDJ0UByWKASFg99_5Cu12sUwIfhAQoXiQPMLHdQcGvXwBCZBwDGDl7W1K2ZY4zqLpCJtnG4ys0ffyEQPA4m4L9n9W26UHbVIn_Wo5YV_MQEUouUuCEr9UGCJVGsY8nVAJu18FeE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="font-mono text-[10px] tracking-ultra uppercase text-champagne block mb-2">CURATED AESTHETIC REGISTER</span>
                  <p className="text-sm font-light leading-relaxed text-ivory-50" id="taxonomy-desc-preview">
                    Architectural silhouettes, silk crêpe blouses, neutral camel trenches, and timeless heritage proportions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — CASE STUDY */}
      <section className="py-28 md:py-48 px-6 md:px-14 bg-ivory border-t border-stone-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden bg-stone-soft relative">
                <img
                  alt="Verified Transformation Case Study: Elena Vance"
                  className="w-full h-full object-cover filter contrast-[102%]"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1U70CtO0Y9H5kZrkp5C4mm8zZgm3GCruc7Z4UqlhKiRl6lOrDUCgyOtdK-kVRBJEQjWrvX4YkxnWHuHLY4xR7rC8WhfzCsJmmfGX1uOu22CEXgd9-V9nmy53J2P8RljB0JHuni2QvktZgE5Qw3Hk96uLjVHoB4vijwuyDCr07uENKf-THiOZfffn9tJG0xSTOMKXTMZSPZ5ELxZrqmj3cSyhnSN83o9-q3qj7XuudV_AENAjYAa4ZrpT8k"
                />
                <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest uppercase bg-ivory-50/90 backdrop-blur-sm text-charcoal px-3 py-1.5 border border-stone-soft">
                  TRANSFORMATION / 01 · STUDIO PARIS
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-champagne" />
                <span className="font-mono text-xs uppercase tracking-ultra text-champagne-dark font-medium">VERIFIED CASE STUDY</span>
              </div>
              <h2 className="section-title font-serif text-charcoal font-normal mb-8">
                “FROM UNCERTAIN<br />
                <span className="italic font-light">TO EFFORTLESS.”</span>
              </h2>
              <div className="space-y-6 text-charcoal/80 font-light text-base md:text-lg leading-relaxed">
                <p className="font-serif italic text-2xl text-charcoal">
                  “I finally looked like myself.”
                </p>
                <p>
                  A decade of executive leadership left Elena dressing defensively in heavy corporate suiting that concealed her natural proportions and undertones.
                </p>
                <p>
                  Through spectral daylight discovery and tailored Italian cashmere silhouettes, we returned to sculpted necklines and dewy, breathable skin.
                </p>
              </div>
              <div className="pt-10 mt-8 border-t border-stone-soft flex items-center justify-between text-xs font-mono tracking-widest uppercase text-stone-taupe">
                <div>
                  <span className="text-charcoal font-semibold block">ELENA VANCE</span>
                  <span>DESIGN PRINCIPAL, ZURICH</span>
                </div>
                <span className="text-champagne font-serif italic text-base capitalize tracking-normal">Oct 2024 Archive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — THE MENTOR */}
      <section className="py-28 md:py-48 px-6 md:px-14 bg-ivory-50 border-t border-stone-soft" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[3/4] w-full overflow-hidden bg-stone-soft">
                  <img
                    alt="Creative Director and Beauty Mentor in tailored cream cashmere blazer"
                    className="w-full h-full object-cover filter contrast-[105%]"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1W65uyoreI2nzvtFQzcrw3woDlBbVq1zM29ABE594ta2JLAlLsgZtkRKWLdxE_iRvuK7u5Ezs9Uw5q9YorRXXKNfdW8iG2jmz27Ejhv7HPL8JbRJEwbUSEydi6Y3cS8Ny60iJhq_suJzVm9O3LFwAwBkqSsrb7Q0XJl1ff_RWqCkTw7wjHPc3wg0tS8ECbiSXVPtvBgybn8mJ1wB9J1wlrzqEHl7lywflIHv0BUDaq81uukkpZz517-jA"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-ivory border border-stone-soft p-4 hidden md:block">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-stone-taupe">CREATIVE DIRECTOR &amp; FOUNDER</p>
                  <p className="font-serif text-lg text-charcoal italic">Camille Moreau</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-champagne" />
                <span className="font-mono text-xs uppercase tracking-ultra text-champagne-dark font-medium">THE PERSON BEHIND THE TRANSFORMATION</span>
              </div>
              <h2 className="section-title font-serif text-charcoal font-normal mb-8">
                “STYLE IS PERSONAL.<br />
                <span className="italic font-light">IT IS NOT A PERFORMANCE.”</span>
              </h2>
              <div className="space-y-6 text-charcoal/80 font-light text-base md:text-lg leading-relaxed max-w-xl">
                <p>
                  After fifteen years directing beauty campaigns across Milan and New York, Camille established Makeover Mentor to counter the homogenizing effect of social algorithms and retail quotas.
                </p>
                <p>
                  Every client is mentored privately. There are no generic templates, no seasonal checklists, and no affiliate kickbacks. Simply high-order aesthetic discernment applied to your everyday reality.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-stone-soft flex items-center space-x-12">
                <div>
                  <span className="font-serif text-3xl text-charcoal font-light">15+</span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-stone-taupe mt-1">YEARS EDITORIAL</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-charcoal font-light">1:1</span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-stone-taupe mt-1">PRIVATE STEWARDSHIP</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-charcoal font-light">300</span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-stone-taupe mt-1">ANNUAL CLIENT CAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FINAL CAMPAIGN CLOSING & ADMISSIONS */}
      <section className="py-36 md:py-56 px-6 md:px-14 bg-ivory border-t border-stone-soft text-center relative overflow-hidden" id="consultation">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="w-8 h-[1px] bg-champagne" />
            <span className="font-mono text-xs uppercase tracking-ultra text-champagne-dark font-medium">PRIVATE ADMISSIONS</span>
            <span className="w-8 h-[1px] bg-champagne" />
          </div>
          <h2 className="editorial-statement font-serif text-charcoal font-normal mb-10 tracking-tight">
            READY TO SEE<br />
            YOURSELF<br />
            <span className="italic font-light">DIFFERENTLY?</span>
          </h2>
          <p className="text-base md:text-lg text-charcoal/70 font-light max-w-xl mx-auto mb-14 leading-relaxed">
            Inquire for upcoming New York and Paris studio cohorts. Every intake begins with an unhurried 45-minute private consultation.
          </p>

          <div className="inline-flex flex-col items-center">
            <a className="editorial-cta font-mono text-sm md:text-base tracking-widest uppercase text-charcoal py-2 group" href="mailto:concierge@makeovermentor.com">
              <span className="font-semibold">BEGIN YOUR TRANSFORMATION</span>
              <span className="cta-arrow ml-3 text-champagne text-lg">→</span>
            </a>
            <span className="font-mono text-[11px] text-stone-taupe uppercase tracking-widest mt-4">
              DIRECT CONCIERGE · RESPONSE WITHIN 24 BUSINESS HOURS
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-14 bg-ivory-50 border-t border-stone-soft text-charcoal/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-sans text-xs tracking-ultra uppercase font-semibold text-charcoal block mb-1">MAKEOVER MENTOR</span>
            <p className="text-[11px] font-mono text-stone-taupe">© 2025 MAKEOVER MENTOR STUDIO. ALL EDITORIAL RIGHTS RESERVED.</p>
          </div>
          <div className="flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-charcoal/70">
            <a className="hover:text-charcoal transition-colors" href="#discover">PHILOSOPHY</a>
            <a className="hover:text-charcoal transition-colors" href="#method">METHOD</a>
            <a className="hover:text-charcoal transition-colors" href="#about">ABOUT</a>
            <a className="text-champagne-dark font-medium hover:text-charcoal transition-colors" href="#consultation">INQUIRE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
