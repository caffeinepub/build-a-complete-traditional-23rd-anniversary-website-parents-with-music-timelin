import { useEffect } from 'react';

interface RequiredContentProps {
  value: string | undefined | null;
  fieldPath: string;
  children?: React.ReactNode;
  className?: string;
}

export default function RequiredContent({ value, fieldPath, children, className = '' }: RequiredContentProps) {
  useEffect(() => {
    if (!value || value.trim() === '') {
      console.warn(`⚠️ सामग्री गायब है (Missing content): ${fieldPath}`);
    }
  }, [value, fieldPath]);

  if (!value || value.trim() === '') {
    return (
      <span className={`text-destructive bg-destructive/10 px-2 py-1 rounded ${className}`}>
        [सामग्री गायब: {fieldPath}]
      </span>
    );
  }

  if (children) {
    return <>{children}</>;
  }

  return <span className={className}>{value}</span>;
}
