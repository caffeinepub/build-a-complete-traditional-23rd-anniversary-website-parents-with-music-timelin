import { useEffect, useState } from 'react';
import AnniversaryNavbar from './components/AnniversaryNavbar';
import PatternBackground from './components/PatternBackground';
import HeroSection from './components/HeroSection';
import AboutNoteSection from './components/AboutNoteSection';
import HighlightsStats from './components/HighlightsStats';
import TimelineSection from './components/TimelineSection';
import MessagesSection from './components/MessagesSection';
import VideoMontageSection from './components/VideoMontageSection';
import ClosingBlessingSection from './components/ClosingBlessingSection';
import DecorativeDivider from './components/DecorativeDivider';
import { anniversaryContent } from './anniversary/content';

function App() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'highlights', 'timeline', 'messages', 'closing'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen relative">
            <PatternBackground />
            
            <AnniversaryNavbar activeSection={activeSection} />
            
            <main>
                <HeroSection />
                
                <DecorativeDivider />
                
                <AboutNoteSection />
                
                <HighlightsStats />
                
                <DecorativeDivider />
                
                <TimelineSection />
                
                <DecorativeDivider />
                
                <MessagesSection />
                
                {anniversaryContent.video.enabled && (
                    <>
                        <DecorativeDivider />
                        <VideoMontageSection />
                    </>
                )}
                
                <DecorativeDivider />
                
                <ClosingBlessingSection />
            </main>
            
            <footer className="bg-secondary/30 border-t border-border py-8">
                <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
                    <p>© 2026. <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">caffeine.ai</a> का उपयोग करके ❤️ के साथ बनाया गया</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
