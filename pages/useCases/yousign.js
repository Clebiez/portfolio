import Head from 'next/head'
import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'
export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Clement Le Biez Fullstack Web &amp; Mobile Developer
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>Lead Front-end Developer @ Yousign</h1>
                <p>
                    Yousign is a startup founded in 2013, they have now more
                    than 100 employees now but when I started in 2016,{' '}
                    <strong>I was the 6th !</strong>
                </p>
                <Image
                    alt="Logo of Yousign"
                    src="/yousign/logo.png"
                    width="8334"
                    height="2432"
                    noCard
                    size="sm"
                />
                <h2>Yousign: Signature Electronic SaaS application</h2>
                <p>
                    Yousign is company which provide{' '}
                    <strong>SaaS based applications</strong> in order simplify
                    and make faster electronic signature of all kinds of
                    documents.
                    <br />
                    From School to Banks or Insurances. All companies have to
                    sign documents !
                </p>
                <Image
                    alt="Screenshot of someone signing a document with Yousign"
                    src="/yousign/swipe.png"
                    width="2880"
                    height="1800"
                />
                <p>
                    When I started at Yousign, I was the first front-end
                    developer and everything was to built.
                    <br />
                    It was a very exciting and challenging job to designing and
                    construct the whole front-end architecture during almost 5
                    years.
                </p>
                <h2>User Centric Experience</h2>
                <p>
                    To provide the most experience on our applications, we
                    worked hard to innovate and create a simpler process to sign
                    documents.
                </p>
                <p>
                    Our applications were created by using Symfony as a REST API
                    and JS Frameworks for the front-end side. Before 2018,
                    applications was developed in <strong>AngularJS</strong> but
                    after it was deprecated in favor of Angular 2, we have
                    decided to migrate on <strong>React</strong> for
                    performances purposes and developer experience (In 2018
                    React community was bigger and more engaged than the Angular
                    Community). Everything was to rebuilt again.
                </p>
                <Image
                    alt="Screenshot of dashboard Yousign App"
                    src="/yousign/dashboard.png"
                    width="2880"
                    height="1800"
                />
                <p>
                    This migration was very interesting, because we can&amp;t
                    stop the service to migrate every customers on the new
                    application, the first have to continue every time it was
                    useful.
                </p>
                <p>
                    This big transition has impacted every teams and we have to
                    strongly collaborate to make the switch from the first
                    application to the second with less contraints for our
                    customers.
                </p>
                <h2>Team cohesion</h2>
                <p>
                    As a Lead Developer, I was charged of recruiting others
                    front-end developer in the team. From the{' '}
                    <strong>first interview to the technical test</strong>, it
                    was extremely pleasant to discover this part of my job.
                </p>
                <p>
                    I was also in charge to assist others developers in order to
                    increase their skills on our projects. It was very important
                    for me because you have to feel good and useful where your
                    work. You spent 38 hours per weeks to works in team and this
                    environment must be completely benevolent and pleasant.
                    <br />I have taken this responsibility to heart.
                </p>
                <h2>Design system of Components</h2>
                <p>
                    Over time, our applications become more and more complex. To
                    ensure the same quality and the same user interface in every
                    time, we have created a{' '}
                    <strong>design system of components</strong>.
                </p>
                <p>
                    We used Storybook to achieve this, and have listed{' '}
                    <strong>around 50 components</strong>. Each of theses was
                    built to be generic, agnostic and configurable by props
                    everywhere we need it.
                </p>
                <p>
                    Also we construct the whole application by following the
                    excellent guideline provided by Brad Frost:{' '}
                    <a href="https://bradfrost.com/blog/post/atomic-web-design/">
                        The atomic web design
                    </a>
                    .
                </p>
                <Image
                    alt="Screenshot Yousign's Storybook"
                    src="/yousign/storybook.png"
                    width="2880"
                    height="1800"
                />
                <h2>Software quality</h2>
                <p>
                    Each kind of enterprises have contractual process or
                    specifities during a signature phase.
                    <br />
                    <em>
                        (e.g After receiving a sales agreement for buying a
                        house in France, you have to wait 15 days before be able
                        to sign it.)
                    </em>
                </p>

                <p>
                    This is why we have implemented a very complex toggle
                    feature in order to enable or disable easily theses
                    specifities.
                </p>
                <Image
                    alt="Screenshot to illustrate a process of signature"
                    src="/yousign/workflow.png"
                    width="2880"
                    height="1800"
                />
                <p>
                    Obviously, we can&apos;t provide a stable complex
                    application without developing automated testing.
                    <br />
                    That&apos;s why we have implemented a large panel of test.
                    From unit test with Karma or Jest to E2E test with Cypress.
                    <br />
                    All of theses tests were executed in CI in order to be sure
                    every time we deploy something in production, we can&apos;t
                    any regression.
                </p>
            </ArticleLayout>
        </>
    )
}
