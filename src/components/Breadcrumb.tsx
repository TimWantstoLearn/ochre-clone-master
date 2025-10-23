import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const PageBreadcrumb = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);

    if (pathnames.length === 0) {
      return [{ name: 'Home', path: '/', isLast: true }];
    }

    const breadcrumbs = [{ name: 'Home', path: '/', isLast: false }];

    pathnames.forEach((pathname, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const name = pathname.charAt(0).toUpperCase() + pathname.slice(1).replace('-', ' ');
      breadcrumbs.push({ name, path, isLast: index === pathnames.length - 1 });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.path} className="flex items-center">
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {crumb.isLast ? (
                <BreadcrumbPage className="text-muted-foreground">{crumb.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={crumb.path} className="flex items-center gap-1">
                    {crumb.name === 'Home' && <Home className="w-4 h-4" />}
                    {crumb.name}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};