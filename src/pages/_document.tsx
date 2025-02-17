import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="VDJQS WEBSITE" />
        
        {/* Favicon */}
        <link 
          rel="icon" 
          type="image/png" 
          href="https://cdn.discordapp.com/avatars/1097623892736081992/2f25f227b6ad6e60129f0d30a78464ba.png" 
        />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        <title>VDJQ</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 
