import React from 'react';
import { Input } from '@/components/ui/input';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => (
  <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-gray-400 transition-all">
    <Input
      type="text"
      className="w-full p-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextInput;