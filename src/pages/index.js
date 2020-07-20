import React from "react";
import {Helmet} from "react-helmet";
import FirstView from "../components/firstView";
import Resume from "../components/resume";
import UseCases from "../components/useCases";
import SocialBar from "../components/socialBar";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Clément Le Biez, Développeur web & mobile
        </title>
        <meta
          name="description"
          content="Je suis un développeur web & mobile spécialisé dans la gestion de projet agile. Je peux certainement répondre à votre besoin alors n'hésitez pas à me contacter !"
        />
        <script type="application/ld+json">{`
                {
                    "@context": "http://schema.org/",
                    "@type": "Person",
                    "name": "Clément Le Biez",
                    "jobTitle": "Développeur web & mobile",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Caen",
                        "addressRegion": "France"
                    }
                }
            `}</script>
      </Helmet>
      <FirstView />
      <Resume />
      <UseCases />
      <SocialBar />
    </>
  );
};
