import fs from "fs";
import path from "path";
import type { Edition } from "@/types/edition";

const EDITIONS_DIR = path.join(process.cwd(), "content/editions");

export function getAllEditions(): Edition[] {
  const files = fs.readdirSync(EDITIONS_DIR).filter((f) => f.endsWith(".json"));
  const editions = files
    .map((f) => {
      const raw = fs.readFileSync(path.join(EDITIONS_DIR, f), "utf-8");
      return JSON.parse(raw) as Edition;
    })
    .filter((e) => e.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return editions;
}

export function getEditionById(id: string): Edition | null {
  const filePath = path.join(EDITIONS_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Edition;
}

export function getLatestEdition(): Edition | null {
  const all = getAllEditions();
  return all[0] ?? null;
}

export function formatEditionDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
