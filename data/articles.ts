// data/articles.ts
import { Article } from '../lib/types';

export const articles: Article[] = [
    {
      slug: "industry-analysis",
      title: "2024 Industry Trends Analysis",
      content: "<p>The industry has seen significant shifts in the past year...</p>",
      featuredImage: "/images/trends.jpg",
      date: "2024-01-10",
      tags: ["industry", "analysis", "trends"]
    },
    {
      slug: "technology-update",
      title: "Latest Technology Developments",
      content: "<p>Recent technological advancements have revolutionized...</p>",
      featuredImage: "/images/tech.jpg",
      date: "2024-01-20",
      tags: ["technology", "innovation"]
    },
    {
      slug: "market-insights",
      title: "Market Insights 2024",
      content: "<p>Our analysis of market conditions reveals...</p>",
      featuredImage: "/images/market.jpg",
      date: "2024-02-05",
      tags: ["market", "analysis"]
    }
  ];