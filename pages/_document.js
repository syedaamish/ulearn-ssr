import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <html lang="ar">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&display=swap" rel="stylesheet"/>

          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
