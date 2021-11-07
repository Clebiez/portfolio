import Head from 'next/head'
import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function HoHeyUseCase() {
    return (
        <>
            <Head>
                <title>Front-End Developer @ HoHey</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>Front-End Developer @ HoHey</h1>
                <p>
                    HoHey was a Ski resorts comparator imagined by{' '}
                    <a
                        href="https://twitter.com/cheupi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Romain Pichard
                    </a>
                    ,{' '}
                    <a
                        href="https://twitter.com/Jleherpeur"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Jérémy Leherpeur
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://www.linkedin.com/in/kevin-dubourg-586351146/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kevin Dubourg
                    </a>
                </p>
                <p>
                    This project was developed in Angular and Symfony. I worked
                    as a Freelance to develop the front side,{' '}
                    <a
                        href="https://twitter.com/KBizien"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kévin Bizien
                    </a>{' '}
                    was to the design part and Jérémy created the back-end.
                </p>
                <Image
                    alt="HoHey Logo"
                    src="/hohey/logo.png"
                    width="583"
                    height="569"
                    noCard
                    size="xs"
                />
                <h2>From Idea to MVP</h2>
                <p>
                    How can we simply find the ski resort that suits us best?
                    It&apos;s not easy to compare several different and
                    incomplete sources quickly and efficiently. Hohey is born to
                    resolve this issue.
                </p>
                <Image
                    alt="HoHey Home page"
                    src="/hohey/home.jpeg"
                    width="1680"
                    height="952"
                    size="2xl"
                />
                <p>
                    The MVP of this app was to be able to find in one place all
                    informations about ski resorts: Price, activities, services
                    etc. And to be able to compare ski resorts with each other.
                </p>
                <Image
                    alt="Search result page with ski resorts and a map"
                    src="/hohey/searchResult2.png"
                    width="1920"
                    height="1080"
                    size="2xl"
                />
                <p>
                    In the future, HoHey want to become the app to use by
                    allowing you to rent your equipment or book your
                    accomodation directly on the app.
                </p>

                <h2>An Agile Project</h2>
                <p>
                    This project was a startup project, we don&apos;t have a
                    large budget, this means we didn&apos;t have all the time we
                    want to achieve a MVP. In this case, a good project
                    management is essential.
                </p>
                <p>
                    We have to be sure every features we implement inside the
                    product will deserve the product and be essential.
                </p>
                <p>
                    The main question was:{' '}
                    <strong>
                        If we remove this functionality, does the product still
                        make sense?
                    </strong>{' '}
                    If the answer is yes, then this feature is not a part of the
                    MVP.
                </p>
                <Image
                    alt="Page for renting your equipment"
                    src="/hohey/stuffRent.png"
                    width="1680"
                    height="952"
                    size="2xl"
                />
                <h2>My role</h2>
                <p>
                    Jérémy, the back-end developer, was completely able to also
                    work on the front-end part without my help. My tasks were
                    to:
                    <ul className="list-disc pl-10 p-5">
                        <li>
                            Develop a front-end app with{' '}
                            <strong>good foundation</strong>, with isolated
                            modules, services, in a short time.
                        </li>
                        <li>
                            <strong>
                                Develop reusable and good sized components
                            </strong>{' '}
                            that we can integrate as lego bricks on a page to
                            construct it faster.
                        </li>
                    </ul>
                </p>
            </ArticleLayout>
        </>
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
