import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-y-8">
        <h1 className="text-primary text-3xl">Hello World</h1>
        <Button>Tekan Aku</Button>
        <Button onClick={() => setTheme("dark")}>
          <Moon size={"icon"} />
        </Button>
        <Button onClick={() => setTheme("light")}>
          <Sun size={"icon"} />
        </Button>
      </main>
    </>
  );
}
