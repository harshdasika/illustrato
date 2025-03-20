// src/app/faq/page.tsx
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { AuthModal } from "@/components/auth/auth-modal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <head>
        <title>FAQ - illustrato</title>
        <meta name="description" content="Frequently Asked Questions about Illustrato" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* Navigation Bar */}
      <header className="w-full p-4 bg-transparent absolute top-0 z-10">
        <nav className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <Link href="/explore">Explore</Link>
          </Button>

          <Button variant="ghost" className="text-white hover:bg-white/20">
            <Link href="/">Home</Link>
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
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center pt-24 pb-12 px-4 relative">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full bg-[#0a1929]">
          {/* Optional subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081623] to-[#0c1f38]/90"></div>
        </div>

        {/* Content Container */}
        <div className="z-10 w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-white/20">
              <AccordionTrigger className="text-white hover:text-white/80 text-lg py-4">
                What is illustrato?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Illustrato is a community-driven digital gallery where creators can showcase their artwork, 
                including AI-generated creations. Our platform enables artists to share, discover, and 
                connect with a global community of art enthusiasts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-white/20">
              <AccordionTrigger className="text-white hover:text-white/80 text-lg py-4">
                How do I create an account?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Creating an account is simple! Click the &quot;Sign Up&quot; button in the navigation bar, 
                fill in your details, and follow the verification steps. Once completed, you&apos;ll have 
                full access to all illustrato features, including uploading your own creations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-white/20">
              <AccordionTrigger className="text-white hover:text-white/80 text-lg py-4">
                What types of art can I share?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Illustrato welcomes all forms of visual art, including digital illustrations, AI-generated 
                artwork, photography, 3D renders, animations, and more. We encourage creativity and 
                innovation, though all content must adhere to our community guidelines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-white/20">
              <AccordionTrigger className="text-white hover:text-white/80 text-lg py-4">
                Are AI-generated artworks allowed?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Yes! We embrace AI-generated art as a valid and exciting medium. We simply ask that you 
                properly label AI-assisted or AI-generated works, and provide information about the tools 
                or models used when possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-white/20">
              <AccordionTrigger className="text-white hover:text-white/80 text-lg py-4">
                How do I report inappropriate content?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                If you encounter content that violates our community guidelines, please use the &quot;Report&quot; 
                button available on every artwork page. Our moderation team reviews all reports promptly 
                and takes appropriate action to maintain a safe and respectful environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-white/20">
              <AccordionTrigger className="text-white hover:text-white/80 text-lg py-4">
                Is illustrato free to use?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Basic membership is completely free, allowing you to browse, share, and interact with the 
                community. We also offer Premium and Pro membership tiers with additional features like 
                increased storage, analytics, and monetization options for artists who want to grow their presence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b border-white/20">
              <AccordionTrigger className="text-white hover:text-white/80 text-lg py-4">
                Who owns the rights to artwork I upload?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                You retain all rights to your original artwork. We make no claim to ownership
                of your creations. Please review our Terms of Service for complete details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-white/80 mb-4">Still have questions? We&apos;re here to help!</p>
            <Button className="bg-white text-[#0a1929] hover:bg-white/80">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
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