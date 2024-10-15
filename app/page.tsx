import Head from 'next/head';

const Page = () => {
    return (
        <>
            <Head>
                <meta property="og:image" content="https://www.fravega.com/centro-de-ayuda/_next/image?url=%2Fcentro-de-ayuda%2F_next%2Fstatic%2Fmedia%2Fimg-familia.4dfbfbb6.jpg&w=1920&q=75" />
                <meta property="og:title" content="Título de mi App" />
                <meta property="og:description" content="Descripción de mi App." />
            </Head>
            <h1>Bienvenido a mi App</h1>
        </>
    );
};

export default Page;