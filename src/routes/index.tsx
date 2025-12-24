import { createFileRoute, redirect } from "@tanstack/react-router";
import { getPrefix } from "intlayer";
import { Locales } from "intlayer";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const { localePrefix } = getPrefix(Locales.ENGLISH);
    throw redirect({
      to: "/{-$locale}",
      params: { locale: localePrefix || "en" },
    });
  },
  component: () => null,
});
