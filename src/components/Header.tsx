'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useThemeMode } from './ThemeContext';

const HEADER_HEIGHT = '80px';

const HeaderContainer = styled.header<{
  $scrolled: boolean;
}>`
  position: fixed;
  top: ${({ $scrolled }) => ($scrolled ? '0' : '24px')};
  left: 0;
  width: 100%;
  z-index: 100;
  height: ${HEADER_HEIGHT};
  padding: 0;
  transition: background 0.3s, border 0.3s, top 0.3s, backdrop-filter 0.3s;
  ${({ $scrolled }) =>
    $scrolled
      ? `backdrop-filter: blur(8px) saturate(180%);
         -webkit-backdrop-filter: blur(8px) saturate(180%);`
      : 'backdrop-filter: none; -webkit-backdrop-filter: none;'}
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  align-items: center;

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    /* background: rgba(24, 24, 27, 0.6); */
  }

  /* If you want to use theme mode instead of media query: */
  /*
  ${({ theme }) =>
    (theme.mode as string) === 'dark' &&
    `
      background: rgba(24, 24, 27, 0.6);
    `
  }
  */
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Logo = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(motion.div)`
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.base};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.base};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const MenuLine = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.base};
  transform-origin: center;

  &:nth-child(1) {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  z-index: 99;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLink = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.base};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeSwitchButton = styled.button`
  margin-left: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { mode, toggle } = useThemeMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Nav>
        <Link href="/" passHref>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Karthikeyan
          </Logo>
        </Link>
        <div style={{ flex: 1 }} />
        <NavLinks>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <NavLink
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </NavLink>
            </Link>
          ))}
          <ThemeSwitchButton onClick={toggle} aria-label="Toggle dark mode">
            {mode === 'dark' ? '🌞' : '🌙'}
          </ThemeSwitchButton>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <MenuLine $isOpen={isMobileMenuOpen} />
          <MenuLine $isOpen={isMobileMenuOpen} />
          <MenuLine $isOpen={isMobileMenuOpen} />
        </MobileMenuButton>
      </Nav>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href} passHref>
              <MobileNavLink
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </MobileNavLink>
            </Link>
          ))}
          <ThemeSwitchButton onClick={toggle} aria-label="Toggle dark mode">
            {mode === 'dark' ? '🌞' : '🌙'}
          </ThemeSwitchButton>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
} 