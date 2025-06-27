'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`;

const ProjectsTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const ProjectsDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  flex-wrap: wrap;
`;

const GlassyFilterButton = styled(motion.button)<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  border: 2px solid rgba(200,200,200,0.25);
  background: rgba(255,255,255,0.35);
  color: ${({ theme }) => theme.colors.text.primary};
  backdrop-filter: blur(10px) saturate(180%);
  box-shadow: 0 4px 24px 0 rgba(60,60,100,0.08);
  transition: all ${({ theme }) => theme.transitions.base};
  &:hover, &:focus {
    background: rgba(255,255,255,0.55);
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px) scale(1.03);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

const ProjectCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}20, ${({ theme }) => theme.colors.secondary}20);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ProjectLink = styled(motion.a)`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Next.js and styled-components. Features smooth animations, dark mode, and a blog section.',
    image: '🎨',
    tags: ['Next.js', 'React', 'TypeScript', 'Styled Components'],
    category: 'web',
    liveUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 'task-app',
    title: 'Task Management App',
    description: 'A beautiful task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    image: '📋',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    liveUrl: 'https://taskapp.com',
    githubUrl: 'https://github.com/yourusername/task-app',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    image: '🛒',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    category: 'fullstack',
    liveUrl: 'https://ecommerce.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
    image: '🌤️',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    category: 'web',
    liveUrl: 'https://weather-app.com',
    githubUrl: 'https://github.com/yourusername/weather-app',
  },
  {
    id: 'chat-app',
    title: 'Real-time Chat App',
    description: 'A modern chat application with real-time messaging, file sharing, and video calling capabilities.',
    image: '💬',
    tags: ['React', 'Socket.io', 'WebRTC', 'Express'],
    category: 'fullstack',
    liveUrl: 'https://chat-app.com',
    githubUrl: 'https://github.com/yourusername/chat-app',
  },
  {
    id: 'mobile-app',
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features.',
    image: '💪',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'mobile',
    liveUrl: 'https://fitness-app.com',
    githubUrl: 'https://github.com/yourusername/fitness-app',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'mobile', name: 'Mobile Apps' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <ProjectsTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </ProjectsTitle>
        <ProjectsDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Placeholder
        </ProjectsDescription>
      </ProjectsHeader>

      <FilterSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <GlassyFilterButton
            key={category.id}
            $active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </GlassyFilterButton>
        ))}
      </FilterSection>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <ProjectImage>
              {project.image}
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ProjectLinks>
                <ProjectLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </ProjectLink>
                <ProjectLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
} 