// src/components/auth/auth-modal.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGoogle, FaDiscord, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface AuthModalProps {
  type: 'login' | 'signup';
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ type, isOpen, onClose }: AuthModalProps) => {
  if (!isOpen) return null;

  const title = type === 'login' ? 'Log In' : 'Sign Up';
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <Card 
        className="w-full max-w-md bg-card shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800"
          aria-label="Close modal"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FaGoogle className="h-4 w-4" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FaDiscord className="h-4 w-4" />
            Continue with Discord
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FaXTwitter className="h-4 w-4" />
            Continue with X
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
