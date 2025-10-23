import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Briefcase, Target, Gift, Award } from "lucide-react";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  tags: string[];
  datePosted: string;
  description: string;
  jobType: string;
  companyDescription: string;
  hours: string;
  strengths: string[];
  benefits: string[];
  qualifications: string[];
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
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
                  <div className="flex-shrink-0 text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{job.datePosted}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={job.logo} alt={`${job.company} logo`} />
                <AvatarFallback className="text-lg">{job.company.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                <p className="text-muted-foreground text-lg">{job.company}</p>
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all hover:scale-105">
              Apply
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Job Type</p>
                <p className="font-medium">{job.jobType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Hours</p>
                <p className="font-medium">{job.hours}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Posted</p>
                <p className="font-medium">{job.datePosted}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">About the Company</h4>
            <p className="text-muted-foreground">{job.companyDescription}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Job Description</h4>
            <p className="text-muted-foreground">{job.description}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5" />
              <h4 className="font-semibold text-lg">Key Strengths Needed</h4>
            </div>
            <ul className="space-y-2">
              {job.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5" />
              <h4 className="font-semibold text-lg">Benefits</h4>
            </div>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5" />
              <h4 className="font-semibold text-lg">Basic Qualifications</h4>
            </div>
            <ul className="space-y-2">
              {job.qualifications.map((qualification, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{qualification}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all hover:scale-105">
              Apply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};