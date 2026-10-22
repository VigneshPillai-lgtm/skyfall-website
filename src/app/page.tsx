"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const imgBackgroundImage = "/assets/figma_export/8c0cf4cd179d56f6894f2e160144c73f86ac98f1.png";
const imgTopFade = "/assets/figma_export/f979ec24a3438e8f882c1a1ae6d19c847ddd4d7b.png";
const imgMailSkyfallLogo = "/assets/figma_export/d57850905f6ab8c8f77ee7febaae8fb6d53575b0.png";
const imgGlassMorphism = "/assets/figma_export/4eac41a873f7c698c35006b31d3b139ddb85c977.png";
const imgRectangle = "/assets/figma_export/5d61d8665890f253ff3fc7ef0912d64888fc2566.png";
const imgRectangle1 = "/assets/figma_export/0f4d618ccc40984745e8c3e1ca5df34fdd6972cd.png";
const imgDivider = "/assets/figma_export/a2927b9787acbbc24d6dc3715f329380d5f3b6f1.png";
const imgBackgroundImage1 = "/assets/figma_export/0b86ce1d318f7de0b451bdad2c9444efa27cae74.png";
const imgRectangle3 = "/assets/figma_export/254c29aaeef4d732c5996b55059be254a643f421.png";
const imgBirds = "/assets/figma_export/89efdc9d6c0755a1a5c0a18d61fd6d26d21e5282.png";
const imgRectangle4 = "/assets/figma_export/99cb0ef92cfb4ebb598225189feef2f8b7c88e33.png";
const imgBottomClouds = "/assets/figma_export/d3a08219855bd252c35b9fe97e56741c8aaa8def.png";
const imgRectangle6 = "/assets/figma_export/1d72184889bf90b3d163d13dd20302fd0900ac9c.png";
const imgRectangle8 = "/assets/figma_export/d88c86d1c23b80a4488ae5fe8fc9dd3b2c76cff4.png";
const imgRectangle10 = "/assets/figma_export/ecd9abe996fb1e83ded6d415d0e3950ee76a10dc.png";
const imgBackgroundImage2 = "/assets/figma_export/2dd7180737bf64ace3b49b8ab04b578c2111eadc.png";
const imgRectangle11 = "/assets/figma_export/64b9836ede2127b13f5dd3887eff8a6936bf38ed.png";
const imgBoat = "/assets/figma_export/9b0f419609d0aae6e9cd7d0e34850f584d7e3cdf.png";
const imgRectangle12 = "/assets/figma_export/ae1a11474f7f40e613d9603f94ae747357ec5ace.png";
const imgEmoji = "/assets/figma_export/d9f30e8dc2ca692fce60ac94f686cc7d3342aed2.png";
const imgRectangle13 = "/assets/figma_export/539ae4a9324ac2cace538c65bacec6a3b1eade31.png";
const imgRectangle14 = "/assets/figma_export/961c7825b9cd5cda0e67ae1c97e16dc40140eb0c.png";
const imgRectangle15 = "/assets/figma_export/304c891f9325af6392c56bd89c3990bda05789fb.png";
const imgPic = "/assets/figma_export/1bcbe2c7d1c60c39f63ec03c83b8ce9cd10f6370.png";
const imgDivider1 = "/assets/figma_export/277ed8148f811257fca988ffa72e701958d5bba8.png";
const imgBackgroundImage3 = "/assets/figma_export/3b8a41428c214f12aecda74fb30432ade0fa6250.png";
const imgMentorsImage = "/assets/figma_export/d4b3e8dfd9f16f0f5166014505fb71544c2734df.png";
const imgPicEmoji = "/assets/figma_export/e7578bbf0770711a9cfa5f7d2b8a8adf820e4b6a.png";
const imgRectangle16 = "/assets/figma_export/2a87f22217253c2af5cd2d5d8cc128e1cbef612b.png";
const imgRectangle17 = "/assets/figma_export/e3e2fbe831c2dfc5ca2527249fc392b9e2491584.png";
const imgRectangle18 = "/assets/figma_export/e90ada8232580c5447f85dd530f2424d394dfc8a.png";
const imgDividerRocks = "/assets/figma_export/128727242fc76e21df0f455f063377eaa044c79f.png";
const imgHeadingBackgroundImg = "/assets/figma_export/6f6e62c26e20ab5bde20f9c0c591e8ec7a224ff7.png";
const imgRectangle19 = "/assets/figma_export/aa837142836e683307df84c73113e44f1b56f20c.png";
const imgRectangle20 = "/assets/figma_export/2e5a492a267345d1d5a1e107627fbca1c6a147bc.png";
const imgHeadingBackground = "/assets/figma_export/1f95a83263196131a61396f8681e918b72e4322e.png";
const imgRectangle21 = "/assets/figma_export/0015fffcf9c99211cb44948380c5c193cad5bde8.png";
const imgMapImg = "/assets/figma_export/15c9e5ee82261fcecc9c92be8a828bbcfec03ed4.png";
const imgBackgrundBase = "/assets/figma_export/25e8d481f957778a81dae694378c379d6065c9e0.svg";
const imgClipPathGroup = "/assets/figma_export/c5dfc4eb8363dbad6f46007673a1e8ff3f3d01cd.svg";
const imgVector = "/assets/figma_export/fa659de423b05121989b1be648d11ca35f506c84.svg";
const imgClipPathGroup1 = "/assets/figma_export/9c4f6ded7b3c65bb1e2cb1913fda81e03b241436.svg";
const imgVector1 = "/assets/figma_export/296451d824366a746bfdfef8b0267d205fb876f9.svg";
const imgRectangle2 = "/assets/figma_export/529a1cbfca2ed8009d9a36e790de86e68e795c57.svg";
const imgBoxBackgroundSkyblue = "/assets/figma_export/3cdff48670cab84ecaf9aacff7355bea1b8d0aac.svg";
const imgWhiteBox = "/assets/figma_export/1447a8ef18fa8ed42bbf6f2e784a2bf54c847daa.svg";
const imgPinkBackgroundTextBox = "/assets/figma_export/b7b73362661b67e89d9d624a4ebc69b15a9ca7be.svg";
const imgWhiteBox1 = "/assets/figma_export/14c56144e6a7cd3f5abd3db73b1b70c8c4636471.svg";
const imgClipPathFrame = "/assets/figma_export/e13cadeb587d944edce94262d422443391bc0f0f.svg";
const imgClipPathFrame1 = "/assets/figma_export/2fc606150d7615bc1e54b84f84d0180e19f81019.svg";
const imgClipPathFrame2 = "/assets/figma_export/bb4eb20c3d3e39af7224158318559cc0b05f4f08.svg";
const imgGroup = "/assets/figma_export/17f72bfdab033d3ec2ba2dad8a3ce761c42f22fe.svg";
const imgGroup1 = "/assets/figma_export/158850cb9fe193b7c0fc0ae06e19b3559590572f.svg";
const imgRectangle5 = "/assets/figma_export/7778b07299e5a8a76631f3a9e63ab26f4bd25a10.svg";
const imgGroup2 = "/assets/figma_export/ca32bd52554101ad9079567fd992236b4c172326.svg";
const imgGroup3 = "/assets/figma_export/fe402f7245b6f822e4c7b9f0654a4ec7eb9c6d22.svg";
const imgRectangle7 = "/assets/figma_export/a4ec44c8b5502751c241de4a1f46bf723e9e2b45.svg";
const imgGroup4 = "/assets/figma_export/bc8020d7dbb42544b09dd668acc1aa2a0b0db488.svg";
const imgGroup5 = "/assets/figma_export/edc3c21fa4b0d4f89cf1fb93c3127895283369fa.svg";
const imgRectangle9 = "/assets/figma_export/28b81e309cf6be289794060f41e8ea6543b124a9.svg";
const imgClipPathGroup2 = "/assets/figma_export/30b15741ff35013b31a63f01dbdc4cc7683954ff.svg";
const imgClipPathGroup3 = "/assets/figma_export/1440829626d8184df10a84ab911bdfeb44757d94.svg";
const imgBackgroundShape = "/assets/figma_export/fa017b0a18c2094d73112a6103d714e4d75d8cee.svg";
const imgBackgroundShape1 = "/assets/figma_export/2d67e964d0fa09f538e947f50721a9eb5c0fcd7c.svg";
const imgCardOuterDotted = "/assets/figma_export/5cf3b6b40b2c116257dc3f709bc11593630867a1.svg";
const imgWhiteBox2 = "/assets/figma_export/fc48a043ef0b0cd047a3de2e2683d2f57462d2d7.svg";
const imgHeading = "/assets/figma_export/ed7812ef3a663b201841cbf3282e231974afc74b.svg";
const imgPicBackground = "/assets/figma_export/406ca89c5d32f09ec7ca28d0388739e5999d8ac1.svg";
const imgHeading1 = "/assets/figma_export/6c4520bd4ab1315d1648030c26a5ce161edbc3fc.svg";
const imgPicBackground1 = "/assets/figma_export/f6bb1a2c316b3b31aef62759bfc2de06e79c678d.svg";
const imgYellowBackground = "/assets/figma_export/a97338ea51e6d2fa452ef24ecefa627577640466.svg";
const imgHeading2 = "/assets/figma_export/dee3729117200f4c6f442ca4554b512ba7ea06f0.svg";
const imgBorderDotted = "/assets/figma_export/c1771182146c32174ad78ee8b1eacd6615182c4c.svg";
const imgBackgreoundBox = "/assets/figma_export/5a7ba393fb6f812ab5752ee63df89863706de89c.svg";
const imgBackgreoundBox1 = "/assets/figma_export/24a1312a55dbe178619854f6ada77ff961251bcb.svg";
const imgClipPathGroup4 = "/assets/figma_export/0ccc029da3a9ea6aa61f93b35dff4de400e5e64f.svg";
const imgVector2 = "/assets/figma_export/fc677182409b446780fd2d2340eb68c5ee0117f1.svg";
const imgBtnBackground = "/assets/figma_export/d0cb0c622e6c03664df93efb6f688411af7bd5c0.svg";
const imgVector3 = "/assets/figma_export/14447064b4b646d6ddea9df70212a3c0117bcb3c.svg";
const imgBtnBackground1 = "/assets/figma_export/5eea092462ee28145244370dd417a6d413928a95.svg";
const imgBtnBackgroud = "/assets/figma_export/52ae096844b78d922b817a459930d72c49603c0c.svg";
const imgBtnBackground2 = "/assets/figma_export/1c23406e87bdd124735759aa9a357b53bb23f790.svg";
const imgVector4 = "/assets/figma_export/d345cf419267801141e4abb7182931917d4d9396.svg";
const imgIdeaHandsBanner = "/assets/idea_hands_banner.png";
const imgClipPathGroup5 = "/assets/figma_export/54a42fafbf5d5194e9c5d856aec3a3d6a39db57b.svg";
const imgClipPathGroup6 = "/assets/figma_export/2467f2e0f3613753ba35fb844e577bf74a300453.svg";
const imgBackgroundShape2 = "/assets/figma_export/d93a35e3a6ab307980232eb8053cddb97bf2fe8d.svg";
const imgBackgroundShape3 = "/assets/figma_export/54869bb32e33c2ca8304341622ec13dbcbe1f347.svg";
const imgDottedBorder = "/assets/figma_export/f57e4f4c215dbf9fbb3dbf98c90c6a809babcd7d.svg";
const imgBlueBackground = "/assets/figma_export/74061bc4789636fc12411158de8710569e75c03d.svg";
const imgBoxBackground = "/assets/figma_export/28efeab04ddcd36e9cec21c4fb5d1709d67fe2ae.svg";
const imgVector5 = "/assets/figma_export/fe4704c4e7c801784def4fb4338cb857ec849e3b.svg";
const imgBorder = "/assets/figma_export/d1847b273bf3be8e92ffdead777db9f8c71f5de9.svg";
const imgBorder1 = "/assets/figma_export/df57253a2be416b9c21207bc4eee2d943efc2637.svg";
const imgVector6 = "/assets/figma_export/791cbffd5338f73da30a723d48c5f23eb89ab132.svg";
const imgGreenBoxBackground = "/assets/figma_export/37c4b55c5a55c5113543f014ef932a1c78452441.svg";
const imgBackgroundBox = "/assets/figma_export/98baf647eadb31807ebcb28ffb9fe332b11c9f9a.svg";
const imgVector7 = "/assets/figma_export/94a87ea0973ef8072d3c219d4ce3fa108bcbd871.svg";
const imgVector8 = "/assets/figma_export/e7e0e5c89f4917d04650ec83ca258bf4914ebfde.svg";
const imgVector9 = "/assets/figma_export/6c8d98c9e5d7cc19ed1c52e668e2a73178e8df23.svg";
const imgVector10 = "/assets/figma_export/3cfcd806d5df64b79f3f017eeabd2ee933704fde.svg";
const imgVector11 = "/assets/figma_export/a917966c1d99516206e55f3ef1dc976aa4c527a6.svg";
const imgDivider2 = "/assets/figma_export/dbfb4ec97ffc432118b660d3f5c81f926d8a44bb.svg";
const imgDivider3 = "/assets/figma_export/3faf915a2e712f8d974e1f0424ee93d8923325b7.svg";
const imgClipPathGroup7 = "/assets/figma_export/a779dd006066a19b6de6e92be8aa92775887c554.svg";
const imgClipPathGroup8 = "/assets/figma_export/59064bc11cd44036b13ee5912ecaf25574f50066.svg";
const imgClipPathGroup9 = "/assets/figma_export/ae4321a6f130649f36343c57295e7ce0e8154908.svg";
const imgClipPathGroup10 = "/assets/figma_export/715280350878d6ae2d09bb0baa3e949a8bf21432.svg";
const imgFaqBox = "/assets/figma_export/971291d56ae9d1d01d7236ac7bbfc6bd25e47da6.svg";
const imgClipPathGroup11 = "/assets/figma_export/906a9bbd93f9b3772bc5111c6d659ac5265cfc8b.svg";
const imgClipPathGroup12 = "/assets/figma_export/88fff8b9ab40fbcf5bf4651fbb2156b175c3bdd6.svg";
const imgClipPathGroup13 = "/assets/figma_export/a29a8f2e26c40373f14b298e2c7153a2195bcd26.svg";
const imgClipPathGroup14 = "/assets/figma_export/2c2bead21089b65755f45e00ec604df17d8d691a.svg";
const imgClipPathGroup15 = "/assets/figma_export/07f3f286f1f4c807eab4144e48a152de61a49694.svg";
const imgClipPathGroup16 = "/assets/figma_export/282f244ea71e1a802cf3a77ae3551e1a4aaf17c4.svg";
const imgClipPathGroup17 = "/assets/figma_export/ed460aff9ac5067cb7468a0b99c86152575f7d77.svg";
const imgClipPathGroup18 = "/assets/figma_export/36e1d06f9755b12392f11ecd0b2fba5c317cc513.svg";
const imgVector12 = "/assets/figma_export/0da646ab03b22a9fed18dd753234d7cf17f73736.svg";
const imgMapBorderDotted = "/assets/figma_export/67a4564c19fa3f7777dedcc625027b75a21ed3a8.svg";
const imgClipPathGroup19 = "/assets/figma_export/b064903a85da9f9129df700843099cafb7b517c4.svg";
const imgVector13 = "/assets/figma_export/b518aafc87042e767be8e543eb4a0be72f867572.svg";
const imgVector14 = "/assets/figma_export/1dba0e68390d06bb7228a8b61d65195f63d71c81.svg";
const imgVector15 = "/assets/figma_export/48bffe65c8b6cadbe6aacd090e4a15a8f84980dc.svg";
const imgVector16 = "/assets/figma_export/a41ecd044d34659ac8cc7c677a6c976684cee905.svg";
const imgVector17 = "/assets/figma_export/445c8388ee56e05689c45ff940c4d8d2212b72cf.svg";
const imgVector18 = "/assets/figma_export/4e98b3658a619566718b61846c076c9a571a9caf.svg";
const imgVector19 = "/assets/figma_export/3b0159bdfb86c17effefb565cd26efedb16e6db0.svg";
const imgClipPathGroup20 = "/assets/figma_export/9a41608fe2bb84a101ba6a679e9b724d55850e30.svg";

interface GoodieItem {
  id: string;
  name: string;
  shortLabel: string;
  xpCost: string;
  desc: string;
  img: string;
  rotateClass: string;
  scaleClass: string;
}

const GOODIES_ITEMS: GoodieItem[] = [
  {
    id: "headphones",
    name: "🎧 Pro Wireless Headphones",
    shortLabel: "Wireless Headphones",
    xpCost: "500 XP",
    desc: "Active noise-cancelling studio headphones — complete campus coding & design quests to redeem!",
    img: imgRectangle6,
    rotateClass: "rotate-[12deg]",
    scaleClass: "scale-105",
  },
  {
    id: "shark",
    name: "🦈 Giant Blåhaj Shark Plushie",
    shortLabel: "Shark Plushie",
    xpCost: "300 XP",
    desc: "Every hacker's favorite cuddly companion! Earn XP at mini-events & side quests to claim yours.",
    img: imgRectangle8,
    rotateClass: "rotate-[-10deg]",
    scaleClass: "scale-115",
  },
  {
    id: "keyboard",
    name: "⌨️ Custom Mechanical Keyboard",
    shortLabel: "Mechanical Keyboard",
    xpCost: "450 XP",
    desc: "Hot-swappable tactile switches & custom retro keycaps for top quest finishers!",
    img: imgRectangle10,
    rotateClass: "rotate-[-4deg]",
    scaleClass: "scale-110",
  },
];

