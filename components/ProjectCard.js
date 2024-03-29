import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FiArrowRight } from 'react-icons/fi'

const ProjectCard = ({
    title,
    subtitle,
    image,
    imageWidth,
    imageHeight,
    altImage,
    href,
}) => {
    return (
        <div className="group card flex flex-col justify-start my-12 bg-white shadow-xl transition-all hover:shadow-2xl rounded-xl overflow-hidden">
            <Link href={href} passHref>
                <a>
                    <div className="w-full">
                        {image && (
                            <Image
                                src={image}
                                alt={altImage}
                                width={imageWidth}
                                height={imageHeight}
                                layout="intrinsic"
                            />
                        )}
                    </div>
                    <div className="flex flex-col justify-start w-full p-2 md:p-4 z-10">
                        <h2 className="flex items-center gap-2 text-xl md:text-3xl font-sans font-extrabold">
                            {title}{' '}
                            <FiArrowRight className="font-normal transition-all group-hover:ml-5" />
                        </h2>
                        <p className="text-base md:text-xl font-sans font-extrabold text-gray-600">
                            {subtitle}
                        </p>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .card {
                    position: relative;
                    cursor: pointer;
                    width: 90%;
                    max-width: 600px;
                }
            `}</style>
        </div>
    )
}

ProjectCard.defaultProps = {
    href: '',
}

export default ProjectCard
