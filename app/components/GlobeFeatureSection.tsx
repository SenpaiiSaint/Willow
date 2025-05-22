"use client";
import React, { useRef, useEffect } from "react";
import { RiArrowRightSLine } from "@remixicon/react";
import createGlobe from "cobe";

export function GlobeFeatureSection() {
  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-8 sm:py-20">
      <span className="block text-lg font-semibold tracking-tighter text-blue-500">
        Dashboard Insights
      </span>
      <h2
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl"
      >
        Explore your property analytics
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Visualize your rent payments, maintenance trends, and more with interactive analytics and global insights.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <a
          href="#"
          className="group relative col-span-1 overflow-hidden rounded-b rounded-t-2xl bg-gray-50 p-8 shadow-2xl shadow-black/10 ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/5 lg:col-span-2 lg:rounded-l-2xl lg:rounded-r"
        >
          <div className="relative z-20">
            <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
              Interactive Globe
            </h3>
            <p className="mt-4 max-w-sm text-gray-900 dark:text-stone-400  font-bold">
              See your properties and maintenance events around the world. (Coming soon!)
            </p>
            <div className="mt-12 flex w-fit items-center gap-0.5 rounded bg-white/10 px-2 py-1 text-blue-500 backdrop-blur-[3px]">
              <span>Explore features</span>
              <RiArrowRightSLine className="mt-0.5 size-5 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:opacity-20" />
            </div>
          </div>
          <GlobeCanvas />
        </a>
        <div className="rounded-b-2xl rounded-t bg-gradient-to-br from-blue-400 to-blue-600 p-8 shadow-lg shadow-blue-500/20 lg:rounded-l lg:rounded-r-2xl">
          <figure className="flex h-full flex-col justify-between">
            <blockquote className="text-base font-medium text-gray-50 sm:text-lg/8">
              <p className="relative bg-gradient-to-br from-blue-100 to-white bg-clip-text font-medium leading-7 tracking-tighter text-transparent before:absolute before:right-full before:top-0">
                The analytics dashboard gives me a clear view of my rent, maintenance, and documents. I love the new globe!
              </p>
            </blockquote>
            <figcaption className="mt-8 flex items-center space-x-4 sm:mt-0">
              <div className="flex-auto">
                <div className="mt-7 text-sm font-semibold text-gray-50">
                  <div>
                    <span className="absolute inset-0" />
                    Jessica Lin
                  </div>
                </div>
                <span className="text-sm text-blue-200">
                  Tenant, Maplewood Apartments
                </span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 4;
    let globe: any;
    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 800 * 2,
        height: 800 * 2,
        phi: 0,
        theta: -0.3,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 30000,
        mapBrightness: 13,
        mapBaseBrightness: 0.01,
        baseColor: [1, 1, 1],
        glowColor: [1, 1, 1],
        markerColor: [100, 100, 100],
        markers: [],
        onRender: function (state: any) {
          state.phi = phi;
          phi += 0.0005;
        },
      });
    }
    return () => {
      if (globe) globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 800, height: 800 }}
      className="absolute -right-72 top-40 z-10 aspect-square size-full max-w-fit transition-transform group-hover:scale-[1.01] sm:top-12 lg:-right-60 lg:top-0"
    />
  );
}