"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileViewProps {
  onRegisterClick: () => void;
  onInfoClick: (tab: string) => void;
  onPenguinClick: (id: string, text: string) => void;
  activePenguinBubble: { id: string; text: string } | null;
  triggerToast: (msg: string) => void;
  setXp: React.Dispatch<React.SetStateAction<number>>;
  activeFaqIdx: number | null;
  setActiveFaqIdx: React.Dispatch<React.SetStateAction<number | null>>;
  PROJECT_IDEAS: Array<{
    title: string;
    category: "SOFTWARE" | "HARDWARE" | "COMBINATION";
    tip: string;
    xp: number;
  }>;
  FAQ_EXTRAS: string[];
}

const imgMailSkyfallLogo = "/assets/figma_export/d57850905f6ab8c8f77ee7febaae8fb6d53575b0.png";
const imgRectangle1 = "/assets/figma_export/0f4d618ccc40984745e8c3e1ca5df34fdd6972cd.png";
const imgRectangle6 = "/assets/figma_export/1d72184889bf90b3d163d13dd20302fd0900ac9c.png";
const imgRectangle8 = "/assets/figma_export/d88c86d1c23b80a4488ae5fe8fc9dd3b2c76cff4.png";
const imgRectangle10 = "/assets/figma_export/ecd9abe996fb1e83ded6d415d0e3950ee76a10dc.png";
const imgMentorsImage = "/assets/figma_export/d4b3e8dfd9f16f0f5166014505fb71544c2734df.png";
const imgPicEmoji = "/assets/figma_export/e7578bbf0770711a9cfa5f7d2b8a8adf820e4b6a.png";
const imgRectangle20 = "/assets/figma_export/2e5a492a267345d1d5a1e107627fbca1c6a147bc.png";

const AGENDA_ITEMS = [
  { time: "07:30 AM - 08:30 AM", event: "Doors Open", tag: "Arrival" },
  { time: "09:00 AM - 10:00 AM", event: "Opening Ceremony", tag: "Auditorium" },
  { time: "10:00 AM - 12:00 PM", event: "Hacking Continues", tag: "Sprint 1" },
  { time: "12:00 PM - 01:00 PM", event: "Activity : Will be revealed later", tag: "Surprise Quest" },
  { time: "01:00 PM - 02:30 PM", event: "Lunch Break", tag: "Cafeteria" },
  { time: "02:00 PM - 04:00 PM", event: "Hacking Continues", tag: "Sprint 2" },
  { time: "04:00 PM - 04:30 PM", event: "Submissions + Evening Snacks", tag: "Milestone" },
  { time: "04:30 PM - 05:00 PM", event: "Judging + Quest Rewards", tag: "Showcase" },
  { time: "05:00 PM - 06:00 PM", event: "Valedictory / Closing Note", tag: "Ceremony" },
];

const FAQS = [
  {
    q: "Who is eligible?",
    a: "Skyfall is for highschoolers! You need to be 13-18 years old to participate.",
    color: "#c800e1",
    tag: "Ages 13-18",
  },
  {
    q: "Will food be provided?",
    a: "Yes, meals and snacks will be provided. We will arrange any food sensitivities to the best of our ability.",
    color: "#a48500",
    tag: "Meals Included",
  },
  {
    q: "Can I form a team?",
    a: "Hackers may form teams of up to 3 people. You can team up with hackers from any school during the event.",
    color: "#019274",
    tag: "Teams of 1–3",
  },
  {
    q: "My parents are concerned..",
    a: "We're here to help! They can reach out to us at nikhil@skyfall.live for any questions.",
    color: "#0072a8",
    tag: "Safety & Support",
  },
  {
    q: "Can beginners participate?",
    a: "Skyfall is for all skill levels! We'll have workshops, mentor assistance, and activities so you can build and enjoy your weekend.",
    color: "#a48500",
    tag: "All Levels Welcome",
  },
  {
    q: "What do I need to bring?",
    a: "Your laptop, charger, and an open mind! The rest we are taking care of.",
    color: "#c800e1",
    tag: "Checklist",
  },
];

