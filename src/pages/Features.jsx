import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <>
      <main>

<AnimatedSection as="section" className="relative pt-24 pb-32 px-8 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="md:w-3/4">
<span className="text-secondary font-semibold tracking-[0.2em] text-xs uppercase mb-6 block">The Digital Scholar's Suite</span>
<h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
                        A Complete System for <br />
<span className="italic text-secondary">Interview Communication</span>
</h1>
<div className="flex flex-wrap items-center gap-4 text-lg md:text-xl text-on-surface-variant font-light">
<span>Practice</span>
<span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
<span>Evaluate</span>
<span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
<span>Improve</span>
<span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
<span>Track</span>
<span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
<span>Repeat</span>
</div>
</div>
</div>

<div className="absolute -right-20 top-0 w-1/3 h-full opacity-10 pointer-events-none">
<img alt="Background texture" className="object-cover w-full h-full" data-alt="Elegant architectural blueprint lines and technical schematics on a parchment texture, high-end engineering background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXXsmYhmOFz8P-l6dHiAmb-LD_Xblm5U9H8ru_n-SPr1ymWx-qBgrcx5UyCVgUqwmDCt6Io1hx9UWKraDFn3buAgSetWKEt-OQyoaoDrguwzihNtUfLNwuVt1SAaKXmUy-8l0soE_cgdiQNOU9l50e93Qy4MF9CMPPrpe3-3v-zvOM-AVJ_w2iATQ4RRvxAaSf0B5RLzjCZ48sYhj9MIu9GtxTakItV3BzyBD8YR2nLk8S5m0eDJ0_lD9K7Kb-Y3Tc67qEqxDhgVJM"/>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-24 px-8 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline text-3xl text-primary mb-4">System Flow</h2>
<p className="text-on-surface-variant">Not isolated features — a continuous improvement loop.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl shadow-sm border-l-4 border-primary">
<div className="flex justify-between items-start mb-12">
<span className="material-symbols-outlined text-4xl text-primary">psychology</span>
<span className="text-outline-variant font-headline italic">01</span>
</div>
<h3 className="font-headline text-3xl text-primary mb-6">Interview Simulation</h3>
<p className="text-on-surface-variant mb-8 max-w-md">Experience real-world pressure with AI-driven technical and HR scenarios tailored to engineering roles.</p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 text-sm text-secondary font-medium">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "\'FILL\' 1"}}>circle</span>
                                Real interview scenarios
                            </div>
<div className="flex items-center gap-3 text-sm text-secondary font-medium">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "\'FILL\' 1"}}>circle</span>
                                Technical + HR rounds
                            </div>
<div className="flex items-center gap-3 text-sm text-secondary font-medium">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "\'FILL\' 1"}}>circle</span>
                                Adaptive questioning
                            </div>
<div className="flex items-center gap-3 text-sm text-secondary font-medium">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "\'FILL\' 1"}}>circle</span>
                                Real-time response practice
                            </div>
</div>
</div>

<div className="md:col-span-5 bg-primary-container text-on-primary-container p-10 rounded-xl flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-4xl">record_voice_over</span>
<span className="text-on-primary-container/40 font-headline italic">02</span>
</div>
<h3 className="font-headline text-3xl mb-6 text-white">Communication Evaluation</h3>
</div>
<ul className="space-y-4">
<li className="border-b border-on-primary-container/20 pb-4 flex justify-between">
<span>Clarity of answers</span>
<span className="material-symbols-outlined opacity-60">check_circle</span>
</li>
<li className="border-b border-on-primary-container/20 pb-4 flex justify-between">
<span>Logical structure</span>
<span className="material-symbols-outlined opacity-60">check_circle</span>
</li>
<li className="border-b border-on-primary-container/20 pb-4 flex justify-between">
<span>Flow of explanation</span>
<span className="material-symbols-outlined opacity-60">check_circle</span>
</li>
<li className="pb-4 flex justify-between">
<span>Conciseness</span>
<span className="material-symbols-outlined opacity-60">check_circle</span>
</li>
</ul>
</div>

<div className="md:col-span-5 bg-surface-container-highest p-10 rounded-xl relative overflow-hidden">
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-4xl text-primary">analytics</span>
<span className="text-outline-variant font-headline italic">03</span>
</div>
<h3 className="font-headline text-3xl text-primary mb-6">Feedback System</h3>
<p className="text-on-surface-variant mb-6">Receive detailed breakdowns that identify weak points and provide structured improvement suggestions.</p>
<div className="space-y-3">
<div className="bg-surface-container-lowest p-3 rounded text-sm text-primary font-medium flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">description</span> Detailed breakdown
                                </div>
<div className="bg-surface-container-lowest p-3 rounded text-sm text-primary font-medium flex items-center gap-3">
<span className="material-symbols-outlined text-error">warning</span> Identify weak points
                                </div>
<div className="bg-surface-container-lowest p-3 rounded text-sm text-primary font-medium flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">lightbulb</span> Structured improvement suggestions
                                </div>
