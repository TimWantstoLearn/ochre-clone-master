import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pricingContent from "@/content/pricing.json";
import employerSignupContent from "@/content/employerSignup.json";
import commonContent from "@/content/common.json";

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsModalOpen(true);
  };

  const handleCreateAccount = () => {
    navigate('/add-ons');
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar content={commonContent.sidebar} />
      <Header content={commonContent.header} />

      <main className="ml-16 pt-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{pricingContent.hero.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pricingContent.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingContent.plans.map((plan, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {pricingContent.popularBadge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground"> {plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={handleSignIn}
                    >
                      {pricingContent.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{employerSignupContent.modal.title}</DialogTitle>
            <DialogDescription>
              {employerSignupContent.modal.description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{employerSignupContent.modal.fields.firstName.label}</Label>
                <Input
                  id="firstName"
                  placeholder={employerSignupContent.modal.fields.firstName.placeholder}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{employerSignupContent.modal.fields.lastName.label}</Label>
                <Input
                  id="lastName"
                  placeholder={employerSignupContent.modal.fields.lastName.placeholder}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workEmail">{employerSignupContent.modal.fields.workEmail.label}</Label>
              <Input
                id="workEmail"
                type="email"
                placeholder={employerSignupContent.modal.fields.workEmail.placeholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl">{employerSignupContent.modal.fields.linkedinUrl.label}</Label>
              <Input
                id="linkedinUrl"
                placeholder={employerSignupContent.modal.fields.linkedinUrl.placeholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitterHandle">{employerSignupContent.modal.fields.twitterHandle.label}</Label>
              <Input
                id="twitterHandle"
                placeholder={employerSignupContent.modal.fields.twitterHandle.placeholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">{employerSignupContent.modal.fields.companyName.label}</Label>
              <Input
                id="companyName"
                placeholder={employerSignupContent.modal.fields.companyName.placeholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyUrl">{employerSignupContent.modal.fields.companyUrl.label}</Label>
              <Input
                id="companyUrl"
                placeholder={employerSignupContent.modal.fields.companyUrl.placeholder}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleCreateAccount}>
              Create Account
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pricing;