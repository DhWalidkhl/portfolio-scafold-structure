import React from 'react';
import { Helmet } from "react-helmet-async";

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{title}</title>
        </Helmet>
    );
};

export default PageTitle;