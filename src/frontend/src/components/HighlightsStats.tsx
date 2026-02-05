import { computedStats } from '../anniversary/content';

export default function HighlightsStats() {
    const stats = [
        { label: 'साथ बिताए वर्ष', value: computedStats.years },
        { label: 'महीने', value: computedStats.months },
        { label: 'दिन', value: computedStats.days.toLocaleString() },
        { label: 'यादें', value: computedStats.memories }
    ];

    return (
        <section id="highlights" className="section-container bg-secondary/20">
            <div className="max-w-5xl mx-auto">
                <h2 className="heading-secondary text-center mb-12">संख्या में</h2>
                
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
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
