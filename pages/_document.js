import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
      
        <Head>
        {/* Basic Page Needs */}
        <meta charSet="utf-8" />
        <title>A-Movies</title>
        <meta name="description" content="A movie booking web application" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Aung Min Tun" />

        {/* Mobile Specific Metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />

        {/* Fonts */}
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="http://fonts.googleapis.com/css?family=Roboto:400,100,700" rel="stylesheet" type="text/css" />
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:800italic" rel="stylesheet" type="text/css" />

        {/* Stylesheets */}
        <link href="/css/gozha-nav.css" rel="stylesheet" />
        <link href="/css/external/jquery.selectbox.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/css/settings.css"/>
        <link rel="stylesheet" type="text/css" href="/css/layers.css" />
        <link rel="stylesheet" type="text/css" href="/css/navigation.css"/>
        <link href="/css/style.css?v=1" rel="stylesheet" />

        <script src='https://js.stripe.com/v3/'/>
      
      </Head>

        <body>
          <Main />
          <NextScript />
    
        </body>
      </Html>
    )
  }
}

export default MyDocument