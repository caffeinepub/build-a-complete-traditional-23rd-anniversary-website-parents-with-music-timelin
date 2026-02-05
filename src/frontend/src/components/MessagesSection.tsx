import { anniversaryContent } from '../anniversary/content';

export default function MessagesSection() {
    return (
        <section id="messages" className="section-container bg-secondary/20">
            <div className="max-w-4xl mx-auto">
                <h2 className="heading-secondary text-center mb-12">दिल से संदेश</h2>
                
                <div className="space-y-8">
                    {anniversaryContent.messages.map((message, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-lg p-8 shadow-sm"
                        >
                            <p className="text-lg text-foreground leading-relaxed mb-4 italic">
                                "{message.message}"
                            </p>
                            <p className="text-right text-primary font-semibold">
                                — {message.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
