import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
   params: {
      id: string
   }
}

async function SnippetShowPage(props: SnippetShowPageProps) {

   const snippet = await db.snippet.findFirst({
      where: { id: parseInt(props.params.id) }
   })

   if (!snippet) return notFound();
   
   return (
      <div>
         {snippet.title}
      </div>
   );
}

export default SnippetShowPage;