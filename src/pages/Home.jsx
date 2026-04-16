import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";
import heroImage from "../assets/Picture1.png";

export default function Home() {
  return (
    <>
      <main className="pt-24">

        <AnimatedSection as="section" className="relative overflow-hidden bg-surface pt-0 pb-10 lg:pb-16">
          <div className="max-w-screen-2xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
                <span className="material-symbols-outlined text-primary text-sm" data-icon="school">school</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">The Digital Scholar</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold text-primary leading-[1.1] tracking-tight">
                Aarovan.ai - Turning Interview Communication into <span className="italic text-primary-fixed-dim">Measurable Outcomes</span>
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
                Every year, India produces one of the largest pools of technical talent in the world. And yet, a significant number of capable students struggle to convert their preparation into outcomes. Aarovan.ai is built to address this gap.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link className="primary-gradient text-white px-8 py-4 rounded-lg font-bold tracking-widest uppercase text-sm transition-all hover:shadow-xl inline-block" to="/contact">
                  Partner with Us
                </Link>
                <Link className="ghost-border text-primary px-8 py-4 rounded-lg font-bold tracking-widest uppercase text-sm hover:bg-surface-container transition-colors inline-block" to="/contact">
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden bg-surface-container shadow-2xl transform rotate-1 translate-x-4">
                <img alt="Student in modern library" className="w-full h-auto object-contain grayscale-[20%] hover:grayscale-0 transition-all duration-700" src={heroImage} />
              </div>
              
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="bg-surface-container py-24">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="grid md:grid-cols-3 gap-12 items-end">
              <div className="space-y-4">
                <h2 className="text-6xl font-headline font-bold text-primary">500+</h2>
                <p className="text-sm font-bold uppercase tracking-widest text-on-secondary-container">Engineering Students Empowered</p>
              </div>
              <div className="space-y-4 md:col-span-2 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                  <h2 className="text-5xl font-headline font-bold text-primary">40-50%</h2>
                  <p className="text-sm font-bold uppercase tracking-widest text-on-secondary-container">Communication Improvement Rate</p>
                </div>
                <div className="h-0.5 flex-grow bg-outline-variant/30 mb-4 hidden lg:block"></div>
                <p className="max-w-xs text-on-surface-variant font-light">Documented growth across technical articulation and behavioral alignment within a single semester.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="py-32">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-xl shadow-sm border border-outline-variant/10">
              <div className="bg-primary p-16 lg:p-24 flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary-fixed mb-8 text-4xl" data-icon="troubleshoot">troubleshoot</span>
                <h2 className="text-4xl lg:text-5xl font-headline text-white mb-8">The Gap</h2>
                <p className="text-primary-fixed text-lg leading-relaxed font-light mb-8">
                  Every year, India celebrates a milestone that is beginning to look less like a triumph and more like a warning.
                </p>
                <p className="text-primary-fixed text-lg leading-relaxed font-light mb-12">
                  Over 1.5 million engineers graduate from Indian institutions — the largest technical talent pipeline in the world.
                </p>
                <p className="text-primary-fixed leading-relaxed font-light mb-8">
                  And yet, according to Mercer Mettl's India Graduate Skill Index 2025:
                </p>
                <div className="p-8 bg-primary-container rounded-lg border-l-4 border-primary-fixed-dim">
                  <h3 className="text-3xl font-headline font-bold text-white mb-2">Only 42.6%</h3>
                  <p className="text-on-primary-container text-sm font-bold uppercase tracking-wider">of graduates are employable</p>
                </div>
                <p className="text-primary-fixed leading-relaxed font-light mt-8">
                  Despite years of education and preparation, a large proportion of students are unable to perform effectively in interviews.
                </p>
              </div>
              <div className="bg-surface-container-low p-16 lg:p-24">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="font-headline font-bold text-primary text-2xl">Where the Gap Emerges</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-on-surface-variant mb-3 font-semibold text-sm">Students typically spend years building knowledge:</p>
                        <ul className="space-y-2 text-on-surface-variant text-sm">
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                            <span>Learning technical concepts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                            <span>Solving structured problems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                            <span>Preparing for academic assessments</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-on-surface-variant mb-3 font-semibold text-sm">However, interviews evaluate something fundamentally different. They require:</p>
                        <ul className="space-y-2 text-on-surface-variant text-sm">
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                            <span>Clear articulation of ideas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                            <span>Structured thinking in real time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                            <span>The ability to explain, justify, and communicate under pressure</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-on-surface-variant italic text-sm pt-2">
                      While this gap is widely recognized, addressing it consistently remains a challenge.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-3">
                      <h4 className="font-headline font-bold text-primary text-lg">At an Institutional Level</h4>
                      <p className="text-on-surface-variant text-sm">Colleges aim to prepare students for placements, but face structural constraints:</p>
                      <ul className="space-y-2 text-on-surface-variant text-sm">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                          <span>Conducting mock interviews for every student is difficult to scale</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                          <span>Faculty bandwidth is limited</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                          <span>Evaluation lacks consistency across large student groups</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-headline font-bold text-primary text-lg">At a Student Level</h4>
                      <p className="text-on-surface-variant text-sm">Preparation is often individual and silent. Students may understand concepts well, but are rarely trained to:</p>
                      <ul className="space-y-2 text-on-surface-variant text-sm">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                          <span>Explain their reasoning clearly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                          <span>Structure responses effectively</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="arrow_right">arrow_right</span>
                          <span>Communicate under real interview conditions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-on-surface-variant italic text-sm pt-2">
                    As a result, communication becomes the limiting factor in an otherwise strong preparation process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="bg-surface-container-low py-32">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="mb-20 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary max-w-2xl">What Aarovan.ai Does</h2>
              <p className="text-on-surface-variant max-w-xl text-lg">Aarovan.ai introduces structure into this missing layer of preparation.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-surface-container-lowest p-10 space-y-8 hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="videocam">videocam</span>
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-primary text-xl">Practice at Scale</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Practice in realistic interview scenarios at scale</p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-10 space-y-8 hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="rule">rule</span>
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-primary text-xl">Objective Evaluation</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Receive consistent and objective evaluation</p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-10 space-y-8 hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="chat_bubble">chat_bubble</span>
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-primary text-xl">Actionable Feedback</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Improve through actionable, structured feedback</p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-10 space-y-8 hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="insights">insights</span>
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-primary text-xl">Progress Tracking</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Track progress across multiple attempts</p>
                </div>
              </div>
            </div>
            <p className="text-on-surface-variant text-lg italic text-center mt-12">
              The focus shifts from one-time preparation to continuous performance improvement.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="py-32">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-headline font-bold text-primary mb-4">How It Works</h2>
              <p className="text-on-surface-variant text-lg">Aarovan.ai operates as a structured system</p>
            </div>
            <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12">

              <div className="absolute top-1/4 left-0 w-full h-[2px] bg-secondary-fixed-dim/20 hidden lg:block"></div>

              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group w-full">
                <div className="w-16 h-16 rounded-full glass-card border border-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-transform">
                  <span className="material-symbols-outlined" data-icon="keyboard">keyboard</span>
                </div>
                <h4 className="font-headline font-bold text-primary text-lg mb-2">Practice</h4>
                <p className="text-xs text-on-surface-variant">Builds familiarity with interview environments</p>
              </div>
              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group w-full">
                <div className="w-16 h-16 rounded-full glass-card border border-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-transform">
                  <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                </div>
                <h4 className="font-headline font-bold text-primary text-lg mb-2">Evaluate</h4>
                <p className="text-xs text-on-surface-variant">Measures clarity, structure, and communication</p>
              </div>
              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group w-full">
                <div className="w-16 h-16 rounded-full glass-card border border-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-transform">
                  <span className="material-symbols-outlined" data-icon="comment">comment</span>
                </div>
                <h4 className="font-headline font-bold text-primary text-lg mb-2">Feedback</h4>
                <p className="text-xs text-on-surface-variant">Identifies precise areas of improvement</p>
              </div>
              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group w-full">
                <div className="w-16 h-16 rounded-full glass-card border border-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-transform">
                  <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
                </div>
                <h4 className="font-headline font-bold text-primary text-lg mb-2">Improve</h4>
                <p className="text-xs text-on-surface-variant">Strengthens responses over time</p>
              </div>
              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group w-full">
                <div className="w-16 h-16 rounded-full glass-card border border-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-transform">
                  <span className="material-symbols-outlined" data-icon="checklist">checklist</span>
                </div>
                <h4 className="font-headline font-bold text-primary text-lg mb-2">Track</h4>
                <p className="text-xs text-on-surface-variant">Provides visibility into progress</p>
              </div>
            </div>
            <p className="text-on-surface-variant text-lg italic text-center mt-12">
              This ensures that communication is actively developed, not assumed.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="pb-32 px-12">
          <div className="max-w-screen-2xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-primary rounded-xl p-12 text-white flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-4xl font-headline font-bold mb-6">Accelerated Placements</h2>
                <p className="text-primary-fixed text-lg max-w-md font-light">Reduce the time-to-hire by 35% through pre-validated communication assessments that recruiters trust.</p>
              </div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Industry Standard</div>
                <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">AI Verified</div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
            </div>
            <div className="bg-surface-container rounded-xl p-12 flex flex-col justify-center items-center text-center space-y-6">
              <span className="material-symbols-outlined text-6xl text-primary" data-icon="schedule">schedule</span>
              <div>
                <h3 className="text-3xl font-headline font-bold text-primary">24/7 Access</h3>
                <p className="text-on-surface-variant mt-2">Unlimited practice anytime, anywhere. No human scheduling required.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="bg-surface-container-low rounded-xl p-16 lg:p-24 text-center space-y-10 border border-outline-variant/10">
              <h2 className="text-4xl lg:text-6xl font-headline font-bold text-primary max-w-4xl mx-auto">Ready to Elevate Your Institution's Engineering Outcome?</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Join the forward-thinking academic institutions transforming the career trajectories of their technical scholars.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link className="primary-gradient text-white px-10 py-5 rounded-lg font-bold tracking-widest uppercase text-sm shadow-xl transition-all hover:translate-y-[-2px] inline-block" to="/contact">
                  Book Institutional Audit
                </Link>
                <Link className="ghost-border text-primary px-10 py-5 rounded-lg font-bold tracking-widest uppercase text-sm hover:bg-surface-container-high transition-colors inline-block" to="/contact">
                  Speak to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}
