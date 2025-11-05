import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { JobSearchBar } from "@/components/JobSearchBar";
import { JobCard, Job } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { mockJobs } from "@/lib/mockJobs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import commonContent from "@/content/common.json";
import homepageContent from "@/content/homepage.json";

const Index = () => {
  const [jobResults, setJobResults] = useState<Job[]>([]);
  const isMobile = useIsMobile();

  const handleSearch = (query: string, location: string) => {
    const filteredJobs = mockJobs.filter(job =>
      (query === "" || job.title.toLowerCase().includes(query.toLowerCase()) ||
       job.company.toLowerCase().includes(query.toLowerCase()) ||
       job.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))) &&
      (location === "" || job.location.toLowerCase().includes(location.toLowerCase()))
    );
    setJobResults(filteredJobs);
  };

  return <div className="min-h-screen bg-background">
      {!isMobile && <Sidebar content={commonContent.sidebar} />}
      <Header content={commonContent.header} isMobile={isMobile} isLandingPage={true} />

      <main className={`${isMobile ? 'pt-20' : 'ml-16 pt-20'}`}>
        <div className="container mx-auto py-12 space-y-12 px-4">
          {isMobile ? (
            <div className="space-y-6">
              <header className="text-center space-y-6">
                <h1 className="text-2xl font-bold text-foreground">{homepageContent.hero.title}</h1>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  {homepageContent.hero.subtitle}
                </p>
              </header>

              <JobSearchBar onSearch={handleSearch} content={homepageContent.searchBar} isMobile={isMobile} />

              <div className="w-full max-w-4xl mx-auto px-4">
                <Button asChild variant="outline" className="w-full h-12 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  <Link to="/companies">Explore Companies</Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Find your perfect Christian career opportunity
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{homepageContent.hero.title}</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {homepageContent.hero.subtitle}
                </p>
              </div>

              <JobSearchBar onSearch={handleSearch} content={homepageContent.searchBar} isMobile={isMobile} />
            </div>
          )}

          {jobResults.length > 0 ? (
            <div className="space-y-6">
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-center`}>{homepageContent.jobResults.title} ({jobResults.length})</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {jobResults.map(job => (
                  <JobCard key={job.id} job={job} content={commonContent.jobCard} isMobile={isMobile} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </main>

      {!isMobile && <FloatingActionButton content={commonContent.floatingActionButton} isMobile={isMobile} />}
    </div>;
};
// Hello
export default Index;