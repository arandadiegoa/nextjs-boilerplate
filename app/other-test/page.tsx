import Head from 'next/head';

const Page = () => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Título de mi App" />
                <meta property="og:description" content="Descripción de mi App." />
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://www.fravega.com/static/logo-fravega@3x.png"/>
                <meta property="og:image:alt" content="fravega"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:locale" content="es_AR"/>

            </Head>
            <h1>Bienvenido a mi App</h1>
            <img src=" https://www.fravega.com/centro-de-ayuda/_next/image?url=%2Fcentro-de-ayuda%2F_next%2Fstatic%2Fmedia%2Fimg-familia.4dfbfbb6.jpg&w=1920&q=75" alt="" />
        </>
    );
};

export default Page;