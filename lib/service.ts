import { Post, Article } from './types';

async function fetchAPI(query: string, variables: Record<string, any>) {
  const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch API');
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map((error: any) => error.message).join(', '));
  }

  return json.data;
}

export async function getPosts(limit: number): Promise<Post[]> {
  const data = await fetchAPI(
    `query GetPosts($limit: Int) {
      posts(first: $limit) {
        nodes {
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
        }
      }
    }`,
    { limit }
  );

  return data?.posts?.nodes || [];
}


export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await fetchAPI(
    `query GetPostBySlug($slug: String!) {
      postBy(slug: $slug) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        slug
        tags {
          nodes {
            name
          }
        }
      }
    }`,
    { slug }
  );

  return data?.postBy || null;
}

export async function getArticles(limit: number): Promise<Article[]> {
  const data = await fetchAPI(
    `query GetArticles($limit: Int) {
      articles(first: $limit) {
        nodes {
          date
          title
          slug
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }`,
    { limit }
  );

  return data?.articles?.nodes || [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const data = await fetchAPI(
    `query GetArticleBySlug($slug: String!) {
      articleBy(slug: $slug) {
        date
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }`,
    { slug }
  );

  return data?.articleBy || null;
}