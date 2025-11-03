export interface Option {
  value: string;
  label: string;
}

export interface Section {
  title: string;
  options: Option[];
}

export interface FilterItem {
  id: string;
  label: string;
  component: 'multiselect' | 'radio' | 'text' | 'textarea' | 'select' | 'file';
  question: string;
  options?: Option[];
  sections?: Section[];
  placeholder?: string;
}

export interface FilterSection {
  id: string;
  icon: string;
  title: string;
  items: FilterItem[];
}

export interface FilterConfig {
  sections: FilterSection[];
}

export const filterConfig: FilterConfig = {
  sections: [
    {
      id: 'role-details',
      icon: '💼',
      title: 'Role Details',
      items: [
        {
          id: 'job-title',
          label: 'Job Title',
          component: 'text',
          question: 'What is the job title for this position?',
          placeholder: 'e.g., Senior Frontend Developer'
        },
        {
          id: 'employment-type',
          label: 'Employment Type',
          component: 'radio',
          question: 'What type of employment is this?',
          options: [
            { value: 'full-time', label: 'Full-time' },
            { value: 'part-time', label: 'Part-time' },
            { value: 'contract', label: 'Contract' },
            { value: 'internship', label: 'Internship' }
          ]
        },
        {
          id: 'category',
          label: 'Category',
          component: 'select',
          question: 'Which category best matches this role?',
          options: [
            { value: 'engineering', label: 'Engineering' },
            { value: 'design', label: 'Design' },
            { value: 'product', label: 'Product' },
            { value: 'marketing', label: 'Marketing' },
            { value: 'sales', label: 'Sales' },
            { value: 'customer-success', label: 'Customer Success' },
            { value: 'operations', label: 'Operations' },
            { value: 'finance', label: 'Finance' },
            { value: 'legal', label: 'Legal' },
            { value: 'hr', label: 'Human Resources' },
            { value: 'other', label: 'Other' }
          ]
        },
        {
          id: 'remote-position',
          label: 'Remote Position',
          component: 'radio',
          question: 'Is this a remote position?',
          options: [
            { value: 'fully-remote', label: 'Fully Remote' },
            { value: 'hybrid', label: 'Hybrid (Remote & On-site)' },
            { value: 'on-site', label: 'On-site Only' }
          ]
        },
        {
          id: 'job-description',
          label: 'Job Description',
          component: 'textarea',
          question: 'Describe the role and responsibilities',
          placeholder: 'Provide a detailed description of the position, key responsibilities, and what the candidate will be working on...'
        },
        {
          id: 'desired-skills',
          label: 'Desired Skills',
          component: 'textarea',
          question: 'What skills are you looking for in candidates?',
          placeholder: 'List the required and preferred skills, technologies, and qualifications...'
        }
      ]
    },
    {
      id: 'company',
      icon: '🏢',
      title: 'Company',
      items: [
        {
          id: 'company-name',
          label: 'Company Name',
          component: 'text',
          question: 'What is your company name?',
          placeholder: 'Enter company name (without LLC, Inc., LTD., etc.)'
        },
        {
          id: 'nonprofit',
          label: 'Nonprofit Status',
          component: 'radio',
          question: 'Is your organization a nonprofit?',
          options: [
            { value: 'yes', label: 'Yes, we are a nonprofit organization' },
            { value: 'no', label: 'No, we are a for-profit company' }
          ]
        },
        {
          id: 'company-email',
          label: 'Company Email',
          component: 'text',
          question: 'What email should we use for confirmation and receipts?',
          placeholder: 'e.g., hiring@company.com'
        },
        {
          id: 'about-company',
          label: 'About Company',
          component: 'textarea',
          question: 'Tell us about your company',
          placeholder: 'Describe your company, mission, culture, and what makes it a great place to work...'
        },
        {
          id: 'company-website',
          label: 'Company Website',
          component: 'text',
          question: "What is your company's website URL?",
          placeholder: 'https://www.company.com'
        },
        {
          id: 'company-twitter',
          label: 'Twitter Handle',
          component: 'text',
          question: "What is your company's Twitter handle?",
          placeholder: '@company'
        },
        {
          id: 'company-logo',
          label: 'Company Logo',
          component: 'file',
          question: 'Upload your company logo',
          placeholder: 'Choose a file (PNG, JPG, or SVG)'
        }
      ]
    },
    {
      id: 'application',
      icon: '📝',
      title: 'Application',
      items: [
        {
          id: 'application-method',
          label: 'Application Method',
          component: 'radio',
          question: 'How should candidates apply for this position?',
          options: [
            { value: 'link', label: 'Application Link (e.g., ATS, career page)' },
            { value: 'email', label: 'Email Address' }
          ]
        },
        {
          id: 'application-link',
          label: 'Application Link',
          component: 'text',
          question: 'What is the application link URL?',
          placeholder: 'https://jobs.company.com/apply/position-id'
        }
      ]
    },
    {
      id: 'compensation',
      icon: '💰',
      title: 'Compensation & Benefits',
      items: [
        {
          id: 'min-salary',
          label: 'Minimum Salary',
          component: 'text',
          question: 'What is the minimum annual salary (USD)?',
          placeholder: 'e.g., 80000'
        },
        {
          id: 'max-salary',
          label: 'Maximum Salary',
          component: 'text',
          question: 'What is the maximum annual salary (USD)?',
          placeholder: 'e.g., 120000'
        },
        {
          id: 'benefits',
          label: 'Benefits',
          component: 'multiselect',
          question: 'What benefits do you provide?',
          options: [
            { value: 'health-insurance', label: 'Health Insurance' },
            { value: 'dental-insurance', label: 'Dental Insurance' },
            { value: 'vision-insurance', label: 'Vision Insurance' },
            { value: '401k', label: '401(k) Retirement Plan' },
            { value: 'equity', label: 'Equity/Stock Options' },
            { value: 'unlimited-pto', label: 'Unlimited PTO' },
            { value: 'paid-parental-leave', label: 'Paid Parental Leave' },
            { value: 'remote-work', label: 'Remote Work Flexibility' },
            { value: 'learning-budget', label: 'Learning & Development Budget' },
            { value: 'gym-membership', label: 'Gym Membership' },
            { value: 'commuter-benefits', label: 'Commuter Benefits' },
            { value: 'meals', label: 'Free Meals/Snacks' }
          ]
        }
      ]
    }
  ]
};