</div>
</div>
</div>

<div className="md:col-span-7 bg-white p-10 rounded-xl shadow-lg border-t-8 border-secondary-fixed-dim">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-4xl text-secondary">trending_up</span>
<span className="text-outline-variant font-headline italic">04</span>
</div>
<h3 className="font-headline text-3xl text-primary mb-6">Progress Tracking</h3>
<div className="flex flex-col md:flex-row gap-8 items-end">
<div className="flex-1 space-y-4">
<p className="text-on-surface-variant mb-4">Track communication improvement over time with readiness indicators and performance trends.</p>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
                                        Communication improvement over time
                                    </li>
<li className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
                                        Readiness indicators
                                    </li>
<li className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
                                        Performance trends
                                    </li>
</ul>
</div>
<div className="w-full md:w-48 aspect-video bg-surface-container-low rounded-lg p-4 flex items-end gap-2">
<div className="bg-primary w-full h-[20%] rounded-t-sm"></div>
<div className="bg-primary w-full h-[35%] rounded-t-sm"></div>
<div className="bg-primary w-full h-[55%] rounded-t-sm"></div>
<div className="bg-secondary w-full h-[85%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-32 px-8 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-24">
<h2 className="font-headline text-4xl text-primary mb-4">How It Works</h2>
<p className="text-on-surface-variant font-body tracking-widest uppercase text-xs">A System Designed to Improve Communication — Step by Step</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-secondary-fixed-dim opacity-30"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">

<div className="group">
<div className="w-12 h-12 primary-gradient text-white rounded-full flex items-center justify-center font-headline mb-8 relative lg:mx-auto">
                                1
                                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-secondary-fixed-dim/30 group-last:hidden"></div>
</div>
<div className="lg:text-center">
<h4 className="font-bold text-primary mb-3">Interview Simulation</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Practice answering questions in real interview conditions.</p>
</div>
</div>

<div className="group">
<div className="w-12 h-12 primary-gradient text-white rounded-full flex items-center justify-center font-headline mb-8 relative lg:mx-auto">
                                2
                                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-secondary-fixed-dim/30"></div>
</div>
<div className="lg:text-center">
<h4 className="font-bold text-primary mb-3">Response Capture</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Every answer is captured and analyzed for communication patterns.</p>
</div>
</div>

<div className="group">
<div className="w-12 h-12 primary-gradient text-white rounded-full flex items-center justify-center font-headline mb-8 relative lg:mx-auto">
                                3
                                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-secondary-fixed-dim/30"></div>
</div>
<div className="lg:text-center">
<h4 className="font-bold text-primary mb-3">AI Evaluation</h4>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">Responses are evaluated for:</p>
<ul className="text-xs text-on-surface-variant space-y-1">
<li>• Clarity</li>
<li>• Structure</li>
<li>• Logical flow</li>
<li>• Conciseness</li>
</ul>
</div>
</div>

<div className="group">
<div className="w-12 h-12 primary-gradient text-white rounded-full flex items-center justify-center font-headline mb-8 relative lg:mx-auto">
                                4
                                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-secondary-fixed-dim/30"></div>
</div>
<div className="lg:text-center">
<h4 className="font-bold text-primary mb-3">Actionable Feedback</h4>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">Students receive:</p>
<ul className="text-xs text-on-surface-variant space-y-1">
<li>• What went wrong</li>
<li>• Why it matters</li>
<li>• How to improve</li>
</ul>
</div>
</div>

<div className="group">
<div className="w-12 h-12 primary-gradient text-white rounded-full flex items-center justify-center font-headline mb-8 relative lg:mx-auto">
                                5
                                <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-secondary-fixed-dim/30"></div>
</div>
<div className="lg:text-center">
<h4 className="font-bold text-primary mb-3">Iterative Practice</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Repeat practice with improved responses.</p>
</div>
</div>

<div className="group">
<div className="w-12 h-12 primary-gradient text-white rounded-full flex items-center justify-center font-headline mb-8 relative lg:mx-auto">
<span className="material-symbols-outlined text-base">auto_awesome</span>
</div>
<div className="lg:text-center">
<h4 className="font-bold text-primary mb-3">Progress Tracking</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Track communication improvement over time.</p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<div className="inline-block bg-primary-container px-8 py-6 rounded-xl">
<p className="text-on-primary-container font-semibold text-lg">Communication becomes structured, confident, and measurable.</p>
</div>
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-24 px-8 mb-20">
<div className="max-w-5xl mx-auto primary-gradient rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-headline text-4xl md:text-5xl text-white mb-8">Ready to master the art of technical communication?</h2>
<Link className="inline-block bg-surface-container-lowest text-primary px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-sm hover:bg-surface-bright transition-all" to="/contact">
                        START FREE ASSESSMENT
                    </Link>
</div>

<div className="absolute -bottom-10 -right-10 w-64 h-64 glass-panel rounded-full blur-3xl opacity-20"></div>
</div>
</AnimatedSection>
</main>
    </>
  );
}
