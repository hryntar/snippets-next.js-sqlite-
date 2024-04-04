import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
   params: {
      id: string;
   };
}

async function SnippetShowPage(props: SnippetShowPageProps) {
   const snippet = await db.snippet.findFirst({
      where: { id: parseInt(props.params.id) },
   });

   if (!snippet) return notFound();

   return (
      <div className="mt-5">
         <div className="m-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">{snippet.title}</h1>
            <div className="space-x-3">
               <button className="p-2 border rounded">Edit</button>
               <button className="p-2 border rounded">Delete</button>
            </div>
         </div>
         <pre className="p-3 border rounded bg-gray-200 border-gray-400">
            <code>{snippet.code}</code>
         </pre>
      </div>
   );
}

export default SnippetShowPage;
