import { anniversaryContent } from '../anniversary/content';

export default function VideoMontageSection() {
    if (!anniversaryContent.video.enabled) {
        return null;
    }

    return (
        <section id="video" className="section-container">
            <div className="max-w-4xl mx-auto">
                <h2 className="heading-secondary text-center mb-12">वीडियो यादें</h2>
                
                <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-elegant">
                    {anniversaryContent.video.type === 'local' ? (
                        <video
                            controls
                            className="w-full h-full"
                            poster="/assets/gallery/photo-01.jpg"
                        >
                            <source src={anniversaryContent.video.src} type="video/mp4" />
                            आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।
                        </video>
                    ) : (
                        <iframe
                            src={anniversaryContent.video.externalUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="वर्षगांठ वीडियो संकलन"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
