'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`;

const BlogTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const BlogDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

const BlogCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[8]};
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const BlogCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: 1.2;
`;

const BlogCardExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const BlogCardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const BlogCardDate = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const BlogCardTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[12]};
`;

const PaginationButton = styled(motion.button)<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.background};
  color: ${({ $active, theme }) => 
    $active ? 'white' : theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

// Mock blog posts data
const blogPosts = [
  {
    id: 'building-delightful-ux',
    title: 'Building Delightful User Experiences',
    excerpt: 'How I approach designing and building user interfaces that bring joy to users. From micro-interactions to thoughtful animations, discover the principles that make digital experiences memorable.',
    date: '2024-01-15',
    tags: ['Design', 'UX', 'Animation'],
    readTime: '5 min read',
  },
  {
    id: 'css-in-js',
    title: 'The Power of CSS-in-JS',
    excerpt: 'Why I love styled-components and how it makes my development workflow better. Exploring the benefits of component-scoped styles and dynamic theming.',
    date: '2024-01-10',
    tags: ['CSS', 'React', 'Styled Components'],
    readTime: '8 min read',
  },
  {
    id: 'nextjs-performance',
    title: 'Optimizing Next.js Performance',
    excerpt: 'Practical tips and techniques for making your Next.js applications lightning fast. From image optimization to code splitting, learn how to build performant web apps.',
    date: '2024-01-05',
    tags: ['Next.js', 'Performance', 'React'],
    readTime: '12 min read',
  },
  {
    id: 'typescript-tips',
    title: 'TypeScript Tips for Better Code',
    excerpt: 'Advanced TypeScript patterns and tips that will make your code more maintainable and type-safe. From utility types to advanced generics.',
    date: '2023-12-28',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    readTime: '10 min read',
  },
  {
    id: 'accessibility-web',
    title: 'Making the Web Accessible',
    excerpt: 'Why accessibility matters and how to build inclusive web applications. Practical guidelines and tools for creating accessible user interfaces.',
    date: '2023-12-20',
    tags: ['Accessibility', 'A11y', 'Web Development'],
    readTime: '15 min read',
  },
];

export default function BlogPage() {
  const currentPage = 1;
  const totalPages = 3;

  return (
    <BlogContainer>
      <BlogHeader>
        <BlogTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </BlogTitle>
        <BlogDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Thoughts, tutorials, and insights about web development, design, and building delightful digital experiences.
        </BlogDescription>
      </BlogHeader>

      <BlogGrid>
        {blogPosts.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
            <BlogCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <BlogCardTitle>{post.title}</BlogCardTitle>
              <BlogCardExcerpt>{post.excerpt}</BlogCardExcerpt>
              <BlogCardMeta>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <BlogCardDate>{formatDate(post.date)}</BlogCardDate>
                  <BlogCardDate>{post.readTime}</BlogCardDate>
                </div>
                <BlogCardTags>
                  {post.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </BlogCardTags>
              </BlogCardMeta>
            </BlogCard>
          </Link>
        ))}
      </BlogGrid>

      <Pagination>
        <PaginationButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <PaginationButton
            key={page}
            $active={page === currentPage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {page}
          </PaginationButton>
        ))}
        
        <PaginationButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentPage === Number(totalPages)}
        >
          Next
        </PaginationButton>
      </Pagination>
    </BlogContainer>
  );
} 