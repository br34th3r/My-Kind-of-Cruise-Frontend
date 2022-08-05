import Image from 'next/image'

function PartnerImage({ className, src, alt }) {
    return (
        <div className={className}>
            <Image src={src} alt={alt} />
        </div>
    )
}

export default PartnerImage;