import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, value, onChange }) => (
  <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-gray-400 transition-all">
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full p-4 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default SelectInput;