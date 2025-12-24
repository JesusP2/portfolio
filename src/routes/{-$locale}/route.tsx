import { createFileRoute, Outlet } from "@tanstack/react-router";
import { IntlayerProvider, useLocale } from "react-intlayer";
import { ThemeProvider } from "@/components/theme-provider";

export const Route = createFileRoute("/{-$locale}")({
  component: LocaleLayout,
});

function LocaleLayout() {
  const { defaultLocale } = useLocale();
  const { locale } = Route.useParams();

  return (
    <ThemeProvider defaultTheme="dark">
      <IntlayerProvider locale={locale ?? defaultLocale}>
        <Outlet />
      </IntlayerProvider>
    </ThemeProvider>
  );
}
