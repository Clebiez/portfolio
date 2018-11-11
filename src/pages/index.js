import React from "react";
import { Helmet } from 'react-helmet';
import FirstView from '../components/firstView';
import UseCases from '../components/useCases';

export default () => {
    return <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Clément Le Biez, Développeur</title>
            <meta
                name="description"
                content="Portfolio de Clément Le Biez, développeur créatif front et back" />
        </Helmet>
        <FirstView />
        <UseCases />
    </div>;
}
