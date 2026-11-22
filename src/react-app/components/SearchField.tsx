import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  autoFocus?: boolean;
};

export function SearchField({
  value,
  onChange,
  placeholder = "Search intelligence...",
  label = "Search",
  className,
  autoFocus,
}: SearchFieldProps) {
  return (
    <div className={`search-glow relative rounded-lg transition-shadow ${className ?? ""}`}>
      <Search aria-hidden="true" className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />
      <Input
        type="search"
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 border-border bg-[#111827]/90 pl-11 pr-4 text-sm sm:h-14 sm:text-base"
        autoFocus={autoFocus}
      />
    </div>
  );
}