type IdeaCategory = "ALL" | "SOFTWARE" | "HARDWARE" | "COMBINATION";

interface ProjectIdea {
  title: string;
  category: "SOFTWARE" | "HARDWARE" | "COMBINATION";
  tip: string;
  xp: number;
}

const PROJECT_IDEAS: ProjectIdea[] = [
  {
    title: "A desktop pet that reacts to your CPU usage & study habits.",
    category: "SOFTWARE",
    tip: "Stack Tip: Build with Electron or Web animations + system performance APIs!",
    xp: 50,
  },
  {
    title: "A multiplayer browser game where you write code spells to survive.",
    category: "SOFTWARE",
    tip: "Stack Tip: HTML5 Canvas / Phaser + WebSockets for real-time duels!",
    xp: 60,
  },
  {
    title: "An AI study buddy that turns lecture notes into lo-fi beats & quizzes.",
    category: "SOFTWARE",
    tip: "Stack Tip: Next.js + Web Audio API + LLM structured quiz generation!",
    xp: 55,
  },
  {
    title: "A real-time campus quest radar & high-school club finder.",
    category: "SOFTWARE",
    tip: "Stack Tip: React + Leaflet maps + gamified XP badges!",
    xp: 45,
  },
  {
    title: "A hardware-based Pomodoro focus cube you flip to start timers.",
    category: "HARDWARE",
    tip: "Stack Tip: ESP32 / Arduino + MPU6050 accelerometer + OLED screen!",
    xp: 65,
  },
  {
    title: "A gesture-controlled synth glove that plays music as you move your fingers.",
    category: "HARDWARE",
    tip: "Stack Tip: Flex sensors + Arduino Nano + piezo buzzer or MIDI out!",
    xp: 75,
  },
  {
    title: "A robotic desk plant that turns toward sunlight & high-fives you.",
    category: "HARDWARE",
    tip: "Stack Tip: Photoresistors (LDRs) + micro servos + 3D-printed pot!",
    xp: 70,
  },
  {
    title: "A smart water bottle coaster that glows neon when you forget to hydrate.",
    category: "HARDWARE",
    tip: "Stack Tip: Load cell / pressure pad + NeoPixel LED ring!",
    xp: 55,
  },
  {
    title: "A weather app for plants paired with a live soil-moisture sensor.",
    category: "COMBINATION",
    tip: "Stack Tip: Capacitive soil sensor + ESP32 Wi-Fi + animated React dashboard!",
    xp: 80,
  },
  {
    title: "An arcade reflex board wired to a live global leaderboard web app.",
    category: "COMBINATION",
    tip: "Stack Tip: Arcade push-buttons + WebSerial API + Next.js live scoreboard!",
    xp: 85,
  },
  {
    title: "A smart bike helmet with crash alerts & a live parent-safety map.",
    category: "COMBINATION",
    tip: "Stack Tip: Accelerometer + GPS module + live web tracking dashboard!",
    xp: 90,
  },
  {
    title: "An interactive LED pixel canvas controlled by drawings on your phone.",
    category: "COMBINATION",
    tip: "Stack Tip: WS2812B LED matrix + WebSockets drawing pad!",
    xp: 80,
  },
];

const AGENDA_DETAILS = [
  {
    event: "Doors Open",
    time: "07:30 AM - 08:30 AM",
    detail: "📍 Main Foyer — Check in, grab your Skyfall ID badge, stickers & welcome kit!",
  },
  {
    event: "Opening Ceremony",
    time: "09:00 AM - 10:00 AM",
    detail: "🎤 Main Auditorium — Theme reveal, side-quest rules & team formation kickoff!",
  },
  {
    event: "Hacking Continues",
    time: "10:00 AM - 12:00 PM",
    detail: "💻 Hacking Zones — Brainstorm with mentors, claim hardware kits & start building!",
  },
  {
    event: "Activity : Will be revealed later",
    time: "12:00 PM - 01:00 PM",
    detail: "🎮 Secret Side-Quest — Compete in mini-challenges to earn bonus XP & plushies!",
  },
  {
    event: "Lunch Break",
    time: "01:00 PM - 02:30 PM",
    detail: "🍕 Dining Deck — Refuel with hot lunch, drinks & music with fellow builders!",
  },
  {
    event: "Hacking Continues",
    time: "02:00 PM - 04:00 PM",
    detail: "⚡ Deep Build Sprint — Mentor rounds, hardware debugging & prototype polishing!",
  },
  {
    event: "Submissions + Evening Snacks",
    time: "04:00 PM - 04:30 PM",
    detail: "📦 Submission Portal — Lock in your project repo, demo video & grab snacks!",
  },
  {
    event: "judging + Quest Rewards",
    time: "04:30 PM - 05:00 PM",
    detail: "🦈 Expo & Reward Shop — Pitch to judges and redeem your XP for prizes!",
  },
  {
    event: "Valedictory / Closing Note",
    time: "05:00 PM - 06:00 PM",
    detail: "🏆 Grand Finale — Winner announcements, group photos & Skyfall sign-off!",
  },
];

const FAQ_EXTRAS = [
  "🎓 Open to all high school students (Grades 8–12, ages 13–18). Bring your school ID!",
  "🥗 Veg, non-veg & allergy-friendly meals, plus energy drinks & snacks all day!",
  "🤝 Coming solo? No worries! We host a fun speed-teaming mixer right after opening.",
  "🛡️ Full faculty supervision, secure campus entry, and dedicated parent helpline!",
  "🚀 70% of Skyfall hackers are first-timers — mentors will help you from line 1 of code!",
  "🎒 Optional: bring Arduino/sensors if you own any, though we provide hardware kits too!",
];

const FOOTER_INFO: Record<string, { title: string; subtitle: string; body: string; badge: string }> = {
  Founder: {
    title: "FOUNDER & INSPIRATION",
    subtitle: "CMI Visionaries & Academic Leadership",
    body: "Kristu Jayanti (Deemed to be University) is run by the Bodhi Niketan Trust, formed by the members of St. Joseph Province of the Carmelites of Mary Immaculate (CMI), the first indigenous religious congregation in India founded by St. Kuriakose Elias Chavara.",
    badge: "Est. 1999 • Bengaluru",
  },
  "Our Values": {
    title: "OUR CORE VALUES",
    subtitle: "Light & Prosperity • Innovation with Integrity",
    body: "Guided by faith, academic excellence, social responsibility, and holistic development, the Department of Computer Applications empowers young creators to build technology that uplifts communities.",
    badge: "Excellence • Creativity • Community",
  },
  History: {
    title: "OUR HISTORY",
    subtitle: "Over Two Decades of Computing Excellence",
    body: "Since 1999, the Department of Computer Applications (UG) at Kristu Jayanti (Deemed to be University) has grown into one of India's premier hubs for undergraduate computing education, hosting national hackathons, research symposiums, and student-led innovation labs.",
    badge: "25+ Years of Impact",
  },
  Vision: {
    title: "OUR VISION",
    subtitle: "Empowering the Next Generation of Builders",
    body: "To provide aspiring teen technologists and college innovators a launchpad where curiosity meets hands-on engineering — turning bold weekend experiments into lifelong passion.",
    badge: "Skyfall 2026 • April 11",
  },
};

const REALMS = [
  { id: "realm-sky", name: "Sky Realm", altitude: "+1,200m", topVw: 0, color: "#73c9ff", icon: "☀️" },
  { id: "realm-clouds", name: "Cloud Kingdom", altitude: "+600m", topVw: 73, color: "#d876e4", icon: "☁️" },
  { id: "realm-ocean", name: "Ocean Horizon", altitude: "0m", topVw: 146, color: "#28a4e6", icon: "⛵" },
  { id: "realm-reef", name: "Idea Reef", altitude: "-300m", topVw: 215, color: "#00cf91", icon: "💡" },
  { id: "realm-deep", name: "Mentor Trench", altitude: "-750m", topVw: 267, color: "#0073de", icon: "🛟" },
  { id: "realm-cavern", name: "Waterfall Cavern", altitude: "-1,200m", topVw: 390, color: "#00bd96", icon: "🌊" },
  { id: "realm-abyss", name: "Crystal Abyss", altitude: "-1,650m", topVw: 514, color: "#e51cff", icon: "💎" },
  { id: "realm-base", name: "Base Camp", altitude: "-1,800m", topVw: 609, color: "#f6d02b", icon: "📍" },
];

