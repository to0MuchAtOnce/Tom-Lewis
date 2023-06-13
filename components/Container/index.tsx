import Head from "next/head";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nextjs Dashboard Layout"  />
        <meta name="twitter:card" content="summary_large_image" /> 
        <meta name="og:title" content={title}/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {children}
    </>
  );
}
