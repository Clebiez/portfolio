import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

const i18nOptions = {
    i18n: {
        react: {
            transKeepBasicHtmlNodesFor: [
                'br',
                'i',
                'b',
                'p',
                'strong',
                'bold',
                'em',
            ],
            transSupportBasicHtmlNodes: true,
        },
    },
}
export default appWithTranslation(MyApp, i18nOptions)
