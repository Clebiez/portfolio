import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import ProjectCard from '../components/ProjectCard'
import AvatarFlip from '../components/AvatarFlip'
import MainLayout from '../layouts/MainLayout'

import greenframeImage from '../public/greenframe/analysis.png'
import yousignImage from '../public/yousign/swipe.png'
import play2meetyouImage from '../public/play2meetyou.jpg'
import hoheyImage from '../public/hohey/home.jpeg'
import unicaenImage from '../public/teaching/unicaen.jpg'
import facilitationImage from '../public/facilitation.jpeg'

const Home = () => {
    const { t } = useTranslation('common')
    return (
        <MainLayout>
            <Head>
                <title>{t('meta_title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="m-auto flex flex-col items-center justify-center min-h-screen">
                <main className="w-full m-auto px-5 py-20 flex flex-col items-center justify-center rounded-2xl text-center bg-gray-50 bg-opacity-50">
                    <AvatarFlip />
                    <h1 className="mt-12 text-4xl font-bold font-sans text-gray-800">
                        {t('name')}
                    </h1>
                    <h2 className="mt-4 text-3xl font-bold text-gray-800">
                        {t('title')}
                    </h2>
                    <p className="mt-4 text-xl  text-left">
                        {t('introduction_1')}
                        <br />
                        {t('introduction_2')}
                        <br />
                        {t('introduction_3')}
                    </p>
                    <a
                        href="#mywork"
                        className="flex link-button items-center justify-center mt-8 p-3 px-8 rounded-full text-base bg-green-300 font-sans font-black uppercase text-gray-800 no-underline hover:no-underline hover:text-gray-900 hover:bg-green-400"
                    >
                        📔 {t('my_work.button')}
                    </a>
                </main>
            </div>
            <h2 className="text-center mb-0" id="mywork">
                {t('my_work.title')}
            </h2>
            <div className="max-w-7xl m-auto flex flex-col gap-10 items-center justify-center md:flex-wrap md:flex-row md:justify-evenly md:items-stretch min-h-screen p-4">
                <ProjectCard
                    title={t('projects.greenframe.title')}
                    subtitle={t('projects.greenframe.subtitle')}
                    image={greenframeImage}
                    imageWidth="1479"
                    imageHeight="937"
                    href="use-cases/greenframe"
                    altImage={t('projects.greenframe.alt_image')}
                />
                <ProjectCard
                    title={t('projects.yousign.title')}
                    subtitle={t('projects.yousign.subtitle')}
                    image={yousignImage}
                    imageWidth="2880"
                    imageHeight="1800"
                    href="use-cases/yousign"
                    altImage={t('projects.yousign.alt_image')}
                />
                <ProjectCard
                    title={t('projects.unicaen.title')}
                    subtitle={t('projects.unicaen.subtitle')}
                    image={unicaenImage}
                    imageWidth="1500"
                    imageHeight="850"
                    href="use-cases/teaching"
                    altImage={t('projects.unicaen.alt_image')}
                />
                <ProjectCard
                    title={t('projects.hohey.title')}
                    subtitle={t('projects.hohey.subtitle')}
                    image={hoheyImage}
                    imageWidth="1680"
                    imageHeight="952"
                    href="use-cases/hohey"
                    altImage={t('projects.hohey.alt_image')}
                />
                {/* <ProjectCard
                    title="Play2MeetYou"
                    subtitle="Mobile application to remistify the meeting."
                    image={play2meetyouImage}
                    imageWidth="2500"
                    imageHeight="1250"
                    altImage="Multiple smartphones containing screenshots of Play2MeetYou"
                />
                <ProjectCard
                    title="Facilitation"
                    subtitle="Scrum Master and Facilitator of agile workshops."
                    image={facilitationImage}
                    imageWidth="1050"
                    imageHeight="700"
                    altImage="Screenshot of agile workshop"
                /> */}
            </div>
        </MainLayout>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // Will be passed to the page component as props
        },
    }
}

export default Home
