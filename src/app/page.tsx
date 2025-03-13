// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Globe } from "@/components/magicui/globe";
import { AuthModal } from "@/components/auth/auth-modal";

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Only render the Globe component after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <head>
        <title>illustrato</title>
        <meta name="description" content="Discover and share art and AI-generated creations on Illustrato" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* Navigation Bar */}
      <header className="w-full p-4 bg-transparent absolute top-0 z-10">
        <nav className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <Link href="/explore">Explore</Link>
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20"
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 text-white border-white/20 hover:bg-white/30"
            onClick={() => setShowSignupModal(true)}
          >
            Sign Up
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <Link href="/faq">FAQ</Link>
          </Button>
        </nav>
      </header>

      {/* Main Content - Hero Image/Animation with Logo */}
      <main className="flex-grow flex flex-col items-center justify-center relative">
        {/* Full-screen background image/animation */}
        <div className="absolute inset-0 w-full h-full bg-[#0a1929]">
          {/* Optional subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081623] to-[#0c1f38]/90"></div>
          
          {/* Globe positioned centrally - only render one instance of the Globe */}
          {mounted && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="size-[800px]" />
            </div>
          )}
        </div>

        {/* Centered Logo */}
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">illustrato</h1>
          <TypingAnimation className="text-xl text-white/90 max-w-xl mx-auto mb-8">
            A community-driven digital gallery
          </TypingAnimation>
          <RainbowButton>
            <Link href="/explore">Get Started</Link>
          </RainbowButton>
        </div>
      </main>
      
      {/* Thin Footer */}
      <footer className="w-full bg-black/90 text-white/80 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div>© 2025 Illustrato</div>
          <div className="flex space-x-10">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>

      {/* Auth Modals */}
      <AuthModal 
        type="login" 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
      <AuthModal 
        type="signup" 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
      />
    </div>
  );
}