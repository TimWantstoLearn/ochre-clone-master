import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const companies = [
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "InnovateLabs", logo: "/placeholder.svg" },
  { name: "DesignStudio", logo: "/placeholder.svg" },
  { name: "CloudTech", logo: "/placeholder.svg" },
  { name: "DataInsights", logo: "/placeholder.svg" },
  { name: "GrowthCo", logo: "/placeholder.svg" },
];

const Companies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />

      <main className="ml-16 pt-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Partner Companies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the companies that post jobs with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <img src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-semibold text-foreground">{company.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Companies;