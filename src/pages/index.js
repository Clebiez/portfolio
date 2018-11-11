import React from "react";
import { Helmet } from 'react-helmet';
import FirstView from '../components/firstView';
import UseCases from '../components/useCases';

export default () => {
    return <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Clément Le Biez, Développeur</title>
            <meta name="Keywords" content="développeur, front, back, portfolio, clément, le biez, Caen, France" />
            <meta
                name="description"
                content="Je suis un développeur créatif front et back basé à Caen en France qui peut certainement répondre à votre besoin. N'hésitez pas à me contacter !" />
            <script type="application/ld+json">
                {
                    "@context": "http://schema.org/",
                    "@type": "Person",
                    "name": "Clément Le Biez",
                    "jobTitle": "Développeur front et back",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Caen",
                        "addressRegion": "France"
                    }
                }
            </script>
        </Helmet>
        <FirstView />
        <UseCases />
    </div>;
}
