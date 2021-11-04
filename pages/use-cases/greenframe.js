import Head from 'next/head'
import Link from 'next/link'
import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'
export default function GreenframeUseCase() {
    return (
        <>
            <Head>
                <title>FullStack Developer for GreenFrame</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>FullStack Developer for GreenFrame</h1>
                <p>
                    Since 2021 I started a new job at{' '}
                    <Link href="https://marmelab.com/en/">Marmelab</Link>, a
                    Digital Innovation Studio.
                </p>
                <Image
                    alt="Logo of Marmelab"
                    src="/greenframe/marmelablogo.png"
                    width="8334"
                    height="2432"
                    noCard
                    size="sm"
                />
                <p>
                    I was in charge of GreenFrame development, a SaaS
                    application which allow you to Measure and reduce your
                    website CO2 emissions.
                </p>
                <h2>
                    GreenFrame: Measure and reduce your website CO2 emissions
                </h2>
                <p>
                    GreenFrame is a <strong>SaaS based applications</strong> in
                    order to provide a solution to monitore and track your
                    website emissions directly inside any CI.
                </p>
                <Image
                    alt="Screenshot of Analyses List"
                    src="/greenframe/list.png"
                    width="1477"
                    height="936"
                    size="2xl"
                />
                <p>
                    The carbon footprint of the global digital system is already{' '}
                    <strong>4%</strong> of the global greenhouse gas emissions,
                    and it&apos;s energy consumption rises by{' '}
                    <strong>9%</strong> per year.{' '}
                    <em>
                        <Link
                            href="https://theshiftproject.org/wp-content/uploads/2019/03/Press-kit-Lean-ICT-TSP2019.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            (source: The shift project)
                        </Link>
                    </em>
                </p>
                <p>
                    Developers must change their practices to build sustainable
                    applications. Green IT requires accurate measurements of CO2
                    emissions. This is why GreenFrame was built.
                </p>
                <h2>How it works ?</h2>
                <p>
                    User will run a scenario like an end-to-test by using the
                    GreenFrame CLI. This scenario is based on{' '}
                    <Link href="https://playwright.dev/">Playwright</Link> and
                    perform real user actions on a web application.
                </p>
                <Image
                    alt="Screenshot of a scenario code sample"
                    src="/greenframe/scenario.png"
                    width="650"
                    height="364"
                    noCard
                    size="lg"
                />

                <p>
                    By Running this scenario, we will{' '}
                    <strong>track every metrics</strong> (CPU, Network, RAM,
                    Disk I/O) and we will convert theses metrics in mWh or g eq.
                    Co2 (Grams Equivalent Co2).
                </p>
                <Image
                    alt="Screenshot of a CLI run"
                    src="/greenframe/cli.png"
                    width="913"
                    height="401"
                    size="2xl"
                />
                <p>
                    To measure a run, we execute this scenario inside browser
                    running in a <strong>Docker container</strong>, it will
                    provide a black box to be completely isolated on every other
                    process. We use the <strong>Docker Engine API</strong> to
                    listen stats from this container. After this data are sent
                    to our API and converted into carbon footprint.
                </p>
                <p>
                    In addition, it is possible to retrieve metrics from other
                    containers such as an API, a Redis or a database by
                    listening them during the browser interact with the web app.
                </p>
                <Image
                    alt="Screenshot of an Analysis Page"
                    src="/greenframe/analysis.png"
                    width="1479"
                    height="937"
                    size="2xl"
                />
                <h2>From Design to Deployment</h2>
                <p>
                    GreenFrame is a project inside Marmelab. We don&amp;t have a
                    Design Team or a DevOps. During this development we were
                    charge to design the UI of the application, develop it with
                    <strong>NextJS</strong> for the App and{' '}
                    <strong>NodeJS</strong> for the CLI and the API. And deploy
                    it on a AWS stack configured by Terraform.
                </p>
                <p>
                    Obviously, we take into account the design sobriety and
                    eco-design practices in the aim of reducing our own
                    emissions. This is why{' '}
                    <strong>GreenFrame was monitored with GreenFrame</strong> !
                </p>
                <p>
                    I learned a lot here and it was a challenging project. For
                    example how achieving a feature in the shortest possible
                    time without compromising the quality of the application.
                </p>
            </ArticleLayout>
        </>
    )
}
