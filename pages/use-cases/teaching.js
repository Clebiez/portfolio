import Head from 'next/head'
import Link from 'next/link'
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
                    Since 2018 I teach agile project management in University Of Caen
                </p>
                <Image
                    alt="Logo of University of Caen"
                    src="/teaching/logo.png"
                    width="1200"
                    height="600"
                    noCard
                    size="xs"
                />
    
                <h2>Software creativity</h2>
                <h2>Project Management</h2>
            </ArticleLayout>
        </>
    )
}
