import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Bot, 
  Gauge, 
  Target, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Lock,
  Eye,
  Cpu,
  Network,
  Database,
  BarChart3,
  Globe,
  Rocket,
  Brain,
  Activity
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-gradient text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-cyber-blue animate-pulse-glow" />
              <span className="text-2xl font-bold glow-text">Singularity-IT™</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="hover:text-cyber-blue transition-colors">Solutions</a>
              <a href="#capabilities" className="hover:text-cyber-blue transition-colors">Capabilities</a>
              <a href="#comparison" className="hover:text-cyber-blue transition-colors">Compare</a>
              <Button className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-semibold">
                Get Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-6 bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/30 transition-colors">
              🧠 AI Agentic Cybersecurity Reimagined for the Modern SOC
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="glow-text">Stop Alert Fatigue.</span><br />
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                Start AI-Powered Defense.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Singularity-IT™ is an intelligent, FedRAMP-ready SOC-as-a-Service platform that fuses MDR, 
              compliance automation, and AIOps orchestration. Built for scale, speed, and zero trust mandates—so 
              you can focus on what matters: reducing risk, not chasing alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-semibold px-8 py-4 text-lg hover-glow">
                <Rocket className="mr-2 h-5 w-5" />
                Get a Live Demo
              </Button>
              <Button size="lg" variant="outline" className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 px-8 py-4 text-lg hover-glow">
                <BarChart3 className="mr-2 h-5 w-5" />
                See How We Compare to Torq.io
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Propositions */}
      <section id="capabilities" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">💡 Key Value Propositions</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-card-gradient border-cyber-blue/20 hover-glow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-cyber-blue mr-3" />
                  <CardTitle className="text-xl text-white">🛡️ One Platform. Infinite Insight.</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Deploy a fully agentic cybersecurity solution in a box. Singularity-IT™ delivers MDR, 
                  automated triage, role-based dashboards, and real-time compliance posture—all powered by AI.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-cyber-purple/20 hover-glow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Bot className="h-8 w-8 text-cyber-purple mr-3" />
                  <CardTitle className="text-xl text-white">🤖 AI Agents That Work Like Analysts—Only Faster</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Leverage pre-trained AI agents that act like virtual ISSOs, SOC analysts, and compliance officers. Ask questions like:
                </p>
                <div className="space-y-2 text-sm font-mono bg-black/30 p-3 rounded border-l-4 border-cyber-purple">
                  <div className="text-cyber-blue">"Show me critical threats in the last 72 hours."</div>
                  <div className="text-cyber-green">"Generate an audit-ready CMMC compliance report."</div>
                  <div className="text-cyber-orange">"Which vendors pose third-party risk this quarter?"</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-cyber-green/20 hover-glow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Gauge className="h-8 w-8 text-cyber-green mr-3" />
                  <CardTitle className="text-xl text-white">🚀 Real-Time MDR + SLA Metrics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Track MTTR, MTTD, escalation rates, false positives, and SLA adherence in one unified interface. 
                  Empower your leadership with metrics that move the business forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Story */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 glow-text">👤 "Why Our Customers Switch"</h2>
              <h3 className="text-2xl text-cyber-blue font-semibold">Meet Dana, a CISO Who Made the Switch</h3>
            </div>
            
            <Card className="bg-card-gradient border-cyber-blue/30">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Like many security leaders, Dana's team was drowning in alerts and falling behind on compliance. 
                  Tools didn't talk. Reports lagged. Auditors kept asking for evidence her team couldn't provide without consultants.
                </p>
                <p className="text-xl font-semibold text-cyber-blue mb-4">With Singularity-IT™, Dana gained:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Executive dashboards with real-time MDR insights</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Agentic AI that filters noise and surfaces true threats</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">One-click compliance scorecards for HIPAA, SOC 2, CMMC</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Audit-ready reporting from a single pane of glass</span>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mt-6 italic">
                  Now her team spends less time reacting—and more time preparing for what's next.
                </p>
                <Button className="mt-6 bg-cyber-blue hover:bg-cyber-blue/80 text-black font-semibold">
                  👉 Read Dana's Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">🔄 How Singularity-IT Works</h2>
            <h3 className="text-2xl text-cyber-blue font-semibold">🧩 Modular & Agentic Architecture</h3>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              Singularity-IT™ is built from the ground up for agent-based automation, modular AIOps, and compliance intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Managed Detection & Response", desc: "with LimaCharlie", color: "cyber-red" },
              { icon: Brain, title: "WatsonX AI Embedded Chat", desc: "for SOC guidance", color: "cyber-blue" },
              { icon: BarChart3, title: "Executive Risk Dashboards", desc: "(MTTD, MTTR, SLA Compliance)", color: "cyber-green" },
              { icon: Shield, title: "Self-Assessments", desc: "with Audit-Ready Reports (HIPAA, CMMC, NIST)", color: "cyber-purple" },
              { icon: Eye, title: "Real-time Threat Correlation", desc: "from Logs, Firewalls, SIEMs", color: "cyber-orange" },
              { icon: Network, title: "Digital Twin Simulation", desc: "for Preemptive Stress Testing (Phase II)", color: "cyber-blue" }
            ].map((capability, index) => (
              <Card key={index} className="bg-card-gradient border-white/10 hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <capability.icon className={`h-8 w-8 text-${capability.color} mr-3`} />
                    <div>
                      <h4 className="font-semibold text-white">{capability.title}</h4>
                      <p className="text-sm text-gray-400">{capability.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-black/20 to-black/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">🎯 Solutions by Role</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card-gradient border-cyber-blue/30 hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-cyber-blue flex items-center">
                  <Users className="mr-3 h-7 w-7" />
                  For CISOs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Get agentic visibility into incidents, threat posture, and SLA metrics—without chasing spreadsheets or SOC managers.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• View escalated incidents by severity</li>
                  <li>• Track coverage across MITRE ATT&CK framework</li>
                  <li>• Benchmark SLA performance and asset visibility</li>
                  <li>• Generate board-level reports on-demand</li>
                </ul>
                <Button className="mt-4 w-full bg-cyber-blue/20 hover:bg-cyber-blue/30 text-cyber-blue border-cyber-blue/30">
                  View Features for CISOs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-cyber-purple/30 hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-cyber-purple flex items-center">
                  <Cpu className="mr-3 h-7 w-7" />
                  For CIOs and CTOs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Align cybersecurity with operational continuity and DevSecOps acceleration.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Measure system health and unresolved threats</li>
                  <li>• Optimize infrastructure with predictive insights</li>
                  <li>• Simulate cyber stress on dev/test environments</li>
                  <li>• Cut costs with AI-enabled auto-triage</li>
                </ul>
                <Button className="mt-4 w-full bg-cyber-purple/20 hover:bg-cyber-purple/30 text-cyber-purple border-cyber-purple/30">
                  View CIO/CTO Capabilities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-cyber-green/30 hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-cyber-green flex items-center">
                  <Globe className="mr-3 h-7 w-7" />
                  For Federal Cyber Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Meet EO and Zero Trust mandates with AI-powered SecOps as-a-Service.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• FedRAMP-ready deployment</li>
                  <li>• FISMA, NIST 800-53, and CMMC compliance support</li>
                  <li>• Role-based dashboards across federated units</li>
                  <li>• Unified risk view across hybrid clouds</li>
                </ul>
                <Button className="mt-4 w-full bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green border-cyber-green/30">
                  View Federal Readiness Suite <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Agent Demo */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">📊 AI Agent Capabilities</h2>
            <p className="text-xl text-gray-300">Explore how your AI agent works in real-time:</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card-gradient border-cyber-blue/30">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyber-blue mb-4">🗣️ Ask:</h4>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="bg-black/40 p-3 rounded border-l-4 border-cyber-blue">
                      <span className="text-cyber-blue">"Correlate MDR alerts with threat intel from MITRE."</span>
                    </div>
                    <div className="bg-black/40 p-3 rounded border-l-4 border-cyber-green">
                      <span className="text-cyber-green">"Simulate an insider attack in our digital twin."</span>
                    </div>
                    <div className="bg-black/40 p-3 rounded border-l-4 border-cyber-orange">
                      <span className="text-cyber-orange">"Generate a POAM report for HIPAA gaps."</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyber-purple mb-4">⚙️ Response:</h4>
                  <p className="text-gray-300">
                    Your AI assistant dynamically creates dashboards, summaries, and actions—complete with compliance mappings, 
                    threat visualizations, and remediation suggestions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 bg-gradient-to-r from-black/20 to-black/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 glow-text">📈 Integration & Ecosystem</h2>
            <h3 className="text-2xl text-cyber-blue font-semibold">Works Seamlessly with Your Stack</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card-gradient border-cyber-blue/20">
              <CardHeader>
                <CardTitle className="text-cyber-blue flex items-center">
                  <Database className="mr-2 h-6 w-6" />
                  Native Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  LimaCharlie, Splunk, ELK, SentinelOne, Guardium, IBM Watsonx
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-cyber-purple/20">
              <CardHeader>
                <CardTitle className="text-cyber-purple flex items-center">
                  <Target className="mr-2 h-6 w-6" />
                  SOC Tickets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Jira, ServiceNow, email
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-cyber-green/20">
              <CardHeader>
                <CardTitle className="text-cyber-green flex items-center">
                  <Activity className="mr-2 h-6 w-6" />
                  Log Ingestion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Firewall, Proxy, Endpoint, Identity, VPN, Network, Cloud
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">📞 Ready to Modernize Your SOC with AI?</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-semibold px-8 py-4 text-lg hover-glow">
              <Rocket className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 px-8 py-4 text-lg hover-glow">
              <Shield className="mr-2 h-5 w-5" />
              Download Product Brief
            </Button>
            <Button size="lg" variant="outline" className="border-cyber-green text-cyber-green hover:bg-cyber-green/10 px-8 py-4 text-lg hover-glow">
              <Shield className="mr-2 h-5 w-5" />
              Get CMMC Readiness Score
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 glow-text">🔁 Singularity-IT™ vs. Torq.io</h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-card-gradient rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-black/50">
                  <th className="text-left p-4 text-white font-semibold">Feature</th>
                  <th className="text-center p-4 text-cyber-blue font-semibold">Singularity-IT™</th>
                  <th className="text-center p-4 text-gray-400 font-semibold">Torq.io</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-white/10">
                  <td className="p-4 text-gray-300">AI-Driven Compliance Automation</td>
                  <td className="p-4 text-center text-cyber-green">✅ Yes (SOC 2, CMMC, HIPAA)</td>
                  <td className="p-4 text-center text-cyber-red">❌ No</td>
                </tr>
                <tr className="border-t border-white/10 bg-black/20">
                  <td className="p-4 text-gray-300">Embedded AI SOC Agents</td>
                  <td className="p-4 text-center text-cyber-green">✅ Prebuilt ISSO, SOC Analyst, Compliance Bot</td>
                  <td className="p-4 text-center text-cyber-orange">⚠️ Limited</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-gray-300">Executive Dashboards (Live Metrics)</td>
                  <td className="p-4 text-center text-cyber-green">✅ MTTR, MTTD, SLA Adherence</td>
                  <td className="p-4 text-center text-cyber-orange">⚠️ Partial</td>
                </tr>
                <tr className="border-t border-white/10 bg-black/20">
                  <td className="p-4 text-gray-300">AIOps-Enabled Auto-Triage</td>
                  <td className="p-4 text-center text-cyber-green">✅ Integrated</td>
                  <td className="p-4 text-center text-cyber-orange">⚠️ External Only</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-gray-300">Built for Regulated Industries</td>
                  <td className="p-4 text-center text-cyber-green">✅ DoD, Health, Pharma, Fed</td>
                  <td className="p-4 text-center text-cyber-red">❌ General Use</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-semibold px-8 py-4 text-lg hover-glow">
              <Target className="mr-2 h-5 w-5" />
              Choose the AI SOC Built for Compliance-Critical Environments
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/60 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-cyber-blue mr-3" />
              <span className="text-2xl font-bold glow-text">End to End Enterprise Solutions (E3S)</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-3xl mx-auto">
              Singularity-IT™ is powered by over 80 years of combined experience in AI/ML, Cybersecurity, and Digital Twin engineering. 
              We don't just automate tasks—we redefine what's possible in SOC operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6">
              <span>📍 Offices in VA, MD, TX</span>
              <span>|</span>
              <span>FedRAMP Certified</span>
              <span>|</span>
              <span>IBM Tech Embedded</span>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-cyber-blue hover:text-cyber-blue/80 transition-colors">🔗 LinkedIn</a>
              <a href="#" className="text-cyber-blue hover:text-cyber-blue/80 transition-colors">📝 Blog</a>
              <a href="#" className="text-cyber-blue hover:text-cyber-blue/80 transition-colors">📧 Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
