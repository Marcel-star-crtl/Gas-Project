import { GetStaticProps, GetStaticPaths } from "next";
import { getPosts, getPostBySlug } from "@/lib/service";
import { PostBlock } from "@/components/PostBlock";

export default function PostDetails({ post, relatedPosts }: { post: any, relatedPosts: any[] }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="mx-auto py-20 section__padding" style={{ paddingTop: "8rem" }}>
      <div className="text-start">
        <h1 className="text-2xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat-Bold" }}>{post.title}</h1>
      </div>
      <div
        className="post-header relative flex flex-col items-center justify-center w-full min-h-[500px] rounded-md"
        style={{
          backgroundImage: post.featuredImage?.node?.sourceUrl ? `url(${post.featuredImage.node.sourceUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute w-full h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        ></div>
      </div>
      <div
        className="padding__mobile post-content w-full md:px-0 mt-20 py-6 text-lg" style={{ padding: "0 4rem 4rem 4rem", lineHeight: "1.3", fontSize: "16px" }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className="mx-auto py-8">
        <div className="padding__mobile flex items-center" style={{ padding: "0 0" }}>
          <p className="mr-4" style={{ width: "200px", fontWeight: "700px", fontSize: "20px" }}>Press Releases</p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
        </div>
        <div className="padding__mobile my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <PostBlock key={post.slug} post={post} />
          ))}
        </div>
      </div>
      <div className="padding__mobile flex items-center" style={{ padding: "0 0" }}>
        <button className="text__btn mr-4 bg-transparent border border-gray-500 rounded-md text-sm px-4 py-2" style={{ background: "#1065C2", color: "#fff", width: "200px", fontWeight: "700", fontSize: "16px" }}>All press releases</button>
        <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(100);

  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const posts = await getPosts(100);
  const relatedPosts = shuffleArray(posts.filter((p: any) => p.slug !== post.slug)).slice(0, 3);

  return {
    props: { post, relatedPosts },
  };
};

// Utility function to shuffle an array
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}






