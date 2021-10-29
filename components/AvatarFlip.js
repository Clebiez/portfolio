import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const AvatarFlip = () => {
    const ref = useRef()

    useEffect(() => {
        if (ref.current) {
            ref.current.classList.add('flip-container-activated')
            setTimeout(() => {
                ref.current.classList.remove('flip-container-activated')
            }, 1300)
        }
    }, [ref])
    return (
        <>
            <div className="flip-container" ref={ref}>
                <div className="flipper">
                    <div className="front rounded-full shadow-xl w-24 h-24 overflow-hidden">
                        <Image
                            className="rounded-full"
                            src="/avatar.jpeg"
                            width="120"
                            height="120"
                        />
                    </div>
                    <div className="text-6xl back">👋</div>
                </div>
            </div>
            <style jsx>{`
                /* entire container, keeps perspective */
                .flip-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                /*  UPDATED! flip the pane when hovered */
                .flip-container-activated .back,
                .flip-container:hover .back {
                    transform: rotateY(0deg);
                }
                .flip-container-activated .front,
                .flip-container:hover .front {
                    transform: rotateY(180deg);
                }

                .flip-container,
                .front,
                .back {
                    cursor: pointer;
                    width: 120px;
                    height: 120px;
                }

                /* flip speed goes here */
                .flipper {
                    transition: 0.6s;
                    transform-style: preserve-3d;

                    position: relative;
                }

                /* hide back of pane during swap */
                .front,
                .back {
                    backface-visibility: hidden;
                    transition: 0.6s;
                    transform-style: preserve-3d;

                    position: absolute;
                    top: 0;
                    left: 0;
                }

                /*  UPDATED! front pane, placed above back */
                .front {
                    z-index: 2;
                    transform: rotateY(0deg);
                }

                /* back, initially hidden pane */
                .back {
                    transform: rotateY(-180deg);
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    )
}

export default AvatarFlip
