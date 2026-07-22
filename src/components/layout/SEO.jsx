import { Helmet } from "react-helmet-async";
import { business } from "../../data/siteData";

export default function SEO({
  title,
  description,
  path = "/",
  keywords = "",
  image = "https://vasudevdigitallibrary.com/og-image.jpg",
  robots = "index,follow,max-image-preview:large",
  faq = [],
  breadcrumbs = [],
}) {
  const fullTitle = `${title} | ${business.name}`;
  const siteUrl = "https://vasudevdigitallibrary.com";
  const url = `${siteUrl}${path}`;

  // Local Business / Library Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Library",
    "@id": `${siteUrl}/#library`,
    name: business.name,
    url: siteUrl,
    image: image,
    telephone: business.phones.map((p) => `+91${p}`),
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: "Akbarpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "224122",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "₹",
  };

  // FAQ Schema
  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  // Breadcrumb Schema
  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.path}`,
          })),
        }
      : null;

  return (
    <Helmet>
      {/* ================= BASIC SEO ================= */}

      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta name="author" content={business.name} />

      <meta name="robots" content={robots} />

      <meta name="language" content="English" />

      <meta name="theme-color" content="#0F172A" />

      <link rel="canonical" href={url} />

      {/* ================= OPEN GRAPH ================= */}

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={business.name} />

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={url} />

      <meta property="og:image" content={image} />

      {/* ================= TWITTER ================= */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      {/* ================= GEO ================= */}

      <meta name="geo.region" content="IN-UP" />

      <meta name="geo.placename" content="Akbarpur" />

      <meta name="geo.position" content="26.440;82.537" />

      <meta name="ICBM" content="26.440,82.537" />

      {/* ================= SCHEMA ================= */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
