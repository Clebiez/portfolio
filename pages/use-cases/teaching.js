import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'
import { useTranslation, Trans } from 'next-i18next'

export default function Teaching() {
    const { t } = useTranslation('teaching')
    return (
        <>
            <Head>
                <title>{t('meta_title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>{t('title')}</h1>
                <p>{t('resume_1')}</p>
                <Image
                    alt={t('logo_alt_image')}
                    src="/teaching/logo.png"
                    width="1200"
                    height="600"
                    noCard
                    size="xs"
                />

                <h2>{t('sc_title')}</h2>
                <p>
                    <Trans
                        i18nKey="sc_1"
                        t={t}
                        components={[
                            <a
                                key="0"
                                href="https://www.linkedin.com/in/jean-luc-lambert-52a27131"
                                target="_blank"
                                rel="noreferrer"
                            />,
                            <a
                                key="1"
                                href="https://www.linkedin.com/in/michaelpoifol/"
                                target="_blank"
                                rel="noreferrer"
                            />,
                            <a
                                key="2"
                                href="https://www.linkedin.com/in/jérémie-julou-6ba94115"
                                target="_blank"
                                rel="noreferrer"
                            />,
                        ]}
                    />
                </p>
                <p>{t('sc_2')}</p>
                <p>{t('sc_3')}</p>
                <p>
                    <Trans i18nKey="sc_4" t={t} />
                </p>
                <p>
                    <Trans
                        i18nKey="sc_5"
                        t={t}
                        components={[
                            <a href="https://www.adalo.com/" key="0" />,
                            <a href="https://bubble.io/" key="1" />,
                        ]}
                    />
                </p>
                <p>{t('sc_6')}</p>
                <p>{t('sc_7')}</p>
                <p>
                    <Trans i18nKey="sc_8" t={t} />
                </p>
                <h2>{t('pm_title')}</h2>
                <p>
                    <Trans
                        i18nKey="pm_1"
                        t={t}
                        components={[
                            <a
                                key="0"
                                href="https://www.linkedin.com/in/jean-luc-lambert-52a27131"
                                target="_blank"
                                rel="noreferrer"
                            />,
                        ]}
                    ></Trans>
                </p>
                <p>
                    <Trans i18nKey="pm_2" t={t} />
                </p>
                <p>
                    {t('pm_3')}
                    <ol className="list-decimal pl-10">
                        <li>{t('pm_list_item_1')}</li>
                        <li>
                            <Trans i18nKey="pm_list_item_2" t={t}>
                                Students list and prioritise features in a{' '}
                                <a href="https://www.agilealliance.org/glossary/backlog">
                                    product backlog
                                </a>
                                .
                            </Trans>
                        </li>
                        <li>
                            {t('pm_list_item_3')}{' '}
                            <a href="https://marvelapp.com/">Marvel App</a>.
                        </li>
                        <li>
                            <Trans i18nKey="pm_list_item_4" t={t}>
                                They create a Trello to organize the development
                                team. I challenge them on the technical
                                feasibility and push them to discuss a simple
                                and viable solution. This is{' '}
                                <a href="https://en.wikipedia.org/wiki/Planning_poker">
                                    Poker planning
                                </a>{' '}
                                like step
                            </Trans>
                        </li>
                        <li>
                            <Trans i18nKey="pm_list_item_5" t={t} />
                        </li>
                    </ol>
                </p>
                <p>
                    <Trans i18nKey="pm_4" t={t} />
                </p>
            </ArticleLayout>
        </>
    )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'teaching'])),
            // Will be passed to the page component as props
        },
    }
}
