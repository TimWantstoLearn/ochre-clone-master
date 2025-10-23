import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const searchSchema = z.object({
  jobQuery: z.string().trim().max(200, { message: "Job query must be less than 200 characters" }),
  location: z.string().trim().max(100, { message: "Location must be less than 100 characters" })
});

interface JobSearchBarProps {
  onSearch: (query: string, location: string) => void;
}

export const JobSearchBar = ({ onSearch }: JobSearchBarProps) => {
  const [jobQuery, setJobQuery] = useState("");
  const [location, setLocation] = useState("");
  const { toast } = useToast();

  const handleSearch = () => {
    try {
      const validated = searchSchema.parse({ jobQuery, location });

      // Call the onSearch prop with validated data
      onSearch(validated.jobQuery, validated.location);

      toast({
        title: "Search completed",
        description: `Found jobs for "${validated.jobQuery || "all jobs"}" in "${validated.location || "all locations"}"`,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-lg border border-border p-2 flex flex-col md:flex-row gap-2">
        {/* Job Title Input */}
        <div className="flex-1 relative">
          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="Job title, keywords, or company"
            value={jobQuery}
            onChange={(e) => setJobQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            maxLength={200}
            className="pl-12 h-14 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base"
          />
        </div>

        {/* Divider - hidden on mobile */}
        <div className="hidden md:block w-px bg-border self-stretch my-2" />

        {/* Location Input */}
        <div className="flex-1 relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            maxLength={100}
            className="pl-12 h-14 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base"
          />
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="h-14 px-8 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all hover:scale-105"
        >
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
      </div>

      {/* Helper text */}
      <p className="text-xs text-muted-foreground text-center mt-3">
        Press Enter or click Search to find jobs
      </p>
    </div>
  );
};
