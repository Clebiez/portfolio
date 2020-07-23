import React from "react";
import {Helmet} from "react-helmet";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projet Play2MeetYou : portfolio de Clément Le Biez</title>
        <meta
          name="description"
          content="Développeur web & mobile du projet play2meetyou, visant à connecter les utilisateurs entre eux via divers mini-jeux."
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
      <h1>Play2MeetYou : Jouer pour se rencontrer</h1>

      <h2>L'aventure Startup</h2>
      <p>
        Play2MeetYou est un projet de startup que l'on a souhaité lancé lorsque
        j'étais en licenses pro ATC Webmestre à l'université de Caen Normandie.
        Passioné par l'entrepreunariat, nous participions fréquemment à des
        évènements de création de startup qui se déroule sur un week-end : Les
        Startup Weekends. L'objectif de Play2MeetYou (Jouer pour se Rencontrer)
        était de connecter les gens proches entre eux. Les applications de
        rencontre que nous connaissons dématérialise complètement l'identité de
        la personne qui ne se retrouve que présenté par un profil relativement
        vague. Et si on essayait un peu plus de se connaître les personnes
        gravitants autour de soit ? L'idée était lancé mais nos compétences
        étaient maigre et c'est donc seulement munis de notre passion que nous
        avons entreprit de développer cette application.
      </p>
      <h2>Le projet était fait par qui ?</h2>
      <p>@guillaume @ben @kbizien</p>

      <p>
        Suite au Startup Weekend de Rennes de 2013 ou nous avons obtenu le coup
        de coeur du public, nous avons participé au Challenge Initiative en 2014
        proposé par le Crédit Agricole de Normandie. Lors de ce concours
        entreupreunarial, nous avons raflé le prix du Jury et le prix du Public
        nous permettant de bénéficier d'une subvention généreuse afin de
        financer notre projet. Pour l'anecdote, nous étions même passé sur Fun
        Radio à l'époque pour faire la promotion de notre projet et appeler à
        voter pour nous durrant ce concours, retrouvez l'enregistrement
        ci-dessous :
        https://soundcloud.com/guillaume-brosse/fun-radio-ben-play-2-meet-you
      </p>

      <p>
        Le développement de l'application durera 2 ans, durant lesquels nous
        avons du continuer ce projet en parallèle de nos études. Elle réunira
        par la suite une centaine d'utilisateurs Android & IOS avant de
        s'éteindre : La motivation de continuer était présente mais il fallait
        partir en stage, ce stage déboucha par la suite sur des embauches pour
        la majorité d'entre nous et nous avons décidé d'arrêter cette fabuleuse
        aventure.
      </p>

      <h2>Et côté technique ?</h2>

      <p>
        Pour l'application mobile, elle a été développé en AngularJS avec
        Cordova pour pouvoir la proposer en installation aux différentes stores
        des différentes plateformes mobiles. Côté back, l'API était un serveur
        nodeJS et communiquait avec l'application via des appels HTTP mais
        surtout une communication en temps réel basé sur les websockets.
      </p>

      <h2>Et ton rôle dans tout ça ?</h2>

      <p>
        Je me suis occupé de la partie application mobile ou j'ai appréhendé
        pour la première fois un framework JS (AngularJS, React n'existait pas à
        l'époque !) et ou j'ai également appris à maîtriser Cordova. C'est
        d'ailleurs grâce à ce projet que je suis tombé sous le charme du
        développement d'application front JavaScript.
      </p>
    </>
  );
};
