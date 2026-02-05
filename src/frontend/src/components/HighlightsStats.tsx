import { computedStats, anniversaryContent } from '../anniversary/content';
import RequiredContent from './RequiredContent';

export default function HighlightsStats() {
    const stats = [
        { label: anniversaryContent.highlights.stats.yearsLabel, value: computedStats.years, fieldPath: 'highlights.stats.yearsLabel' },
        { label: anniversaryContent.highlights.stats.monthsLabel, value: computedStats.months, fieldPath: 'highlights.stats.monthsLabel' },
        { label: anniversaryContent.highlights.stats.daysLabel, value: computedStats.days.toLocaleString(), fieldPath: 'highlights.stats.daysLabel' },
        { label: anniversaryContent.highlights.stats.memoriesLabel, value: computedStats.memories, fieldPath: 'highlights.stats.memoriesLabel' }
    ];

    return (
        <section id="highlights" className="section-container bg-secondary/20">
            <div className="max-w-5xl mx-auto">
                <h2 className="heading-secondary text-center mb-12">
                    <RequiredContent 
                        value={anniversaryContent.highlights.heading}
                        fieldPath="highlights.heading"
                    />
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                                <RequiredContent 
                                    value={stat.label}
                                    fieldPath={stat.fieldPath}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
