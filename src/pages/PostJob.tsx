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
import { useIsMobile } from "@/hooks/use-mobile";
import postJobContent from "@/content/postJob.json";
import commonContent from "@/content/common.json";
import JobFormWizard from "@/components/form/JobFormWizard";
import { filterConfig } from "@/components/form/filterConfig";

const PostJob = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleWizardFinish = (wizardFormValues: { [key: string]: { selected?: string | string[]; value?: string; file?: File | null } }) => {
    console.log("Wizard form values:", wizardFormValues);
    // Map wizard values to formData format and submit
    const mappedData = {
      title: wizardFormValues['job-title']?.value || "",
      company: wizardFormValues['company-name']?.value || "",
      location: "", // Not in wizard
      logo: "", // Not in wizard
      tags: "", // Not in wizard
      description: wizardFormValues['job-description']?.value || "",
      jobType: typeof wizardFormValues['employment-type']?.selected === 'string' ? wizardFormValues['employment-type'].selected : "",
      companyDescription: wizardFormValues['about-company']?.value || "",
      hours: "", // Not in wizard
      strengths: wizardFormValues['desired-skills']?.value || "",
      benefits: Array.isArray(wizardFormValues['benefits']?.selected) ? wizardFormValues['benefits'].selected.join(', ') : "",
      qualifications: "", // Not in wizard
      applicationUrl: wizardFormValues['application-link']?.value || "",
    };
    console.log("Job posted:", mappedData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {!isMobile && <Sidebar content={commonContent.sidebar} />}
      <Header content={commonContent.header} isMobile={isMobile} />
      <main className={`${isMobile ? 'pt-20' : 'ml-16 pt-20'}`}>
        <JobFormWizard filterConfig={filterConfig} onFinish={handleWizardFinish} />
      </main>
    </div>
  );
};

export default PostJob;