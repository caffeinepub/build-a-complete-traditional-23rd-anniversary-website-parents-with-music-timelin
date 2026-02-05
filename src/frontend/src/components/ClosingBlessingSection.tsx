import { anniversaryContent } from '../anniversary/content';
import RequiredContent from './RequiredContent';

export default function ClosingBlessingSection() {
    return (
        <section id="closing" className="section-container">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="heading-secondary mb-8">
                    <RequiredContent 
                        value={anniversaryContent.closingSection.heading}
                        fieldPath="closingSection.heading"
                    />
                </h2>
                
                <div className="bg-card border-2 border-accent/30 rounded-lg p-8 sm:p-12 shadow-elegant">
                    <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-serif italic mb-6">
                        "<RequiredContent 
                            value={anniversaryContent.closingBlessing.quote}
                            fieldPath="closingBlessing.quote"
                        />"
                    </p>
                    <p className="text-primary font-semibold">
                        <RequiredContent 
                            value={anniversaryContent.closingBlessing.attribution}
                            fieldPath="closingBlessing.attribution"
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}
