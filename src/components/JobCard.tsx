import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Info } from "lucide-react";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  tags: string[];
  datePosted: string;
  description: string;
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 flex-shrink-0">
            <AvatarImage src={job.logo} alt={`${job.company} logo`} />
            <AvatarFallback className="text-lg">{job.company.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xl leading-tight mb-1">{job.title}</h3>
                <p className="text-muted-foreground text-base mb-2">{job.company}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 text-right flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{job.datePosted}</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Info className="w-4 h-4" />
                      Details
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Job Description</h4>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};