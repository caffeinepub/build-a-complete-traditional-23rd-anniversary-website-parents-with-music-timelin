import SafeImage from './SafeImage';

export default function DecorativeDivider() {
    return (
        <div className="w-full flex justify-center py-8">
            <SafeImage
                src="/assets/generated/divider-ornate.dim_1600x200.png"
                alt=""
                className="w-full max-w-2xl h-auto opacity-30"
                style={{ maxHeight: '80px', objectFit: 'contain' }}
                context="DecorativeDivider"
                loading="eager"
            />
        </div>
    );
}
