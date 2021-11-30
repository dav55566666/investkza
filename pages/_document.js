import Document, { Head, Html, Main, NextScript } from 'next/document';

import React from 'react';

class AbyssFinanceDocument extends Document {
    /**
     *
     */
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    /**
     *
     */
    render() {
        return (
            <Html>
                {/* title is not needed */}
                <Head />

                <body>
                    <Main />
                    {/*<div id="modal" />*/}
                    {/*<div id="notification" />*/}
                    <NextScript />

                    {/* custom .js can be placed here */}
                </body>
            </Html>
        );
    }
}

export default AbyssFinanceDocument;
