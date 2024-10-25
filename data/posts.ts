// data/posts.ts
import { Post } from '../lib/types';

export const posts: Post[] = [
    {
      slug: "first-press-release",
      title: "Company Announces New Product Launch",
      content: "<p>We are excited to announce the launch of our newest product line...</p>",
      featuredImage: "images/contact.png",
      date: "2024-01-15"
    },
    {
      slug: "second-press-release",
      title: "Quarterly Results Exceed Expectations",
      content: "<p>Our Q4 2023 results showed remarkable growth...</p>",
      featuredImage: "/images/quarterly-results.jpg",
      date: "2024-02-01"
    },
    {
      slug: "third-press-release",
      title: "New Partnership Announcement",
      content: "<p>We are thrilled to announce our strategic partnership...</p>",
      featuredImage: "/images/partnership.jpg",
      date: "2024-02-15"
    }
  ];
  