export default function MobileView({
  onRegisterClick,
  onInfoClick,
  onPenguinClick,
  activePenguinBubble,
  triggerToast,
  setXp,
  activeFaqIdx,
  setActiveFaqIdx,
  PROJECT_IDEAS,
  FAQ_EXTRAS,
}: MobileViewProps) {
  const [activeTrack, setActiveTrack] = useState<"SOFTWARE" | "HARDWARE" | "COMBINATION">("SOFTWARE");
  const filteredIdeas = PROJECT_IDEAS.filter((i) => i.category === activeTrack);
  const [currentIdeaIdx, setCurrentIdeaIdx] = useState(0);

  const currentIdea = filteredIdeas[currentIdeaIdx % filteredIdeas.length] || PROJECT_IDEAS[0];

  const handleNextIdea = () => {
    setCurrentIdeaIdx((prev) => prev + 1);
    setXp((p) => p + 15);
    triggerToast("💡 Generated new idea! +15 Quest XP!");
  };

  const copyIdea = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${currentIdea.title}: ${currentIdea.tip}`);
      triggerToast("📋 Project idea copied to clipboard!");
    }
  };

  return (
    <div className="w-full bg-[#030d1a] text-white">
      {/* ===================================================================== */}
      {/* 1. MOBILE STICKY HEADER                                               */}
      {/* ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#061727]/95 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#28a4e6] to-[#004aad] flex items-center justify-center shadow-md">
            <span className="text-xs font-black text-white">KJ</span>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-wider text-white leading-tight">
              KRISTU JAYANTI
            </p>
            <p className="text-[9px] font-medium text-[#96e6ff] tracking-wide leading-tight">
              Dept. of Computer Applications
            </p>
          </div>
        </div>

        <button
          onClick={onRegisterClick}
          className="bg-gradient-to-r from-[#00bd96] to-[#00cf91] text-white font-['League_Spartan:Bold',sans-serif] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg active:scale-95 transition-transform cursor-pointer"
        >
          Register Now
        </button>
      </header>

      {/* ===================================================================== */}
      {/* 2. HERO SECTION (SKY REALM)                                           */}
      {/* ===================================================================== */}
      <section className="relative px-5 pt-8 pb-14 bg-gradient-to-b from-[#74c0f8] via-[#aee0ff] to-[#e8f6ff] text-center overflow-hidden">
        {/* Subtle cloud glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.45)_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
          <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-[10px] tracking-[0.2em] text-[#004aad] uppercase mb-1">
            SCHOOL OF COMPUTATIONAL AND PHYSICAL SCIENCES
          </p>

          <div className="bg-white/30 backdrop-blur-sm border border-white/60 px-4 py-1 rounded-full mb-2">
            <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs text-[#003b82] tracking-wider">
              DEPARTMENT OF COMPUTER APPLICATIONS
            </p>
          </div>

          <p className="font-['Inter:Bold',sans-serif] font-bold text-[11px] tracking-[0.35em] text-[#0072a8] mb-4">
            O R G A N I S E S
          </p>

          {/* Floating Hero Logo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[320px] sm:max-w-[400px] my-2 cursor-pointer"
            onClick={() => {
              setXp((p) => p + 10);
              triggerToast("⭐ Welcome to Skyfall 2026!");
            }}
          >
            <img
              alt="Skyfall Hackathon"
              src={imgMailSkyfallLogo}
              className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,114,168,0.35)]"
            />
          </motion.div>

          {/* Banner Tagline */}
          <div className="bg-[#0072a8]/90 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-2.5 my-3 shadow-lg max-w-md">
            <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs sm:text-sm text-white tracking-wider leading-relaxed">
              NATIONAL <span className="text-[#ffcdf6]">TEENS</span> HACKATHON FOR{" "}
              <span className="text-[#fff68f] font-black">PARTICIPANTS</span> AGED 13 - 18
            </p>
          </div>

          <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs sm:text-sm text-[#004aad] max-w-md leading-relaxed my-2">
            WHERE CREATIVITY MEETS TECHNOLOGY THROUGH HANDS-ON BUILDING, GUIDED CHALLENGES, AND INTERACTIVE EXPERIENCES
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mt-5">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={onRegisterClick}
              className="w-full bg-gradient-to-r from-[#00bd96] to-[#00cf91] text-white font-['League_Spartan:Black',sans-serif] text-sm tracking-wider py-3.5 px-6 rounded-2xl shadow-[0_8px_20px_rgba(0,189,150,0.4)] cursor-pointer"
            >
              REGISTER NOW
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                const el = document.getElementById("mobile-ideas-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full bg-white/40 border border-[#0072a8]/60 text-[#004aad] font-['League_Spartan:Bold',sans-serif] text-sm tracking-wider py-3.5 px-6 rounded-2xl shadow-sm cursor-pointer"
            >
              VIEW PROJECTS
            </motion.button>
          </div>

          {/* Mascot Penguin Hero */}
          <div className="relative mt-6 cursor-pointer" onClick={() => onPenguinClick("m-hero", "Let's build something epic! 🚀")}>
            <img src={imgRectangle1} alt="Mascot Penguin" className="w-20 h-20 animate-htn-penguin" />
            {activePenguinBubble?.id === "m-hero" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[#0072a8] font-bold text-xs px-3 py-1 rounded-full shadow-lg border border-[#0072a8]/30 whitespace-nowrap">
                {activePenguinBubble.text}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. ABOUT & QUESTS & GOODIES (CLOUD KINGDOM)                           */}
      {/* ===================================================================== */}
      <section className="relative px-5 py-12 bg-gradient-to-b from-[#e8f6ff] via-[#d0edff] to-[#a0d8ff] text-[#004aad]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-['League_Spartan:Black',sans-serif] text-2xl sm:text-3xl font-black text-center text-[#0072a8] tracking-wide mb-8">
            Build Cool Projects, Win Cool Rewards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* Card 1: About */}
            <div className="bg-white/85 backdrop-blur-sm border-2 border-[#73c9ff] rounded-3xl p-6 shadow-md">
              <span className="text-2xl mb-2 block">✨</span>
              <p className="text-sm font-medium text-[#2d5f7d] leading-relaxed mb-3">
                Skyfall is a beginner-friendly hackathon for students, where curious minds come together to explore, build, and create.
              </p>
              <h3 className="font-['League_Spartan:Bold',sans-serif] font-bold text-base text-[#0072a8] tracking-wider mb-2">
                BUILD WHATEVER YOU LIKE!
              </h3>
              <p className="text-xs text-[#3b7396] leading-relaxed">
                You don’t need to know how to code. You don’t need experience. If you have an idea you can build it, from apps to hardware or even a mix of both, with mentors guiding you.
              </p>
            </div>

            {/* Card 2: Quests */}
            <div className="bg-[#fff3fb]/90 backdrop-blur-sm border-2 border-[#d876e4] rounded-3xl p-6 shadow-md">
              <span className="text-2xl mb-2 block">🎯</span>
              <h3 className="font-['League_Spartan:Bold',sans-serif] font-bold text-base text-[#c800e1] tracking-wider mb-2">
                Quests & Activities
              </h3>
              <p className="text-xs text-[#7e348f] leading-relaxed mb-3">
                Explore Skyfall through interactive side quests across the campus, turning your journey into a game. Complete quests, earn XP, then redeem rewards like plushies and goodies.
              </p>
              <span className="inline-block bg-[#c800e1]/15 text-[#c800e1] font-bold text-[11px] px-3 py-1 rounded-full">
                LEVEL UP AS YOU GO
              </span>
            </div>
          </div>

          {/* Goodies Showcase */}
          <div className="bg-white/70 backdrop-blur-sm border border-[#fff68f] rounded-3xl p-6 shadow-lg">
            <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs uppercase tracking-widest text-[#a48500] text-center mb-4">
              🎁 EXCLUSIVE QUEST REWARDS & PRIZES
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-3 border border-gray-100 flex flex-col items-center text-center shadow-sm">
                <img src={imgRectangle8} alt="Headphones" className="h-16 w-auto object-contain mb-2" />
                <span className="font-bold text-[11px] text-[#004aad]">ANC Headset</span>
                <span className="text-[10px] text-gray-500">Tier 1 Prize</span>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-gray-100 flex flex-col items-center text-center shadow-sm">
                <img src={imgRectangle6} alt="Shark Plushie" className="h-16 w-auto object-contain mb-2" />
                <span className="font-bold text-[11px] text-[#004aad]">Shark Plushie</span>
                <span className="text-[10px] text-gray-500">Quest Reward</span>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-gray-100 flex flex-col items-center text-center shadow-sm">
                <img src={imgRectangle10} alt="Mechanical Keyboard" className="h-16 w-auto object-contain mb-2" />
                <span className="font-bold text-[11px] text-[#004aad]">Mech Keyboard</span>
                <span className="text-[10px] text-gray-500">Tier 1 Prize</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. IDEA GENERATOR & TRACKS (IDEA REEF)                                */}
      {/* ===================================================================== */}
      <section id="mobile-ideas-section" className="relative px-5 py-12 bg-gradient-to-b from-[#1b7db7] via-[#0b4d79] to-[#042844]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="bg-[#00cf91]/20 text-[#00cf91] border border-[#00cf91]/40 font-['League_Spartan:Bold',sans-serif] text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              💡 Spark Your Creativity
            </span>
            <h2 className="font-['League_Spartan:Black',sans-serif] text-2xl sm:text-3xl font-black text-white tracking-wide">
              NOT SURE WHERE TO START?
            </h2>
            <p className="text-xs text-white/80 max-w-md mx-auto mt-2 leading-relaxed">
              Use the Idea Generator to get fun project inspiration in a few seconds, then explore project tracks to kickstart your build!
            </p>
          </div>

          {/* Interactive Idea Generator Card */}
          <div className="bg-[#06213b]/95 border-2 border-[#28a4e6]/50 rounded-3xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.4)] mb-8">
            {/* Track Switcher */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              {(["SOFTWARE", "HARDWARE", "COMBINATION"] as const).map((track) => {
                const active = activeTrack === track;
                return (
                  <button
                    key={track}
                    onClick={() => {
                      setActiveTrack(track);
                      setCurrentIdeaIdx(0);
                    }}
                    className={`py-2 px-2 text-xs font-bold font-['League_Spartan:Bold',sans-serif] uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                      active
                        ? "bg-[#28a4e6] text-white shadow-md scale-102"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {track}
                  </button>
                );
              })}
            </div>

            {/* Generated Idea Display */}
            <div className="bg-[#031526] border border-white/15 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-[#00cf91] uppercase tracking-widest">
                  {activeTrack} TRACK • +45 XP
                </span>
                <button
                  onClick={copyIdea}
                  className="text-[11px] font-bold text-[#96e6ff] hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  📋 Copy
                </button>
              </div>
              <h4 className="font-['League_Spartan:Bold',sans-serif] font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                &ldquo;{currentIdea.title}&rdquo;
              </h4>
              <p className="text-xs text-white/75 leading-relaxed">
                {currentIdea.tip}
              </p>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleNextIdea}
              className="w-full bg-gradient-to-r from-[#28a4e6] to-[#00bd96] text-white font-['League_Spartan:Bold',sans-serif] font-bold text-sm tracking-wider py-3 rounded-xl shadow-lg active:scale-98 transition-transform cursor-pointer"
            >
              🎲 GENERATE ANOTHER IDEA
            </button>
          </div>

          {/* 3 Tracks Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#120524]/80 border-2 border-[#ffcdf6]/40 rounded-2xl p-4">
              <span className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs text-[#ffcdf6] tracking-widest uppercase block mb-1">
                SOFTWARE
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Build apps, websites, or anything digital. Got an idea? Turn it into something people can actually use.
              </p>
            </div>
            <div className="bg-[#021f1d]/80 border-2 border-[#00cf91]/40 rounded-2xl p-4">
              <span className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs text-[#00cf91] tracking-widest uppercase block mb-1">
                HARDWARE
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Work with sensors, boards, and cool gadgets. Make stuff that moves, reacts, and exists in real life.
              </p>
            </div>
            <div className="bg-[#241e05]/80 border-2 border-[#f6d02b]/40 rounded-2xl p-4">
              <span className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs text-[#f6d02b] tracking-widest uppercase block mb-1">
                COMBINATION
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Why choose one? Mix both. Build something where hardware + software work together in harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. SPONSORS & MENTORS (DEEP TRENCH)                                  */}
      {/* ===================================================================== */}
      <section className="relative px-5 py-12 bg-gradient-to-b from-[#042844] to-[#021324] text-center">
        <div className="max-w-xl mx-auto">
          <span className="bg-[#28a4e6]/20 text-[#28a4e6] border border-[#28a4e6]/40 font-['League_Spartan:Bold',sans-serif] text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            ⭐ Ecosystem Partners
          </span>
          <h2 className="font-['League_Spartan:Black',sans-serif] text-2xl sm:text-3xl font-black text-white tracking-wide mb-6">
            OUR SPONSORS
          </h2>

          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="h-18 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-xs text-white/50 font-bold">
              Partner 1
            </div>
            <div className="h-18 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-xs text-white/50 font-bold">
              Partner 2
            </div>
            <div className="h-18 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-xs text-white/50 font-bold">
              Partner 3
            </div>
          </div>

          <p className="text-xs text-white/70 leading-relaxed mb-8">
            We’re grateful to our sponsors for supporting our vision and empowering young innovators. Interested in becoming a sponsor? Contact{" "}
            <a href="mailto:nikhil@skyfall.live" className="text-[#96e6ff] underline font-semibold">
              nikhil@skyfall.live
            </a>
          </p>

          {/* Mentors Card */}
          <div className="bg-[#041a30]/85 border border-[#28a4e6]/40 rounded-3xl p-5 shadow-lg text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🛟</span>
              <div>
                <h3 className="font-['League_Spartan:Bold',sans-serif] font-bold text-lg text-[#96e6ff]">
                  10+ MENTORS ON DECK
                </h3>
                <span className="text-[11px] text-[#00cf91] font-semibold">
                  Guiding you 1-on-1 throughout the day
                </span>
              </div>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Seasoned software engineers, hardware creators, and university faculty will be walking around the floor to troubleshoot bugs, brainstorm architectures, and assist your build!
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. AGENDA & ORGANISER'S NOTE (WATERFALL CAVERN)                       */}
      {/* ===================================================================== */}
      <section className="relative px-5 py-12 bg-gradient-to-b from-[#021324] via-[#091a2e] to-[#120524]">
        <div className="max-w-2xl mx-auto">
          {/* Agenda Heading */}
          <div className="text-center mb-6">
            <span className="bg-[#00bd96]/20 text-[#00bd96] border border-[#00bd96]/40 font-['League_Spartan:Bold',sans-serif] text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              📅 Event Timeline
            </span>
            <h2 className="font-['League_Spartan:Black',sans-serif] text-2xl sm:text-3xl font-black text-white tracking-wide">
              AGENDA
            </h2>
            <p className="text-xs text-[#96e6ff] mt-1">Saturday, April 11, 2026 • Kristu Jayanti Central Campus</p>
          </div>

          {/* Agenda List Card */}
          <div className="bg-[#05172b]/95 border-2 border-[#00bd96]/40 rounded-3xl p-5 sm:p-6 shadow-xl mb-10">
            <div className="divide-y divide-white/10">
              {AGENDA_ITEMS.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-xs sm:text-sm text-white">
                      {item.event}
                    </p>
                    <span className="text-[10px] text-[#00cf91] font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <span className="font-['Lekton:Bold',monospace] font-bold text-xs sm:text-sm text-[#96e6ff] whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Organiser's Note (Purple Metallic Tablet) */}
          <div className="relative border-2 border-[#c800e1]/50 bg-gradient-to-br from-[#260a47]/95 via-[#1a0733]/98 to-[#0e031f] rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(200,0,225,0.35)]">
            {/* Swinging Shark Badge Top Right */}
            <div
              className="absolute -top-7 right-4 cursor-pointer"
              onClick={() => onPenguinClick("m-shark", "I love the waterfall breeze! 🌊🦈")}
            >
              <img src={imgRectangle20} alt="Swinging Shark" className="w-16 h-16 animate-htn-penguin" />
              {activePenguinBubble?.id === "m-shark" && (
                <div className="absolute -top-8 right-0 bg-white text-[#6b21a8] font-bold text-xs px-3 py-1 rounded-full shadow-lg border border-[#c800e1] whitespace-nowrap">
                  {activePenguinBubble.text}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">💌</span>
              <h3 className="font-['League_Spartan:Bold',sans-serif] font-bold text-lg sm:text-xl text-[#ffcdf6] tracking-wider uppercase">
                Hey Builders!
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-white/95 leading-relaxed mb-3">
              We’re super excited to welcome you to Skyfall. This isn’t just another event it’s a space built for you. Your ideas, your curiosity, and your willingness to try something new are what make this experience special.
            </p>

            <p className="text-xs sm:text-sm text-white/95 leading-relaxed mb-3">
              Behind the scenes, we’ve been working to create an environment where you can explore, learn, and build freely.
            </p>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-3">
              Whether this is your first time building or you’ve already started experimenting, Skyfall is your space to take risks, collaborate, and create without fear.
            </p>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
              We can’t wait to see what you build. Let’s make this an experience to remember.
            </p>

            <div className="pt-3 border-t border-white/20 flex items-center justify-between">
              <span className="font-['League_Spartan:Bold',sans-serif] font-bold text-sm text-[#96e6ff] tracking-widest">
                — Team Skyfall <span className="text-[#c87cff]">💜</span>
              </span>
              <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-white/80 font-medium">
                Dept. of Computer Applications
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. FAQS & BOTTOM REGISTER (CRYSTAL CAVE)                              */}
      {/* ===================================================================== */}
      <section className="relative px-5 py-12 bg-gradient-to-b from-[#120524] via-[#1b0833] to-[#0a0218]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-[#e51cff]/20 text-[#e51cff] border border-[#e51cff]/40 font-['League_Spartan:Bold',sans-serif] text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              ❓ Frequently Asked Questions
            </span>
            <h2 className="font-['League_Spartan:Black',sans-serif] text-2xl sm:text-3xl font-black text-white tracking-wide">
              FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    const next = isOpen ? null : idx;
                    setActiveFaqIdx(next);
                    if (next !== null) {
                      setXp((p) => p + 10);
                      triggerToast(FAQ_EXTRAS[idx]);
                    }
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isOpen
                      ? "bg-[#250d3d] border-[#e51cff] shadow-[0_0_20px_rgba(229,28,255,0.3)]"
                      : "bg-[#140624]/90 border-white/15 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4
                      className="font-['League_Spartan:Bold',sans-serif] font-bold text-sm tracking-wide"
                      style={{ color: faq.color }}
                    >
                      {faq.q}
                    </h4>
                    <span className="text-white/60 text-sm font-bold">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-2 pt-2 border-t border-white/10"
                      >
                        <p className="text-xs text-white/85 leading-relaxed mb-2">
                          {faq.a}
                        </p>
                        <span className="inline-block text-[9px] font-semibold text-[#96e6ff] bg-white/10 px-2 py-0.5 rounded-full">
                          {faq.tag}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Skyfall Logo Callout */}
          <div className="text-center pt-6 pb-2">
            <img
              alt="Skyfall"
              src={imgMailSkyfallLogo}
              className="w-48 h-auto mx-auto mb-4 drop-shadow-[0_0_25px_rgba(229,28,255,0.4)] animate-htn-float"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-[#e51cff] to-[#9b1cff] text-white font-['League_Spartan:Black',sans-serif] text-sm tracking-widest uppercase py-4 px-8 rounded-2xl shadow-[0_8px_25px_rgba(229,28,255,0.45)] cursor-pointer"
            >
              REGISTER NOW
            </motion.button>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. FOOTER: KRISTU JAYANTI & VENUE MAP                                 */}
      {/* ===================================================================== */}
      <footer className="relative px-5 pt-12 pb-16 bg-[#020b18] border-t border-white/10">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Dept & College Details */}
          <div>
            <h3 className="font-['League_Spartan:Black',sans-serif] text-lg font-black text-white tracking-wider mb-2">
              DEPARTMENT OF COMPUTER APPLICATIONS
            </h3>
            <p className="text-xs text-[#96e6ff] font-semibold mb-3">
              Kristu Jayanti (Deemed to be University)
            </p>
            <p className="text-xs text-white/75 leading-relaxed">
              With a legacy spanning over two decades, the Department of Computer Applications (UG) has been a cornerstone of Kristu Jayanti (Deemed to be University) since its inception in 1999. The department is nationally recognised for excellence in its BCA programmes, ranking among the top institutions in India.
            </p>
          </div>

          {/* Info Modal Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Founder", "Our Values", "History", "Vision"].map((tab) => (
              <button
                key={tab}
                onClick={() => onInfoClick(tab)}
                className="bg-[#0b2542] hover:bg-[#123863] border border-[#28a4e6]/30 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all cursor-pointer text-center"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Venue & Google Maps Embed */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-['League_Spartan:Bold',sans-serif] font-bold text-base text-white tracking-wider">
                  WHERE TO BE ?
                </h4>
                <p className="text-[11px] text-[#96e6ff]">
                  Kristu Jayanti Central Campus, K. Narayanapura, Bengaluru
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kristu+Jayanti+College+Autonomous+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#28a4e6] hover:bg-[#1f87c2] active:scale-95 text-[#001f3f] font-bold text-xs py-2 px-3.5 rounded-xl shadow-md whitespace-nowrap transition-all"
              >
                Directions ↗
              </a>
            </div>

            {/* Tap to Open in Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kristu+Jayanti+College+Autonomous+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-64 rounded-2xl overflow-hidden border-2 border-[#28a4e6]/40 shadow-lg group cursor-pointer"
            >
              <iframe
                title="Kristu Jayanti Central Campus Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.638,13.053,77.649,13.064&layer=mapnik&marker=13.0583,77.6433"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="pointer-events-none"
              />

              {/* Tap to Open in Google Maps overlay badge */}
              <div className="absolute bottom-3 right-3 bg-[#1a73e8] text-white font-['League_Spartan:Bold',sans-serif] text-xs px-3 py-1.5 rounded-full shadow-lg border border-white/30 flex items-center gap-1.5 group-hover:bg-[#1557b0] transition-colors pointer-events-none">
                <span>🗺️ Open in Google Maps</span>
                <span className="text-sm">↗</span>
              </div>

              {/* Campus label badge */}
              <div className="absolute top-3 left-3 bg-white/95 text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded-lg shadow-md border border-black/10 flex items-center gap-1.5 pointer-events-none">
                <span>📍</span>
                <span>Kristu Jayanti Central Campus</span>
              </div>
            </a>
          </div>

          {/* Sole Contact Card */}
          <div className="bg-[#051a30] border border-[#28a4e6]/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-[#00cf91] uppercase tracking-widest block mb-0.5">
                HEAD ORGANISER & CONTACT
              </span>
              <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-sm text-white">
                Nikhil Mansotra
              </p>
              <p className="text-xs text-white/70">
                Department of Computer Applications
              </p>
            </div>
            <div className="flex gap-2 text-xs">
              <a
                href="tel:+918050726182"
                className="bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg text-white font-semibold"
              >
                📞 +91 8050726182
              </a>
              <a
                href="mailto:nikhil@skyfall.live"
                className="bg-[#00bd96]/20 border border-[#00bd96]/40 px-3 py-1.5 rounded-lg text-[#00cf91] font-semibold"
              >
                ✉️ Email
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-white/10 text-center text-[10px] text-white/50">
            © 2026 Team Skyfall • Department of Computer Applications, Kristu Jayanti (Deemed to be University)
          </div>
        </div>
      </footer>
    </div>
  );
}
