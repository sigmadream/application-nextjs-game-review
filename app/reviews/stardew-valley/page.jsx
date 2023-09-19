import { readFile } from "node:fs/promises";
import Heading from "@/components/Heading";

export default async function StardewValleyPage() {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf8");
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <p> {text}</p>
    </>
  );
}
