import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Analytics } from '@vercel/analytics/react';
import font from "/components/styles.css";


export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>an inclusive space to make, share, and sell your craft</title>
                   
                </Head>
                <Component {...pageProps} />
                <Analytics />
            </>
        )
    }
}
