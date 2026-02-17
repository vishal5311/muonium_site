import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title?: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Prevent right-click and download
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        return false;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="relative w-full max-w-6xl mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-10 right-4 md:-top-12 md:-right-12 text-white/70 hover:text-white transition-colors z-[210] bg-black/20 rounded-full p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Title */}
                        {title && (
                            <div className="absolute -top-12 left-0 text-white/90 font-medium">
                                {title}
                            </div>
                        )}

                        {/* Video Container */}
                        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                            <video
                                ref={videoRef}
                                controls
                                controlsList="nodownload nofullscreen"
                                disablePictureInPicture
                                onContextMenu={handleContextMenu}
                                loop
                                className="w-full h-auto"
                                playsInline
                            >
                                <source src={videoUrl} type={videoUrl.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Instructions */}
                        <div className="mt-4 text-center text-white/50 text-sm">
                            Press <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> or click outside to close
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
