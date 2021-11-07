import Head from 'next/head'
import Link from 'next/link'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'
export default function GreenframeUseCase() {
    const { t } = useTranslation('greenframe')
    return (
        <>
            <Head>
                <title>{t('meta_title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>{t('title')}</h1>
                <p>
                    {t('intro_1')}
                    <Link href="https://marmelab.com/en/">Marmelab</Link>
                    {t('intro_2')}
                </p>
                <Image
                    alt={t('logo_alt')}
                    src="/greenframe/marmelablogo.png"
                    width="8334"
                    height="2432"
                    noCard
                    size="sm"
                />
                <p>{t('intro_3')}</p>
                <h2>{t('gf_title')}</h2>
                <p>
                    <Trans i18nKey="gf_extract_1" t={t} />
                </p>
                <Image
                    alt={t('gf_alt_image_list')}
                    src="/greenframe/list.png"
                    width="1477"
                    height="936"
                    size="2xl"
                />
                <p>
                    <Trans i18nKey="gf_extract_2" t={t} />{' '}
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
                    <Trans i18nKey="gf_extract_3" t={t} />
                </p>
                <h2>{t('how_work_title')}</h2>
                <p>
                    {t('how_work_1')}
                    <Link href="https://playwright.dev/">Playwright</Link>
                    {t('how_work_2')}
                </p>
                <Image
                    alt={t('how_work_scenario_alt_image')}
                    src="/greenframe/scenario.png"
                    width="650"
                    height="364"
                    noCard
                    size="lg"
                />

                <p>
                    <Trans i18nKey="how_work_3" t={t} />
                </p>
                <Image
                    alt={t('how_work_cli_alt_image')}
                    src="/greenframe/cli.png"
                    width="913"
                    height="401"
                    size="2xl"
                />
                <p>
                    <Trans i18nKey="how_work_4" t={t} />
                </p>
                <p>{t('how_work_5')}</p>
                <Image
                    alt={t('how_work_analysis_alt_image')}
                    src="/greenframe/analysis.png"
                    width="1479"
                    height="937"
                    size="2xl"
                />
                <h2></h2>
                <p>
                    <Trans i18nKey="from_design_1" t={t} />
                </p>
                <p>
                    <Trans i18nKey="from_design_2" t={t} />
                </p>
                <p>{t('from_design_3')}</p>
            </ArticleLayout>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'greenframe'])),
            // Will be passed to the page component as props
        },
    }
}
