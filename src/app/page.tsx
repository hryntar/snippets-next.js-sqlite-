import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
   const snippets = await db.snippet.findMany();

   const renderedSnippets = snippets.map((snippet) => {
      return (
         <Link href={`/snippets/${snippet.id}`} className="flex justify-between items-center p-2 border rounded" key={snippet.id}>
            <div>{snippet.title}</div>
            <div>View</div>
         </Link>
      );
   });

   return (
      <div>
         <div className="mt-5 flex justify-between items-center">
            <h1 className="text-xl font-bold">Snippets</h1>
            <Link href="snippets/new" className="p-2 border rounded">New</Link>
         </div>
         <div className="grid gap-3 mt-10">{renderedSnippets}</div>
      </div>
   );
}
