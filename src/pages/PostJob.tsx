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
import postJobContent from "@/content/postJob.json";
import commonContent from "@/content/common.json";

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
    console.log("Job posted:", formData);
    navigate("/");
  };

  const fields = postJobContent.form.fields;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar content={commonContent.sidebar} />
      <Header content={commonContent.header} />

      <main className="ml-16 pt-20">
        <div className="absolute top-4 left-20 z-50">
          <PageBreadcrumb />
        </div>
        <div className="container mx-auto py-12 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{postJobContent.pageTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor={fields.title.id}>{fields.title.label}</Label>
                  <Input id={fields.title.id} name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor={fields.company.id}>{fields.company.label}</Label>
                  <Input id={fields.company.id} name="company" value={formData.company} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor={fields.location.id}>{fields.location.label}</Label>
                  <Input id={fields.location.id} name="location" value={formData.location} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor={fields.logo.id}>{fields.logo.label}</Label>
                  <Input id={fields.logo.id} name="logo" value={formData.logo} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor={fields.tags.id}>{fields.tags.label}</Label>
                  <Input id={fields.tags.id} name="tags" value={formData.tags} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor={fields.description.id}>{fields.description.label}</Label>
                  <Textarea id={fields.description.id} name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor={fields.jobType.id}>{fields.jobType.label}</Label>
                  <Input id={fields.jobType.id} name="jobType" value={formData.jobType} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor={fields.companyDescription.id}>{fields.companyDescription.label}</Label>
                  <Textarea id={fields.companyDescription.id} name="companyDescription" value={formData.companyDescription} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor={fields.hours.id}>{fields.hours.label}</Label>
                  <Input id={fields.hours.id} name="hours" value={formData.hours} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor={fields.strengths.id}>{fields.strengths.label}</Label>
                  <Textarea id={fields.strengths.id} name="strengths" value={formData.strengths} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor={fields.benefits.id}>{fields.benefits.label}</Label>
                  <Textarea id={fields.benefits.id} name="benefits" value={formData.benefits} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor={fields.qualifications.id}>{fields.qualifications.label}</Label>
                  <Textarea id={fields.qualifications.id} name="qualifications" value={formData.qualifications} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor={fields.applicationUrl.id}>{fields.applicationUrl.label}</Label>
                  <Input id={fields.applicationUrl.id} name="applicationUrl" value={formData.applicationUrl} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full">{postJobContent.form.submitButton}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PostJob;