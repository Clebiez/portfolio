import Head from 'next/head'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ArticleLayout from '../../layouts/ArticleLayout'
import Image from '../../components/Image'
export default function YousignUseCase() {
    const { t } = useTranslation('yousign')
    return (
        <>
            <Head>
                <title>{t('meta_title')}</title>
                <meta name="description" content={t('meta_description')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleLayout>
                <h1>{t('title')}</h1>
                <p>
                    <Trans t={t} i18nKey="extract_1" />
                </p>
                <Image
                    alt={t('logo_alt_image')}
                    src="/yousign/logo.png"
                    width="8334"
                    height="2432"
                    noCard
                    size="sm"
                />
                <h2>{t('resume_title')}</h2>
                <p>
                    <Trans i18nKey="resume_1" t={t} />
                </p>
                <Image
                    alt={t('swipe_alt_image')}
                    src="/yousign/swipe.png"
                    width="2880"
                    height="1800"
                    size="2xl"
                />
                <p>
                    <Trans i18nKey="resume_2" t={t} />
                </p>
                <p>
                    <Trans i18nKey="resume_3" t={t} />
                </p>
                <h2>{t('ux_title')}</h2>
                <p>{t('ux_1')}</p>
                <p>{t('ux_2')}</p>
                <Image
                    alt={t('dashboard_alt_image')}
                    src="/yousign/dashboard.png"
                    width="2880"
                    height="1800"
                    size="2xl"
                />
                <p>
                    {' '}
                    <Trans i18nKey="ux_3" t={t} />
                </p>
                <p>{t('ux_4')}</p>
                <h2>{t('ds_title')}</h2>
                <p>
                    {' '}
                    <Trans i18nKey="ds_1" t={t} />
                </p>
                <p>
                    {' '}
                    <Trans i18nKey="ds_2" t={t} />
                </p>
                <p>
                    {t('ds_3')}{' '}
                    <a href="https://bradfrost.com/blog/post/atomic-web-design/">
                        {t('atomic_link')}
                    </a>
                    .
                </p>
                <Image
                    alt={t('storybook_alt_image')}
                    src="/yousign/storybook.png"
                    width="2880"
                    height="1800"
                    size="2xl"
                />
                <h2>{t('quality_title')}</h2>
                <p>
                    <Trans i18nKey="quality_1" t={t} />
                </p>

                <p>{t('quality_2')}</p>
                <Image
                    alt={t('workflow_alt_image')}
                    src="/yousign/workflow.png"
                    width="2880"
                    height="1800"
                    size="2xl"
                />
                <p>
                    <Trans i18nKey="quality_3" t={t} />
                </p>
            </ArticleLayout>
        </>
    )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'yousign'])),
            // Will be passed to the page component as props
        },
    }
}
