import { GetStaticPaths, GetStaticProps } from 'next';
import { getArticleBySlug, getArticles } from '@/lib/service';
import { Article } from '@/lib/types';
import { PostBlock } from '@/components/PostBlock';

interface ArticlePageProps {
  article: Article;
  relatedArticles: Article[];
}

const ArticlePage = ({ article, relatedArticles }: ArticlePageProps) => {
  if (!article) {
    return <div>Article not found</div>;
  }

  const featuredImageUrl = article.featuredImage?.node?.sourceUrl || '/default-image.jpg'; // Use a default image if none is found

  return (
    <section className="mx-auto py-12 section__padding" style={{ paddingTop: "8rem" }}> {/* Adjust paddingTop as needed */}
      <div className="z-20 text-start">
        <h1 className="text-2xl md:text-4xl mb-4" style={{ fontFamily: "Montserrat-Bold" }}>{article.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{new Date(article.date).toLocaleDateString()}</p>
      </div>
      <div
        className="post-header relative flex flex-col items-center justify-center w-full min-h-[500px] rounded-md"
        style={{
          backgroundImage: `url(${featuredImageUrl})`,
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
        className="post-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>

      <div className="padding__mobile mx-auto py-8 section__padding">
        <div className="flex items-center" style={{ padding: "0 0" }}>
          <p className="mr-4" style={{ width: "300px", fontWeight: "700px", fontSize: "20px" }}>Related Press Releases</p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((relatedArticle) => (
            <PostBlock key={relatedArticle.slug} post={relatedArticle} />
          ))}
        </div>
      </div>
      <div className="flex items-center" style={{ padding: "0 4rem" }}>
        <button className="mr-4 bg-transparent border border-gray-500 rounded-md px-4 py-2" style={{ background: "#1065C2", color: "#fff", width: "200px", fontWeight: "700", fontSize: "16px" }}>All Press Releases</button>
        <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
      </div>
    </section>
  );
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles(100);
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async (context) => {
  const slug = context.params?.slug as string;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  const articles = await getArticles(100);
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.tags?.nodes.some((tag) => article.tags.nodes.map((t) => t.name).includes(tag.name)))
    .slice(0, 3);

  return {
    props: {
      article,
      relatedArticles,
    },
    revalidate: 3600,
  };
};
