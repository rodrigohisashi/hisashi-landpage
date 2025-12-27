import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiSend } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Section = styled.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(0, 212, 170, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Content = styled(motion.div)`
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  max-width: 500px;
  margin: 0 auto 40px;
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const EmailButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 32px;
  background: ${({ theme }) => theme.colors.gradient};
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.bg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.glowStrong};

    &::before {
      left: 100%;
    }
  }

  svg:last-child {
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  &:hover svg:last-child {
    transform: translate(4px, -4px);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 40px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }

  span {
    color: ${({ theme }) => theme.colors.textDim};
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  svg {
    flex-shrink: 0;
  }
`;

const Decoration = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  opacity: 0.3;
  animation: ${float} 6s ease-in-out infinite;

  &:nth-child(1) {
    top: 10%;
    left: 5%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    bottom: 10%;
    right: 5%;
    width: 150px;
    height: 150px;
    animation-delay: 2s;
  }
`;

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com/rodrigohisashi', username: '@rodrigohisashi' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/rodrigo-hisashi-takeuti/', username: 'Rodrigo Hisashi' },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact">
      <BackgroundGlow />
      <Decoration
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <Decoration
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>{t.contact.title}</span>
        </SectionTitle>

        <Content
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Subtitle>{t.contact.subtitle}</Subtitle>
          <Description>{t.contact.description}</Description>

          <EmailButton
            href="mailto:rodrigohisa@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiSend size={20} />
            {t.contact.email}
            <FiArrowUpRight size={18} />
          </EmailButton>

          <Divider>
            <span>{t.contact.or}</span>
          </Divider>

          <SocialLinks>
            {socialLinks.map(({ name, icon: Icon, href, username }) => (
              <SocialLink
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} />
                {username}
              </SocialLink>
            ))}
          </SocialLinks>
        </Content>
      </Container>
    </Section>
  );
}
