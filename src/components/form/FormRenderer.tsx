import React from 'react';
import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import FileInput from './FileInput';
import SelectInput from './SelectInput';

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

interface FormValues {
  [key: string]: {
    selected?: string | string[];
    value?: string;
    file?: File | null;
  };
}

interface FormRendererProps {
  item: FilterItem;
  values: FormValues;
  onChange: (itemId: string, value: { selected?: string | string[]; value?: string; file?: File | null }) => void;
}

const FormRenderer: React.FC<FormRendererProps> = ({ item, values, onChange }) => {
  const itemValues = values[item.id] || {};

  const handleMultiSelectChange = (optionValue: string, checked: boolean) => {
    const currentValues = (itemValues.selected as string[]) || [];
    const newValues = checked
      ? [...currentValues, optionValue]
      : currentValues.filter(v => v !== optionValue);
    onChange(item.id, { selected: newValues });
  };

  const handleRadioChange = (value: string) => {
    onChange(item.id, { selected: value });
  };

  const handleTextChange = (value: string) => {
    onChange(item.id, { value });
  };

  const handleFileChange = (file: File | null) => {
    onChange(item.id, { file });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">{item.question}</h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-3">
        {item.component === 'multiselect' && (
          <>
            {item.options?.map(option => (
              <CheckboxInput
                key={option.value}
                option={option}
                checked={((itemValues.selected as string[]) || []).includes(option.value)}
                onChange={handleMultiSelectChange}
              />
            ))}
            {item.sections?.map(section => (
              <div key={section.title}>
                <div className="border-b-2 border-gray-900 pb-2 mb-2">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                </div>
                {section.options.map(option => (
                  <CheckboxInput
                    key={option.value}
                    option={option}
                    checked={((itemValues.selected as string[]) || []).includes(option.value)}
                    onChange={handleMultiSelectChange}
                  />
                ))}
              </div>
            ))}
          </>
        )}

        {item.component === 'radio' && item.options?.map(option => (
          <RadioInput
            key={option.value}
            option={option}
            name={item.id}
            checked={itemValues.selected === option.value}
            onChange={handleRadioChange}
          />
        ))}

        {item.component === 'text' && (
          <TextInput
            value={itemValues.value || ''}
            onChange={handleTextChange}
            placeholder={item.placeholder}
          />
        )}

        {item.component === 'textarea' && (
          <TextAreaInput
            value={itemValues.value || ''}
            onChange={handleTextChange}
            placeholder={item.placeholder}
          />
        )}

        {item.component === 'file' && (
          <FileInput
            onChange={handleFileChange}
            placeholder={item.placeholder}
          />
        )}

        {item.component === 'select' && (
          <SelectInput
            options={item.options || []}
            value={(itemValues.selected as string) || ''}
            onChange={(value) => onChange(item.id, { selected: value })}
          />
        )}
      </div>
    </div>
  );
};

export default FormRenderer;