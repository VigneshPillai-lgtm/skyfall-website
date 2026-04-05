"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Page() {
  const [idea, setIdea] = useState("Click on generate to generate an idea.....");
  const [isGenerating, setIsGenerating] = useState(false);

  const ideas = [
    "A weather app for plants.",
    "A hardware-based focus timer.",
    "An AI that writes haikus about code.",
    "A smart water bottle that tracks intake.",
    "A game where you code to survive.",
    "A social network for pets.",
    "A desktop pet that reacts to your CPU usage.",
    "A real-time bus tracker for your neighborhood."
  ];

  const generateIdea = () => {
    setIsGenerating(true);
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    setTimeout(() => {
      setIdea(randomIdea);
      setIsGenerating(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />
      
      {/* Background Container */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/assets/hero_bg.png" 
          alt="Skyfall Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="mb-12 animate-float">
              <img 
                src="/assets/hero-logo.png" 
                alt="Skyfall Logo" 
                className="w-[300px] md:w-[450px] drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
              <button className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-league font-bold text-white tracking-widest hover:bg-white/20 transition-all duration-300">
                VIEW PROJECTS
              </button>
              <button className="flex-1 px-8 py-4 bg-white text-black rounded-full font-league font-bold tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                REGISTER NOW
              </button>
            </div>
          </div>
        </section>

        {/* Build Section */}
        <section id="build" className="build-section py-24">
          <h2 className="section-title text-center mb-20 text-4xl md:text-6xl uppercase tracking-tighter">
            BUILD COOL PROJECTS,<br/>WIN COOL REWARDS
          </h2>
          
          <div className="build-cards px-6">
            <div className="card group">
              <div className="mb-8 flex justify-center">
                <img src="/assets/software-icon.svg" alt="Software" className="w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-league font-black text-3xl mb-4 tracking-wider">SOFTWARE</h3>
              <p className="text-white/60 leading-relaxed">
                Build apps, websites, or anything digital. Got an idea? Turn it into something people can actually use.
              </p>
            </div>

            <div className="card group">
              <div className="mb-8 flex justify-center">
                <img src="/assets/hardware-icon.svg" alt="Hardware" className="w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-league font-black text-3xl mb-4 tracking-wider">HARDWARE</h3>
              <p className="text-white/60 leading-relaxed">
                Work with sensors, boards, and cool gadgets. Make stuff that moves, reacts, and exists in real life.
              </p>
            </div>

            <div className="card group">
              <div className="mb-8 flex justify-center">
                <img src="/assets/combination-icon.svg" alt="Combination" className="w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-league font-black text-3xl mb-4 tracking-wider">COMBINATION</h3>
              <p className="text-white/60 leading-relaxed">
                Why choose one? Mix both. Build something where hardware + software work together and do works really cool.
              </p>
            </div>
          </div>

          <div className="text-center mt-20 px-6">
            <p className="font-league font-black text-2xl md:text-3xl text-blue-400 mb-6 tracking-widest uppercase">BUILD WHATEVER YOU LIKE!</p>
            <p className="max-w-2xl mx-auto text-white/50 leading-relaxed italic">
              You don&apos;t need to know how to code. You don&apos;t need to be an expert. Explore Skyfall through interactive side quests across various domains.
            </p>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="mentors-section py-24">
          <div className="mentors-glass flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto px-6">
            <div className="relative w-48 h-48 flex-shrink-0 bg-blue-500/10 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <span className="font-league font-black text-6xl text-white pt-2">10+</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-league font-black text-4xl mb-6 tracking-wider">OUR MENTORS</h3>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                At Skyfall, we have 10+ mentors, including past record-breaking hackathon winners, ready to guide you through every step. 
                Whether you need advice, help refining your idea, or support fixing bugs, we&apos;ve got you covered.
              </p>
              <p className="text-white/50 italic leading-relaxed">
                We know that sometimes you get stuck, and that is completely normal, especially when it is your first time. 
                We totally understand that.
              </p>
            </div>
          </div>
        </section>

        {/* Idea Generator */}
        <section id="idea-generator" className="idea-generator py-24 text-center">
          <div className="glass-container max-w-2xl mx-auto px-12 py-16 flex flex-col items-center">
            <p className="font-league font-bold text-white/60 tracking-[0.3em] mb-12 uppercase">
              NOT SURE WHERE TO START?
            </p>
            
            <div className="relative group w-full">
              <img src="/assets/card-vector.svg" alt="" className="absolute -top-10 -left-6 w-12 h-12 opacity-50" />
              <div className="relative px-8 py-10 bg-white/5 border border-white/10 rounded-2xl mb-12 min-h-[100px] flex items-center justify-center">
                <p className={`text-xl md:text-2xl font-medium tracking-wide leading-relaxed ${isGenerating ? 'opacity-30 blur-sm' : 'opacity-100'} transition-all duration-300`}>
                  {idea}
                </p>
              </div>
              <button 
                onClick={generateIdea}
                disabled={isGenerating}
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-league font-black text-white tracking-[0.2em] transform active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] disabled:opacity-50"
              >
                {isGenerating ? "GENERATING..." : "GENERATE IDEA...."}
              </button>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section id="agenda" className="agenda-section py-24 px-6">
          <div className="glass-container max-w-4xl mx-auto p-12">
            <div className="flex items-center gap-6 mb-16">
              <img src="/assets/card-vector.svg" alt="" className="w-10 h-10" />
              <h3 className="font-league font-black text-5xl tracking-widest">AGENDA</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { time: "07:30 AM - 08:30 AM", event: "Doors Open" },
                { time: "09:00 AM - 10:00 AM", event: "Opening Ceremony" },
                { time: "10:00 AM - 01:00 PM", event: "Hacking Continues" },
                { time: "01:00 PM - 02:00 PM", event: "Lunch Break" },
                { time: "03:00 PM - 04:00 PM", event: "Activity : Will be revealed later" },
                { time: "04:00 PM - 05:00 PM", event: "Mentoring" },
                { time: "05:00 PM - 06:00 PM", event: "Polishing Projects and Submissions" },
                { time: "06:00 PM - 07:00 PM", event: "Judging + Evening Snacks" },
                { time: "07:00 PM - 08:00 PM", event: "Valedictory / Closing Note" }
              ].map((item, idx) => (
                <div key={idx} className="agenda-row group flex items-center justify-between py-6 border-b border-white/5 last:border-0 hover:bg-white/5 px-6 rounded-xl transition-all duration-300">
                  <span className="font-lekton text-blue-400 font-bold tabular-nums">{item.time}</span>
                  <span className="font-league font-bold text-white/90 tracking-wide text-right">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section py-24 px-6">
          <h3 className="font-league font-black text-6xl text-center mb-20 tracking-widest">FAQ</h3>
          <div className="faq-grid max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { q: "Who is eligible?", a: "Skyfall is for highschoolers! You don't need to be a pro to join." },
              { q: "Will food be provided?", a: "Yes, meals and snacks will be provided. We will arrange for food sensitivities to the best of our ability." },
              { q: "My parents are concerned..", a: "We're here to help! They can reach out to us directly for any safety or logistics questions." },
              { q: "Can beginners participate?", a: "Skyfall is for all skill levels! We'll have mentors to help you get started." },
              { q: "What do I need to bring?", a: "Your laptop, charger, and an open mind. We'll handle the rest!" }
            ].map((faq, idx) => (
              <div key={idx} className="faq-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h4 className="font-league font-black text-xl text-blue-400 mb-4 tracking-wide uppercase">{faq.q}</h4>
                <p className="text-white/60 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Venue Section */}
        <section id="venue" className="venue-section py-32 px-6">
          <div className="venue-glass max-w-4xl mx-auto p-16 flex flex-col items-center text-center shadow-[0_0_100px_rgba(0,114,168,0.3)]">
            <p className="font-league font-black text-2xl md:text-3xl tracking-[0.4em] mb-12 text-blue-300 uppercase">
              LIMITED SEATS AVAILABLE!
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-xl">
              <span className="font-league font-bold text-lg tracking-widest text-white/60">WHERE TO BE ?</span>
              <button className="flex-1 px-12 py-5 bg-white text-black rounded-full font-league font-bold tracking-widest hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 duration-300">
                GET DIRECTIONS
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-section py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <span className="font-league font-black text-2xl tracking-[0.5em] text-white/40 block mb-2 uppercase">DEPARTMENT OF</span>
              <span className="font-league font-black text-2xl tracking-[0.2em] text-white">COMPUTER SCIENCE</span>
            </div>
            
            <div className="flex gap-12 font-league font-bold tracking-wider text-white/50">
              <Link href="#" className="hover:text-blue-400 transition-colors">FOUNDER</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">OUR VALUES</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">TERMS</Link>
            </div>
            
            <p className="font-lekton text-white/30 text-sm">© 2026 TEAM SKYFALL</p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
