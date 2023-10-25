import Head from 'next/head';

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='og:title' content={title} />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔵
blue circle
Unicode: U+1F535, UTF-8: F0 9F 94 B5</text></svg>'
        />
      </Head>
      {children}
    </>
  );
}
