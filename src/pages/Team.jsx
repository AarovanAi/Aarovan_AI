import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";
import picture1 from "../assets/Picture2.jpg";
import picture2 from "../assets/Picture1.jpg";

export default function Team() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
<header className="mb-24 md:mb-32">
<h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight max-w-4xl">
                Focused on Building <br />
<span className="italic font-normal">Outcome-Driven Systems</span>
</h1>
<div className="h-1 w-24 bg-primary mt-8 opacity-20"></div>
</header>
<AnimatedSection as="section" className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32 items-start">
<div className="relative group">
<div className="absolute -top-6 -left-6 w-full h-full bg-surface-container-low rounded-xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="bg-surface-container-lowest p-8 md:p-12 editorial-shadow ghost-border rounded-xl">
<div className="flex justify-between items-start mb-8">
<div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background: "rgba(233, 232, 232, 0.8)"}}>
<span className="material-symbols-outlined text-primary" data-icon="code">code</span>
</div>
                <img className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl shadow-lg mr-8" data-alt="Professional portrait of Rohan Garg, a senior male executive with a confident expression, wearing a tailored navy blazer against a minimalist gray background" src={picture1} />
</div>
<h3 className="text-3xl font-bold text-primary mb-2">Rohan Garg</h3>
<p className="font-medium text-secondary mb-6 italic">Co-Founder</p>
<div className="space-y-4 text-on-surface-variant leading-relaxed text-sm">
<p>Product leader with 10+ years of experience across India and the US, spanning product management and data analytics. At Dream11 and PokerBaazi, built growth and retention products at scale for ~20M daily active users. Previously at Publicis Media and comScore, developed data platforms and visualization tools for global ad agencies. MBA from ISB, MMS from Duke University, and an engineering degree from NIT Kurukshetra.</p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-3 py-1 bg-surface-container-high text-xs rounded-full">MBA from ISB</span>
<span className="px-3 py-1 bg-surface-container-high text-xs rounded-full">MMS from Duke</span>
<span className="px-3 py-1 bg-surface-container-high text-xs rounded-full">NIT Kurukshetra</span>
</div>
</div>
</div>
</div>
<div className="relative group mt-12 md:mt-24">
<div className="absolute -top-6 -right-6 w-full h-full bg-surface-container-low rounded-xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2"></div>
<div className="bg-surface-container-lowest p-8 md:p-12 editorial-shadow ghost-border rounded-xl">
<div className="flex justify-between items-start mb-8">
<div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background: "rgba(176, 205, 190, 0.8)"}}>
<span className="material-symbols-outlined text-primary" data-icon="psychology">psychology</span>
</div>
                <img className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl shadow-lg -ml-12" data-alt="Professional portrait of Avennya Goel, a sharp female professional with an intelligent gaze, wearing a sophisticated dark blouse in an airy office setting" src={picture2} />
</div>
<h3 className="text-3xl font-bold text-primary mb-2">Avennya Goel</h3>
<p className="font-medium text-secondary mb-6 italic">Co-Founder</p>
<div className="space-y-4 text-on-surface-variant leading-relaxed text-sm">
<p>Finance professional with 4+ years of experience across analytics, financial strategy, and AI-enabled platforms. Worked at Deloitte on financial analysis, reporting automation, and performance evaluation across large-scale systems, and at Mercor on financial modelling within AI-driven workflows. MBA in Quantitative Finance and Entrepreneurship from Babson College, focused on building data-driven systems that measure performance, identify gaps, and drive measurable outcomes.</p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-3 py-1 bg-surface-container-high text-xs rounded-full">MBA from Babson College</span>
</div>
</div>
</div>
</div>
</AnimatedSection>
<AnimatedSection as="section" className="relative overflow-hidden py-24 px-12 rounded-3xl bg-surface-container mb-32">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-lowest rounded-full mb-6 ghost-border">
<span className="material-symbols-outlined text-primary text-xl" data-icon="school">school</span>
<span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">Mentorship</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">Built with guidance from renowned AI faculty</h2>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                        Aarovan.ai is guided by mentorship from NYU Tandon School of Engineering. This mentorship combines academic expertise with real-world execution.
                    </p>
</div>
<div className="w-full md:w-1/3 flex justify-center">
<div className="w-64 h-64 md:w-80 md:h-80 glass-panel flex items-center justify-center rounded-full border border-white/20 shadow-2xl">
<span className="material-symbols-outlined text-primary" data-icon="smart_toy" style={{fontSize: '10rem', fontVariationSettings: "\'FILL\' 1"}}>smart_toy</span>
</div>
</div>
</div>
</AnimatedSection>
<AnimatedSection as="section" className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-t border-outline-variant/20 pt-16">
<div className="md:col-span-5">
<h2 className="text-3xl font-bold text-primary mb-4 italic">Built through real-world validation and continuous iteration.</h2>
</div>
<div className="md:col-span-7">
<p className="text-on-surface-variant leading-relaxed">
  Aarovan.ai has been developed through direct engagement with students and institutions, grounded in real pilot programs and feedback loops.
  <br></br>
                    The team brings together experience across analytics, product, and AI-enabled systems — with a shared focus on solving one of the most overlooked challenges in employability: how students communicate what they know.
                </p>
</div>
</AnimatedSection>
</main>
    </>
  );
}
