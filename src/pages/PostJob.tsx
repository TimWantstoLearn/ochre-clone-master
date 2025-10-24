import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    logo: "",
    tags: "",
    description: "",
    jobType: "",
    companyDescription: "",
    hours: "",
    strengths: "",
    benefits: "",
    qualifications: "",
    applicationUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit to API
    console.log("Job posted:", formData);
    // Redirect to pricing page
    navigate("/pricing");
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />

      <main className="ml-16 pt-20">
        <div className="absolute top-4 left-20 z-50">
          <PageBreadcrumb />
        </div>
        <div className="container mx-auto py-12 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Post a Job</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="logo">Logo URL</Label>
                  <Input id="logo" name="logo" value={formData.logo} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input id="tags" name="tags" value={formData.tags} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="jobType">Job Type</Label>
                  <Input id="jobType" name="jobType" value={formData.jobType} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="companyDescription">Company Description</Label>
                  <Textarea id="companyDescription" name="companyDescription" value={formData.companyDescription} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="hours">Hours</Label>
                  <Input id="hours" name="hours" value={formData.hours} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="strengths">Key Strengths Needed (one per line)</Label>
                  <Textarea id="strengths" name="strengths" value={formData.strengths} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="benefits">Benefits (one per line)</Label>
                  <Textarea id="benefits" name="benefits" value={formData.benefits} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="qualifications">Basic Qualifications (one per line)</Label>
                  <Textarea id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="applicationUrl">Application URL</Label>
                  <Input id="applicationUrl" name="applicationUrl" value={formData.applicationUrl} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full">Post Job</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PostJob;