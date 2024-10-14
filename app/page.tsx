import Head from 'next/head';

const Page = () => {
    return (
        <>
            <Head>
                <meta property="og:image" content="https://tusitio.com/wp-content/uploads/2020/04/marketing-de-contenidos.jpg" />
                <meta property="og:title" content="Título de mi App" />
                <meta property="og:description" content="Descripción de mi App." />
            </Head>
            <h1>Bienvenido a mi App</h1>
        </>
    );
};

export default Page;