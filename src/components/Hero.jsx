import { useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 170, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 170, 0.5); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 170, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 170, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: 0 24px;
`;

const PhotoWrapper = styled(motion.div)`
  margin-bottom: 32px;
`;

const Photo = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gradient};
    z-index: -1;
    animation: ${glow} 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.bg};
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.bg};
  }
`;

const PhotoFallback = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TitleWrapper = styled(motion.div)`
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: 500;
  margin-bottom: 16px;
  min-height: 2.5rem;
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 500px;
  margin: 0 auto 40px;
  line-height: 1.7;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 212, 170, 0.2);
  }
`;

const ScrollIndicator = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/rodrigohisashi', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rodrigo-hisashi-takeuti/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rodrigohisa@gmail.com', label: 'Email' },
];

export default function Hero() {
  const { t, language } = useLanguage();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: false,
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      color: { value: '#00d4aa' },
      links: {
        color: '#00d4aa',
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: {
        value: 60,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  const titles = language === 'pt'
    ? ['Engenheiro de Software Back-End', 1500, 'Desenvolvedor Java & Spring', 1500, 'Especialista em APIs', 1500]
    : ['Back-End Software Engineer', 1500, 'Java & Spring Developer', 1500, 'API Specialist', 1500];

  return (
    <HeroSection id="hero">
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{ width: '100%', height: '100%' }}
        />
      </ParticlesContainer>

      <GridOverlay />

      <Content>
        <PhotoWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Photo>
            <img
              src="/foto.jpg"
              alt="Rodrigo Hisashi Takeuti"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <PhotoFallback style={{ display: 'none' }}>RH</PhotoFallback>
          </Photo>
        </PhotoWrapper>

        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rodrigo Hisashi Takeuti
        </Name>

        <TitleWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GradientText>
            <TypeAnimation
              sequence={titles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </GradientText>
        </TitleWrapper>

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.hero.subtitle}
        </Subtitle>

        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <SocialLink
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={22} />
            </SocialLink>
          ))}
        </SocialLinks>

        <ScrollIndicator
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span>{t.hero.scroll}</span>
          <FiArrowDown size={20} />
        </ScrollIndicator>
      </Content>
    </HeroSection>
  );
}
