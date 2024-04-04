import { db } from "@/db";
import { redirect } from "next/navigation";

function SnippetCreatePage() {
   async function createSnippet(formData: FormData) {
      "use server";

      const title = formData.get("title") as string;
      const code = formData.get("code") as string;

      await db.snippet.create({
         data: {
            title,
            code,
         },
      });


      redirect("/");
   }


   return (
      <form action={createSnippet}>
         <h3 className="font-bold m-3">Create a snippet</h3>
         <div className="flex flex-col gap-4">
            <div className="flex gap-4">
               <label htmlFor="title" className="w-12">
                  Title
               </label>
               <input name="title" id="title" className="w-full p-2 border rounded" type="text" />
            </div>
            <div className="flex gap-4">
               <label htmlFor="code" className="w-12">
                  Code
               </label>
               <textarea name="code" id="code" className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="rounded p-2 bg-blue-200">
               Create
            </button>
         </div>
      </form>
   );
}

export default SnippetCreatePage;
