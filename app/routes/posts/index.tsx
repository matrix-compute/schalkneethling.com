import { Link, LinksFunction, useLoaderData } from "remix";

import { Card, links as CardStyles } from "~/components/organisms/card";
import { getPosts } from "~/posts";
import type { Post } from "~/posts";

import styles from "~/styles/posts/index.css";

export const links: LinksFunction = () => [
  ...CardStyles(),
  { rel: "stylesheet", href: styles },
];

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData();
  return (
    <div className="standard-layout">
      <h1>My posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <Card type="listItem" key={post.slug}>
            <h3>
              <Link to={post.slug}>{post.title}</Link>
            </h3>
            <p>{post.description}</p>
          </Card>
        ))}
      </ul>
    </div>
  );
}
