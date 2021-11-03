import NextImage from 'next/image'

const Image = (props) => (
    <figure className="my-8">
        <div
            className={`${
                props?.size === 'xs'
                    ? 'max-w-xs'
                    : props?.size === 'sm'
                    ? 'max-w-sm'
                    : props?.size === 'md'
                    ? 'max-w-md'
                    : props?.size === 'xl'
                    ? 'max-w-xl'
                    : props?.size === '2xl'
                    ? 'max-w-2xl'
                    : 'max-w-lg'
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
