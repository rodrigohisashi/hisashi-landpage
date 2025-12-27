import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Section = styled.section`
  padding: 120px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 80px;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.border});
  }
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
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const BioText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 32px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  transition: border-color ${({ theme }) => theme.transitions.default};
`;

const CardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 4px;
    flex-shrink: 0;
  }
`;

const InfoLabel = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textDim};
  margin-bottom: 4px;
`;

const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  a {
    color: inherit;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 24px;
  margin-top: 8px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryGlow};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-2px);
  }
`;

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>{t.about.title}</span>
        </SectionTitle>

        <Grid>
          <div>
            {t.about.bio.map((paragraph, index) => (
              <BioText
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {paragraph.trim()}
              </BioText>
            ))}
          </div>

          <InfoCard
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardTitle>{t.about.info}</CardTitle>

            <InfoItem>
              <FiMapPin size={18} />
              <div>
                <InfoLabel>{t.about.location}</InfoLabel>
                <InfoValue>São Paulo, Brasil</InfoValue>
              </div>
            </InfoItem>

            <InfoItem>
              <FiMail size={18} />
              <div>
                <InfoLabel>{t.about.email}</InfoLabel>
                <InfoValue>
                  <a href="mailto:rodrigohisa@gmail.com">rodrigohisa@gmail.com</a>
                </InfoValue>
              </div>
            </InfoItem>

            <CVButton href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FiDownload size={18} />
              {t.about.downloadCV}
            </CVButton>
          </InfoCard>
        </Grid>
      </Container>
    </Section>
  );
}
