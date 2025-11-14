import Head from "next/head";

export default function SEO({ title, description }) {
  const fullTitle = title ? `${title} | Ardia Health` : "Ardia Health";
  const desc =
    description ||
    "Ardia Health builds AI-powered clinical automation, diagnostics, RPM intelligence and quantum-ready healthcare platforms.";
  const url = "https://ardiahealthlabs.com";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
