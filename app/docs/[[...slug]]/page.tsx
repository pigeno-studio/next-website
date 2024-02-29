import { MDXContent } from "@/components/mdx-content";
import { code } from "@nextui-org/theme";
import { allDocs, Doc } from "contentlayer/generated"
import { notFound } from "next/navigation";
interface DocPageProps {
  params: {
    slug: string[];
  };
}
interface Route {
  key?: string;
  title?: string;
  subtitle?: string;
  section?: string;
  heading?: boolean;
  keywords?: string;
  iconSrc?: string;
  defaultOpen?: boolean;
  path?: string;
  routes?: Route[];
  updated?: boolean;
  newPost?: boolean;
  comingSoon?: boolean;
}
async function getDocFromParams({params}: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  // const headings = getHeadings(doc?.body.raw);

  const currentRoute: Route = {
    key: doc?._id,
    title: doc?.title,
    path: `/${doc?._raw?.sourceFilePath}`,
  };

  return {doc,  currentRoute};
}
// export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
//   return allDocs.map((doc) => ({
//     slug: doc.slugAsParams.split("/"),
//   }));
// }


export default async function DocsPage({params}: DocPageProps) {
  const {doc, currentRoute} = await getDocFromParams({params});

  if (!doc) {
    notFound();
  }
	return (
    <>
      <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
        <div className="w-full prose prose-neutral"> 
          <MDXContent code={doc.body.code} />
        </div>
      </div>
    </>

	);
}