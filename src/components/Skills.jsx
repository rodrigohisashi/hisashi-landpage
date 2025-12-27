import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCloud, FiDatabase, FiTool } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.bgSecondary};
  position: relative;
  overflow: hidden;
`;

const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 170, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 170, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 28px;
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 212, 170, 0.03) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);

    &::before {
      opacity: 1;
      animation: ${shimmer} 2s ease-in-out infinite;
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primaryGlow};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const CategoryName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled(motion.span)`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: default;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryGlow};
  }
`;

const skillsData = {
  languages: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C", "C++", "C#"],
  frameworks: ["Spring Boot", "WebFlux", "React", "Node.js", "ASP.NET", "Hibernate", "Tailwind CSS"],
  cloud: ["AWS", "Azure", "Docker", "DataDog", "Kibana", "SonarQube"],
  databases: ["PostgreSQL", "MySQL", "Oracle", "Kafka", "RabbitMQ"],
  tools: ["Git", "GitHub", "Linux", "Maven", "IntelliJ IDEA"],
};

const categoryConfig = {
  languages: { icon: FiCode },
  frameworks: { icon: FiLayers },
  cloud: { icon: FiCloud },
  databases: { icon: FiDatabase },
  tools: { icon: FiTool },
};

function SkillCategory({ category, skills, index }) {
  const { t } = useLanguage();
  const { icon: Icon } = categoryConfig[category];

  return (
    <CategoryCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <CategoryHeader>
        <IconWrapper>
          <Icon size={22} />
        </IconWrapper>
        <CategoryName>{t.skills.categories[category]}</CategoryName>
      </CategoryHeader>

      <SkillsList>
        {skills.map((skill, skillIndex) => (
          <SkillTag
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.03 }}
          >
            {skill}
          </SkillTag>
        ))}
      </SkillsList>
    </CategoryCard>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  const categories = ['languages', 'frameworks', 'cloud', 'databases', 'tools'];

  return (
    <Section id="skills">
      <BackgroundGrid />
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>{t.skills.title}</span>
        </SectionTitle>

        <Grid>
          {categories.map((category, index) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skillsData[category]}
              index={index}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
