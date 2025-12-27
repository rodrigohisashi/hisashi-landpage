import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Section = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.bgSecondary};
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
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const Column = styled.div``;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.01em;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 0;
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 212, 170, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(0, 212, 170, 0); }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 100px;
  padding-bottom: 40px;

  &:last-child {
    padding-bottom: 0;
  }

  /* Vertical line */
  &::before {
    content: '';
    position: absolute;
    left: 70px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.border}
    );
  }

  &:last-child::before {
    background: ${({ theme }) => theme.colors.primary};
    bottom: auto;
    height: 24px;
  }

  /* Timeline dot */
  &::after {
    content: '';
    position: absolute;
    left: 62px;
    top: 6px;
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    z-index: 1;
  }

  &:first-child::after {
    background: ${({ theme }) => theme.colors.primary};
    animation: ${glowPulse} 2s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 70px;

    &::before {
      left: 40px;
    }

    &::after {
      left: 32px;
    }
  }
`;

const YearBadge = styled.div`
  position: absolute;
  left: 0;
  width: 54px;
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  &.top {
    top: 2px;
  }

  &.bottom {
    bottom: 40px;
    color: ${({ theme }) => theme.colors.textDim};

    .year {
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }

  .year {
    display: block;
    font-size: 0.95rem;
  }

  .month {
    display: block;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.textDim};
    font-weight: 400;
    margin-top: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 28px;
    font-size: 0.75rem;

    .year {
      font-size: 0.8rem;
    }

    .month {
      display: none;
    }
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 24px;
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -9px;
    top: 10px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid ${({ theme }) => theme.colors.border};
  }

  &::after {
    content: '';
    position: absolute;
    left: -7px;
    top: 11px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 7px solid ${({ theme }) => theme.colors.surface};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateX(4px);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 12px;
`;

const Role = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

const Company = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const Duration = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textDim};
  background: ${({ theme }) => theme.colors.bg};
  padding: 4px 10px;
  border-radius: 6px;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textDim};
  margin-top: 8px;
  margin-bottom: 12px;

  svg {
    flex-shrink: 0;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: 16px;
`;

const Highlights = styled.ul`
  list-style: none;
  margin-bottom: 16px;

  li {
    position: relative;
    padding-left: 16px;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 8px;
    line-height: 1.6;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  padding: 4px 10px;
  background: rgba(0, 212, 170, 0.1);
  border: 1px solid rgba(0, 212, 170, 0.2);
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

function parseDate(period) {
  // Extract start and end dates from period string like "Jan 2022 - Apr 2024" or "Abr 2024 - Presente"
  const parts = period.split(' - ');
  const startPart = parts[0];
  const endPart = parts[1] || parts[0];

  // Parse start date
  const startParts = startPart.split(' ');
  const startMonth = startParts[0];
  const startYear = startParts[1];

  // Handle "Present" / "Presente"
  const isPresent = endPart === 'Present' || endPart === 'Presente';

  let endMonth = '';
  let endYear = '';

  if (!isPresent) {
    const endParts = endPart.split(' ');
    endMonth = endParts[0];
    endYear = endParts[1];
  }

  return {
    startMonth,
    startYear,
    endMonth,
    endYear,
    isPresent
  };
}

function ExperienceItem({ item, index, presentLabel }) {
  const dateInfo = parseDate(item.period);

  return (
    <TimelineItem
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* End date (top) */}
      <YearBadge className="top">
        {dateInfo.isPresent ? (
          <span className="year">{presentLabel}</span>
        ) : (
          <>
            <span className="year">{dateInfo.endYear}</span>
            <span className="month">{dateInfo.endMonth}</span>
          </>
        )}
      </YearBadge>

      {/* Start date (bottom) */}
      <YearBadge className="bottom">
        <span className="year">{dateInfo.startYear}</span>
        <span className="month">{dateInfo.startMonth}</span>
      </YearBadge>

      <Card>
        <CardHeader>
          <Role>{item.role}</Role>
          <Company>{item.company}</Company>
          <Duration>{item.period}</Duration>
        </CardHeader>

        {item.location && (
          <Location>
            <FiMapPin size={14} />
            {item.location}
          </Location>
        )}

        <Description>{item.description}</Description>

        {item.highlights && (
          <Highlights>
            {item.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </Highlights>
        )}

        {item.technologies && (
          <TechTags>
            {item.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </TechTags>
        )}
      </Card>
    </TimelineItem>
  );
}

function EducationItem({ item, index }) {
  const dateInfo = parseDate(item.period);

  return (
    <TimelineItem
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* End date (top) */}
      <YearBadge className="top">
        <span className="year">{dateInfo.endYear || dateInfo.startYear}</span>
        {dateInfo.endMonth && <span className="month">{dateInfo.endMonth}</span>}
      </YearBadge>

      {/* Start date (bottom) */}
      <YearBadge className="bottom">
        <span className="year">{dateInfo.startYear}</span>
        {dateInfo.startMonth && <span className="month">{dateInfo.startMonth}</span>}
      </YearBadge>

      <Card>
        <CardHeader>
          <Role>{item.degree}</Role>
          <Company>{item.institution}</Company>
          <Duration>{item.period}</Duration>
        </CardHeader>

        {item.location && (
          <Location>
            <FiMapPin size={14} />
            {item.location}
          </Location>
        )}

        <Description>{item.description}</Description>
      </Card>
    </TimelineItem>
  );
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>{t.experience.title}</span>
        </SectionTitle>

        <Grid>
          <Column>
            <CategoryHeader>
              <FiBriefcase size={22} />
              <span>{t.experience.professional}</span>
            </CategoryHeader>

            <Timeline>
              {t.experience.jobs.map((item, index) => (
                <ExperienceItem key={item.id} item={item} index={index} presentLabel={t.experience.present} />
              ))}
            </Timeline>
          </Column>

          <Column>
            <CategoryHeader>
              <FiBook size={22} />
              <span>{t.experience.education}</span>
            </CategoryHeader>

            <Timeline>
              {t.experience.educationList.map((item, index) => (
                <EducationItem key={item.id} item={item} index={index} />
              ))}
            </Timeline>
          </Column>
        </Grid>
      </Container>
    </Section>
  );
}
