import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXProvider } from "@mdx-js/react";
import MDX from "@mdx-js/runtime";
import components from "../components/MDXComponentMap";
import { folderPath, url_list } from "../utils/getFilePaths";

type PostProps = {
  mdx: string;
  metaInformation: string;
};

const Post: React.FC<PostProps> = (props) => {
  return (
    <MDXProvider components={{}}>
      <MDX components={components}>{props.mdx}</MDX>
    </MDXProvider>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const filePath = path.join(folderPath, `${props.params.slug}.mdx`);
  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);

  return {
    props: {
      mdx: content,
      metaInformation: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: url_list.map((u) => ({ params: { slug: u } })),
    fallback: false,
  };
};

export default Post;
