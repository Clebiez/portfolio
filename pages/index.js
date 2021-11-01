import Head from 'next/head'

import ProjectCard from '../components/ProjectCard'
import AvatarFlip from '../components/AvatarFlip'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>
                    Clement Le Biez Fullstack Web &amp; Mobile Developer
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="m-auto flex flex-col items-center justify-center min-h-screen">
                <main className="w-full m-auto p-5 flex flex-col items-center justify-center rounded-2xl text-center bg-gray-50 bg-opacity-50">
                    <AvatarFlip />
                    <h1 className="mt-12 text-4xl font-bold font-sans text-gray-800">
                        Clement Le Biez
                    </h1>
                    <h2 className="mt-4 text-3xl font-bold text-gray-800">
                        FullStack Web &amp; Mobile Developer
                    </h2>
                    <p className="mt-4 text-xl  text-left">
                        Fullstack web and mobile developer with 6 years of
                        experience, I&apos;m passionated about developing
                        accessible, secure and powerful applications.
                        <br />
                        I&apos;m a fan of the agile methodology and I master the
                        design chain of an application from start to finish.
                        <br />
                        From the expression of user needs to front-end and
                        back-end development including the deployment on an
                        automated infrastructure.
                    </p>
                    <a
                        href="#mywork"
                        className="flex items-center justify-center mt-8 p-3 px-8 rounded-full text-base bg-green-300 font-sans font-black uppercase text-gray-800"
                    >
                        📔 Portfolio
                    </a>
                </main>
            </div>
            <h2 className="text-center mb-0" id="mywork">
                Discover my work
            </h2>
            <div className="flex flex-col gap-8 items-center justify-center md:flex-wrap md:flex-row md:justify-evenly md:items-stretch min-h-screen p-4">
                <ProjectCard
                    title="GreenFrame"
                    subtitle="Carbon footprint calculator for applications."
                    image="/greenframe.png"
                    altImage="Screenshot of GreenFrame.io"
                />
                <ProjectCard
                    title="Yousign"
                    subtitle="SaaS Application of electronic signature"
                    image="/yousign.png"
                    href="useCases/yousign"
                    altImage="Screenshot of Yousign Application"
                />
                <ProjectCard
                    title="Play2MeetYou"
                    subtitle="Mobile application to remistify the meeting."
                    image="/play2meetyou.jpg"
                    altImage="Multiple smartphones containing screenshots of Play2MeetYou"
                />
                <ProjectCard
                    title="HoHey"
                    subtitle="Ski resorts comparator"
                    image="/hohey.jpeg"
                    altImage="Screenshot of HoHey homepage"
                />
                <ProjectCard
                    title="Facilitation"
                    subtitle="Scrum Master and Facilitator of agile workshops."
                    image="/facilitation.jpeg"
                    altImage="Screenshot of agile workshop"
                />
                <ProjectCard
                    title="Teaching"
                    subtitle="Teaching in Agile Project Management."
                    image="/unicaen.png"
                    altImage="Logo of University of Caen, Normandy"
                />
            </div>
        </MainLayout>
    )
}
