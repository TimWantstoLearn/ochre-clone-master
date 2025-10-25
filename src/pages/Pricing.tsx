import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Try us out for free!",
      features: [
        "1 Week delay to post up to 3 jobs for free",
        "Job Posting duration: 7 days",
        "Search results visibility",
      ]
    },
    {
      name: "Standard",
      price: "$99",
      period: "Pay Once",
      features: [
        "Post up to 3 job posts",
        "Job Posting duration: 30 days",
        "Job listed on Social Media",
        "Automated email responses",
        "Direct Messaging to applicants",
        "Job distributed to suitable talents"
      ]
    },
    {
      name: "Professional",
      price: "$199",
      period: "Pay Once",
      features: [
        "Post up to 6 job posts",
        "Job Posting duration: 30 days",
        "Job listed on Social Media",
        "Automated email responses",
        "Direct Messaging to applicants",
        "Job distributed to suitable talents",
        "Included in Featured Jobs section for 30 days",
        "Job highlighted in search results"
      ],
      popular: true
    },
    {
      name: "Partnered Recruiter",
      price: "Partner with ",
      period: "Some Recruitment Agency (logo/icon)",
      features: [
        "Christian recruiting firm",
        "Work with professional search consultants",
        "Full-cycle recruiting services",
        "Access to exclusive talent pool",
        "Personalized job postings",
        "Priority support",
        "Dedicated account manager",
        "Top visibility",
        "Duration of services based on agreement"
      ]
    }
  ];

  const handlePostJob = () => {
    window.location.href = '/post-job';
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />

      <main className="ml-16 pt-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect plan to post jobs and reach top talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative flex flex-col h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
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
                      onClick={handlePostJob}
                    >
                      Sign in to Select Package
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;