import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FormRenderer from './FormRenderer';

interface Option {
  value: string;
  label: string;
}

interface Section {
  title: string;
  options: Option[];
}

interface FilterItem {
  id: string;
  label: string;
  component: 'multiselect' | 'radio' | 'text' | 'textarea' | 'select' | 'file';
  question: string;
  options?: Option[];
  sections?: Section[];
  placeholder?: string;
}

interface FilterSection {
  id: string;
  icon: string;
  title: string;
  items: FilterItem[];
}

interface FilterConfig {
  sections: FilterSection[];
}

interface FormValues {
  [key: string]: {
    selected?: string | string[];
    value?: string;
    file?: File | null;
  };
}

interface JobFormWizardProps {
  filterConfig: FilterConfig;
  onFinish: (formValues: FormValues) => void;
}

const JobFormWizard: React.FC<JobFormWizardProps> = ({ filterConfig, onFinish }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<FormValues>({});

  // Flatten all items with section id for navigation
  const allItems = filterConfig.sections.flatMap(section =>
    section.items.map(item => ({ sectionId: section.id, item }))
  );

  useEffect(() => {
    if (allItems.length > 0) {
      setActiveSection(allItems[0].sectionId);
      setActiveItem(allItems[0].item.id);
    }
  }, []);

  const currentIndex = allItems.findIndex(({ item }) => item.id === activeItem);

  const handleItemClick = (sectionId: string, itemId: string) => {
    setActiveSection(sectionId);
    setActiveItem(itemId);
  };

  const handleFormChange = (itemId: string, value: { selected?: string | string[]; value?: string; file?: File | null }) => {
    setFormValues(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  const goNext = () => {
    if (currentIndex < allItems.length - 1) {
      const next = allItems[currentIndex + 1];
      setActiveSection(next.sectionId);
      setActiveItem(next.item.id);
    } else {
      onFinish(formValues);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      const prev = allItems[currentIndex - 1];
      setActiveSection(prev.sectionId);
      setActiveItem(prev.item.id);
    }
  };

  const currentItem = allItems[currentIndex]?.item || null;

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-60 bg-white border-r border-gray-300 overflow-y-auto flex-shrink-0">
          {filterConfig.sections.map(section => (
            <div key={section.id} className="border-b border-gray-300">
              <div className="flex items-center gap-2 px-5 py-4 cursor-default select-none text-gray-600 font-medium text-sm">
                <span>{section.icon}</span>
                <span>{section.title}</span>
              </div>
              <div className="flex flex-col">
                {section.items.map(item => (
                  <button
                    key={item.id}
                    className={`text-left px-5 py-2 text-sm transition-colors duration-150 ${
                      activeItem === item.id ? 'bg-yellow-200 font-semibold border-l-4 border-yellow-400' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleItemClick(section.id, item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <main className="flex-1 overflow-y-auto p-12">
          {currentItem ? (
            <FormRenderer
              item={currentItem}
              values={formValues}
              onChange={handleFormChange}
            />
          ) : (
            <div className="max-w-3xl mx-auto text-center text-gray-500">Select a filter item to begin</div>
          )}
        </main>
      </div>

      {/* Fixed bottom navigation with side-by-side centered larger buttons */}
      <nav className="bg-white border-t border-gray-300 p-6 fixed bottom-0 left-0 right-0 max-w-7xl mx-auto flex justify-center gap-6">
        <Button
          onClick={goBack}
          disabled={currentIndex <= 0}
          className={`px-8 py-3 rounded-md text-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-yellow-400 text-gray-900 hover:bg-yellow-500 ${
            currentIndex <= 0 ? 'invisible' : 'visible'
          }`}
        >
          Back
        </Button>

        <Button
          onClick={goNext}
          className="px-8 py-3 rounded-md text-lg font-semibold bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors"
        >
          {currentIndex === allItems.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </nav>
    </div>
  );
};

export default JobFormWizard;