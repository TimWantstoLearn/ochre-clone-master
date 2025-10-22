import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { EmptyState } from "@/components/EmptyState";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { JobSearchBar } from "@/components/JobSearchBar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [trips, setTrips] = useState<string[]>([]);
  const { toast } = useToast();

  const handleAddTrip = () => {
    const newTrip = `Adventure ${trips.length + 1}`;
    setTrips([...trips, newTrip]);
    toast({
      title: "Adventure added! ✈️",
      description: "Your new adventure has been added to your travel list.",
    });
  };

  const handleDeleteTrip = () => {
    setTrips([]);
    toast({
      title: "Trip deleted successfully",
      description: "All adventures removed from your travel list.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-16 pt-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Find Your Dream Christian Job</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search thousands of job listings from top companies
            </p>
          </div>
          
          <JobSearchBar />
          
          {trips.length === 0 && (
            <div className="animate-fade-in">
              <EmptyState />
            </div>
          )}
          
          {trips.length > 0 && (
            <div className="animate-fade-in space-y-4">
              {trips.map((trip, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-foreground">{trip}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Ready for your next adventure!</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <FloatingActionButton 
        hasTrips={trips.length > 0}
        onAdd={handleAddTrip}
        onDelete={handleDeleteTrip}
      />
    </div>
  );
};

export default Index;