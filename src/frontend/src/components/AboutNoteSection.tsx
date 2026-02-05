import { anniversaryContent } from '../anniversary/content';

export default function AboutNoteSection() {
    return (
        <section id="about" className="section-container">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="heading-secondary mb-8">हमारी कहानी</h2>
                <p className="text-elegant leading-loose">
                    {anniversaryContent.aboutNote}
                </p>
            </div>
        </section>
    );
}
