import React from "react";
import CardSwap, { Card } from "./ui/cardSwap";

export default function CardSwapDemo() {
  return (
    <>
      <section className="sticky top-0 min-h-fit flex items-center justify-center">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          scrollSensitivity={150}
          easing="elastic"
          onCardClick={(idx) => console.log(`Card ${idx + 1} clicked!`)}
        >
          <Card className="bg-gradient-to-br from-blue-600 to-purple-700 border-blue-400 text-white p-8 shadow-2xl">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-blue-100 leading-relaxed">
                Cutting-edge solutions that push the boundaries of what&aposs
                possible
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-400 text-white p-8 shadow-2xl">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Performance</h3>
              <p className="text-emerald-100 leading-relaxed">
                Lightning-fast experiences that delight users and drive results
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-red-700 border-orange-400 text-white p-8 shadow-2xl">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Design</h3>
              <p className="text-orange-100 leading-relaxed">
                Beautiful interfaces crafted with attention to every detail
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-violet-600 to-purple-700 border-violet-400 text-white p-8 shadow-2xl">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Security</h3>
              <p className="text-violet-100 leading-relaxed">
                Enterprise-grade protection for your most valuable assets
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-pink-600 to-rose-700 border-pink-400 text-white p-8 shadow-2xl">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-pink-100 leading-relaxed">
                Uncompromising quality in every aspect of our work
              </p>
            </div>
          </Card>
        </CardSwap>
      </section>
      <div className="h-[300vh]"></div>
    </>
  );
}