export default function Frame() {
  // Scroll & Parallax hooks
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Parallax transforms across the vertical world
  const skyBgY = useTransform(smoothProgress, [0, 0.18], ["0vw", "4.5vw"]);
  const heroLogoY = useTransform(smoothProgress, [0, 0.15], ["0vw", "-2.5vw"]);
  const divider1X = useTransform(smoothProgress, [0, 0.25], ["-1.5vw", "1.5vw"]);
  const birdsX = useTransform(smoothProgress, [0.05, 0.3], ["0vw", "-5vw"]);
  const birdsY = useTransform(smoothProgress, [0.05, 0.3], ["0vw", "-2vw"]);
  const cloudsLeftX = useTransform(smoothProgress, [0.08, 0.35], ["0vw", "3.5vw"]);
  const bottomCloudsY = useTransform(smoothProgress, [0.1, 0.35], ["0vw", "-2.2vw"]);
  const boatX = useTransform(smoothProgress, [0.15, 0.42], ["-1.5vw", "3.2vw"]);
  const divider2X = useTransform(smoothProgress, [0.3, 0.55], ["2vw", "-2vw"]);

  // Interactive Idea Generator State
  const [selectedCategory, setSelectedCategory] = useState<IdeaCategory>("ALL");
  const [currentIdea, setCurrentIdea] = useState<ProjectIdea | null>(PROJECT_IDEAS[0]);
  const [ideaHintText, setIdeaHintText] = useState(PROJECT_IDEAS[0].tip);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIdea, setCopiedIdea] = useState(false);
  const ideaIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Interactive Goodies Carousel State
  const [goodieOffset, setGoodieOffset] = useState(0);
  const [isGoodiePaused, setIsGoodiePaused] = useState(false);

  // Interactive Gamification / Penguin Companion State (Hack the North style)
  const [xp, setXp] = useState(100);
  const [foundPenguins, setFoundPenguins] = useState<Record<string, boolean>>({});
  const [activePenguinBubble, setActivePenguinBubble] = useState<{
    id: string;
    text: string;
  } | null>(null);

  // Interactive Rewards / Agenda / FAQ / Modals State
  const [activeReward, setActiveReward] = useState<{
    name: string;
    xpCost: string;
    desc: string;
  } | null>(null);
  const [activeAgendaIdx, setActiveAgendaIdx] = useState<number | null>(null);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [activeRealmIdx, setActiveRealmIdx] = useState(0);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [regSubmitted, setRegSubmitted] = useState(false);
  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    age: "16",
    track: "SOFTWARE",
  });
  const [activeFooterModal, setActiveFooterModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cursor spotlight position
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        REALMS.length - 1,
        Math.max(0, Math.floor(v * REALMS.length))
      );
      setActiveRealmIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const handlePenguinClick = (id: string, message: string) => {
    setActivePenguinBubble({ id, text: message });
    if (!foundPenguins[id]) {
      setFoundPenguins((prev) => ({ ...prev, [id]: true }));
      setXp((prev) => prev + 25);
      triggerToast(`🐧 Penguin Discovered! +25 Quest XP`);
    }
    setTimeout(() => {
      setActivePenguinBubble((prev) => (prev?.id === id ? null : prev));
    }, 3500);
  };

  const handleGenerateIdea = (overrideCat?: IdeaCategory) => {
    if (ideaIntervalRef.current) {
      clearInterval(ideaIntervalRef.current);
    }
    const cat = overrideCat ?? selectedCategory;
    setIsGenerating(true);

    const pool =
      cat === "ALL"
        ? PROJECT_IDEAS
        : PROJECT_IDEAS.filter((item) => item.category === cat);

    let ticks = 0;
    ideaIntervalRef.current = setInterval(() => {
      const randomPreview = pool[Math.floor(Math.random() * pool.length)];
      setCurrentIdea(randomPreview);
      setIdeaHintText("🎲 Rolling a fresh Skyfall project prompt...");
      ticks++;
      if (ticks >= 5) {
        if (ideaIntervalRef.current) clearInterval(ideaIntervalRef.current);
        const candidates = pool.filter((item) => item.title !== currentIdea?.title);
        const finalPool = candidates.length > 0 ? candidates : pool;
        const finalChoice = finalPool[Math.floor(Math.random() * finalPool.length)];
        setCurrentIdea(finalChoice);
        setIdeaHintText(finalChoice.tip);
        setIsGenerating(false);
        setXp((prev) => prev + 15);
      }
    }, 65);
  };

  const handleCategorySelect = (cat: "SOFTWARE" | "HARDWARE" | "COMBINATION") => {
    setSelectedCategory(cat);
    handleGenerateIdea(cat);
  };

  const scrollToVw = (vwTop: number) => {
    if (typeof window === "undefined") return;
    const px = (vwTop / 100) * window.innerWidth;
    window.scrollTo({ top: px, behavior: "smooth" });
  };

  const level = Math.floor(xp / 100);
  const xpInLevel = xp % 100;
  const penguinCount = Object.keys(foundPenguins).length;

  return (
    <div
      className="bg-white relative w-full overflow-x-hidden h-[642.86vw] select-none"
      data-node-id="253:27"
    >
      {/* Interactive Cursor Glow Overlay (subtle, non-blocking) */}
      <div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(115, 201, 255, 0.11), transparent 70%)`,
        }}
      />

      {/* Hack the North-Side Realm Depth Navigator */}
      <div className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 pointer-events-auto">
        <div
          className="bg-[#051829]/85 backdrop-blur-md border border-white/25 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex flex-col items-center gap-2"
          style={{ padding: "14px 14px", minWidth: "68px" }}
        >
          <span className="font-['Lekton:Bold',monospace] text-[10px] tracking-wider text-[#96e6ff] uppercase whitespace-nowrap">
            {REALMS[activeRealmIdx]?.altitude}
          </span>
          <div className="w-full h-[1px] bg-white/15" />
          {REALMS.map((realm, idx) => {
            const isActive = idx === activeRealmIdx;
            return (
              <button
                key={realm.id}
                onClick={() => scrollToVw(realm.topVw)}
                title={`${realm.name} (${realm.altitude})`}
                className="group relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 cursor-pointer"
              >
                <span
                  className="pointer-events-none absolute right-9 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 bg-[#051829]/95 border border-white/20 text-white text-[11px] font-['League_Spartan:Bold',sans-serif] tracking-wider whitespace-nowrap px-3 py-1 rounded-lg shadow-lg"
                >
                  {realm.icon} {realm.name}{" "}
                  <span className="text-[#96e6ff] ml-1">{realm.altitude}</span>
                </span>
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3.5 h-3.5 ring-4 ring-white/25 scale-110"
                      : "w-2 h-2 opacity-60 group-hover:opacity-100 group-hover:scale-125"
                  }`}
                  style={{ backgroundColor: realm.color }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Hack the North-Style Interactive Quest XP Companion Pill (Bottom-Right) */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed right-3 md:right-5 bottom-4 z-50 bg-[#061a2e]/90 backdrop-blur-md border border-[#96e6ff]/35 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 text-white"
        style={{ padding: "10px 16px" }}
      >
        <button
          onClick={() =>
            triggerToast(
              `🎯 Quest Progress: Level ${level} (${xp} XP) • Penguins Found: ${penguinCount}/7! Click penguins, cards & ideas to level up!`
            )
          }
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-[#28a4e6] to-[#c800e1] flex items-center justify-center text-sm shadow-inner group-hover:scale-110 transition-transform">
            🐧
            <span className="absolute -top-1 -right-1 bg-[#f6d02b] text-black font-['League_Spartan:Black',sans-serif] text-[9px] px-1 rounded-full">
              L{level}
            </span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="font-['League_Spartan:Black',sans-serif] text-[11px] tracking-wider text-[#96e6ff]">
                SKYFALL QUEST
              </span>
              <span className="font-['Lekton:Bold',monospace] text-[10px] text-[#f6d02b]">
                {xp} XP
              </span>
            </div>
            <div className="w-24 h-1.5 bg-white/15 rounded-full overflow-hidden mt-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00cf91] via-[#28a4e6] to-[#e51cff]"
                animate={{ width: `${xpInLevel}%` }}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </div>
          </div>
          <span className="hidden sm:inline-block font-['Lekton:Bold',monospace] text-[10px] text-white/70 border-l border-white/15 pl-2.5">
            🐧 {penguinCount}/7
          </span>
        </button>
      </motion.div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#061a2e]/95 backdrop-blur-md border border-[#96e6ff]/50 text-white px-5 py-2.5 rounded-full shadow-[0_0_30px_rgba(40,164,230,0.45)] font-['League_Spartan:Bold',sans-serif] text-xs md:text-sm tracking-wider whitespace-nowrap"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================================== */}
      {/* HERO BACKGROUND & TOP FADE                                            */}
      {/* ===================================================================== */}
      <motion.div
        style={{ y: skyBgY }}
        className="absolute inset-[0_0_88.64%_0]"
        data-name="Background Image"
        data-node-id="253:38"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[108.7%] left-[-3.17%] max-w-none top-[-8.7%] w-[107.94%]"
            src={imgBackgroundImage}
          />
        </div>
      </motion.div>

      <div className="absolute flex inset-[0_0_96.42%_0] items-center justify-center">
        <div className="flex-none h-[100vw] rotate-90 w-[23.0159vw]">
          <div className="relative size-full" data-name="Top Fade" data-node-id="138:33">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[101.6%] left-[-2.81%] max-w-none top-[-0.15%] w-[103.45%]"
                src={imgTopFade}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* PAGE 1: SKY REALM (HERO)                                              */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[63.4921vw] left-0 overflow-clip top-0 w-[100vw]"
        data-name="Page1"
        data-node-id="261:10"
      >
        {/* Main Skyfall Hero Logo with Parallax + Float + Interactive 3D Hover */}
        <motion.div
          style={{ y: heroLogoY }}
          whileHover={{
            scale: 1.04,
            rotate: -1.5,
            filter: "drop-shadow(0 0 2vw rgba(255, 246, 143, 0.75))",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            setXp((prev) => prev + 10);
            triggerToast("⭐ Welcome to Skyfall 2026! Ready to build something legendary?");
          }}
          className="absolute inset-[28.75%_19.84%_43.75%_22.22%] cursor-pointer z-10"
          data-name="mail skyfall logo"
          data-node-id="261:11"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none animate-htn-float">
            <img
              alt="Skyfall Logo"
              className="absolute h-[276.7%] left-[-15.43%] max-w-none top-[-67.29%] w-[122.07%]"
              src={imgMailSkyfallLogo}
            />
          </div>
        </motion.div>

        <div
          className="absolute inset-[21%_25%_75.5%_25%]"
          data-name="Glass Morphism"
          data-node-id="261:14"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGlassMorphism} />
          </div>
        </div>

        <p
          className="absolute font-['League_Spartan:Bold',sans-serif] font-bold inset-[15%_10%_auto_10%] w-[80%] text-center leading-[1.5873vw] text-[1.4vw] text-shadow-[0.0794vw_0.0794vw_0.3968vw_rgba(0,0,0,0.32)] text-white tracking-[0.2024vw] whitespace-nowrap"
          data-node-id="261:12"
        >
          SCHOOL OF COMPUTATIONAL AND PHYSICAL SCIENCES
        </p>

        <div
          className="absolute inset-[21%_25%_75.5%_25%] flex items-center justify-center text-center pointer-events-none"
          data-node-id="261:13"
        >
          <p className="font-['League_Spartan:Bold',sans-serif] font-bold leading-none text-[1.18vw] text-shadow-[0.0794vw_0.0794vw_0.3968vw_rgba(66,66,66,0.58)] text-white tracking-[0.16vw] whitespace-nowrap pt-[0.2vw]">
            DEPARTMENT OF COMPUTER APPLICATIONS
          </p>
        </div>

        <div
          className="absolute top-[24.2%] bottom-[73.0%] left-0 right-0 flex items-center justify-center text-center pointer-events-none"
          data-node-id="261:15"
        >
          <p className="bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#fff9c9] leading-[1.5873vw] not-italic text-[1.1111vw] text-[transparent] to-[#ffc3f2] whitespace-nowrap">
            O R G A N I S E S
          </p>
        </div>

        <div
          className="absolute inset-[60%_18.25%_33.75%_17.46%]"
          data-name="backgrund base"
          data-node-id="261:17"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgBackgrundBase} />
        </div>

        <div
          className="absolute flex items-center justify-center font-['League_Spartan:Bold',sans-serif] font-bold inset-[60%_18.25%_33.75%_17.46%] leading-none text-[1.6667vw] text-center text-shadow-[0.0794vw_0.0794vw_0.3968vw_rgba(0,0,0,0.53)] text-white tracking-[0.25vw] pt-[0.22vw]"
          data-node-id="261:16"
        >
          <p className="whitespace-nowrap">
            <span className="leading-[1.5873vw]">{`NATIONAL `}</span>
            <span className="leading-[1.5873vw] text-[#ffcdf6]">TEENS</span>
            <span className="leading-[1.5873vw]">{` HACKATHON FOR `}</span>
            <span className="bg-clip-text bg-gradient-to-r from-[#ffcef8] leading-[1.5873vw] text-[transparent] to-[#fff68f]">
              PARTICIPANTS
            </span>
            <span className="leading-[1.5873vw]">{` AGED 13 -18`}</span>
          </p>
        </div>

        <div
          className="absolute bottom-1/4 flex flex-col font-['League_Spartan:ExtraBold',sans-serif] font-extrabold justify-center items-center leading-none left-[18%] right-[18%] text-[1.4286vw] text-center text-shadow-[0.0794vw_0.0794vw_0.3968vw_rgba(0,0,0,0.53)] text-white top-[69.2%] tracking-[0.2143vw]"
          data-node-id="261:18"
        >
          <p className="leading-[1.75vw]">
            WHERE CREATIVITY MEETS TECHNOLOGY THROUGH HANDSON BUILDING, GUIDED CHALLENGES, AND INTERACTIVE EXPERIENCES
          </p>
        </div>

        {/* Interactive Hero Buttons: REGISTER NOW & VIEW PROJECTS */}
        <div className="absolute contents inset-[80%_36.6%_15.02%_36.51%]" data-node-id="261:21">
          {/* REGISTER NOW Button */}
          <motion.div
            whileHover={{
              scale: 1.07,
              y: -4,
              filter: "drop-shadow(0 0 1.2vw rgba(115, 173, 115, 0.85))",
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformOrigin: "57.4% 82.5%" }}
            onClick={() => {
              setRegSubmitted(false);
              setShowRegisterModal(true);
            }}
            className="absolute inset-0 pointer-events-none z-20"
          >
            <div
              className="absolute inset-[80%_36.6%_15.02%_51.5%] pointer-events-auto cursor-pointer"
              data-name="Clip path group"
              data-node-id="261:22"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup} />
            </div>
            <div
              className="absolute inset-[80.85%_37.15%_19.15%_52.13%] pointer-events-none"
              data-name="Vector"
              data-node-id="261:27"
            >
              <div className="absolute inset-[-0.1746vw_-1.65%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div
              className="absolute inset-[80%_36.6%_15.02%_51.5%] flex items-center justify-center text-center pointer-events-none"
              data-node-id="261:28"
            >
              <p className="font-['Fredoka_One:Regular',sans-serif] leading-none not-italic text-[#73ad73] text-[0.9524vw] tracking-[0.119vw] whitespace-nowrap pt-[0.1vw]">
                REGISTER NOW
              </p>
            </div>
          </motion.div>

          {/* VIEW PROJECTS Button */}
          <motion.div
            whileHover={{
              scale: 1.07,
              y: -4,
              filter: "drop-shadow(0 0 1.2vw rgba(40, 164, 230, 0.85))",
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformOrigin: "42.5% 82.5%" }}
            onClick={() => scrollToVw(175)}
            className="absolute inset-0 pointer-events-none z-20"
            data-node-id="261:29"
          >
            <div
              className="absolute inset-[80%_51.57%_15.02%_36.51%] pointer-events-auto cursor-pointer"
              data-name="Clip path group"
              data-node-id="261:30"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup1} />
            </div>
            <div
              className="absolute inset-[80.85%_52.13%_19.15%_37.14%] pointer-events-none"
              data-name="Vector"
              data-node-id="261:35"
            >
              <div className="absolute inset-[-0.1746vw_-1.65%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div
              className="absolute inset-[80%_51.57%_15.02%_36.51%] flex items-center justify-center text-center pointer-events-none"
              data-node-id="261:36"
            >
              <p className="font-['Fredoka_One:Regular',sans-serif] leading-none not-italic text-[#28a4e6] text-[0.9524vw] tracking-[0.119vw] whitespace-nowrap pt-[0.1vw]">
                VIEW PROJECTS
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero Corner Penguin #1 */}
        <div className="absolute flex inset-[81.24%_83.21%_0.59%_5.26%] items-center justify-center z-20">
          <div className="-scale-y-100 flex-none rotate-[-178.88deg] size-[11.3127vw]">
            <motion.div
              whileHover={{ scale: 1.14, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePenguinClick(
                  "penguin-hero",
                  "Hi Builder! 🐧 Scroll down to sail across the Skyfall realms!"
                )
              }
              className="relative size-full cursor-pointer animate-htn-penguin"
              data-name="Rectangle"
              data-node-id="265:40"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Skyfall Penguin" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
              </div>
            </motion.div>
          </div>
          {activePenguinBubble?.id === "penguin-hero" && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-[3.2vw] left-[8vw] bg-white/95 text-[#004aad] font-['League_Spartan:Bold',sans-serif] text-[0.9vw] px-[1vw] py-[0.5vw] rounded-2xl shadow-xl whitespace-nowrap border-2 border-[#73c9ff] z-30"
            >
              {activePenguinBubble.text}
            </motion.div>
          )}
        </div>

        <div
          className="absolute inset-[3.75%_39.69%_88.9%_39.68%] overflow-clip"
          data-name="Clip path frame"
          data-node-id="271:16"
        >
          <div className="absolute inset-[0.19%_0.02%_-0.01%_-0.02%]" data-name="Rectangle" data-node-id="271:17">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* DIVIDER 1: JOIN US ON APRIL 11TH 2026                                 */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[19.0476vw] left-0 top-[56.3492vw] w-[100vw] z-10"
        data-name="Divider"
        data-node-id="262:37"
      >
        <motion.div
          style={{ x: divider1X }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <img
            alt=""
            className="absolute h-full left-[-13.39%] max-w-none top-0 w-[129.17%]"
            src={imgDivider}
          />
        </motion.div>
      </div>

      {/* ===================================================================== */}
      {/* PAGE 2: CLOUD KINGDOM (BUILD COOL PROJECTS, WIN COOL REWARDS)         */}
      {/* ===================================================================== */}
      <div
        className="absolute bg-gradient-to-b from-[#73c9ff] from-[50.481%] h-[89.6825vw] left-0 overflow-clip to-[#74cde8] top-[73.0159vw] w-[100vw]"
        data-name="Page 2"
        data-node-id="266:41"
      >
        <div className="absolute inset-[0_0_15.93%_0]" data-name="Background Image" data-node-id="266:42">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBackgroundImage1} />
          </div>
        </div>

        {/* Drifting Clouds Layer */}
        <motion.div
          style={{ x: cloudsLeftX }}
          className="absolute inset-0 pointer-events-none"
          data-name="Clouds"
          data-node-id="266:43"
        >
          <div className="absolute contents inset-[0.07%_55.41%_66.85%_0]" data-name="Group" data-node-id="266:45">
            <div
              className="absolute inset-[0.07%_55.41%_66.85%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.0016vw_1.5794vw] mask-size-[44.5905vw_28.277vw] opacity-47 animate-htn-cloud"
              data-name="Rectangle"
              data-node-id="266:46"
              style={{ maskImage: `url('${imgRectangle2}')` }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Soaring Birds with Parallax */}
        <motion.div
          style={{ x: birdsX, y: birdsY }}
          className="absolute inset-[3.54%_4.76%_85.84%_81.75%]"
          data-name="Birds"
          data-node-id="266:47"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none animate-htn-birds">
            <img
              alt=""
              className="absolute h-[101.41%] left-0 max-w-none top-[1.22%] w-[133.17%]"
              src={imgBirds}
            />
          </div>
        </motion.div>

        {/* Cloud Penguin #2 — Perches cleanly on top edge of Box Left */}
        <motion.div
          whileHover={{ scale: 1.15, y: -6 }}
          whileTap={{ scale: 0.92 }}
          onClick={() =>
            handlePenguinClick(
              "penguin-cloud",
              "Complete side quests around campus to win that Shark Plushie! 🦈✨"
            )
          }
          className="absolute inset-[12.4%_53.8%_75.2%_35.09%] cursor-pointer z-20 animate-htn-penguin"
          data-name="Rectangle"
          data-node-id="275:73"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt="Cloud Penguin"
              className="absolute left-[-98.57%] max-w-none size-[293.47%] top-[-192.79%]"
              src={imgRectangle4}
            />
          </div>
          {activePenguinBubble?.id === "penguin-cloud" && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-[3.2vw] left-1/2 -translate-x-1/2 bg-white/95 text-[#00638d] font-['League_Spartan:Bold',sans-serif] text-[0.85vw] px-[1vw] py-[0.45vw] rounded-2xl shadow-xl whitespace-nowrap border-2 border-[#c86ad4] z-30"
            >
              {activePenguinBubble.text}
            </motion.div>
          )}
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute inset-[9.73%_10%_85.84%_10%] flex items-center justify-center text-center pointer-events-none"
          data-node-id="269:12"
        >
          <p className="font-['League_Spartan:Bold',sans-serif] font-bold leading-[3.9683vw] text-[#00638d] text-[3.0952vw] text-shadow-[0.1587vw_0vw_0vw_white] tracking-[0.031vw] whitespace-nowrap">
            Build Cool Projects, Win Cool Rewards
          </p>
        </motion.div>

        {/* Box Left: BUILD WHATEVER YOU LIKE! */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, type: "spring", bounce: 0.3 }}
          whileHover={{
            y: -6,
            scale: 1.015,
            filter: "drop-shadow(0 1vw 2vw rgba(0, 99, 141, 0.22))",
          }}
          style={{ transformOrigin: "27.5% 40%" }}
          className="absolute inset-0 pointer-events-none z-10"
          data-name="Box Left"
          data-node-id="272:29"
        >
          <div
            className="absolute inset-[26.12%_54.87%_42.7%_8.73%] pointer-events-auto cursor-pointer"
            onClick={() => scrollToVw(175)}
            data-name="Box background skyblue"
            data-node-id="272:18"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgBoxBackgroundSkyblue} />
          </div>
          <div
            className="absolute inset-[24.78%_53.61%_44.19%_10.01%]"
            data-name="White Box"
            data-node-id="272:21"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgWhiteBox} />
          </div>
          {/* Cleanly aligned text stack inside White Box */}
          <div
            className="absolute inset-[26.6%_55.5%_46.0%_11.9%] flex flex-col justify-between pointer-events-none"
          >
            <p
              className="font-['League_Spartan:Regular',sans-serif] font-normal leading-[1.9vw] text-[#3585b3] text-[1.0317vw] tracking-[0.11vw]"
              data-node-id="272:28"
            >
              Skyfall is a beginner-friendly hackathon for students, where curious minds come together to explore, build, and create. A space where developers, designers, and builders collaborate to turn ideas into real projects.
            </p>
            <p
              className="font-['League_Spartan:Bold',sans-serif] font-bold leading-[2.1vw] text-[#3585b3] text-[1.5873vw] tracking-[0.1488vw] whitespace-nowrap my-[0.2vw]"
              data-node-id="272:26"
            >
              BUILD WHATEVER YOU LIKE!
            </p>
            <p
              className="font-['League_Spartan:Regular',sans-serif] font-normal leading-[1.9vw] text-[#3585b3] text-[1.0317vw] tracking-[0.11vw]"
              data-node-id="272:27"
            >
              You don’t need to know how to code. You don’t need experience. If you have an idea you can build it. From apps to hardware, or even a mix of both, With mentors and guidance.
            </p>
          </div>
        </motion.div>

        {/* Bottom Clouds with Parallax + Reverse Drift */}
        <motion.div
          style={{ y: bottomCloudsY }}
          className="absolute inset-[53.98%_0_6.19%_0] pointer-events-none"
          data-name="bottom clouds"
          data-node-id="278:74"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none animate-htn-cloud-reverse">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBottomClouds} />
          </div>
        </motion.div>

        {/* Box Right Top: Quests & Activities */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1, type: "spring", bounce: 0.3 }}
          whileHover={{
            y: -6,
            scale: 1.015,
            filter: "drop-shadow(0 1vw 2vw rgba(200, 106, 212, 0.28))",
          }}
          style={{ transformOrigin: "71.4% 33%" }}
          onClick={() => {
            setXp((prev) => prev + 15);
            triggerToast("🎮 Side-Quest Unlocked! Click the prizes below to inspect their XP value!");
          }}
          className="absolute inset-0 pointer-events-none z-10"
          data-name="Box Right top"
          data-node-id="275:11"
        >
          <div
            className="absolute inset-[25.44%_9.31%_59.1%_50.79%] pointer-events-auto cursor-pointer"
            data-name="Pink background text box"
            data-node-id="275:12"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgPinkBackgroundTextBox} />
          </div>
          <div
            className="absolute inset-[24.78%_7.94%_60.46%_52.17%]"
            data-name="White box"
            data-node-id="275:15"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgWhiteBox1} />
          </div>
          {/* Cleanly aligned text stack inside White box */}
          <div
            className="absolute inset-[26.0%_9.8%_61.6%_54.0%] flex flex-col justify-center gap-[0.45vw] pointer-events-none"
          >
            <p
              className="font-['League_Spartan:Bold',sans-serif] font-bold leading-[1.8vw] text-[#c86ad4] text-[1.5873vw] tracking-[0.1488vw]"
              data-node-id="275:20"
            >{`Quests & Activites`}</p>
            <p
              className="font-['League_Spartan:Medium',sans-serif] font-medium leading-[1.68vw] text-[#d876e4] text-[0.9524vw] tracking-[0.13vw]"
              data-node-id="275:21"
            >
              {`Explore Skyfall through interactive side quests across the campus, turning your journey into a game. Complete quests, earn XP, then redeem rewards like plushies and goodies.`}
              <span className="block font-['League_Spartan:Bold',sans-serif] font-bold mt-[0.2vw]">
                LEVEL UP AS YOU GO
              </span>
            </p>
          </div>
        </motion.div>

        {/* Sliding Pics Deck — Interactive Goodies Carousel (Headphones, Shark Plushie, Keyboard) */}
        <div
          className="absolute contents left-[47.619vw] top-[38.0952vw]"
          data-name="Sliding pics deck"
          data-node-id="275:23"
        >
          <div
            className="absolute h-[13.8476vw] left-[47.619vw] overflow-hidden top-[38.0952vw] w-[46.0317vw] z-20"
            data-name="Yellow background"
            data-node-id="275:29"
          >
            {/* Original Figma Yellow Gradient Box */}
            <div
              className="absolute inset-[0.37%_3.62%_2.2%_5.44%] pointer-events-none"
              data-name="Yellow box"
              data-node-id="275:31"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(249, 255, 162, 0.03) 0%, rgb(255, 248, 172) 16.346%, rgb(255, 248, 172) 91.346%, rgba(249, 255, 162, 0.29) 100%)",
              }}
            />

            {/* Top White Dashed Line */}
            <div
              className="absolute contents inset-[5.73%_0_85.97%_0] pointer-events-none"
              data-name="white line top"
              data-node-id="275:32"
            >
              <div
                className="absolute inset-[5.73%_0_85.97%_0] mask-position-[0vw_0vw,_-0.0413vw_-0.0063vw]"
                data-name="Clip path frame"
                data-node-id="275:37"
                style={{
                  maskImage: `url('${imgClipPathFrame}'), url('${imgClipPathFrame1}')`,
                }}
              >
                <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgClipPathFrame2} />
              </div>
            </div>

            {/* Bottom White Dashed Line */}
            <div
              className="absolute contents inset-[85.97%_0_5.73%_0] pointer-events-none"
              data-name="WHite line bottom"
              data-node-id="275:40"
            >
              <div
                className="absolute inset-[85.97%_0_5.73%_0] mask-position-[0vw_0vw,_-0.0413vw_-0.0063vw]"
                data-name="Clip path frame"
                data-node-id="275:45"
                style={{
                  maskImage: `url('${imgClipPathFrame}'), url('${imgClipPathFrame1}')`,
                }}
              >
                <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgClipPathFrame2} />
              </div>
            </div>

            {/* Smooth Rightward Sliding Goodies Track */}
            <div
              className="absolute inset-[7%_3.6%_7%_5.5%] overflow-hidden flex items-center"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
              }}
            >
              <div
                className="flex items-center gap-[1.35vw] pr-[1.35vw]"
                style={{
                  animation: "htn-goodies-marquee 15s linear infinite",
                  animationPlayState: isGoodiePaused ? "paused" : "running",
                }}
              >
                {[...GOODIES_ITEMS, ...GOODIES_ITEMS, ...GOODIES_ITEMS, ...GOODIES_ITEMS].map(
                  (item, idx) => {
                    const isSelected = activeReward?.name === item.name;
                    return (
                      <motion.div
                        key={`${item.id}-${idx}`}
                        onMouseEnter={() => setIsGoodiePaused(true)}
                        onMouseLeave={() => setIsGoodiePaused(false)}
                        whileHover={{
                          y: -9,
                          scale: 1.06,
                          filter: "drop-shadow(0 0.65vw 1.1vw rgba(110, 90, 0, 0.32))",
                        }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 320, damping: 20 }}
                        onClick={() => {
                          setActiveReward({
                            name: item.name,
                            xpCost: item.xpCost,
                            desc: item.desc,
                          });
                          setXp((prev) => prev + 10);
                        }}
                        className={`relative flex-none w-[12.25vw] h-[8.1vw] cursor-pointer select-none ${
                          isSelected ? "ring-2 ring-[#c86ad4] rounded-[0.2vw]" : ""
                        }`}
                      >
                        {/* Figma White Card with #6E5A00 Dashed Border */}
                        <img
                          alt=""
                          className="absolute inset-0 block w-full h-full max-w-none pointer-events-none"
                          src={imgGroup1}
                        />

                        {/* Product Image — Cleanly Framed Inside the White Card */}
                        <div className="absolute inset-[6%_8%_16%_8%] flex items-center justify-center overflow-hidden pointer-events-none">
                          <img
                            alt={item.shortLabel}
                            src={item.img}
                            className={`max-h-full max-w-full object-contain transition-transform duration-300 ${item.rotateClass} ${item.scaleClass}`}
                          />
                        </div>

                        {/* Bottom Label & XP Pill */}
                        <div className="absolute bottom-[5%] left-[6%] right-[6%] flex items-center justify-between px-[0.35vw] py-[0.1vw] bg-[#fff8ac]/90 rounded-[0.25vw] border border-[#6e5a00]/25 pointer-events-none">
                          <span className="font-['League_Spartan:Bold',sans-serif] font-bold text-[#6e5a00] text-[0.62vw] tracking-[0.03vw] truncate">
                            {item.shortLabel}
                          </span>
                          <span className="font-['League_Spartan:Black',sans-serif] font-black text-[#c86ad4] text-[0.6vw] whitespace-nowrap ml-[0.2vw]">
                            {item.xpCost}
                          </span>
                        </div>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Interactive Reward Tooltip Badge */}
          <AnimatePresence>
            {activeReward && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                onClick={() => setActiveReward(null)}
                className="absolute left-[54vw] top-[52.8vw] z-30 bg-white/95 backdrop-blur-md border-2 border-[#c86ad4] rounded-2xl px-[1.4vw] py-[0.8vw] shadow-xl cursor-pointer flex items-center gap-[1vw]"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-['League_Spartan:Black',sans-serif] text-[#00638d] text-[1.05vw]">
                      {activeReward.name}
                    </span>
                    <span className="bg-[#c86ad4] text-white font-['League_Spartan:Bold',sans-serif] text-[0.75vw] px-[0.6vw] py-[0.15vw] rounded-full">
                      {activeReward.xpCost}
                    </span>
                  </div>
                  <p className="font-['League_Spartan:Medium',sans-serif] text-[#3585b3] text-[0.85vw] mt-[0.2vw]">
                    {activeReward.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute left-[-39.6825vw] size-[79.3651vw] top-[35.7143vw]" data-node-id="281:78" />
      </div>

      {/* ===================================================================== */}
      {/* PAGE 3: OCEAN HORIZON & UNDERWATER REEF (WHAT TO BUILD + GENERATOR)   */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[112.6984vw] left-0 overflow-clip top-[146.0317vw] w-[100vw]"
        data-name="Page 3"
        data-node-id="281:79"
      >
        <div className="absolute contents inset-[0_0_-4.93%_0]" data-node-id="287:12">
          <div className="absolute inset-[0_0_-4.93%_0]" data-name="Background Image" data-node-id="282:81">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[135.32%] left-[0.01%] max-w-none top-[-35.04%] w-[99.99%]"
                src={imgBackgroundImage2}
              />
            </div>
          </div>
          <div className="absolute inset-[7.75%_0_-4.23%_0]" data-name="Rectangle" data-node-id="284:84">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[95.95%] left-[-1.1%] max-w-none top-[0.41%] w-[101.1%]"
                src={imgRectangle11}
              />
            </div>
          </div>
        </div>

        {/* Ambient Rising Underwater Bubbles */}
        <div className="absolute inset-[20%_0_0_0] pointer-events-none overflow-hidden z-10">
          {[12, 24, 38, 52, 67, 81, 90].map((leftPct, i) => (
            <div
              key={i}
              className="absolute bottom-0 rounded-full border border-white/40 bg-white/15 backdrop-blur-[1px]"
              style={{
                left: `${leftPct}%`,
                width: `${0.6 + (i % 3) * 0.45}vw`,
                height: `${0.6 + (i % 3) * 0.45}vw`,
                animation: `htn-bubble-rise ${7 + (i % 4) * 2.5}s ease-in-out ${i * 1.1}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Rocking & Sailing Boat with Scroll Parallax */}
        <motion.div
          style={{ x: boatX }}
          className="absolute flex inset-[-31.89%_58%_60.93%_3.36%] items-center justify-center z-10"
        >
          <div className="-scale-y-100 flex-none h-[79.9675vw] rotate-180 w-[38.6437vw]">
            <motion.div
              whileHover={{ scale: 1.04 }}
              onClick={() => {
                setXp((prev) => prev + 20);
                triggerToast("⛵ Ahoy from the SS Skyfall! Dive below to choose your build track! (+20 XP)");
              }}
              className="relative size-full cursor-pointer animate-htn-boat"
              data-name="Boat"
              data-node-id="286:11"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Skyfall Sailboat" className="absolute left-0 max-w-none size-full top-0" src={imgBoat} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* WHAT TO BUILD? ribbon - exact Figma position */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.05, y: -3 }}
          className="absolute inset-[21.83%_34.97%_73.54%_35.71%] z-20"
          data-name="What to build"
          data-node-id="287:14"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup2} />
          <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup3} />
          <img alt="" className="absolute inset-[10%_5%_10%_5%] block max-w-none size-full" src={imgBackgroundShape} />
          <img alt="" className="absolute inset-[10%_5%_10%_5%] block max-w-none size-full" src={imgBackgroundShape1} />
          <p
            className="absolute inset-0 flex items-center justify-center font-['League_Spartan:Black',sans-serif] font-black text-center leading-none text-[1.5vw] text-shadow-[0vw_0vw_0.7937vw_rgba(0,0,0,0.26)] text-white tracking-[0.08vw] whitespace-nowrap pt-[0.2vw]"
            style={{ paddingLeft: "18%", paddingRight: "8%" }}
          >
            WHAT TO BUILD ?
          </p>
        </motion.div>

        {/* BUILD CARD 1: SOFTWARE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -12,
            scale: 1.03,
            filter: "drop-shadow(0 1.2vw 2.2vw rgba(219, 130, 255, 0.45))",
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transformOrigin: "23.1% 46.9%" }}
          onClick={() => {
            handleCategorySelect("SOFTWARE");
            triggerToast("💻 Software Track selected! Check out the generated idea below!");
          }}
          className="absolute inset-0 pointer-events-none z-20 group"
          data-name="build card 1"
          data-node-id="287:137"
        >
          <div
            className="absolute inset-[32.39%_64.93%_38.47%_11.11%] pointer-events-auto cursor-pointer"
            data-name="card outer dotted"
            data-node-id="287:138"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgCardOuterDotted} />
          </div>
          <div
            className="absolute inset-[34.05%_66.6%_40.11%_12.79%]"
            data-name="White Box"
            data-node-id="287:141"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgWhiteBox2} />
          </div>
          <div
            className="-translate-y-1/2 absolute overflow-clip right-[68.254vw] size-[17.4603vw] top-[calc(50%-7.1429vw)]"
            data-name="Textured background"
            data-node-id="287:144"
          >
            <div className="absolute inset-[0.01%_-21.76%_-0.04%_-22.57%]" data-name="Rectangle" data-node-id="287:145">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle12} />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[50.15%_67.46%_47.04%_13.49%]"
            data-name="Heading"
            data-node-id="287:146"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgHeading} />
          </div>
          <div
            className="absolute inset-[50.15%_67.46%_47.04%_13.49%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="287:244"
          >
            <p className="font-['League_Spartan:Black',sans-serif] font-black leading-none text-[1.9841vw] text-white tracking-[0.124vw] pt-[0.22vw]">
              SOFTWARE
            </p>
          </div>
          <div
            className="absolute inset-[37.9%_70.78%_51.97%_17.04%]"
            data-name="pic background"
            data-node-id="287:154"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgPicBackground} />
          </div>
          <div
            className="absolute inset-[38.03%_71.43%_52.11%_17.46%] animate-htn-penguin"
            data-name="emoji"
            data-node-id="287:235"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[108.21%] left-0 max-w-none top-[-7.62%] w-[101%]"
                src={imgEmoji}
              />
            </div>
          </div>
          <div
            className="absolute inset-[53.5%_67.46%_40.8%_13.49%] flex items-center justify-center text-center px-[0.5vw] pointer-events-none"
            data-node-id="287:237"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45vw] not-italic text-[#3585b3] text-[0.7937vw] tracking-[0.075vw]">
              Build apps, websites, or anything digital. Got an idea? Turn it into something people can actually use.
            </p>
          </div>
        </motion.div>

        {/* BUILD CARD 2: HARDWARE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -12,
            scale: 1.03,
            filter: "drop-shadow(0 1.2vw 2.2vw rgba(0, 207, 145, 0.45))",
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transformOrigin: "50.1% 46.9%" }}
          onClick={() => {
            handleCategorySelect("HARDWARE");
            triggerToast("🛠️ Hardware Track selected! Check out the generated idea below!");
          }}
          className="absolute inset-0 pointer-events-none z-20 group"
          data-name="build card 2"
          data-node-id="287:245"
        >
          <div
            className="absolute inset-[32.39%_37.94%_38.47%_38.1%] pointer-events-auto cursor-pointer"
            data-name="card outer dotted"
            data-node-id="287:246"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgCardOuterDotted} />
          </div>
          <div
            className="absolute inset-[34.05%_39.62%_40.11%_39.77%]"
            data-name="White Box"
            data-node-id="287:249"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgWhiteBox2} />
          </div>
          <div
            className="-translate-y-1/2 absolute h-[18.254vw] overflow-clip right-[41.2698vw] top-[calc(50%-6.746vw)] w-[17.4603vw]"
            data-name="Textured background"
            data-node-id="287:252"
          >
            <div className="absolute inset-[-54.55%_-27.27%_9.09%_-22.73%]" data-name="Rectangle" data-node-id="287:303">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute left-[-1.2%] max-w-none size-full top-[36.03%]"
                  src={imgRectangle13}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[50.15%_40.48%_47.04%_40.48%]"
            data-name="Heading"
            data-node-id="287:254"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgHeading1} />
          </div>
          <div
            className="absolute inset-[50.15%_40.48%_47.04%_40.48%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="287:262"
          >
            <p className="font-['League_Spartan:Black',sans-serif] font-black leading-none text-[1.9841vw] text-white tracking-[0.124vw] pt-[0.22vw]">
              HARDWARE
            </p>
          </div>
          <div
            className="absolute inset-[37.9%_43.79%_51.97%_44.02%]"
            data-name="pic background"
            data-node-id="287:263"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgPicBackground1} />
          </div>
          <div
            className="absolute inset-[38.03%_44.44%_52.11%_44.44%] animate-htn-penguin"
            data-name="Rectangle"
            data-node-id="287:302"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[106.12%] left-0 max-w-none top-[-6.12%] w-full"
                src={imgRectangle14}
              />
            </div>
          </div>
          <div
            className="absolute inset-[53.5%_40.48%_40.8%_40.48%] flex items-center justify-center text-center px-[0.5vw] pointer-events-none"
            data-node-id="287:271"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45vw] not-italic text-[#3585b3] text-[0.7937vw] tracking-[0.075vw]">
              Work with sensors, boards, and cool gadgets. Make stuff that moves, reacts, and exists in real life.
            </p>
          </div>
        </motion.div>

        {/* BUILD CARD 3: COMBINATION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -12,
            scale: 1.03,
            filter: "drop-shadow(0 1.2vw 2.2vw rgba(246, 208, 43, 0.45))",
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transformOrigin: "77.1% 46.9%" }}
          onClick={() => {
            handleCategorySelect("COMBINATION");
            triggerToast("⚡ Combination Track selected! Check out the generated idea below!");
          }}
          className="absolute inset-0 pointer-events-none z-20 group"
          data-name="build card 3"
          data-node-id="287:272"
        >
          <div
            className="absolute inset-[32.39%_10.96%_38.47%_65.08%] pointer-events-auto cursor-pointer"
            data-name="card outer dotted"
            data-node-id="287:273"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgCardOuterDotted} />
          </div>
          <div
            className="absolute inset-[34.05%_12.63%_40.11%_66.76%]"
            data-name="White Box"
            data-node-id="287:276"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgWhiteBox2} />
          </div>
          <div
            className="absolute h-[18.254vw] left-[68.254vw] overflow-clip top-[40.4762vw] w-[17.4603vw]"
            data-name="Pic Background"
            data-node-id="293:304"
          >
            <div className="absolute inset-[0.01%_-21.78%_-0.04%_-22.55%]" data-name="Rectangle" data-node-id="293:305">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle15} />
              </div>
            </div>
            <div
              className="absolute inset-[12.92%_16.14%_26.09%_15.84%]"
              data-name="yellow background"
              data-node-id="293:306"
            >
              <div className="absolute inset-[-1.39%_-1.27%_-1.39%_-1.31%]">
                <img alt="" className="block max-w-none size-full" src={imgYellowBackground} />
              </div>
            </div>
            <div
              className="absolute inset-[4.35%_18.18%_26.09%_18.18%] animate-htn-penguin"
              data-name="Pic"
              data-node-id="293:385"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-[0.84%] max-w-none size-full top-[0.42%]" src={imgPic} />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[50.15%_13.49%_47.04%_67.46%]"
            data-name="Heading"
            data-node-id="287:281"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgHeading2} />
          </div>
          <div
            className="absolute inset-[50.15%_13.49%_47.04%_67.46%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="287:289"
          >
            <p className="font-['League_Spartan:Black',sans-serif] font-black leading-none text-[1.9841vw] text-white tracking-[0.124vw] pt-[0.22vw]">
              COMBINATION
            </p>
          </div>
          <div
            className="absolute inset-[53.5%_13.49%_40.8%_67.46%] flex items-center justify-center text-center px-[0.5vw] pointer-events-none"
            data-node-id="287:298"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45vw] not-italic text-[#3585b3] text-[0.7937vw] tracking-[0.075vw]">
              Why choose one? Mix both. Build something where hardware + software work together and do works really cool.
            </p>
          </div>
        </motion.div>

        {/* =================================================================== */}
        {/* INTERACTIVE IDEA GENERATOR BOX (Exact Figma coordinates + live UI)  */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="absolute inset-[64.08%_11.11%_9.58%_11.11%] z-30 pointer-events-auto"
          data-name="Idea generator box"
          data-node-id="293:406"
        >
          {/* Dotted outer border */}
          <div className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgBorderDotted} />
          </div>
          {/* Background fill (light teal #C2FDFF) */}
          <div className="absolute inset-[1.5%] pointer-events-none">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgBackgreoundBox1} />
          </div>

          {/* LEFT PANEL: NOT SURE WHERE TO START + description + aligned buttons */}
          <div
            className="absolute flex flex-col justify-between"
            style={{ top: "7%", left: "3.5%", width: "43.5%", bottom: "6.5%" }}
          >
            <div>
              <p
                className="font-['League_Spartan:Bold',sans-serif] font-bold text-[#0072a8] tracking-[0.04vw] mb-[1.2vw]"
                style={{ fontSize: "2.45vw", lineHeight: "1.08" }}
              >
                NOT SURE WHERE TO
                <br />
                START?
              </p>
              <p
                className="font-['League_Spartan:SemiBold',sans-serif] font-semibold text-[#3585b3]"
                style={{ fontSize: "1.12vw", lineHeight: "1.55" }}
              >
                Use the Idea Generator to get silly ideas to make a fun project in a few hours, explore project ideas kickstart your build.
              </p>
            </div>

            <div className="flex flex-col gap-[0.9vw]">
              {/* Category filter buttons row */}
              <div className="flex items-center gap-[0.8vw]">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategorySelect("SOFTWARE")}
                  className="relative flex-1 h-[3.25vw] cursor-pointer border-0 bg-transparent p-0"
                  style={{
                    filter:
                      selectedCategory === "SOFTWARE"
                        ? "drop-shadow(0 0 0.65vw rgba(219,130,255,0.95))"
                        : "none",
                  }}
                >
                  <img
                    alt=""
                    className="absolute inset-0 block w-full h-full max-w-none pointer-events-none"
                    src={imgBtnBackground}
                  />
                  <img
                    alt=""
                    className="absolute left-[6%] right-[6%] top-[12%] h-[0.22vw] w-[88%] max-w-none pointer-events-none"
                    src={imgVector3}
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center font-['League_Spartan:Black',sans-serif] font-black text-[#db82ff] tracking-[0.05vw] pointer-events-none"
                    style={{ fontSize: "0.88vw" }}
                  >
                    {selectedCategory === "SOFTWARE" ? "✓ SOFTWARE" : "SOFTWARE"}
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategorySelect("HARDWARE")}
                  className="relative flex-1 h-[3.25vw] cursor-pointer border-0 bg-transparent p-0"
                  style={{
                    filter:
                      selectedCategory === "HARDWARE"
                        ? "drop-shadow(0 0 0.65vw rgba(0,207,145,0.95))"
                        : "none",
                  }}
                >
                  <img
                    alt=""
                    className="absolute inset-0 block w-full h-full max-w-none pointer-events-none"
                    src={imgBtnBackground1}
                  />
                  <img
                    alt=""
                    className="absolute left-[6%] right-[6%] top-[12%] h-[0.22vw] w-[88%] max-w-none pointer-events-none"
                    src={imgVector3}
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center font-['League_Spartan:Black',sans-serif] font-black text-[#00cf91] tracking-[0.05vw] pointer-events-none"
                    style={{ fontSize: "0.88vw" }}
                  >
                    {selectedCategory === "HARDWARE" ? "✓ HARDWARE" : "HARDWARE"}
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategorySelect("COMBINATION")}
                  className="relative flex-1 h-[3.25vw] cursor-pointer border-0 bg-transparent p-0"
                  style={{
                    filter:
                      selectedCategory === "COMBINATION"
                        ? "drop-shadow(0 0 0.65vw rgba(246,208,43,0.95))"
                        : "none",
                  }}
                >
                  <img
                    alt=""
                    className="absolute inset-0 block w-full h-full max-w-none pointer-events-none"
                    src={imgBtnBackgroud}
                  />
                  <img
                    alt=""
                    className="absolute left-[6%] right-[6%] top-[12%] h-[0.22vw] w-[88%] max-w-none pointer-events-none"
                    src={imgVector3}
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center font-['League_Spartan:Black',sans-serif] font-black text-[#d4ad00] tracking-[0.05vw] pointer-events-none"
                    style={{ fontSize: "0.88vw" }}
                  >
                    {selectedCategory === "COMBINATION" ? "✓ COMBO" : "COMBINATION"}
                  </span>
                </motion.button>
              </div>

              {/* Generate button */}
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.025,
                  y: -2,
                  filter: "drop-shadow(0 0 0.9vw rgba(40,164,230,0.65))",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleGenerateIdea()}
                className="relative w-full h-[3.35vw] cursor-pointer border-0 bg-transparent p-0"
              >
                <img
                  alt=""
                  className="absolute inset-0 block w-full h-full max-w-none pointer-events-none"
                  src={imgBtnBackground2}
                />
                <img
                  alt=""
                  className="absolute left-[2.5%] right-[2.5%] top-[12%] h-[0.22vw] w-[95%] max-w-none pointer-events-none"
                  src={imgVector4}
                />
                <span
                  className="absolute inset-0 flex items-center justify-center font-['League_Spartan:Black',sans-serif] font-black text-[#28a4e6] tracking-[0.08vw] pointer-events-none"
                  style={{ fontSize: "0.95vw" }}
                >
                  {isGenerating ? "⚡ GENERATING IDEA..." : "GENERATE IDEA...."}
                </span>
              </motion.button>
            </div>
          </div>

          {/* RIGHT PANEL: Exact Figma 3-part stack (Hands Illustration + Prompt Header + White Dashed Output Box) */}
          <div
            className="absolute flex flex-col justify-between"
            style={{
              top: "7%",
              right: "3.5%",
              width: "48.5%",
              bottom: "6.5%",
            }}
          >
            {/* 1. Top Illustration Box (Two Glowing Hands from Figma design) */}
            <div
              onClick={() => handleGenerateIdea()}
              className="relative w-full h-[46%] overflow-hidden border-[0.12vw] border-[#25638f] bg-[#7beeff] cursor-pointer group"
            >
              <motion.img
                animate={
                  isGenerating
                    ? { scale: [1, 1.06, 1], filter: ["brightness(1)", "brightness(1.22)", "brightness(1)"] }
                    : { scale: 1, filter: "brightness(1)" }
                }
                transition={{ duration: 0.45 }}
                alt="Sparking Hands Idea Illustration"
                src={imgIdeaHandsBanner}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Track Pill Badge in Top-Left Corner */}
              <div className="absolute top-[8%] left-[2.5%] flex items-center gap-[0.4vw]">
                <span
                  className="font-['League_Spartan:Black',sans-serif] px-[0.65vw] py-[0.2vw] rounded-full shadow-sm backdrop-blur-md border border-white/60"
                  style={{
                    fontSize: "0.7vw",
                    backgroundColor:
                      currentIdea?.category === "SOFTWARE"
                        ? "rgba(249,232,255,0.92)"
                        : currentIdea?.category === "HARDWARE"
                        ? "rgba(162,255,236,0.92)"
                        : "rgba(253,249,180,0.92)",
                    color:
                      currentIdea?.category === "SOFTWARE"
                        ? "#a32cc4"
                        : currentIdea?.category === "HARDWARE"
                        ? "#008a60"
                        : "#9e7e00",
                  }}
                >
                  {currentIdea ? `${currentIdea.category} TRACK • +${currentIdea.xp} XP` : "✨ ALL TRACKS"}
                </span>
              </div>
              {/* Quick Copy Button in Top-Right Corner */}
              {currentIdea && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard?.writeText(`${currentIdea.title} — ${currentIdea.tip}`);
                    setCopiedIdea(true);
                    triggerToast("📋 Project idea copied to clipboard!");
                    setTimeout(() => setCopiedIdea(false), 2000);
                  }}
                  className="absolute top-[8%] right-[2.5%] font-['League_Spartan:Bold',sans-serif] text-[#005a8d] hover:text-[#003b5c] bg-white/90 hover:bg-white px-[0.6vw] py-[0.18vw] rounded-full shadow-sm border border-[#25638f]/30 transition-all cursor-pointer"
                  style={{ fontSize: "0.68vw" }}
                >
                  {copiedIdea ? "✓ COPIED" : "📋 COPY IDEA"}
                </button>
              )}
            </div>

            {/* 2. Middle Prompt Header Strip (Matches Figma white bar with Fredoka One prompt) */}
            <div
              className="relative w-full h-[14%] bg-white border-x-[0.12vw] border-t-[0.12vw] border-dashed border-[#25638f] flex items-center justify-between"
              style={{ paddingLeft: "1.2vw", paddingRight: "1.2vw" }}
            >
              <p
                className="font-['Fredoka_One:Regular',sans-serif] not-italic text-[#6fd6ff] truncate"
                style={{ fontSize: "0.95vw" }}
              >
                {isGenerating
                  ? "Rolling a fresh Skyfall project idea....."
                  : "Click on generate to generate an idea....."}
              </p>
              <button
                type="button"
                onClick={() => handleGenerateIdea()}
                className="font-['League_Spartan:Black',sans-serif] text-[#28a4e6] hover:text-[#0072a8] text-[0.72vw] tracking-[0.04vw] cursor-pointer whitespace-nowrap ml-[0.5vw]"
              >
                🎲 REROLL
              </button>
            </div>

            {/* 3. Bottom Output Box (White card with #25638F dashed border from imgClipPathGroup4) */}
            <div className="relative w-full h-[35%] flex items-center overflow-hidden">
              <img
                alt=""
                className="absolute inset-0 block w-full h-full max-w-none pointer-events-none"
                src={imgClipPathGroup4}
              />
              <div
                className="relative z-10 w-full h-full flex flex-col justify-center"
                style={{ padding: "0.8vw 1.4vw" }}
              >
                <AnimatePresence mode="wait">
                  {currentIdea && (
                    <motion.div
                      key={currentIdea.title}
                      initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col justify-center gap-[0.25vw]"
                    >
                      <p
                        className="font-['League_Spartan:Bold',sans-serif] font-bold text-[#004e7b]"
                        style={{ fontSize: "1.18vw", lineHeight: "1.25" }}
                      >
                        “{currentIdea.title}”
                      </p>
                      <p
                        className="font-['League_Spartan:SemiBold',sans-serif] font-semibold text-[#3585b3]"
                        style={{ fontSize: "0.86vw", lineHeight: "1.3" }}
                      >
                        💡 {ideaHintText}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===================================================================== */}
      {/* DIVIDER 2: SKYFALL BANNER STRIP                                       */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[18.254vw] left-0 top-[252.381vw] w-[100vw] z-10"
        data-name="divider"
        data-node-id="293:455"
      >
        <motion.div
          style={{ x: divider2X }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <img
            alt=""
            className="absolute h-full left-[-49.7%] max-w-none top-0 w-[196.59%]"
            src={imgDivider1}
          />
        </motion.div>
      </div>

      {/* ===================================================================== */}
      {/* PAGE 4: DEEP SEA REALM (MENTORS & SPONSORS)                           */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[145.2381vw] left-0 overflow-clip top-[266.6667vw] w-[100vw]"
        data-name="page 4"
        data-node-id="293:458"
      >
        <div className="absolute inset-[0_0_-1.09%_0]" data-name="background image" data-node-id="293:456">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBackgroundImage3} />
          </div>
        </div>

        {/* Ambient Deep-Sea Bioluminescent Bubbles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {[8, 22, 45, 64, 79, 92].map((leftPct, i) => (
            <div
              key={i}
              className="absolute bottom-[10%] rounded-full bg-[#96e6ff]/25 border border-[#96e6ff]/50 shadow-[0_0_10px_rgba(150,230,255,0.6)]"
              style={{
                left: `${leftPct}%`,
                width: `${0.5 + (i % 3) * 0.35}vw`,
                height: `${0.5 + (i % 3) * 0.35}vw`,
                animation: `htn-bubble-rise ${8 + (i % 4) * 2}s ease-in-out ${i * 1.4}s infinite`,
              }}
            />
          ))}
        </div>

        {/* GOT STUCK ? CALL A MENTOR Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          whileHover={{
            scale: 1.05,
            y: -4,
            filter: "drop-shadow(0 0 1.2vw rgba(150,230,255,0.6))",
          }}
          whileTap={{ scale: 0.96 }}
          style={{ transformOrigin: "48.8% 8.3%" }}
          onClick={() => {
            setXp((prev) => prev + 15);
            triggerToast("🛟 Mentor Beacon Activated! Our 10+ mentors are ready to help debug & brainstorm!");
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Got Stuck ? call a mentor"
          data-node-id="293:459"
        >
          <div
            className="absolute contents inset-[6.56%_30.16%_89.85%_27.78%]"
            data-name="Background shape outer dark blue"
            data-node-id="293:460"
          >
            <div
              className="absolute inset-[6.56%_30.16%_89.85%_27.78%] pointer-events-auto cursor-pointer"
              data-name="Clip path group"
              data-node-id="293:461"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup5} />
            </div>
            <div
              className="absolute inset-[6.56%_30.16%_89.85%_27.78%]"
              data-name="Clip path group"
              data-node-id="293:464"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup6} />
            </div>
          </div>
          <div
            className="absolute contents inset-[6.92%_31.44%_90.22%_29.2%]"
            data-name="Background shape inner light blue"
            data-node-id="293:467"
          >
            <div
              className="absolute inset-[6.92%_31.44%_90.22%_29.2%]"
              data-name="Background shape"
              data-node-id="293:468"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgBackgroundShape2} />
            </div>
            <div
              className="absolute inset-[6.92%_31.44%_90.22%_29.2%]"
              data-name="Background shape"
              data-node-id="293:471"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgBackgroundShape3} />
            </div>
          </div>
          <div
            className="absolute inset-[6.92%_31.44%_90.22%_29.2%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="293:474"
          >
            <p className="font-['League_Spartan:Black',sans-serif] font-black leading-none text-[1.9841vw] text-shadow-[0vw_0vw_0.7937vw_rgba(0,0,0,0.26)] text-white tracking-[0.062vw] whitespace-nowrap pt-[0.22vw]">
              GOT STUCK ? CALL A MENTOR
            </p>
          </div>
        </motion.div>

        {/* Left Box: Mentors Photo Frame */}
        <motion.div
          initial={{ opacity: 0, x: -35, rotate: -1.5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
          whileHover={{
            scale: 1.03,
            rotate: -1.5,
            y: -6,
            filter: "drop-shadow(0 1vw 2vw rgba(0, 114, 168, 0.45))",
          }}
          style={{ transformOrigin: "29.0% 24.4%" }}
          className="absolute inset-0 pointer-events-none z-10"
          data-name="left box"
          data-node-id="294:494"
        >
          <div
            className="absolute contents inset-[13.66%_52.33%_64.82%_10.32%]"
            data-name="Box backrund"
            data-node-id="294:481"
          >
            <div
              className="absolute inset-[13.66%_52.33%_64.82%_10.32%] pointer-events-auto cursor-pointer"
              onClick={() =>
                triggerToast("👋 Past hackathon champions & senior builders on deck all day!")
              }
              data-name="Dotted border"
              data-node-id="294:475"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgDottedBorder} />
            </div>
            <div
              className="absolute inset-[14.75%_54.03%_66.12%_11.92%]"
              data-name="blue background"
              data-node-id="294:478"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgBlueBackground} />
            </div>
          </div>
          <div
            className="absolute inset-[15.85%_55.56%_67.21%_13.49%]"
            data-name="Mentors Image"
            data-node-id="294:488"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt="Skyfall Mentors"
                className="absolute h-[108.33%] left-[-10.08%] max-w-none top-[-4.06%] w-[131.03%]"
                src={imgMentorsImage}
              />
            </div>
          </div>
        </motion.div>

        {/* Mentor Penguin #3 */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: -6 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            handlePenguinClick(
              "penguin-mentor",
              "Stuck on a bug? Raise your hand and a mentor will swim right over! 🛟🐧"
            )
          }
          className="absolute inset-[10.93%_78.57%_85.25%_13.49%] cursor-pointer z-20 animate-htn-penguin"
          data-name="pic emoji"
          data-node-id="294:490"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[505.4%] left-[-241.55%] max-w-none top-[-13.02%] w-[353.78%]"
              src={imgPicEmoji}
            />
          </div>
          {activePenguinBubble?.id === "penguin-mentor" && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-[3.2vw] left-0 bg-white/95 text-[#004e7b] font-['League_Spartan:Bold',sans-serif] text-[0.85vw] px-[1vw] py-[0.45vw] rounded-2xl shadow-xl whitespace-nowrap border-2 border-[#0072a8] z-30"
            >
              {activePenguinBubble.text}
            </motion.div>
          )}
        </motion.div>

        {/* Right Box: 10+ MENTORS */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -6,
            scale: 1.015,
            filter: "drop-shadow(0 1vw 2vw rgba(0, 114, 168, 0.35))",
          }}
          style={{ transformOrigin: "69.6% 24.6%" }}
          className="absolute inset-0 pointer-events-none z-10"
          data-name="Right Box"
          data-node-id="294:496"
        >
          <div
            className="absolute inset-[13.66%_11.57%_64.5%_50.78%] pointer-events-auto"
            data-name="Box Background"
            data-node-id="294:500"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgBoxBackground} />
          </div>
          {/* Cleanly aligned text stack inside Right Box */}
          <div
            className="absolute inset-[15.2%_13.5%_67.0%_54.1%] flex flex-col justify-between pointer-events-none"
            data-name="Texts"
            data-node-id="294:512"
          >
            <div className="flex flex-col gap-[0.9vw]">
              <p
                className="font-['Inter:Regular',sans-serif] font-normal leading-[1.58vw] not-italic opacity-75 text-[#004e7b] text-[1.06vw] tracking-[0.11vw]"
                data-node-id="294:511"
              >
                We know that sometimes you get stuck, and that is completely normal, especially when it is your first time. We totally understand that.
              </p>
              <p
                className="font-['Inter:Regular',sans-serif] font-normal leading-[1.58vw] not-italic opacity-75 text-[#004e7b] text-[1.06vw] tracking-[0.11vw]"
                data-node-id="294:509"
              >
                At Skyfall, we have 10+ mentors, including past record-breaking hackathon winners, ready to guide you through every step. Whether you need advice, help refining your idea, or support fixing bugs, we have got you covered.
              </p>
            </div>
            <div className="flex items-baseline justify-center gap-[1.1vw] pt-[0.2vw]">
              <span
                className="font-['League_Spartan:Black',sans-serif] font-black leading-none opacity-75 text-[#0072a8] text-[4.0476vw] tracking-[0.25vw]"
                data-node-id="294:507"
              >
                10+
              </span>
              <span
                className="font-['League_Spartan:ExtraBold',sans-serif] font-extrabold leading-none opacity-75 text-[#0072a8] text-[4.15vw] tracking-[0.32vw]"
                data-node-id="294:514"
              >
                MENTORS
              </span>
            </div>
          </div>
        </motion.div>

        <div
          className="absolute inset-[40.98%_18.05%_57.93%_18.26%]"
          data-name="Vector"
          data-node-id="294:516"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgVector5} />
        </div>

        {/* OUR SPONSORS Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute inset-[43.51%_33.67%_48.29%_32.21%]"
          data-name="Rectangle"
          data-node-id="294:518"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none animate-htn-float-slow">
            <img
              alt=""
              className="absolute h-[508.68%] left-[0.99%] max-w-none top-[-170.82%] w-[99.45%]"
              src={imgRectangle16}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute inset-[48.1%_33.67%_48.9%_32.21%] flex items-center justify-center text-center pointer-events-none"
          data-node-id="294:521"
        >
          <p className="font-['League_Spartan:Black',sans-serif] font-black leading-[3.1746vw] text-[#0073de] text-[2.619vw] tracking-[0.0818vw] whitespace-nowrap pl-[2vw]">
            OUR SPONSORS
          </p>
        </motion.div>

        {/* Sponsor Slot 3 (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileHover={{
            scale: 1.06,
            y: -6,
            filter: "drop-shadow(0 0 1.2vw rgba(150, 230, 255, 0.6))",
          }}
          onClick={() => triggerToast("✨ Sponsor Showcase — Interested in partnering? Contact Nikhil: nikhil@skyfall.live!")}
          className="absolute inset-[54.64%_18.68%_38.03%_62.69%] cursor-pointer z-10"
          data-name="Rectangle"
          data-node-id="294:527"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle17} />
          </div>
        </motion.div>

        {/* Sponsor Slot 2 (Center) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{
            scale: 1.06,
            y: -6,
            filter: "drop-shadow(0 0 1.2vw rgba(150, 230, 255, 0.6))",
          }}
          onClick={() => triggerToast("✨ Sponsor Showcase — Interested in partnering? Contact Nikhil: nikhil@skyfall.live!")}
          className="absolute inset-[54.64%_40.9%_38.03%_40.47%] cursor-pointer z-10"
          data-name="Rectangle"
          data-node-id="294:525"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle17} />
          </div>
        </motion.div>

        {/* Sponsor Slot 1 (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          whileHover={{
            scale: 1.06,
            y: -6,
            filter: "drop-shadow(0 0 1.2vw rgba(150, 230, 255, 0.6))",
          }}
          onClick={() => triggerToast("✨ Sponsor Showcase — Interested in partnering? Contact Nikhil: nikhil@skyfall.live!")}
          className="absolute inset-[54.64%_63.12%_38.03%_18.25%] cursor-pointer z-10"
          data-name="Rectangle"
          data-node-id="294:523"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle17} />
          </div>
        </motion.div>

        {/* Sponsor Contact Text Box (Click to Copy Email) */}
        <motion.div
          whileHover={{ scale: 1.015, y: -2 }}
          whileTap={{ scale: 0.99 }}
          style={{ transformOrigin: "48.9% 69.6%" }}
          onClick={() => {
            navigator.clipboard?.writeText("nikhil@skyfall.live | +91 8050726182");
            triggerToast("📋 Copied contact: Nikhil Mansotra (+91 8050726182)");
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="text box"
          data-node-id="294:528"
        >
          <div
            className="absolute inset-[67.75%_15.47%_28.56%_13.35%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.1381vw_0.1373vw] mask-size-[70.9143vw_5.0857vw] pointer-events-auto cursor-pointer"
            data-name="border"
            data-node-id="294:530"
            style={{ maskImage: `url('${imgBorder}')` }}
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgBorder1} />
          </div>
          <div
            className="absolute inset-[68.1%_17.2%_28.9%_15.1%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="294:534"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.48vw] not-italic text-[#3585b3] text-[1.02vw] tracking-[0.11vw]">
              <span>{`We’re grateful to our sponsors for supporting our vision and empowering young innovators. Their contribution makes Skyfall possible. Interested in becoming a sponsor? contact `}</span>
              <span className="text-[#156898] font-semibold underline decoration-dotted">
                Nikhil Mansotra (+91 8050726182 • nikhil@skyfall.live)
              </span>
            </p>
          </div>
        </motion.div>

        {/* Sponsor Penguin #4 */}
        <motion.div
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            handlePenguinClick(
              "penguin-sponsor",
              "Our sponsors keep the snacks flowing and the prizes glowing! 🎁🐧"
            )
          }
          className="absolute inset-[63.39%_46.83%_32.24%_46.83%] cursor-pointer z-20 animate-htn-penguin"
          data-name="Rectangle"
          data-node-id="294:536"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEmoji} />
          </div>
          {activePenguinBubble?.id === "penguin-sponsor" && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-[3.2vw] left-1/2 -translate-x-1/2 bg-white/95 text-[#004e7b] font-['League_Spartan:Bold',sans-serif] text-[0.85vw] px-[1vw] py-[0.45vw] rounded-2xl shadow-xl whitespace-nowrap border-2 border-[#0073de] z-30"
            >
              {activePenguinBubble.text}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ===================================================================== */}
      {/* PAGE 5: WATERFALL CAVERN (AGENDA & ORGANISER'S NOTE)                  */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[235.7143vw] left-0 overflow-clip top-[373.8095vw] w-[100vw]"
        data-name="Page 5"
        data-node-id="294:565"
      >
        <div
          className="absolute contents inset-[-134.47%_-129.13%_-65.11%_-167.72%]"
          data-name="Background Image"
          data-node-id="300:578"
        >
          <div className="absolute flex inset-[46.8%_0_-2.02%_0] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[130.1587vw] rotate-180 w-[100vw]">
              <div className="relative size-full" data-name="Rectangle" data-node-id="295:567">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[100.25%] left-[-0.4%] max-w-none top-[-3.81%] w-[100.4%]"
                    src={imgRectangle18}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[-134.47%_-129.13%_-65.11%_-167.72%]"
            data-name="Divider Rocks"
            data-node-id="300:576"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[42.06%] max-w-none size-[25.4%] top-[44.54%]"
                src={imgDividerRocks}
              />
            </div>
          </div>
        </div>

        {/* AGENDA Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute flex inset-[12.12%_34.13%_82.83%_33.33%] items-center justify-center"
        >
          <div className="-scale-y-100 flex-none h-[11.9048vw] rotate-180 w-[32.5397vw]">
            <div
              className="relative size-full animate-htn-float-slow"
              data-name="heading background img"
              data-node-id="300:580"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[486.32%] left-[0.05%] max-w-none top-[-159.92%] w-[100.21%]"
                  src={imgHeadingBackgroundImg}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute inset-[14.8%_34.13%_83.2%_33.33%] flex items-center justify-center text-center pointer-events-none"
          data-node-id="300:583"
        >
          <p className="font-['League_Spartan:Black',sans-serif] font-black leading-[3.1746vw] text-[#00bd96] text-[2.619vw] whitespace-nowrap">
            AGENDA
          </p>
        </motion.div>

        <div
          className="absolute inset-[6.06%_17.46%_93.27%_16.67%]"
          data-name="Vector"
          data-node-id="295:568"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgVector6} />
        </div>

        {/* Interactive Agenda Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          style={{ transformOrigin: "50% 28.5%" }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Agenda Box"
          data-node-id="300:589"
        >
          <div className="absolute contents inset-[21.21%_18.48%_64.31%_17.46%]" data-node-id="300:590">
            <div
              className="absolute inset-[21.9%_20.35%_64.31%_17.46%]"
              data-name="Green box background"
              data-node-id="300:591"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgGreenBoxBackground} />
            </div>
            <div
              className="absolute inset-[21.21%_18.48%_65.06%_19.33%]"
              data-name="Background box"
              data-node-id="300:594"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgBackgroundBox} />
            </div>

            {/* Interactive Row Overlays for the 9 Agenda items */}
            {[
              { top: "22.05%", bottom: "76.95%" },
              { top: "23.40%", bottom: "75.60%" },
              { top: "24.75%", bottom: "74.25%" },
              { top: "26.10%", bottom: "72.90%" },
              { top: "27.45%", bottom: "71.55%" },
              { top: "28.80%", bottom: "70.20%" },
              { top: "30.15%", bottom: "68.85%" },
              { top: "31.50%", bottom: "67.50%" },
              { top: "32.85%", bottom: "66.15%" },
            ].map((pos, idx) => {
              const isSelected = activeAgendaIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveAgendaIdx(idx)}
                  onMouseLeave={() => setActiveAgendaIdx(null)}
                  onClick={() => {
                    setActiveAgendaIdx(idx);
                    setXp((prev) => prev + 5);
                    triggerToast(AGENDA_DETAILS[idx].detail);
                  }}
                  style={{
                    top: pos.top,
                    bottom: pos.bottom,
                    left: "21.8%",
                    right: "21.8%",
                  }}
                  className={`absolute pointer-events-auto cursor-pointer rounded-md transition-all duration-200 ${
                    isSelected
                      ? "bg-[#00bd96]/18 border-l-4 border-[#00bd96]"
                      : "hover:bg-[#00bd96]/10"
                  }`}
                />
              );
            })}

            {/* Interactive Agenda Tooltip Banner */}
            <AnimatePresence>
              {activeAgendaIdx !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute left-[22.5%] right-[22.5%] top-[34.9%] bg-[#052e2b]/95 text-[#96e6ff] font-['League_Spartan:Bold',sans-serif] text-[0.95vw] px-[1.2vw] py-[0.55vw] rounded-xl shadow-lg border border-[#00bd96] flex items-center justify-between pointer-events-none z-30"
                >
                  <span>{AGENDA_DETAILS[activeAgendaIdx].detail}</span>
                  <span className="font-['Lekton:Bold',monospace] text-[#00cf91] text-[0.85vw] ml-2">
                    {AGENDA_DETAILS[activeAgendaIdx].time}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              className="absolute contents inset-[22.22%_22.73%_66.33%_22.5%]"
              data-name="Agenda text"
              data-node-id="300:599"
            >
              <div className="absolute inset-[22.9%_22.73%_77.1%_22.5%]" data-name="Vector" data-node-id="300:600">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector7} />
                </div>
              </div>
              <div className="absolute inset-[24.24%_22.73%_75.76%_22.5%]" data-name="Vector" data-node-id="300:601">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector8} />
                </div>
              </div>
              <div className="absolute inset-[25.59%_22.73%_74.41%_22.5%]" data-name="Vector" data-node-id="300:602">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector9} />
                </div>
              </div>
              <div className="absolute inset-[26.94%_22.73%_73.06%_22.5%]" data-name="Vector" data-node-id="300:603">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector10} />
                </div>
              </div>
              <div className="absolute inset-[28.28%_22.73%_71.72%_22.5%]" data-name="Vector" data-node-id="300:604">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector9} />
                </div>
              </div>
              <div className="absolute inset-[29.63%_22.73%_70.37%_22.5%]" data-name="Vector" data-node-id="300:605">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector9} />
                </div>
              </div>
              <div className="absolute inset-[30.98%_22.73%_69.02%_22.5%]" data-name="Vector" data-node-id="300:606">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector11} />
                </div>
              </div>
              <div className="absolute inset-[32.32%_22.73%_67.68%_22.5%]" data-name="Vector" data-node-id="300:607">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector9} />
                </div>
              </div>
              <div className="absolute inset-[33.67%_22.73%_66.33%_22.5%]" data-name="Vector" data-node-id="300:608">
                <div className="absolute inset-[-0.1111vw_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector9} />
                </div>
              </div>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[22.22%_68.77%_77.1%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.2778vw] whitespace-nowrap"
                data-node-id="300:609"
              >
                Doors Open
              </p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[23.57%_64%_75.76%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.2083vw] whitespace-nowrap"
                data-node-id="300:610"
              >
                Opening Ceremony
              </p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[24.92%_64%_74.41%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.2083vw] whitespace-nowrap"
                data-node-id="300:611"
              >
                Hacking Continues
              </p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[26.26%_51.3%_73.06%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.2778vw] whitespace-nowrap"
                data-node-id="300:612"
              >{`Activity : Will be revealed later `}</p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[27.61%_68.77%_71.72%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.1563vw] whitespace-nowrap"
                data-node-id="300:613"
              >
                Lunch Break
              </p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[28.96%_64.8%_70.37%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.1563vw] whitespace-nowrap"
                data-node-id="300:614"
              >
                Hacking Continues
              </p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[30.3%_55.27%_69.02%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.2083vw] whitespace-nowrap"
                data-node-id="300:615"
              >
                Submissions + Evening Snacks
              </p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[31.65%_59.24%_67.68%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.2083vw] whitespace-nowrap"
                data-node-id="300:616"
              >
                judging + Quest Rewards
              </p>
              <p
                className="absolute font-['Krub:Bold',sans-serif] inset-[33%_58.45%_66.33%_22.5%] leading-[1.5873vw] not-italic text-[#3585b3] text-[1.1111vw] tracking-[0.2083vw] whitespace-nowrap"
                data-node-id="300:617"
              >
                Valedictory / Closing Note
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[22.22%_22.73%_77.1%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:618"
              >
                07:30 AM - 08:30 AM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[23.57%_22.73%_75.76%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:619"
              >
                09:00 AM - 10:00 AM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[24.92%_22.73%_74.41%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:620"
              >
                10:00 AM - 12:00 PM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[26.26%_22.73%_73.06%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:621"
              >
                12:00 PM - 01:00 PM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[27.61%_22.73%_71.72%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:622"
              >
                01:00 PM - 02:30 PM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[28.96%_22.73%_70.37%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:623"
              >
                02:00 PM - 04:00 PM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[30.3%_22.73%_69.02%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:624"
              >
                04:00 PM - 04:30 PM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[31.65%_22.73%_67.68%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:625"
              >
                04:30 PM - 05:00 PM
              </p>
              <p
                className="absolute font-['Lekton:Bold',sans-serif] inset-[33%_22.73%_66.33%_62%] leading-[1.5873vw] not-italic text-[#0072a8] text-[1.1905vw] text-right whitespace-nowrap"
                data-node-id="300:626"
              >
                05:00 PM - 06:00 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Agenda Penguin #5 */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 6 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            handlePenguinClick(
              "penguin-agenda",
              "Hover any agenda row to see what's happening at that hour! ⏰🐧"
            )
          }
          className="absolute inset-[18.18%_20.63%_78.45%_70.63%] cursor-pointer z-20 animate-htn-penguin"
          data-name="Rectangle"
          data-node-id="300:628"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[318.62%] left-[-193.48%] max-w-none top-[-214.72%] w-[289.66%]"
              src={imgPicEmoji}
            />
          </div>
          {activePenguinBubble?.id === "penguin-agenda" && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-[3.2vw] right-0 bg-white/95 text-[#019274] font-['League_Spartan:Bold',sans-serif] text-[0.85vw] px-[1vw] py-[0.45vw] rounded-2xl shadow-xl whitespace-nowrap border-2 border-[#00bd96] z-30"
            >
              {activePenguinBubble.text}
            </motion.div>
          )}
        </motion.div>

        {/* Organiser's Note (Purple Crystal Tablet) */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
          whileHover={{
            y: -8,
            scale: 1.02,
            filter: "drop-shadow(0 0 2vw rgba(200, 0, 225, 0.5))",
          }}
          style={{ transformOrigin: "37.0% 50.4%" }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          <div
            className="absolute inset-[41.08%_41%_40.29%_15.08%] pointer-events-auto"
            data-name="Rectangle"
            data-node-id="300:630"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle19} />
            </div>
          </div>
          <div
            className="absolute contents inset-[43.43%_45.24%_42.8%_20.63%] text-white"
            data-name="Organiser's Note Text"
            data-node-id="300:631"
          >
            <p
              className="absolute font-['League_Spartan:Bold',sans-serif] font-bold inset-[42.9%_65%_56.0%_20.63%] leading-[1.6vw] text-[1.0vw] tracking-[0.16vw] whitespace-nowrap"
              data-node-id="300:632"
            >
              Hey Builders!
            </p>
            <p
              className="absolute font-['League_Spartan:Medium',sans-serif] font-medium inset-[44.45%_44.8%_52.6%_20.63%] leading-[1.35vw] text-[0.9vw] tracking-[0.13vw]"
              data-node-id="300:633"
            >
              We’re super excited to welcome you to Skyfall. This isn’t just another event it’s a space built for you. Your ideas, your curiosity, and your willingness to try something new are what make this experience special.
            </p>
            <p
              className="absolute font-['League_Spartan:Medium',sans-serif] font-medium inset-[48.45%_44.8%_49.4%_20.63%] leading-[1.52vw] text-[0.98vw] tracking-[0.14vw]"
              data-node-id="300:634"
            >
              Behind the scenes, we’ve been working to create an environment where you can explore, learn, and build freely.
            </p>
            <p
              className="absolute font-['League_Spartan:Medium',sans-serif] font-medium inset-[51.15%_44.8%_46.7%_20.63%] leading-[1.52vw] text-[0.98vw] tracking-[0.14vw]"
              data-node-id="300:635"
            >
              Whether this is your first time building or you’ve already started experimenting, Skyfall is your space to take risks, collaborate, and create without fear.
            </p>
            <p
              className="absolute font-['League_Spartan:Medium',sans-serif] font-medium inset-[54.35%_44.8%_44.2%_20.63%] leading-[1.52vw] text-[0.9524vw] tracking-[0.14vw]"
              data-node-id="300:636"
            >
              We can’t wait to see what you build. Let’s make this an experience to remember.
            </p>
            <p
              className="absolute font-['League_Spartan:Medium',sans-serif] font-medium inset-[56.52%_65%_42.8%_20.63%] leading-[1.5873vw] text-[0.9524vw] tracking-[0.2381vw] whitespace-nowrap"
              data-node-id="300:637"
            >
              — Team Skyfall
            </p>
          </div>
        </motion.div>

        {/* Waterfall Penguin #6 */}
        <div className="absolute flex inset-[53.2%_24.88%_43.41%_67.14%] items-center justify-center z-20">
          <div className="-scale-y-100 flex-none rotate-180 size-[7.9857vw]">
            <motion.div
              whileHover={{ scale: 1.16, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePenguinClick(
                  "penguin-waterfall",
                  "The glowing crystal cave is just below! Don't miss the FAQs! 💎🐧"
                )
              }
              className="relative size-full cursor-pointer animate-htn-penguin"
              data-name="Rectangle"
              data-node-id="300:639"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle20} />
              </div>
            </motion.div>
          </div>
          {activePenguinBubble?.id === "penguin-waterfall" && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-[3.2vw] right-0 bg-white/95 text-[#6b21a8] font-['League_Spartan:Bold',sans-serif] text-[0.85vw] px-[1vw] py-[0.45vw] rounded-2xl shadow-xl whitespace-nowrap border-2 border-[#c800e1] z-30"
            >
              {activePenguinBubble.text}
            </motion.div>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* PAGE 6: CRYSTAL ABYSS (FAQ & FINAL REGISTER CALL)                     */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[95.2381vw] left-0 overflow-clip top-[514.2857vw] w-[100vw]"
        data-name="Page 6"
        data-node-id="300:641"
      >
        <div
          className="absolute inset-[5.83%_16.67%_92.5%_17.46%]"
          data-name="Divider"
          data-node-id="300:640"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgDivider2} />
        </div>
        <div
          className="absolute inset-[63.33%_16.67%_35%_17.46%]"
          data-name="Divider"
          data-node-id="304:10"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgDivider3} />
        </div>

        {/* FAQ Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute inset-[11.67%_33.33%_74.17%_33.33%]"
          data-name="Heading background"
          data-node-id="300:643"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none animate-htn-float-slow">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHeadingBackground} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute inset-[16.2%_33.33%_77.5%_33.33%] flex items-center justify-center text-center pointer-events-none"
          data-node-id="300:645"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[4.7619vw] not-italic text-[2.9365vw] text-white whitespace-nowrap">
            FAQ
          </p>
        </motion.div>

        {/* FAQ 1: Who is eligible? */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.05, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -8,
            scale: 1.04,
            filter: "drop-shadow(0 0.8vw 1.6vw rgba(200, 0, 225, 0.38))",
          }}
          whileTap={{ scale: 0.97 }}
          style={{ transformOrigin: "22.5% 36.1%" }}
          onClick={() => {
            setActiveFaqIdx(0);
            setXp((prev) => prev + 10);
            triggerToast(FAQ_EXTRAS[0]);
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-node-id="300:806"
        >
          <div
            className="absolute inset-[31.27%_65.41%_58.71%_9.52%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="300:807"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup7} />
          </div>
          <div
            className="absolute inset-[30.83%_64.53%_59.59%_10.4%]"
            data-name="Clip path group"
            data-node-id="300:810"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup8} />
          </div>
          <div
            className="absolute inset-[30.83%_64.53%_59.59%_10.4%] flex flex-col justify-center gap-[0.35vw] pointer-events-none"
            style={{ padding: "1.1vw 1.8vw" }}
          >
            <p
              className="font-['League_Spartan:ExtraBold',sans-serif] font-extrabold leading-[1.4vw] text-[#c800e1] text-[1.1905vw] tracking-[0.1vw]"
              data-node-id="300:815"
            >
              Who is eligible?
            </p>
            <p
              className="font-['League_Spartan:SemiBold',sans-serif] font-semibold leading-[1.35vw] text-[#d876e4] text-[1.08vw] tracking-[0.03vw]"
              data-node-id="300:816"
            >
              Skyfall is for highschoolers! You need to be 13-18 years old to participate.
            </p>
          </div>
        </motion.div>

        {/* FAQ 2: Will food be provided? */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.12, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -8,
            scale: 1.04,
            filter: "drop-shadow(0 0.8vw 1.6vw rgba(246, 208, 43, 0.38))",
          }}
          whileTap={{ scale: 0.97 }}
          style={{ transformOrigin: "50.0% 36.1%" }}
          onClick={() => {
            setActiveFaqIdx(1);
            setXp((prev) => prev + 10);
            triggerToast(FAQ_EXTRAS[1]);
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Faq Box"
          data-node-id="304:24"
        >
          <div
            className="absolute inset-[31.27%_37.89%_58.71%_37.05%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="300:798"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup9} />
          </div>
          <div
            className="absolute inset-[30.83%_37.03%_59.59%_37.9%]"
            data-name="Clip path group"
            data-node-id="300:801"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup10} />
          </div>
          <div
            className="absolute inset-[30.83%_37.03%_59.59%_37.9%] flex flex-col justify-center gap-[0.35vw] pointer-events-none"
            style={{ padding: "1.1vw 1.8vw" }}
          >
            <p
              className="font-['League_Spartan:ExtraBold',sans-serif] font-extrabold leading-[1.4vw] text-[#a48500] text-[1.1905vw] tracking-[0.1vw]"
              data-node-id="300:817"
            >
              Will food be provided?
            </p>
            <p
              className="font-['League_Spartan:SemiBold',sans-serif] font-semibold leading-[1.35vw] text-[#b2a46b] text-[1.08vw] tracking-[0.02vw]"
              data-node-id="300:818"
            >
              Yes, meals and snacks will be provided. We will arrange any food sensitivities to the best of our ability.
            </p>
          </div>
        </motion.div>

        {/* FAQ 3: Can i form a team? */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.19, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -8,
            scale: 1.04,
            filter: "drop-shadow(0 0.8vw 1.6vw rgba(24, 200, 164, 0.38))",
          }}
          whileTap={{ scale: 0.97 }}
          style={{ transformOrigin: "77.5% 36.1%" }}
          onClick={() => {
            setActiveFaqIdx(2);
            setXp((prev) => prev + 10);
            triggerToast(FAQ_EXTRAS[2]);
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Faq Box"
          data-node-id="300:822"
        >
          <div
            className="absolute inset-[31.27%_10.38%_58.71%_64.55%] pointer-events-auto cursor-pointer"
            data-name="Faq box"
            data-node-id="300:823"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgFaqBox} />
          </div>
          <div
            className="absolute inset-[30.83%_9.5%_59.59%_65.43%]"
            data-name="Clip path group"
            data-node-id="300:826"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup11} />
          </div>
          <div
            className="absolute inset-[30.83%_9.5%_59.59%_65.43%] flex flex-col justify-center gap-[0.35vw] pointer-events-none"
            style={{ padding: "1.1vw 1.8vw" }}
          >
            <p
              className="font-['League_Spartan:ExtraBold',sans-serif] font-extrabold leading-[1.4vw] text-[#019274] text-[1.1905vw] tracking-[0.1vw]"
              data-node-id="300:831"
            >
              Can i form a team?
            </p>
            <p
              className="font-['League_Spartan:SemiBold',sans-serif] font-semibold leading-[1.35vw] text-[#18c8a4] text-[1.08vw] tracking-[0.03vw]"
              data-node-id="300:832"
            >
              Hackers may form teams of up to 3 people, you can team up with hackers from any school during the event.
            </p>
          </div>
        </motion.div>

        {/* FAQ 4: My parents are concerned.. */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.26, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -8,
            scale: 1.04,
            filter: "drop-shadow(0 0.8vw 1.6vw rgba(24, 200, 164, 0.38))",
          }}
          whileTap={{ scale: 0.97 }}
          style={{ transformOrigin: "22.5% 49.9%" }}
          onClick={() => {
            setActiveFaqIdx(3);
            setXp((prev) => prev + 10);
            triggerToast(FAQ_EXTRAS[3]);
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Faq Box"
          data-node-id="300:833"
        >
          <div
            className="absolute inset-[45.13%_65.41%_44.85%_9.52%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="300:834"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup12} />
          </div>
          <div
            className="absolute inset-[44.69%_64.53%_45.73%_10.4%]"
            data-name="Clip path group"
            data-node-id="300:837"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup13} />
          </div>
          <div
            className="absolute inset-[44.69%_64.53%_45.73%_10.4%] flex flex-col justify-center gap-[0.35vw] pointer-events-none"
            style={{ padding: "1.1vw 1.8vw" }}
          >
            <p
              className="font-['League_Spartan:ExtraBold',sans-serif] font-extrabold leading-[1.4vw] text-[#019274] text-[1.1905vw] tracking-[0.1vw]"
              data-node-id="300:842"
            >
              My parents are concerned..
            </p>
            <p
              className="font-['League_Spartan:SemiBold',sans-serif] font-semibold leading-[1.35vw] text-[#18c8a4] text-[1.08vw] tracking-[0.02vw]"
              data-node-id="300:843"
            >
              {`We're here to help! Parents can reach out to Nikhil Mansotra (+91 8050726182) or email contact@skyfall.live for any questions.`}
            </p>
          </div>
        </motion.div>

        {/* FAQ 6: Can begginers participate ? */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.38, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -8,
            scale: 1.04,
            filter: "drop-shadow(0 0.8vw 1.6vw rgba(246, 208, 43, 0.38))",
          }}
          whileTap={{ scale: 0.97 }}
          style={{ transformOrigin: "77.6% 49.9%" }}
          onClick={() => {
            setActiveFaqIdx(4);
            setXp((prev) => prev + 10);
            triggerToast(FAQ_EXTRAS[4]);
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Faq Box"
          data-node-id="300:844"
        >
          <div
            className="absolute inset-[45.13%_10.27%_44.85%_64.67%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="300:845"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup14} />
          </div>
          <div
            className="absolute inset-[44.69%_9.39%_45.73%_65.54%]"
            data-name="Clip path group"
            data-node-id="300:848"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup15} />
          </div>
          <div
            className="absolute inset-[44.69%_9.39%_45.73%_65.54%] flex flex-col justify-center gap-[0.35vw] pointer-events-none"
            style={{ padding: "1.1vw 1.8vw" }}
          >
            <p
              className="font-['League_Spartan:ExtraBold',sans-serif] font-extrabold leading-[1.4vw] text-[#a48500] text-[1.1905vw] tracking-[0.1vw]"
              data-node-id="300:853"
            >
              Can begginers participate ?
            </p>
            <p
              className="font-['League_Spartan:SemiBold',sans-serif] font-semibold leading-[1.35vw] text-[#b2a46b] text-[1.08vw] tracking-[0.03vw]"
              data-node-id="300:854"
            >
              {`Skyfall is for all skill levels! We'll have activities and quests, so join us and enjoy your weekend.`}
            </p>
          </div>
        </motion.div>

        {/* FAQ 5: What do I need to bring? */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.32, type: "spring", bounce: 0.35 }}
          whileHover={{
            y: -8,
            scale: 1.04,
            filter: "drop-shadow(0 0.8vw 1.6vw rgba(200, 0, 225, 0.38))",
          }}
          whileTap={{ scale: 0.97 }}
          style={{ transformOrigin: "50.0% 49.9%" }}
          onClick={() => {
            setActiveFaqIdx(5);
            setXp((prev) => prev + 10);
            triggerToast(FAQ_EXTRAS[5]);
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Faq box"
          data-node-id="300:855"
        >
          <div
            className="absolute inset-[45.13%_37.98%_44.85%_36.95%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="300:856"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup16} />
          </div>
          <div
            className="absolute inset-[44.69%_37.12%_45.73%_37.81%]"
            data-name="Clip path group"
            data-node-id="300:859"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup17} />
          </div>
          <div
            className="absolute inset-[44.69%_37.12%_45.73%_37.81%] flex flex-col justify-center gap-[0.35vw] pointer-events-none"
            style={{ padding: "1.1vw 1.8vw" }}
          >
            <p
              className="font-['League_Spartan:ExtraBold',sans-serif] font-extrabold leading-[1.4vw] text-[#c800e1] text-[1.1905vw] tracking-[0.1vw]"
              data-node-id="300:864"
            >
              What do I need to bring?
            </p>
            <p
              className="font-['League_Spartan:SemiBold',sans-serif] font-semibold leading-[1.35vw] text-[#d876e4] text-[1.08vw] tracking-[0.02vw]"
              data-node-id="300:865"
            >
              Your laptop, charger, and an open mind! Rest we are taking care of everything..
            </p>
          </div>
        </motion.div>

        {/* Bottom Skyfall Logo in Crystal Cave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          onClick={() => {
            setRegSubmitted(false);
            setShowRegisterModal(true);
          }}
          className="absolute inset-[70.83%_25.4%_15%_26.19%] cursor-pointer z-20"
          data-name="mail skyfall logo"
          data-node-id="304:13"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none animate-htn-float">
            <img
              alt=""
              className="absolute h-[276.7%] left-[-15.43%] max-w-none top-[-67.29%] w-[122.07%]"
              src={imgMailSkyfallLogo}
            />
          </div>
        </motion.div>

        {/* Bottom REGISTER NOW Button */}
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -4,
            filter: "drop-shadow(0 0 1.4vw rgba(229, 28, 255, 0.85))",
          }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: "48.0% 90.0%" }}
          onClick={() => {
            setRegSubmitted(false);
            setShowRegisterModal(true);
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Register btn"
          data-node-id="304:16"
        >
          <div
            className="absolute inset-[88.33%_46.01%_8.33%_42.06%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="304:17"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup18} />
          </div>
          <div
            className="absolute inset-[88.91%_46.58%_11.09%_42.7%]"
            data-name="Vector"
            data-node-id="304:22"
          >
            <div className="absolute inset-[-0.1746vw_-1.65%]">
              <img alt="" className="block max-w-none size-full" src={imgVector12} />
            </div>
          </div>
          <div
            className="absolute inset-[88.33%_46.01%_8.33%_42.06%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="304:23"
          >
            <p className="font-['League_Spartan:Black',sans-serif] font-black leading-none text-[#e51cff] text-[1.0317vw] tracking-[0.129vw] whitespace-nowrap pt-[0.22vw]">
              REGISTER NOW
            </p>
          </div>
        </motion.div>
      </div>

      {/* ===================================================================== */}
      {/* PAGE 7: BASE CAMP FOOTER (MAP & DEPARTMENT INFO)                      */}
      {/* ===================================================================== */}
      <div
        className="absolute h-[33.3333vw] left-0 overflow-clip top-[609.5238vw] w-[100vw]"
        data-name="Page 7"
        data-node-id="304:25"
      >
        <div
          className="absolute inset-[-7.14%_-11.11%_-52.38%_-9.52%]"
          data-name="Rectangle"
          data-node-id="304:12"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[178.13%] left-0 max-w-none top-[-35.94%] w-full"
              src={imgRectangle21}
            />
          </div>
        </div>
        <div
          className="absolute inset-[9.52%_50.79%_76.19%_29.37%] overflow-clip"
          data-name="Clip path frame"
          data-node-id="304:26"
        >
          <div className="absolute inset-[-0.1%_-0.04%_-0.2%_0.01%]" data-name="Rectangle" data-node-id="304:27">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
            </div>
          </div>
        </div>

        {/* Interactive Map Container */}
        <div
          className="absolute inset-[26.19%_3.17%_9.52%_56.35%]"
          data-name="Map Border dotted"
          data-node-id="304:59"
        >
          <img alt="" className="absolute block max-w-none size-full" src={imgMapBorderDotted} />
        </div>
        <motion.div
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            window.open(
              "https://www.google.com/maps/place/Kristu+Jayanti+College/@13.0583195,77.6433502,17z",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="absolute inset-[30.95%_4.76%_14.29%_57.94%] cursor-pointer group overflow-hidden rounded-[0.4vw] shadow-[0_0_2vw_rgba(0,74,173,0.35)]"
          data-name="Map img"
          data-node-id="304:29"
        >
          {/* Embedded Google Maps of Kristu Jayanti Central Campus */}
          <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden pointer-events-none">
            <iframe
              src="https://maps.google.com/maps?q=Kristu+Jayanti+College+Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title="Kristu Jayanti Central Campus Map"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-[1.08] filter saturate-[1.2]"
              loading="lazy"
            />
          </div>

          {/* Google Maps Campus Badge */}
          <div className="absolute top-[0.6vw] left-[0.6vw] bg-white/95 backdrop-blur-md rounded-[0.4vw] px-[0.7vw] py-[0.5vw] shadow-lg border border-black/10 pointer-events-none z-10 transition-transform group-hover:scale-105">
            <div className="flex items-center gap-[0.4vw]">
              <span className="text-[1.1vw]">📍</span>
              <div>
                <p className="font-['League_Spartan:Bold',sans-serif] font-bold text-[#1a1a1a] text-[0.85vw] leading-tight">
                  Kristu Jayanti Central Campus
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[0.62vw] text-[#555] leading-tight">
                  Science Block II (P1 Auditorium) • Bengaluru
                </p>
              </div>
            </div>
          </div>

          {/* Animated Center Pin Marker */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-[1.8vw] w-[1.8vw] rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[0.9vw] w-[0.9vw] bg-red-600 border-2 border-white shadow-md"></span>
            </div>
          </div>

          {/* Bottom Open in Maps Pill */}
          <div className="absolute bottom-[0.6vw] right-[0.6vw] bg-[#1a73e8] text-white font-['League_Spartan:Bold',sans-serif] text-[0.75vw] px-[0.8vw] py-[0.35vw] rounded-full shadow-lg border border-white/40 pointer-events-none flex items-center gap-[0.3vw] z-10 group-hover:bg-[#1557b0] transition-colors">
            <span>🗺️ Open in Google Maps</span>
            <span className="text-[0.85vw]">↗</span>
          </div>
        </motion.div>

        <p
          className="absolute font-['League_Spartan:Bold',sans-serif] font-bold inset-[9.52%_22.6%_78.51%_56.35%] leading-[3.1746vw] text-[2.5397vw] text-white tracking-[0.0794vw] flex items-center"
          data-node-id="304:32"
        >
          WHERE TO BE ?
        </p>

        {/* Interactive GET DIRECTIONS Button */}
        <motion.div
          whileHover={{
            scale: 1.06,
            y: -3,
            filter: "drop-shadow(0 0 1vw rgba(150, 230, 255, 0.8))",
          }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: "90.2% 15.5%" }}
          onClick={() => {
            window.open(
              "https://www.google.com/maps/dir/?api=1&destination=Kristu+Jayanti+College+Autonomous+Bengaluru",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Direction btn"
          data-node-id="304:63"
        >
          <div
            className="absolute inset-[9.52%_2.94%_78.48%_83.33%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="304:33"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup19} />
          </div>
          <div
            className="absolute inset-[11.58%_3.58%_88.42%_84.06%]"
            data-name="Vector"
            data-node-id="304:38"
          >
            <div className="absolute inset-[-0.1746vw_-1.43%]">
              <img alt="" className="block max-w-none size-full" src={imgVector13} />
            </div>
          </div>
          <div
            className="absolute inset-[9.52%_2.94%_78.48%_83.33%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="304:39"
          >
            <p className="font-['Fredoka_One:Regular',sans-serif] leading-none not-italic text-[#004aad] text-[0.9524vw] tracking-[0.119vw] whitespace-nowrap pt-[0.1vw]">
              GET DIRECTIONS
            </p>
          </div>
        </motion.div>

        <p
          className="absolute font-['League_Spartan:Black',sans-serif] font-black inset-[9.52%_70.5%_75.51%_3.17%] leading-[1.95vw] text-[1.85vw] text-white tracking-[0.11vw]"
          data-node-id="304:40"
        >
          DEPARTMENT OF COMPUTER APPLICATIONS
        </p>

        {/* Interactive Footer Button: Our Values */}
        <motion.div
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: "20.4% 85.5%" }}
          onClick={() => setActiveFooterModal("Our Values")}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="btn footer"
          data-node-id="304:45"
        >
          <div
            className="absolute inset-[80.95%_74.6%_9.52%_15.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0vw_0vw] mask-size-[10.5635vw_2.8968vw] pointer-events-auto cursor-pointer"
            data-name="Vector"
            data-node-id="304:47"
            style={{ maskImage: `url('${imgVector14}')` }}
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgVector15} />
          </div>
          <div
            className="absolute inset-[80.95%_74.6%_9.52%_15.08%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="304:48"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic text-[0.9524vw] text-white tracking-[0.18vw] whitespace-nowrap">
              Our Values
            </p>
          </div>
        </motion.div>

        {/* Interactive Footer Button: Founder */}
        <motion.div
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: "8.5% 85.5%" }}
          onClick={() => setActiveFooterModal("Founder")}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="btn footer"
          data-node-id="304:41"
        >
          <div
            className="absolute inset-[80.98%_86.25%_10.04%_3.19%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.0111vw_-0.0079vw] mask-size-[10.5635vw_2.9929vw] pointer-events-auto cursor-pointer"
            data-name="Vector"
            data-node-id="304:43"
            style={{ maskImage: `url('${imgVector16}')` }}
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgVector17} />
          </div>
          <div
            className="absolute inset-[80.98%_86.25%_10.04%_3.19%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="304:44"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic text-[0.9524vw] text-white tracking-[0.18vw] whitespace-nowrap">
              Founder
            </p>
          </div>
        </motion.div>

        {/* Interactive Footer Button: History */}
        <motion.div
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: "32.1% 85.5%" }}
          onClick={() => setActiveFooterModal("History")}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="btn footer"
          data-node-id="304:66"
        >
          <div
            className="absolute inset-[80.54%_62.05%_10.77%_27.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.6524vw_0.1381vw] mask-size-[10.3175vw_2.8968vw] pointer-events-auto cursor-pointer"
            data-name="Vector"
            data-node-id="304:51"
            style={{ maskImage: `url('${imgVector18}')` }}
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgVector19} />
          </div>
          <div
            className="absolute inset-[80.54%_62.05%_10.77%_27.64%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="304:52"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic text-[0.9524vw] text-white tracking-[0.18vw] whitespace-nowrap">
              History
            </p>
          </div>
        </motion.div>

        {/* Interactive Footer Button: Vision */}
        <motion.div
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: "44.2% 85.5%" }}
          onClick={() => setActiveFooterModal("Vision")}
          className="absolute inset-0 pointer-events-none z-20"
          data-name="Btn footer"
          data-node-id="304:65"
        >
          <div
            className="absolute inset-[80.95%_50.57%_10.36%_38.89%] pointer-events-auto cursor-pointer"
            data-name="Clip path group"
            data-node-id="304:53"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgClipPathGroup20} />
          </div>
          <div
            className="absolute inset-[80.95%_50.57%_10.36%_38.89%] flex items-center justify-center text-center pointer-events-none"
            data-node-id="304:56"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic text-[0.9524vw] text-white tracking-[0.18vw] whitespace-nowrap">
              Vision
            </p>
          </div>
        </motion.div>

        <p
          className="absolute bottom-[28%] font-['Lato:SemiBold',sans-serif] leading-[1.65vw] left-[3.17%] not-italic right-[51%] text-[1.16vw] text-white top-[30.95%] tracking-[0.11vw] whitespace-pre-wrap"
          data-node-id="304:57"
        >
          {`With a legacy spanning over two decades, the Department of Computer Applications (UG) has been a cornerstone of Kristu Jayanti (Deemed to be University) since its inception in 1999. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          The department is nationally and state-level recognised for excellence in its BCA programmes, ranking among the top institutions in India and consistently securing leading positions among colleges in Bengaluru.
        </p>
      </div>

      {/* ===================================================================== */}
      {/* INTERACTIVE REGISTRATION MODAL (Triggered by REGISTER NOW buttons)    */}
      {/* ===================================================================== */}
      <AnimatePresence>
        {showRegisterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRegisterModal(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.88, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 24, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-gradient-to-b from-[#0b2b4c] to-[#051526] border-2 border-[#73c9ff]/50 rounded-3xl p-6 md:p-8 text-white shadow-[0_0_60px_rgba(40,164,230,0.4)]"
            >
              <button
                onClick={() => setShowRegisterModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 cursor-pointer"
              >
                ✕
              </button>

              {!regSubmitted ? (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#00cf91]/20 text-[#00cf91] border border-[#00cf91]/40 font-['League_Spartan:Bold',sans-serif] text-xs px-3 py-1 rounded-full">
                      APRIL 11, 2026 • AGES 13–18
                    </span>
                  </div>
                  <h3 className="font-['League_Spartan:Black',sans-serif] text-2xl md:text-3xl tracking-wide text-white mb-1">
                    CLAIM YOUR SKYFALL PASS 🐧
                  </h3>
                  <p className="text-sm text-[#96e6ff]/80 mb-5">
                    Reserve your spot at the National Teens Hackathon at Kristu Jayanti (Deemed to be University)!
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRegSubmitted(true);
                      setXp((prev) => prev + 100);
                      triggerToast("🎉 Boarding Pass Claimed! +100 Quest XP!");
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block font-['League_Spartan:Bold',sans-serif] text-xs tracking-wider text-[#96e6ff] mb-1">
                        BUILDER NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={regForm.name}
                        onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#73c9ff]"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <label className="block font-['League_Spartan:Bold',sans-serif] text-xs tracking-wider text-[#96e6ff] mb-1">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="hacker@school.edu"
                          value={regForm.email}
                          onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#73c9ff]"
                        />
                      </div>
                      <div>
                        <label className="block font-['League_Spartan:Bold',sans-serif] text-xs tracking-wider text-[#96e6ff] mb-1">
                          AGE (13-18)
                        </label>
                        <input
                          type="number"
                          min={13}
                          max={18}
                          required
                          value={regForm.age}
                          onChange={(e) => setRegForm({ ...regForm, age: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#73c9ff]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-['League_Spartan:Bold',sans-serif] text-xs tracking-wider text-[#96e6ff] mb-1">
                        FAVORITE BUILD TRACK
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(["SOFTWARE", "HARDWARE", "COMBINATION"] as const).map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setRegForm({ ...regForm, track: t })}
                            className={`py-2 rounded-xl font-['League_Spartan:Bold',sans-serif] text-xs tracking-wider border transition-all cursor-pointer ${
                              regForm.track === t
                                ? "bg-[#28a4e6] text-white border-white shadow-[0_0_15px_rgba(40,164,230,0.6)]"
                                : "bg-white/5 text-white/70 border-white/15 hover:bg-white/10"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 mt-2 rounded-full bg-gradient-to-r from-[#00cf91] via-[#28a4e6] to-[#e51cff] font-['League_Spartan:Black',sans-serif] text-sm tracking-widest text-white shadow-[0_0_25px_rgba(40,164,230,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
                    >
                      COMPLETE REGISTRATION ✨
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="text-5xl mb-3">🎟️</div>
                  <h3 className="font-['League_Spartan:Black',sans-serif] text-2xl text-[#00cf91] mb-2">
                    YOU&apos;RE ON THE LIST, {regForm.name.toUpperCase() || "BUILDER"}!
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    Track: <span className="text-[#f6d02b] font-bold">{regForm.track}</span> • See you on{" "}
                    <span className="text-[#96e6ff] font-bold">April 11th, 2026</span> at Kristu Jayanti (Deemed to be University) — P1 Auditorium, Science Block II!
                  </p>
                  <button
                    onClick={() => setShowRegisterModal(false)}
                    className="px-6 py-2.5 rounded-full bg-white text-[#004aad] font-['League_Spartan:Black',sans-serif] text-xs tracking-widest cursor-pointer hover:bg-[#96e6ff] transition-colors"
                  >
                    BACK TO SKYFALL WORLD
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================================== */}
      {/* INTERACTIVE FOOTER INFO MODAL (Founder / Our Values / History / Vision)*/}
      {/* ===================================================================== */}
      <AnimatePresence>
        {activeFooterModal && FOOTER_INFO[activeFooterModal] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveFooterModal(null)}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-gradient-to-br from-[#072647] to-[#031224] border border-[#96e6ff]/40 rounded-3xl p-6 md:p-8 text-white shadow-2xl"
            >
              <button
                onClick={() => setActiveFooterModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 cursor-pointer"
              >
                ✕
              </button>
              <span className="inline-block bg-[#28a4e6]/20 border border-[#28a4e6]/40 text-[#96e6ff] font-['League_Spartan:Bold',sans-serif] text-xs px-3 py-1 rounded-full mb-3">
                {FOOTER_INFO[activeFooterModal].badge}
              </span>
              <h3 className="font-['League_Spartan:Black',sans-serif] text-2xl tracking-wide text-white mb-1">
                {FOOTER_INFO[activeFooterModal].title}
              </h3>
              <p className="font-['League_Spartan:Bold',sans-serif] text-sm text-[#00cf91] mb-4">
                {FOOTER_INFO[activeFooterModal].subtitle}
              </p>
              <p className="text-sm text-white/85 leading-relaxed mb-6">
                {FOOTER_INFO[activeFooterModal].body}
              </p>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(FOOTER_INFO).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFooterModal(tab)}
                    className={`px-3 py-1.5 rounded-xl font-['League_Spartan:Bold',sans-serif] text-xs cursor-pointer transition-all ${
                      activeFooterModal === tab
                        ? "bg-white text-[#004aad]"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
