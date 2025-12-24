import { useLocation, Link } from "@tanstack/react-router";
import { getLocaleName, getPathWithoutLocale, getPrefix } from "intlayer";
import { useLocale } from "react-intlayer";
import { buttonVariants } from "@/components/ui/button";

export function LocaleSwitcher() {
  const { pathname } = useLocation();
  const { availableLocales, locale, setLocale } = useLocale();
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  return (
    <div className="flex gap-2">
      {availableLocales.map((localeEl) => (
        <Link
          key={localeEl}
          onClick={() => setLocale(localeEl)}
          to={`/${getPrefix(localeEl).localePrefix}${pathWithoutLocale}`}
          className={buttonVariants({
            variant: locale === localeEl ? "default" : "outline",
            size: "sm",
          })}
        >
          {getLocaleName(localeEl, localeEl)}
        </Link>
      ))}
    </div>
  );
}
