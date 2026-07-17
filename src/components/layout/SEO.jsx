import { Helmet } from "react-helmet-async";
import { business } from "../../data/siteData";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = `${title} | ${business.name}`;
  const url = `https://vasudevdigitallibrary.in${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={business.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LibraryEntity",
          name: business.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.line1,
            addressLocality: "Akbarpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "224122",
            addressCountry: "IN",
          },
          telephone: business.phones.map((p) => `+91${p}`),
          url: "https://vasudevdigitallibrary.in",
        })}
      </script>
    </Helmet>
  );
}
