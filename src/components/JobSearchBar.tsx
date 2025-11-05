import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

interface JobSearchBarProps {
  onSearch: (query: string, location: string) => void;
  content: {
    jobLabel?: string;
    locationLabel?: string;
    jobPlaceholder: string;
    locationPlaceholder: string;
    searchButtonText: string;
    helperText: string;
    jobQueryMaxLength: number;
    locationMaxLength: number;
    toasts: {
      searchCompleted: {
        title: string;
        descriptionTemplate: string;
      };
      validationError: {
        title: string;
      };
    };
    validation: {
      jobQueryMaxError: string;
      locationMaxError: string;
    };
  };
  isMobile?: boolean;
}

export const JobSearchBar = ({ onSearch, content, isMobile }: JobSearchBarProps) => {
  const [jobQuery, setJobQuery] = useState("");
  const [location, setLocation] = useState("");
  const { toast } = useToast();

  const searchSchema = z.object({
    jobQuery: z.string().trim().max(content.jobQueryMaxLength, { message: content.validation.jobQueryMaxError }),
    location: z.string().trim().max(content.locationMaxLength, { message: content.validation.locationMaxError })
  });

  const handleSearch = () => {
    try {
      const validated = searchSchema.parse({ jobQuery, location });

      onSearch(validated.jobQuery, validated.location);

      const description = content.toasts.searchCompleted.descriptionTemplate
        .replace("{query}", validated.jobQuery || "all jobs")
        .replace("{location}", validated.location || "all locations");

      toast({
        title: content.toasts.searchCompleted.title,
        description,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: content.toasts.validationError.title,
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
    <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="w-full max-w-4xl mx-auto px-4" role="search" aria-label="Job search">
      {isMobile ? (
        <div className="space-y-3">
          <div>
            <label htmlFor="job-query" className="block text-sm font-medium text-foreground mb-1">
              {content.jobLabel || "Job Title/Company"}
            </label>
            <Input
              id="job-query"
              type="text"
              placeholder={content.jobPlaceholder}
              value={jobQuery}
              onChange={(e) => setJobQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              maxLength={content.jobQueryMaxLength}
              className="w-full h-12 text-base border border-border rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
              aria-describedby="job-query-help"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">
              {content.locationLabel || "Location"}
            </label>
            <Input
              id="location"
              type="text"
              placeholder={content.locationPlaceholder}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
              maxLength={content.locationMaxLength}
              className="w-full h-12 text-base border border-border rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
              aria-describedby="location-help"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {content.searchButtonText}
          </Button>

          <p id="job-query-help" className="text-xs text-muted-foreground text-center">
            {content.helperText}
          </p>
        </div>
      ) : (
        <div className="bg-card rounded-2xl shadow-lg border border-border p-2 flex flex-row gap-2">
          <div className="flex-1 relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder={content.jobPlaceholder}
              value={jobQuery}
              onChange={(e) => setJobQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              maxLength={content.jobQueryMaxLength}
              className="pl-12 h-14 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base"
            />
          </div>

          <div className="w-px bg-border self-stretch my-2" />

          <div className="flex-1 relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder={content.locationPlaceholder}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
              maxLength={content.locationMaxLength}
              className="pl-12 h-14 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base"
            />
          </div>

          <Button
            onClick={handleSearch}
            className="h-14 px-8 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all hover:scale-105"
          >
            <Search className="w-5 h-5 mr-2" />
            {content.searchButtonText}
          </Button>
        </div>
      )}
    </form>
  );
};
