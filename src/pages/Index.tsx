import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { EmptyState } from "@/components/EmptyState";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { JobSearchBar } from "@/components/JobSearchBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-16 pt-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Find Your Dream Job
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search thousands of job listings from top companies
            </p>
          </div>
          
          <JobSearchBar />
          
          <EmptyState />
        </div>
      </main>
      
      <FloatingActionButton />
    </div>
  );
};

export default Index;
