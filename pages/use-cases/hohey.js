import Head from 'next/head'
import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from 'next-i18next'

export default function HoHeyUseCase() {
    const { t } = useTranslation('hohey')
    return (
        <>
            <Head>
                <title>{t('title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>{t('title')}</h1>
                <p>
                    <Trans
                        i18nKey="resume_1"
                        t={t}
                        components={[
                            <a
                                href="https://twitter.com/cheupi"
                                target="_blank"
                                rel="noreferrer"
                                key="twitter-cheupi"
                            />,
                            <a
                                href="https://twitter.com/Jleherpeur"
                                target="_blank"
                                rel="noreferrer"
                                key="twitter-jl"
                            />,
                            <a
                                href="https://www.linkedin.com/in/kevin-dubourg-586351146"
                                target="_blank"
                                rel="noreferrer"
                                key="twitter-kevd"
                            />,
                        ]}
                    />
                </p>
                <p>
                    <Trans
                        i18nKey="resume_2"
                        t={t}
                        components={[
                            <a
                                key="0"
                                href="https://twitter.com/KBizien"
                                target="_blank"
                                rel="noreferrer"
                            />,
                        ]}
                    />
                </p>
                <Image
                    alt={t('logo_alt_image')}
                    src="/hohey/logo.png"
                    width="583"
                    height="569"
                    noCard
                    size="xs"
                />
                <h2>{t('mvp_title')}</h2>
                <p>{t('mvp_1')}</p>
                <Image
                    alt={t('home_alt_image')}
                    src="/hohey/home.jpeg"
                    width="1680"
                    height="952"
                    size="2xl"
                />
                <p>{t('mvp_2')}</p>
                <Image
                    alt={t('search_result_alt_image')}
                    src="/hohey/searchResult2.png"
                    width="1920"
                    height="1080"
                    size="2xl"
                />
                <p>{t('mvp_3')}</p>

                <h2>{t('agile_title')}</h2>
                <p>{t('agile_1')}</p>
                <p>{t('agile_2')}</p>
                <p>
                    <Trans i18nKey="agile_3" t={t} />
                </p>
                <Image
                    alt={t('rent_alt_image')}
                    src="/hohey/stuffRent.png"
                    width="1680"
                    height="952"
                    size="2xl"
                />
                <h2>{t('role_title')}</h2>
                <p>
                    {t('role_1')}
                    <ul className="list-disc pl-10 p-5">
                        <li>
                            <Trans i18nKey="role_item_1" t={t} />
                        </li>
                        <li>
                            <Trans i18nKey="role_item_2" t={t} />
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
            ...(await serverSideTranslations(locale, ['common', 'hohey'])),
            // Will be passed to the page component as props
        },
    }
}
