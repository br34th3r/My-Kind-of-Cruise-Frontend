import PropTypes from 'prop-types'
import Image from 'next/image'

function PartnerImage({ className, src, alt }) {
    return (
        <div className={className}>
            <Image src={src} alt={alt} />
        </div>
    )
}

PartnerImage.propTypes = {
    className: PropTypes.string,
    src: PropTypes.object,
    alt: PropTypes.string
}

export default PartnerImage;