import { anniversaryContent } from '../anniversary/content';

export default function HeroSection() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
            <div className="section-container text-center">
                <h1 className="heading-primary mb-6 animate-fade-in">
                    {anniversaryContent.parentsNames.partner1}
                    <span className="text-accent mx-4">&</span>
                    {anniversaryContent.parentsNames.partner2}
                </h1>
                
                <div className="text-2xl sm:text-3xl font-serif text-primary mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {anniversaryContent.anniversaryYear} वर्षों की साथ का जश्न
                </div>
                
                <p className="text-elegant max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    {anniversaryContent.welcomeNote}
                </p>
            </div>
        </section>
    );
}
