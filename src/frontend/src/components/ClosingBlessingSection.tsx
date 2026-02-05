import { anniversaryContent } from '../anniversary/content';

export default function ClosingBlessingSection() {
    return (
        <section id="closing" className="section-container">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="heading-secondary mb-8">आशीर्वाद</h2>
                
                <div className="bg-card border-2 border-accent/30 rounded-lg p-8 sm:p-12 shadow-elegant">
                    <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-serif italic mb-6">
                        "{anniversaryContent.closingBlessing.quote}"
                    </p>
                    <p className="text-primary font-semibold">
                        {anniversaryContent.closingBlessing.attribution}
                    </p>
                </div>
                
                <div className="mt-12 text-accent text-6xl">
                    ❤️
                </div>
            </div>
        </section>
    );
}
