import { Job } from "@/components/JobCard";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    logo: "/placeholder.svg",
    tags: ["Full-time", "Remote", "React", "TypeScript"],
    datePosted: "2 days ago",
    description: "Join our innovative team to build cutting-edge web applications using React and TypeScript. We're looking for an experienced engineer who can lead technical decisions, mentor junior developers, and contribute to our microservices architecture. Must have 5+ years of experience with modern JavaScript frameworks.",
    jobType: "Full-time",
    companyDescription: "TechCorp is a leading technology company specializing in cloud-based solutions. We're dedicated to creating innovative products that empower businesses worldwide.",
    hours: "40 hours/week, flexible schedule",
    strengths: [
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with microservices architecture and RESTful APIs",
      "Excellent problem-solving and debugging skills",
      "Leadership and mentoring abilities",
      "Strong communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary with equity options",
      "Comprehensive health, dental, and vision insurance",
      "Unlimited PTO and flexible work arrangements",
      "Professional development budget",
      "Home office stipend"
    ],
    qualifications: [
      "5+ years of professional software development experience",
      "Bachelor's degree in Computer Science or equivalent experience",
      "Proven track record of delivering scalable web applications",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of software design patterns"
    ],
    applicationUrl: "https://techcorp.com/careers/senior-software-engineer"
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateLabs",
    location: "New York, NY",
    logo: "/placeholder.svg",
    tags: ["Full-time", "Hybrid", "Strategy", "Leadership"],
    datePosted: "1 week ago",
    description: "Lead product strategy and roadmap for our SaaS platform. Work closely with engineering, design, and sales teams to deliver features that delight customers. Ideal candidate has 3+ years of product management experience in B2B software and excellent stakeholder management skills.",
    jobType: "Full-time",
    companyDescription: "InnovateLabs is a fast-growing SaaS company transforming how businesses manage their operations. We pride ourselves on our customer-centric approach and innovative solutions.",
    hours: "40 hours/week, 3 days in office",
    strengths: [
      "Strategic thinking and product vision",
      "Excellent stakeholder management",
      "Data-driven decision making",
      "Strong communication skills",
      "Ability to prioritize and manage multiple initiatives"
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Stock options",
      "Premium health insurance",
      "Commuter benefits",
      "Learning and development opportunities"
    ],
    qualifications: [
      "3+ years of product management experience",
      "Experience with B2B SaaS products",
      "Strong analytical and problem-solving skills",
      "Proven track record of successful product launches",
      "Bachelor's degree required, MBA preferred"
    ],
    applicationUrl: "https://innovatelabs.com/careers/product-manager"
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignStudio",
    location: "Austin, TX",
    logo: "/placeholder.svg",
    tags: ["Full-time", "On-site", "Figma", "User Research"],
    datePosted: "3 days ago",
    description: "Create beautiful, intuitive user experiences for our growing product suite. Conduct user research, create wireframes and prototypes, and collaborate with developers to bring designs to life. 2+ years of UX design experience required, with a strong portfolio showcasing mobile and web projects.",
    jobType: "Full-time",
    companyDescription: "DesignStudio is a creative agency specializing in digital product design. We work with startups and Fortune 500 companies to create exceptional user experiences.",
    hours: "40 hours/week, Monday-Friday",
    strengths: [
      "Proficiency in Figma and design tools",
      "Strong user research and testing skills",
      "Excellent visual design capabilities",
      "Understanding of design systems",
      "Collaboration with cross-functional teams"
    ],
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Creative workspace in downtown Austin",
      "Professional development budget",
      "Team events and outings"
    ],
    qualifications: [
      "2+ years of UX design experience",
      "Strong portfolio demonstrating mobile and web projects",
      "Experience with user research methodologies",
      "Bachelor's degree in Design or related field",
      "Proficiency in Figma, Sketch, or similar tools"
    ],
    applicationUrl: "https://designstudio.com/careers/ux-designer"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    logo: "/placeholder.svg",
    tags: ["Full-time", "Remote", "AWS", "Kubernetes"],
    datePosted: "5 days ago",
    description: "Build and maintain our cloud infrastructure on AWS. Implement CI/CD pipelines, manage Kubernetes clusters, and ensure system reliability and security. Looking for someone with strong automation skills, experience with Infrastructure as Code, and 4+ years in DevOps roles.",
    jobType: "Full-time",
    companyDescription: "CloudTech provides enterprise cloud solutions and infrastructure management services. We help companies scale their operations with reliable, secure cloud architectures.",
    hours: "40 hours/week, flexible remote",
    strengths: [
      "Strong AWS and cloud infrastructure knowledge",
      "Experience with Kubernetes and container orchestration",
      "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
      "CI/CD pipeline implementation",
      "Security and compliance best practices"
    ],
    benefits: [
      "Competitive salary",
      "Remote work from anywhere",
      "Top-tier health benefits",
      "Annual conference budget",
      "Latest tech equipment"
    ],
    qualifications: [
      "4+ years of DevOps experience",
      "Strong experience with AWS services",
      "Proficiency with Kubernetes and Docker",
      "Experience with Infrastructure as Code tools",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    applicationUrl: "https://cloudtech.com/careers/devops-engineer"
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "DataInsights",
    location: "Boston, MA",
    logo: "/placeholder.svg",
    tags: ["Full-time", "Hybrid", "Python", "Machine Learning"],
    datePosted: "1 day ago",
    description: "Analyze large datasets to drive business insights and build predictive models. Work on exciting projects involving machine learning, natural language processing, and data visualization. PhD or Master's in Computer Science, Statistics, or related field preferred, with strong Python and SQL skills.",
    jobType: "Full-time",
    companyDescription: "DataInsights is an analytics firm helping businesses leverage their data for competitive advantage. We combine cutting-edge technology with deep industry expertise.",
    hours: "40 hours/week, 2 days in office",
    strengths: [
      "Advanced Python and SQL skills",
      "Machine learning and statistical modeling",
      "Data visualization and storytelling",
      "Experience with big data technologies",
      "Business acumen and problem-solving"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive benefits package",
      "Flexible hybrid work",
      "Conference and training budget",
      "Collaborative team environment"
    ],
    qualifications: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "3+ years of data science experience",
      "Strong Python programming skills",
      "Experience with machine learning frameworks",
      "Excellent communication and presentation skills"
    ],
    applicationUrl: "https://datainsights.com/careers/data-scientist"
  },
  {
    id: "6",
    title: "Marketing Specialist",
    company: "GrowthCo",
    location: "Los Angeles, CA",
    logo: "/placeholder.svg",
    tags: ["Full-time", "Remote", "Digital Marketing", "SEO"],
    datePosted: "4 days ago",
    description: "Drive customer acquisition through digital marketing channels including SEO, content marketing, and paid advertising. Analyze campaign performance and optimize for ROI. 2+ years of digital marketing experience with proven results in B2C or B2B contexts. Google Analytics and SEO tools experience required.",
    jobType: "Full-time",
    companyDescription: "GrowthCo is a digital marketing agency focused on helping companies scale their online presence. We specialize in data-driven marketing strategies that deliver measurable results.",
    hours: "40 hours/week, fully remote",
    strengths: [
      "SEO and content marketing expertise",
      "Google Analytics and data analysis",
      "Paid advertising (Google Ads, Facebook Ads)",
      "Campaign optimization and A/B testing",
      "Strong written communication"
    ],
    benefits: [
      "Competitive salary",
      "Work from anywhere",
      "Health and dental coverage",
      "Professional development opportunities",
      "Quarterly team retreats"
    ],
    qualifications: [
      "2+ years of digital marketing experience",
      "Proven track record in SEO and content marketing",
      "Experience with Google Analytics and SEO tools",
      "Bachelor's degree in Marketing or related field",
      "Strong analytical and communication skills"
    ],
    applicationUrl: "https://growthco.com/careers/marketing-specialist"
  }
];