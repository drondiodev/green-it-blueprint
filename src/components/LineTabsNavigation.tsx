import { useState } from "react";

interface LineTabsNavigationProps {
  items: Array<{ label: string; href: string }>;
  className?: string;
}

export default function LineTabsNavigation({ items, className = "" }: LineTabsNavigationProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`flex items-center space-x-8 ${className}`}>
      {items.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
            activeTab === index
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
          onMouseEnter={() => setActiveTab(index)}
        >
          {item.label}
          {activeTab === index && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-200"></span>
          )}
        </a>
      ))}
    </div>
  );
}