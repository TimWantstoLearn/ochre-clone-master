import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addOnsContent from "@/content/addOns.json";
import commonContent from "@/content/common.json";

interface SelectedAddOn {
  name: string;
  duration: string;
  price: string;
}
// test comment
const AddOns = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOn[]>([]);

  const handleOptionChange = (addOnName: string, optionIndex: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [addOnName]: optionIndex
    }));
  };

  const handleAddToPackage = (addOn: any) => {
    const existingIndex = selectedAddOns.findIndex(item => item.name === addOn.name);

    if (existingIndex >= 0) {
      // Remove if already selected (toggle off)
      const updated = selectedAddOns.filter((_, index) => index !== existingIndex);
      setSelectedAddOns(updated);
    } else {
      // Add if not selected
      let newAddOn: SelectedAddOn;

      if (addOn.price) {
        // Single price add-on (like Highlight Post)
        newAddOn = {
          name: addOn.name,
          duration: "One-time",
          price: addOn.price
        };
      } else {
        // Duration-based add-on
        const selectedOptionIndex = selectedOptions[addOn.name];
        if (selectedOptionIndex !== undefined) {
          const selectedOption = addOn.options[parseInt(selectedOptionIndex)];
          newAddOn = {
            name: addOn.name,
            duration: selectedOption.duration,
            price: selectedOption.price
          };
        } else {
          return; // No option selected
        }
      }

      setSelectedAddOns([...selectedAddOns, newAddOn]);
    }
  };

  const calculateTotal = () => {
    return selectedAddOns.reduce((total, addOn) => {
      const price = parseFloat(addOn.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar content={commonContent.sidebar} />
      <Header content={commonContent.header} />

      <main className="ml-16 pt-20">
        <div className="container mx-auto py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{addOnsContent.hero.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {addOnsContent.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {addOnsContent.addOns.map((addOn, index) => (
              <Card key={index} className="relative flex flex-col h-full">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{addOn.name}</CardTitle>
                    {addOn.price && (
                      <span className="text-2xl font-bold text-primary">{addOn.price}</span>
                    )}
                  </div>
                  <p className={`text-sm text-muted-foreground ${
                    addOn.name === "Highlight Post" || addOn.name === "Extra Exposure through our Newsletter"
                      ? "text-center"
                      : ""
                  }`}>
                    {addOn.description}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  {addOn.options ? (
                    // Special card layout for Featured Section
                    addOn.name === "Job Posting Listed in the Featured Section" ? (
                      <div className="flex-1">
                        <div className="grid grid-cols-1 gap-3">
                          {addOn.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                                selectedOptions[addOn.name] === optionIndex.toString()
                                  ? 'border-primary bg-primary/5'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                              onClick={() => handleOptionChange(addOn.name, optionIndex.toString())}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <div className={`w-4 h-4 rounded-full border-2 ${
                                    selectedOptions[addOn.name] === optionIndex.toString()
                                      ? 'border-primary bg-primary'
                                      : 'border-gray-300'
                                  }`}>
                                    {selectedOptions[addOn.name] === optionIndex.toString() && (
                                      <div className="w-full h-full rounded-full bg-primary scale-50"></div>
                                    )}
                                  </div>
                                  <span className="font-medium">{option.duration}</span>
                                </div>
                                <span className="font-bold text-primary">{option.price}</span>
                              </div>
                              <div className="mt-2 text-xs text-muted-foreground">
                                {optionIndex === 0 && "7 Days. Perfect for testing visibility"}
                                {optionIndex === 1 && "14 Days. Great for short-term campaigns"}
                                {optionIndex === 2 && "30 days. Ideal for comprehensive exposure"}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Radio group for other duration-based add-ons
                      <RadioGroup
                        value={selectedOptions[addOn.name] || ""}
                        onValueChange={(value) => handleOptionChange(addOn.name, value)}
                        className="space-y-3 flex-1"
                      >
                        {addOn.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center space-x-2">
                            <RadioGroupItem value={optionIndex.toString()} id={`${addOn.name}-${optionIndex}`} />
                            <Label htmlFor={`${addOn.name}-${optionIndex}`} className="flex-1 cursor-pointer">
                              <span className="font-medium">{option.price}</span> for {option.duration}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )
                  ) : (
                    // Empty space for single-price add-ons (price is in header)
                    <div className="flex-1"></div>
                  )}
                  <div className="mt-6">
                    <Button
                      className="w-full"
                      onClick={() => handleAddToPackage(addOn)}
                      disabled={!addOn.price && !selectedOptions[addOn.name]}
                      variant={selectedAddOns.some(item => item.name === addOn.name) ? "secondary" : "default"}
                    >
                      {selectedAddOns.some(item => item.name === addOn.name) ? "Remove from Package" : addOn.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedAddOns.length > 0 && (
            <div className="max-w-7xl mx-auto">
              <Card className="w-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Package Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedAddOns.map((addOn, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <div>
                          <span className="font-medium">{addOn.name}</span>
                          <span className="text-sm text-muted-foreground ml-2">({addOn.duration})</span>
                        </div>
                        <span className="font-semibold">{addOn.price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                      <span className="text-lg font-bold">Total:</span>
                      <span className="text-lg font-bold text-primary">${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" size="lg" onClick={() => navigate('/post-job')}>
                        Continue to Job Form
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AddOns;