import { Badge } from "rfui";

export const meta = () => ([
  { title: "Home - RFUI" },
  { name: "description", content: "The home page" },
]);

export default function Home() {
  return <div>RFUI Docs <Badge>Test</Badge></div>;
}
