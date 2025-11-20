import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TextAreaInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, placeholder }) => (
  <div className="bg-white border border-input rounded-lg overflow-hidden hover:border-ring transition-all">
    <Textarea
      className="w-full p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring min-h-24 md:min-h-32 resize-y bg-transparent border-0"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextAreaInput;