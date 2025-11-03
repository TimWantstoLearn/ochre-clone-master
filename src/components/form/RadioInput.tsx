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
  <div className={`bg-white border rounded-lg overflow-hidden transition-all ${
    checked ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300 hover:border-gray-400'
  }`}>
    <Label className="flex items-center p-4 cursor-pointer gap-3">
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={checked}
        onChange={() => onChange(option.value)}
        className="w-5 h-5 cursor-pointer accent-gray-900"
      />
      <span className={`flex-1 text-sm select-none ${
        checked ? 'font-medium' : ''
      }`}>
        {option.label}
      </span>
      {checked && (
        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </Label>
  </div>
);

export default RadioInput;