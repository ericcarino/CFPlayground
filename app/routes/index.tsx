import type { MetaFunction } from "@remix-run/cloudflare";
import Shell from "../shell";

export const meta: MetaFunction = () => {
  return [
    { title: "The Home of Eric Carino" },
    { name: "description", content: "Welcome to my virtual home!" },
  ];
};

export default function Index() {
  return <Shell />
}
