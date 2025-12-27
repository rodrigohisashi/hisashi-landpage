import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 0.3s ease;

  ${({ $scrolled }) => $scrolled && `
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(38, 38, 38, 0.5);
  `}
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: -0.02em;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s;
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: rgba(255, 255, 255, 0.03);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 16px;
    right: 16px;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    transform: scaleX(0);
    transition: transform 0.3s;
    border-radius: 2px;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LangToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  .active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .divider {
    width: 1px;
    height: 12px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }

  span {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all 0.3s;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $open }) => $open ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }
    &:nth-child(2) {
      opacity: ${({ $open }) => $open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ $open }) => $open ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileNavLink = styled.a`
  padding: 12px 16px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 212, 170, 0.1);
  }
`;

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Container>
          <Logo href="#hero">
            RHT<span>.</span>
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <RightSection>
            <LangToggle onClick={toggleLanguage}>
              <span className={language === 'pt' ? 'active' : ''}>PT</span>
              <span className="divider" />
              <span className={language === 'en' ? 'active' : ''}>EN</span>
            </LangToggle>

            <MobileMenuBtn $open={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
              <span />
              <span />
              <span />
            </MobileMenuBtn>
          </RightSection>
        </Container>
      </Nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}
