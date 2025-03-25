import Sidebar from "@/components/Sidebar/Sidebar";
import { Button, Heading } from "@/ui";

export default function Home() {
  return (
    <div>
      <Heading>test</Heading>
      <Button variant="primary" size="sm">
        primary
      </Button>
      <Button variant="secondary" size="md">
        secondary
      </Button>
      <Button variant="outline" size="lg">
        outline
      </Button>
      <Sidebar />
    </div>
  );
}
