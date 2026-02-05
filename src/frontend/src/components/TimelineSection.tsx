import { anniversaryContent } from '../anniversary/content';
import RequiredContent from './RequiredContent';

export default function TimelineSection() {
    return (
        <section id="timeline" className="section-container">
            <div className="max-w-4xl mx-auto">
                <h2 className="heading-secondary text-center mb-16">
                    <RequiredContent 
                        value={anniversaryContent.timelineSection.heading}
                        fieldPath="timelineSection.heading"
                    />
                </h2>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-px" />
                    
                    <div className="space-y-12">
                        {anniversaryContent.timeline.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex items-start ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-ml-2" />
                                
                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-sm font-bold text-accent mb-2">
                                            <RequiredContent 
                                                value={milestone.year}
                                                fieldPath={`timeline[${index}].year`}
                                            />
                                        </div>
                                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                                            <RequiredContent 
                                                value={milestone.title}
                                                fieldPath={`timeline[${index}].title`}
                                            />
                                        </h3>
                                        <p className="text-muted-foreground">
                                            <RequiredContent 
                                                value={milestone.description}
                                                fieldPath={`timeline[${index}].description`}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
