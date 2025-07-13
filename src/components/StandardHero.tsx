import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface StandardHeroProps {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

const StandardHero = ({ title, description, breadcrumbs }: StandardHeroProps) => {
  return (
    <section className="bg-[#004595] text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center text-blue-200 mb-6 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StandardHero;