import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import {visit} from "unist-util-visit";

const computedFields = {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    url: {type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}`},
}

export const Doc = defineDocumentType(() => ({
name: "Doc",
filePathPattern: `docs/**/*.mdx`,
contentType: "mdx",
fields: {
    title: {type: "string", required: true},
    description: {type: "string", required: false},
    date: {type: "date", required: false},
},
computedFields
}));

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/content/${doc._raw.flattenedPath}`,
    },
  },
}))

// export default makeSource({
//   contentDirPath: "./content",
//   documentTypes: [Doc],

//   mdx: { remarkPlugins: [[remarkCodeHike, { theme: "material-palenight" }]] },
// })


export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Doc],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        () => (tree) => {
          visit(tree, "element", (node) => {
            if (node.tagName === "code" && node.data && node.data.meta) {
              node.properties.meta = node.data.meta;
            }
          });
        },
      ],
    },
  });