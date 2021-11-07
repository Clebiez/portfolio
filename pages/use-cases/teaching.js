import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'

export default function Teaching() {
    return (
        <>
            <Head>
                <title>Teacher @ University of Caen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>Teacher @ University of Caen</h1>
                <p>
                    Since 2018 I teach agile project management in University Of
                    Caen
                </p>
                <Image
                    alt="Logo of University of Caen"
                    src="/teaching/logo.png"
                    width="1200"
                    height="600"
                    noCard
                    size="xs"
                />

                <h2>Software creativity: Create your startup</h2>
                <p>
                    Software creativity is a particular course because we
                    operate accross 2 different classes, generally with students
                    in Computing Science Master and Marketting Master.
                </p>
                <p>
                    First, participants mix in teams and find an idea of a
                    startup project.
                </p>
                <p>
                    During 2 months, they will works on their idea from a
                    solution to solve to a functional prototype with a business
                    model. They also have to quantify the public interest by
                    sharing surveys on social network or maybe going into the
                    city center by interviewing people.
                </p>
                <p>
                    On my side, I work with students to{' '}
                    <strong>
                        teach them the notion of a Minimal Viable product
                    </strong>
                    , how to determine which feature we have to include in it
                    and <strong>how to construct it faster as possible</strong>.
                    I help them to find the best way to develop a working
                    prototype very quickly.
                </p>
                <p>
                    Generally, to be faster, we use no code tools like{' '}
                    <a href="https://www.adalo.com/">Adalo</a> or{' '}
                    <a href="https://bubble.io/">Bubble</a>.
                </p>
                <p>
                    At the end, we organize a fake crowdfunding public event
                    where participants will pitch their final product to
                    investissors and show a demo of their prototypes.
                </p>
                <p>
                    We also recruit fake business angel, they have 25K € to
                    spent on one or multiple projects, and the final amount
                    recolted will be a part of the final grade.
                </p>
                <p>
                    <strong>
                        Some of our students have decided after this course to
                        continue with their start-up project in the real life.
                    </strong>
                </p>
                <h2>Project Management: The customer-developer relationship</h2>
                <p>
                    In this course I teach with{' '}
                    <a href="https://www.linkedin.com/in/jean-luc-lambert-52a27131">
                        Jean Luc Lambert
                    </a>{' '}
                    to Computed Science students how to manage a project and
                    have a good customer-developer relationship.
                </p>
                <p>
                    The main message is:{' '}
                    <strong>
                        A successful project starts with a thorough
                        understanding of the customer&apos;s needs. So look up
                        from your keyboard !
                    </strong>
                </p>
                <p>
                    This teaching is divided into several stages:
                    <ol className="list-decimal pl-10">
                        <li>
                            Customer explain the need but most informations are
                            missing. Students have to ask all questions needed
                            to extract what the customer really want.
                        </li>
                        <li>
                            Students list and prioritise features in a{' '}
                            <a href="https://www.agilealliance.org/glossary/backlog">
                                product backlog
                            </a>
                            .
                        </li>
                        <li>
                            Then they draw a very simple wireframe by using{' '}
                            <a href="https://marvelapp.com/">Marvel App</a>.
                        </li>
                        <li>
                            They create a Trello to organize the development
                            team. I challenge them on the technical feasibility
                            and push them to discuss a simple and viable
                            solution. This is{' '}
                            <a href="https://en.wikipedia.org/wiki/Planning_poker">
                                Poker planning
                            </a>{' '}
                            like step
                        </li>
                        <li>
                            <strong>Everything is done</strong>, the teaching is
                            now finished and they are ready to develop this
                            product.
                        </li>
                    </ol>
                </p>
                <p>
                    During this teaching, we acted as customers who{' '}
                    <strong>know nothing about computer science</strong>.
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
