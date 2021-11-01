import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ title, subtitle, image, altImage, href }) => {
    return (
        <div className="card flex flex-col justify-start my-12 bg-white shadow-2xl rounded-xl overflow-hidden">
            <Link href={href} passHref>
                <a>
                    <div className="w-full">
                        {image && (
                            <Image
                                src={image}
                                alt={altImage}
                                width="700"
                                height="350"
                                layout="responsive"
                            />
                        )}
                    </div>
                    <div className="flex flex-col justify-start w-full p-2 md:p-6 z-10">
                        <h2 className="text-xl md:text-3xl font-sans font-extrabold">
                            {title}
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
                    max-width: 700px;
                }
            `}</style>
        </div>
    )
}

ProjectCard.defaultProps = {
    href: '',
}

export default ProjectCard
