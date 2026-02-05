import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface AnniversaryNavbarProps {
    activeSection: string;
}

const navItems = [
    { id: 'hero', label: 'होम' },
    { id: 'about', label: 'हमारी कहानी' },
    { id: 'timeline', label: 'समयरेखा' },
    { id: 'messages', label: 'संदेश' },
    { id: 'closing', label: 'आशीर्वाद' }
];

export default function AnniversaryNavbar({ activeSection }: AnniversaryNavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-xl font-serif font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                        23 वर्ष
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-foreground hover:bg-secondary hover:text-foreground'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
                        aria-label={isMobileMenuOpen ? 'मेनू बंद करें' : 'मेनू खोलें'}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t border-border">
                    <div className="px-4 py-2 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-foreground hover:bg-secondary'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
