import NextImage from 'next/image'

const Image = (props) => (
    <figure className="my-8">
        <div
            className={`${
                props?.size ? `max-w-${props.size}` : 'max-w-lg'
            } m-auto ${
                !props.noCard && 'rounded-xl shadow-xl overflow-hidden'
            }`}
        >
            <NextImage {...props} quality={100} layout="responsive" />
        </div>
        <figcaption className="mt-1 italic text-center text-gray-800">
            {props.alt}
        </figcaption>
    </figure>
)

export default Image
