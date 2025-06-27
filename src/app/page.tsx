'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredPosts = [
  {
    title: 'Building Delightful User Experiences',
    description: 'How I approach designing and building user interfaces that bring joy to users.',
    date: '2024-01-15',
    tags: ['Design', 'UX'],
    href: '/blog/building-delightful-ux',
  },
  {
    title: 'The Power of CSS-in-JS',
    description: 'Why I love styled-components and how it improves my workflow.',
    date: '2024-01-10',
    tags: ['CSS', 'React'],
    href: '/blog/css-in-js',
  },
];

const featuredProjects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Next.js and styled-components.',
    tags: ['Next.js', 'React', 'TypeScript'],
    href: '/projects/portfolio',
  },
  {
    title: 'Task Management App',
    description: 'A beautiful task management app with drag-and-drop functionality.',
    tags: ['React', 'Node.js', 'MongoDB'],
    href: '/projects/task-app',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function HomePage() {
  return (
    <>
      <HeroSection>
        <MotionDiv {...fadeUp()}>
          👋 Hello, I&apos;m Karthikeyan
        </MotionDiv>

        <MotionH1 {...fadeUp(0.1)}>
          I build delightful digital experiences
        </MotionH1>

        <MotionP {...fadeUp(0.2)}>
          Full-stack developer passionate about solving problems and turning ideas into real products.
          I care about performance, clean design, and making the web better for users. I also write about
          web development, UI, and software engineering.
        </MotionP>

        <CTAContainer {...fadeUp(0.3)}>
          <StyledLink href="/blog">
            <GlassyButton $variant="primary">Read My Blog</GlassyButton>
          </StyledLink>
          <StyledLink href="/projects">
            <GlassyButton>View Projects</GlassyButton>
          </StyledLink>
        </CTAContainer>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle {...fadeUp()}>Featured Blog Posts</SectionTitle>
          <FeaturedGrid>
            {featuredPosts.map((post, index) => (
              <PostCard key={post.title} {...fadeUp(index * 0.1)} href={post.href}>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
                <CardMeta>
                  <span>{formatDate(post.date)}</span>
                  <TagList>
                    {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                  </TagList>
                </CardMeta>
              </PostCard>
            ))}
          </FeaturedGrid>

          <SectionTitle {...fadeUp()}>Featured Projects</SectionTitle>
          <FeaturedGrid>
            {featuredProjects.map((project, index) => (
              <PostCard key={project.title} {...fadeUp(index * 0.1)} href={project.href}>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <TagList>
                  {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagList>
              </PostCard>
            ))}
          </FeaturedGrid>
        </Container>
      </Section>
    </>
  );
}

// Motion Elements
const MotionDiv = styled(motion.div)``;
const MotionH1 = styled(motion.h1)``;
const MotionP = styled(motion.p)``;
const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  color: ${({ theme }) => theme.colors.text.primary};
`;

// Layout Sections
const HeroSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} 0 ${theme.spacing[16]}`};
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// Reusable Glassy Button
const GlassyButton = styled(motion.button)<{ $variant?: 'primary' | 'secondary' }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px) saturate(180%);
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? `
        background: rgba(96, 165, 250, 0.18);
        color: ${theme.colors.primary};
        &:hover {
          background: rgba(96, 165, 250, 0.28);
          color: #fff;
          border-color: ${theme.colors.primary};
          transform: translateY(-2px) scale(1.03);
        }
      `
      : `
        background: rgba(255, 255, 255, 0.15);
        color: ${theme.colors.text.primary};
        &:hover {
          background: rgba(255, 255, 255, 0.25);
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          transform: translateY(-2px) scale(1.03);
        }
      `}
`;

// Section Background
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} 0;
  background: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

// Frosted Glass Post/Project Card
const PostCard = styled(motion.a)`
  display: block;
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: 1.6;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

// Glassy Tag (Now Dark Mode Safe)
const Tag = styled.span`
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.2);

  color: ${({ theme }) => theme.colors.primary};
  background: rgba(96, 165, 250, 0.12);

  @media (prefers-color-scheme: dark) {
    background: rgba(96, 165, 250, 0.18);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
