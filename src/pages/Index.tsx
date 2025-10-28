import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { JobSearchBar } from "@/components/JobSearchBar";
import { JobCard, Job } from "@/components/JobCard";
import { mockJobs } from "@/lib/mockJobs";
import commonContent from "@/content/common.json";
import homepageContent from "@/content/homepage.json";

const Index = () => {
  const [jobResults, setJobResults] = useState<Job[]>([]);

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
      <Sidebar content={commonContent.sidebar} />
      <Header content={commonContent.header} />

      <main className="ml-16 pt-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{homepageContent.hero.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {homepageContent.hero.subtitle}
            </p>
          </div>

          <JobSearchBar onSearch={handleSearch} content={homepageContent.searchBar} />

          {jobResults.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center">{homepageContent.jobResults.title} ({jobResults.length})</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {jobResults.map(job => (
                  <JobCard key={job.id} job={job} content={commonContent.jobCard} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </main>

      <FloatingActionButton content={commonContent.floatingActionButton} />
    </div>;
};
export default Index;