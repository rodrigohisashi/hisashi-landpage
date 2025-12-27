import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Section = styled.section`
  padding: 120px 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.default};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.card};

    &::before {
      transform: scaleX(1);
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const FolderIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primaryGlow};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const ExternalLinks = styled.div`
  display: flex;
  gap: 12px;

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
  transition: color ${({ theme }) => theme.transitions.default};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  flex: 1;
  margin-bottom: 20px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const TechItem = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textDim};
  font-family: ${({ theme }) => theme.fonts.mono};

  &:not(:last-child)::after {
    content: '•';
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.border};
  }
`;

const ViewMoreLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 48px;
  padding: 14px 28px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const projects = [
  {
    id: 1,
    title: "Ito Game",
    description: {
      pt: "Jogo multiplayer online baseado no jogo de cartas Ito. Interface moderna com jogabilidade em tempo real usando WebSockets.",
      en: "Online multiplayer game based on the Ito card game. Modern interface with real-time gameplay using WebSockets.",
    },
    technologies: ["React", "Node.js", "Socket.io", "CSS"],
    github: "https://github.com/rodrigohisashi/ito-game",
    demo: null,
  },
  {
    id: 2,
    title: "Hitster",
    description: {
      pt: "Aplicação web para o jogo de cartas Hitster, facilitando a organização e gameplay entre amigos.",
      en: "Web application for the Hitster card game, facilitating organization and gameplay between friends.",
    },
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/rodrigohisashi/hitster",
    demo: null,
  },
  {
    id: 3,
    title: "Portfolio v1",
    description: {
      pt: "Primeira versão do portfólio pessoal, desenvolvido como projeto de estudos em desenvolvimento web.",
      en: "First version of personal portfolio, developed as a study project in web development.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rodrigohisashi/Curriculo",
    demo: "https://rodrigohisashi.github.io/Curriculo/",
  },
];

function ProjectCard({ project, index }) {
  const { language } = useLanguage();

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <CardHeader>
        <FolderIcon>
          <FiFolder size={24} />
        </FolderIcon>
        <ExternalLinks>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </ExternalLinks>
      </CardHeader>

      <Title>{project.title}</Title>
      <Description>{project.description[language]}</Description>

      <TechList>
        {project.technologies.map((tech) => (
          <TechItem key={tech}>{tech}</TechItem>
        ))}
      </TechList>
    </Card>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>{t.projects.title}</span>
        </SectionTitle>

        <Grid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>

        <ViewMoreLink
          href="https://github.com/rodrigohisashi"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FiGithub size={18} />
          {t.projects.viewMore || 'View more on GitHub'}
        </ViewMoreLink>
      </Container>
    </Section>
  );
}
