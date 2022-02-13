import React from "react";
import { Helmet } from "react-helmet";

interface SchemaOrgProps {
  title: string;
  description: string;
  url: string;
  canonicalUrl?: string;
  image: string;
  author: string;
  organization: { url: string; logo: string };
  isPosting?: boolean;
  dataPublished?: string;
}

const SchemaOrg = ({
  title,
  description,
  url,
  canonicalUrl,
  image,
  author,
  organization,
  isPosting,
  dataPublished,
}: SchemaOrgProps) => {
  const defaultSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
    },
  ];

  const schema = isPosting
    ? [
        ...defaultSchema,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
          author: {
            "@type": "Person",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            url: organization.url,
            logo: organization.logo,
            name: author,
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": url,
          },
          dataPublished,
        },
      ]
    : defaultSchema;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaOrg;
