import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Option {
  value: string;
  label: string;
}

interface CheckboxInputProps {
  option: Option;
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ option, checked, onChange }) => (
  <div className={`bg-card border rounded-lg overflow-hidden transition-all ${checked ? 'bg-primary border-primary' : 'border-border hover:border-ring'
    }`}>
    <Label className="flex items-center p-3 md:p-4 cursor-pointer gap-3">
      <Checkbox
        checked={checked}
        onCheckedChange={(checked) => onChange(option.value, checked as boolean)}
        className={`w-5 h-5 cursor-pointer ${checked ? 'border-white' : ''}`}
      />
      <span className={`flex-1 text-sm select-none ${checked ? 'font-medium text-white' : ''
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

export default CheckboxInput;