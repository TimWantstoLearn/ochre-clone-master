import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Option {
  value: string;
  label: string;
}

interface RadioInputProps {
  option: Option;
  checked: boolean;
  onChange: (value: string) => void;
  name: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ option, checked, onChange, name }) => (
  <div className={`bg-card border rounded-lg overflow-hidden transition-all ${
    checked ? 'bg-primary border-primary' : 'border-border hover:border-ring'
  }`}>
    <Label className="flex items-center p-3 md:p-4 cursor-pointer gap-3">
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={checked}
        onChange={() => onChange(option.value)}
        className="w-5 h-5 cursor-pointer"
      />
      <span className={`flex-1 text-sm select-none ${
        checked ? 'font-medium' : ''
      }`}>
        {option.label}
      </span>
      {checked && (
        <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </Label>
  </div>
);

export default RadioInput;