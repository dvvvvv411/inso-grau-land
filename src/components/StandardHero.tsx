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
    <section className="bg-[#004595] text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center text-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2" />}
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StandardHero;