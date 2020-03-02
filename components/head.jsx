import React from "react";
import Head from "next/head";
import { string } from "prop-types";

export default props => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{props.title || "Get Luusy"}</title>
    <meta
      name="description"
      content={props.description || "Just take a chill and consume the content"}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/icon.svg" />
    <link rel="apple-touch-icon" href="/static/icon.svg" />
    <link rel="mask-icon" href="/static/icon.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || ""} />
    <meta property="og:title" content={props.title || "Get Luusy"} />
    <meta
      property="og:description"
      content={
        props.description || "Just take a chill and consume this content"
      }
    />
    <meta name="twitter:site" content={props.url || ""} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || "https://res.cloudinary.com/duoxba7n1/image/upload/v1583174531/ogimage.png"} />
    <meta name="twitter:description" content={props.description || "Just take a chill and consume this content"} />
    <meta property="og:image" content={props.ogImage || "https://res.cloudinary.com/duoxba7n1/image/upload/v1583174531/ogimage.png"} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);
