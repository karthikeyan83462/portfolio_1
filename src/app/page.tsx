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
    description: 'Why I love styled-components and how it makes my development workflow better.',
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
    description: 'A beautiful task management application with drag-and-drop functionality.',
    tags: ['React', 'Node.js', 'MongoDB'],
    href: '/projects/task-app',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello, I&apos;m Karthikeyan
        </Greeting>
        
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I build delightful digital experiences
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-stack developer passionate about creating beautiful, accessible, and performant web applications. 
          I write about web development, design, and building things that matter.
        </Subtitle>
        
        <CTAButtons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/blog" passHref>
            <GlassyButton $variant="primary">
              Read My Blog
            </GlassyButton>
          </Link>
          <Link href="/projects" passHref>
            <GlassyButton>
              View Projects
            </GlassyButton>
          </Link>
        </CTAButtons>
      </HeroSection>

      <FeaturedSection>
        <Container>
          <motion.h2
            className={SectionTitleStyled.styledComponentId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Blog Posts
          </motion.h2>
          
          <FeaturedGrid>
            {featuredPosts.map((post, index) => (
              <Link key={post.title} href={post.href} passHref>
                <motion.div
                  className={GlassyCard.styledComponentId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                  <CardMeta>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {post.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </CardMeta>
                </motion.div>
              </Link>
            ))}
          </FeaturedGrid>

          <motion.h2
            className={SectionTitleStyled.styledComponentId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <FeaturedGrid>
            {featuredProjects.map((project, index) => (
              <Link key={project.title} href={project.href} passHref>
                <motion.div
                  className={GlassyCard.styledComponentId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </FeaturedGrid>
        </Container>
      </FeaturedSection>
    </>
  );
} 


const HeroSection = styled.section`
  padding: ${({ theme }) => theme.spacing[20]} 0 ${({ theme }) => theme.spacing[16]};
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
`;

const Greeting = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.1;
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  line-height: 1.6;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`;

const GlassyCard = styled.div`
  background: rgba(255,255,255,0.35);
  backdrop-filter: blur(10px) saturate(180%);
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  border: 1px solid rgba(200,200,200,0.25);
  box-shadow: 0 4px 24px 0 rgba(60,60,100,0.08);
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const GlassyButton = styled(motion.button)<{ $variant?: 'primary' | 'secondary' }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  border: 2px solid rgba(200,200,200,0.25);
  background: rgba(255,255,255,0.35);
  backdrop-filter: blur(10px) saturate(180%);
  box-shadow: 0 4px 24px 0 rgba(60,60,100,0.08);
  color: ${({ theme }) => theme.colors.primary};

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? `
        background: rgba(96, 165, 250, 0.18); /* blue glassy */
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary}40;
        box-shadow: 0 4px 24px 0 ${theme.colors.primary}22;
        &:hover {
          background: rgba(96, 165, 250, 0.28);
          color: #fff;
          border-color: ${theme.colors.primary};
          transform: translateY(-2px) scale(1.03);
        }
      `
      : `
        background: rgba(255,255,255,0.35);
        color: ${theme.colors.text.primary};
        border: 2px solid ${theme.colors.border};
        &:hover {
          background: rgba(255,255,255,0.55);
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
          transform: translateY(-2px) scale(1.03);
        }
      `
  }
`;

const FeaturedSection = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} 0;
  background: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const SectionTitleStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.text.primary};
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

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

