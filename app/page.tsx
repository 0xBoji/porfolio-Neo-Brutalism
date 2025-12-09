import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-[0_8px_0_0_#000]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex flex-wrap gap-2 md:gap-4 justify-center items-center">
            <li>
              <a
                href="#profile"
                className="brutalist-btn bg-[#FFE500] px-4 py-2 text-sm md:text-base inline-block"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="brutalist-btn bg-[#C77DFF] px-4 py-2 text-sm md:text-base inline-block"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="brutalist-btn bg-[#00D4FF] px-4 py-2 text-sm md:text-base inline-block"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#awards"
                className="brutalist-btn bg-[#FF6B9D] px-4 py-2 text-sm md:text-base inline-block"
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="brutalist-btn bg-[#88FF00] px-4 py-2 text-sm md:text-base inline-block"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="brutalist-btn bg-white px-4 py-2 text-sm md:text-base inline-block"
              >
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="brutalist-card bg-[#FFE500] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <div className="shrink-0">
                <div className="brutalist-card bg-white p-2 w-48 h-48 md:w-56 md:h-56">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Tran Ngoc Hoang Pich"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase">
                  TRAN NGOC
                  <br />
                  HOANG PICH
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 border-4 border-black inline-block px-4 py-2 bg-white">
                  Cloud Engineer (AWS & Networking)
                </h2>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="mailto:ngochoangpichtran@gmail.com"
                    className="brutalist-btn bg-white px-6 py-3 inline-block"
                  >
                    📧 Email
                  </a>
                  <a
                    href="https://linktr.ee/pichtran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutalist-btn bg-[#00D4FF] px-6 py-3 inline-block"
                  >
                    🔗 Links
                  </a>
                  <a
                    href="tel:+84918168311"
                    className="brutalist-btn bg-[#88FF00] px-6 py-3 inline-block"
                  >
                    📱 (+84) 918168311
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="px-4 py-8 md:px-8 lg:px-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">
            🎯 Profile
          </h2>
          <div className="brutalist-card bg-white p-8">
            <p className="text-lg leading-relaxed">
              Cloud Engineer Intern with a strong backend foundation, eager to learn and contribute to building scalable, secure architectures on AWS and Kubernetes. Experienced in container orchestration, CI/CD, and observability systems. Aspiring to become a Solutions Architect, leveraging DevOps and backend experience to build reliable, cost-efficient cloud systems.
              <br /><br />
              Passionate open-source contributor and active hackathon participant, consistently challenging myself through competitive coding events and collaborative team projects. Proven track record with 6 hackathon wins including 1st place at Aptos Collision, demonstrating strong problem-solving abilities and effective teamwork in high-pressure environments. Committed to continuous learning and knowledge sharing within the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-4 py-8 md:px-8 lg:px-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">
            💼 Experience
          </h2>
          <div className="space-y-6">
            {/* Sonic Labs */}
            <div className="brutalist-card bg-[#C77DFF] p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase">Software Engineer</h3>
                  <p className="text-lg font-bold">Sonic Labs</p>
                  <p className="text-sm">Ultra-fast, developer-incentivized Layer-1 blockchain compatible with EVM</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Sep 2025 - Jan 2026</p>
                  <p className="text-sm">Remote, USA</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 bg-white border-4 border-black p-4">
                <li>Designed and developed backend services in Golang for Learn-to-Earn infrastructure powering 80k+ active users</li>
                <li>Architected microservices with RabbitMQ for asynchronous task processing and gRPC for high-performance inter-service communication</li>
                <li>Built and deployed AWS-based architecture (ALB, ECS, EKS, RDS, API Gateway, Amplify) ensuring high reliability and cost efficiency</li>
                <li>Developed Jenkins CI/CD pipelines for EKS microservices, achieving zero-downtime releases and 2× faster delivery cycles</li>
                <li>Implemented blue-green deployment strategy under mentor guidance, achieving 99.9% uptime SLA (8.76 hours downtime/year)</li>
              </ul>
            </div>

            {/* The Binary Holdings */}
            <div className="brutalist-card bg-[#00D4FF] p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase">Vibe Coder</h3>
                  <p className="text-lg font-bold">The Binary Holdings</p>
                  <p className="text-sm">Web3 infrastructure firm connecting telecom and banking ecosystems to blockchain</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Apr 2025 - Sep 2025</p>
                  <p className="text-sm">Remote, Thailand</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 bg-white border-4 border-black p-4">
                <li>Built and deployed web apps integrating Web3 payments using Next.js and Supabase</li>
                <li>Developed contest.fun, a play-to-earn game app with real-time leaderboards rewarding top users daily, weekly, and monthly</li>
              </ul>
            </div>

            {/* GFI Group - OpenEdu */}
            <div className="brutalist-card bg-[#FF6B9D] p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase">Backend Developer</h3>
                  <p className="text-lg font-bold">GFI Group - OpenEdu</p>
                  <p className="text-sm">Web-based eLearning platform focused on Web3 and AI education</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Aug 2024 - Aug 2025</p>
                  <p className="text-sm">Onsite, Vietnam</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 bg-white border-4 border-black p-4">
                <li>Collaborated with senior engineers to scale Golang backend for 5,000+ daily users and integrate EVM smart contracts</li>
                <li>Implemented RabbitMQ for reliable blockchain messaging and built monitoring dashboards (Grafana, Prometheus)</li>
                <li>Automated CI/CD pipelines with Jenkins and Dockerized EC2 runners, reducing deployment time by 40%</li>
              </ul>
            </div>

            {/* GFI Group - GFI Research */}
            <div className="brutalist-card bg-[#88FF00] p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase">Backend Developer</h3>
                  <p className="text-lg font-bold">GFI Group - GFI Research</p>
                  <p className="text-sm">Tools for managing crypto portfolios, analyzing on-chain metrics</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Aug 2024 - Nov 2024</p>
                  <p className="text-sm">Onsite, Vietnam</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 bg-white border-4 border-black p-4">
                <li>Designed data pipelines for on-chain analytics (CoinGecko, DeFiLlama, Dune) with hourly refresh rate &lt;2% failure</li>
                <li>Automated ArgoCD deployments to reduce manual maintenance effort by 80%</li>
              </ul>
            </div>

            {/* TerraLogic */}
            <div className="brutalist-card bg-[#FFE500] p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase">Intern Backend Developer</h3>
                  <p className="text-lg font-bold">TerraLogic</p>
                  <p className="text-sm">IT services company focused on outsourcing</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">May 2024 - Aug 2024</p>
                  <p className="text-sm">Onsite, Vietnam</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 bg-white border-4 border-black p-4">
                <li>Built secure payment APIs in Python FastAPI & PostgreSQL, introducing caching with Redis for faster transaction handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 py-8 md:px-8 lg:px-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">
            🛠️ Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="brutalist-card bg-white p-6">
              <h3 className="text-xl font-black mb-4 uppercase bg-[#FFE500] border-4 border-black inline-block px-4 py-2">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/golang.svg" alt="Go" width={20} height={20} className="inline-block" />
                  Golang
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/python.svg" alt="Python" width={20} height={20} className="inline-block" />
                  Python
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/rust.svg" alt="Rust" width={20} height={20} className="inline-block" />
                  Rust
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/javascript.svg" alt="JavaScript" width={20} height={20} className="inline-block" />
                  Javascript
                </span>
              </div>
            </div>

            <div className="brutalist-card bg-white p-6">
              <h3 className="text-xl font-black mb-4 uppercase bg-[#00D4FF] border-4 border-black inline-block px-4 py-2">
                Cloud & Containers
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/aws.svg" alt="AWS" width={20} height={20} className="inline-block" />
                  AWS
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/docker.svg" alt="Docker" width={20} height={20} className="inline-block" />
                  Docker
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/kubernetes.svg" alt="Kubernetes" width={20} height={20} className="inline-block" />
                  K8s
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/azure.svg" alt="Azure" width={20} height={20} className="inline-block" />
                  Azure
                </span>
              </div>
            </div>

            <div className="brutalist-card bg-white p-6">
              <h3 className="text-xl font-black mb-4 uppercase bg-[#88FF00] border-4 border-black inline-block px-4 py-2">
                System & Monitoring
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/grafana.svg" alt="Grafana" width={20} height={20} className="inline-block" />
                  Grafana
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/prometheus.svg" alt="Prometheus" width={20} height={20} className="inline-block" />
                  Prometheus
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black">
                  Loki
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black">
                  CloudWatch
                </span>
              </div>
            </div>

            <div className="brutalist-card bg-white p-6">
              <h3 className="text-xl font-black mb-4 uppercase bg-[#FF6B9D] border-4 border-black inline-block px-4 py-2">
                DevOps & IaC
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/terraform.svg" alt="Terraform" width={20} height={20} className="inline-block" />
                  Terraform
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black">
                  RabbitMQ
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/jenkins.svg" alt="Jenkins" width={20} height={20} className="inline-block" />
                  Jenkins
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/gitlab.svg" alt="GitLab" width={20} height={20} className="inline-block" />
                  GitLab CI/CD
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black">
                  Pulumi
                </span>
                <span className="bg-black text-white px-4 py-2 font-bold border-4 border-black flex items-center gap-2">
                  <Image src="/icons/linux.svg" alt="Linux" width={20} height={20} className="inline-block" />
                  Linux Admin
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons & Awards */}
      <section id="awards" className="px-4 py-8 md:px-8 lg:px-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">
            🏖️ Honors & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hyperliquid - 2025 */}
            <div className="brutalist-card bg-white p-0 overflow-hidden">
              <div className="h-48 relative border-b-4 border-black">
                <Image
                  src="/hyperliquid-hackathon.png"
                  alt="Hyperliquid Hackathon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase mb-2">💵 $2000 Bounty</h3>
                <p className="font-bold">Hyperliquid Hackathon Global 2025</p>
                <p className="text-sm mt-1">HyperLiquid SDK written by Swift</p>
              </div>
            </div>

            {/* AWS Global Vibe - 2025 */}
            <div className="brutalist-card bg-[#C77DFF] p-0 overflow-hidden">
              <div className="h-48 relative border-b-4 border-black bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">☁️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase mb-2">💰 $10,000 AWS Credits</h3>
                <p className="font-bold">AWS Global Vibe: AI Coding Hackathon 2025</p>
              </div>
            </div>

            {/* Aptos Collision - 2024 */}
            <div className="brutalist-card bg-[#FFE500] p-0 overflow-hidden">
              <div className="h-48 relative border-b-4 border-black">
                <Image
                  src="/aptos-hackathon.png"
                  alt="Aptos Collision Hackathon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase mb-2">1st Place - The Unexpected</h3>
                <p className="font-bold">Aptos Collision Hackathon Global 2024</p>
              </div>
            </div>

            {/* Sui Overflow - 2024 */}
            <div className="brutalist-card bg-[#00D4FF] p-0 overflow-hidden">
              <div className="h-48 relative border-b-4 border-black">
                <Image
                  src="/sui-hackathon.jpg"
                  alt="Sui Overflow Hackathon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase mb-2">🥉 3rd Place - Gaming</h3>
                <p className="font-bold">Sui Overflow Global 2024 Hackathon</p>
              </div>
            </div>

            {/* MovementLabs - 2024 */}
            <div className="brutalist-card bg-[#FF6B9D] p-0 overflow-hidden">
              <div className="h-48 relative border-b-4 border-black">
                <Image
                  src="/movement-hackathon.jpg"
                  alt="MovementLabs Olympus Hackathon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase mb-2">🥈 2nd Place - Gaming</h3>
                <p className="font-bold">MovementLabs Olympus Hackathon 2024</p>
              </div>
            </div>

            {/* Web3Hackfest - 2023 */}
            <div className="brutalist-card bg-[#88FF00] p-0 overflow-hidden">
              <div className="h-48 relative border-b-4 border-black">
                <Image
                  src="/web3hackfest.jpg"
                  alt="Web3Hackfest Hackathon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase mb-2">🥈 2nd Place - Tools & Public Good</h3>
                <p className="font-bold">Web3Hackfest Hackathon 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="px-4 py-8 md:px-8 lg:px-16 pb-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">
            🎓 Education
          </h2>
          <div className="space-y-6">
            <div className="brutalist-card bg-white p-6">
              <h3 className="text-2xl font-black uppercase">B.Sc. Applied Data Science & Business Analytics</h3>
              <p className="text-lg font-bold mt-2">International School of Management</p>
              <p className="font-bold">2026 - 2027 (Expected)</p>
            </div>

            <div className="brutalist-card bg-white p-6">
              <h3 className="text-2xl font-black uppercase">Advanced Diploma in Software Engineering</h3>
              <p className="text-lg font-bold mt-2">Aptech Aprotrain Computer</p>
              <p className="font-bold">2022 - 2025 | GPA: 4.0/4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="px-4 py-8 md:px-8 lg:px-16 pb-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">
            🏆 Certifications
          </h2>
          <div className="brutalist-card bg-[#C77DFF] p-8">
            <div className="bg-white border-4 border-black p-6">
              <h3 className="text-2xl font-black uppercase">AWS Certified Solutions Architect - Associate</h3>
              <p className="text-lg font-bold mt-2">2025 - 2028</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 md:px-8 lg:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl font-black uppercase">Built with Neo-Brutalism ⚡</p>
          <p className="mt-2">© 2025 Tran Ngoc Hoang Pich. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
