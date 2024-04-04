import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";

interface SnippetEditPageProps {
   params: {
      id: string;
   };
}

async function SnippetEditPage(props: SnippetEditPageProps) {
   const id = parseInt(props.params.id);
   const snippet = await db.snippet.findFirst({
      where: { id },
   });

   if (!snippet) {
      notFound();
   }

   return <div> 
      <SnippetEditForm snippet={snippet} />
   </div>;
}

export default SnippetEditPage;
