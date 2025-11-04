import React from 'react';

interface FileInputProps {
  onChange: (file: File | null) => void;
  placeholder?: string;
}

const FileInput: React.FC<FileInputProps> = ({ onChange, placeholder }) => (
  <div className="bg-card border border-input rounded-lg overflow-hidden hover:border-ring transition-all">
    <div className="p-3 md:p-4">
      <input
        type="file"
        accept="image/png,image/jpeg,image/svg+xml"
        className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
      />
      {placeholder && (
        <p className="text-xs text-muted-foreground mt-2">{placeholder}</p>
      )}
    </div>
  </div>
);

export default FileInput;