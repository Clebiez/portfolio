import NextImage from 'next/image'

const Image = ({size, noCard, ...props}) => (
    <figure className="my-8">
        <div
            className={`${
                size === 'xs'
                    ? 'max-w-xs'
                    : size === 'sm'
                    ? 'max-w-sm'
                    : size === 'md'
                    ? 'max-w-md'
                    : size === 'xl'
                    ? 'max-w-xl'
                    : size === '2xl'
                    ? 'max-w-2xl'
                    : 'max-w-lg'
            } m-auto ${
                !noCard && 'rounded-xl shadow-xl overflow-hidden'
            }`}
        >
            <NextImage {...props} quality={60} layout="responsive" />
        </div>
        <figcaption className="mt-1 italic text-center text-gray-800">
            {props.alt}
        </figcaption>
    </figure>
)

export default Image
