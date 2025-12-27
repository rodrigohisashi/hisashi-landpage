import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const FooterContainer = styled.footer`
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textDim};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TechStack = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textDim};
  font-family: ${({ theme }) => theme.fonts.mono};

  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/rodrigohisashi', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rodrigo-hisashi-takeuti/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rodrigohisa@gmail.com', label: 'Email' },
];

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Content>
          <Logo href="#hero">
            RHT<span>.</span>
          </Logo>

          <SocialLinks>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <SocialLink
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </SocialLink>
            ))}
          </SocialLinks>

          <Divider />

          <Copyright>
            © {currentYear} Rodrigo Hisashi Takeuti
            <FiHeart size={14} />
            {t.footer.rights}
          </Copyright>

          <TechStack>
            {t.footer.builtWith || 'Built with'} <span>React</span> + <span>Vite</span> + <span>styled-components</span>
          </TechStack>
        </Content>
      </Container>
    </FooterContainer>
  );
}
