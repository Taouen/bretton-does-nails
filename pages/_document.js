import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <html lang="en-us" />
          <link
            href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Mallanna&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="#" />
          {/* remove console error "can't find favicon" */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
