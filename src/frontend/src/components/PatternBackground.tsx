export default function PatternBackground() {
    return (
        <div
            className="fixed inset-0 -z-10 opacity-[0.03]"
            style={{
                backgroundImage: 'url(/assets/generated/anniv-pattern-tile.dim_1024x1024.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '512px 512px'
            }}
        />
    );
}
