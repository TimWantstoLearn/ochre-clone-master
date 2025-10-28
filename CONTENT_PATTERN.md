# Content Management Pattern

This project now uses a **JSON-based content management pattern** where all text content is extracted from components into JSON files, making the application easily editable by non-developers and ready for internationalization.

## Directory Structure

```
src/
├── content/
│   ├── homepage.json      # Homepage-specific content
│   ├── pricing.json       # Pricing page content
│   ├── postJob.json       # Post job page content
│   ├── companies.json     # Companies page content
│   └── common.json        # Shared content (header, sidebar, common components)
├── components/
│   ├── EmptyState.tsx     # Accepts content via props
│   ├── Header.tsx         # Accepts content via props
│   ├── Sidebar.tsx        # Accepts content via props
│   ├── JobSearchBar.tsx   # Accepts content via props
│   ├── JobCard.tsx        # Accepts content via props
│   └── FloatingActionButton.tsx # Accepts content via props
└── pages/
    ├── Index.tsx          # Loads JSON and passes to components
    ├── Pricing.tsx        # Loads JSON and passes to components
    ├── PostJob.tsx        # Loads JSON and passes to components
    └── Companies.tsx      # Loads JSON and passes to components
```

## Pattern Implementation

### 1. Components Accept Content Props

All components now accept a `content` prop with typed interfaces:

```typescript
interface EmptyStateProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const EmptyState = ({ content }: EmptyStateProps) => {
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <Button>{content.buttonText}</Button>
    </div>
  );
};
```

### 2. Pages Load JSON and Pass to Components

Pages import JSON content and distribute it to child components:

```typescript
import homepageContent from "@/content/homepage.json";
import commonContent from "@/content/common.json";

const Index = () => {
  return (
    <div>
      <Sidebar content={commonContent.sidebar} />
      <Header content={commonContent.header} />
      <EmptyState content={homepageContent.emptyState} />
      <JobSearchBar content={homepageContent.searchBar} />
    </div>
  );
};
```

### 3. Shared Content in common.json

Components used across multiple pages (Header, Sidebar, JobCard, FloatingActionButton) get their content from `common.json`:

```json
{
  "header": {
    "postJobButton": "Post a Job"
  },
  "sidebar": {
    "navigation": [...],
    "themeToggle": {...}
  },
  "jobCard": {...},
  "floatingActionButton": {...}
}
```

## Additional Improvements Made

### Navigation Fixes
- ✅ Replaced all `window.location.href` with React Router's `useNavigate()`
- ✅ Proper SPA navigation without full page reloads

### Type Safety
- ✅ All content props are properly typed with TypeScript interfaces
- ✅ Compile-time checking for content structure

### Dynamic Content
- ✅ Support for template strings (e.g., `"{company}"` replaced dynamically)
- ✅ Configurable validation rules (max lengths, error messages)

## Benefits

1. **Easy Content Updates**: Non-developers can edit JSON files to change text
2. **Internationalization Ready**: Can easily add `homepage.es.json`, `homepage.fr.json`, etc.
3. **Consistency**: Shared content prevents duplication
4. **Type Safety**: TypeScript ensures content structure matches component expectations
5. **Maintainability**: Clear separation between content and presentation logic

## Example: Adding a New Language

To add Spanish support:

1. Create `src/content/es/homepage.json`
2. Copy structure from `homepage.json`
3. Translate all values
4. Update pages to load from language-specific directory:
   ```typescript
   import homepageContent from "@/content/${lang}/homepage.json";
   ```

## Example: Editing Content

To change the empty state message:

**Before** (hardcoded in component):
```tsx
<h2>No jobs found</h2>
```

**After** (edit JSON file):
```json
{
  "emptyState": {
    "title": "No Christian jobs found",
    ...
  }
}
```

No code changes needed!
