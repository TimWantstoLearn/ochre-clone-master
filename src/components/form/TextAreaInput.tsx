import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TextAreaInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, placeholder }) => (
  <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-gray-400 transition-all">
    <Textarea
      className="w-full p-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-32 resize-y"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextAreaInput;