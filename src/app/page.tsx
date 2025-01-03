import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { components } from "@/slices";


export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    // <Container className="prose prose-2xl flex-grow">
    //   <div className="text-balance text-center">
    //     <AnimatedProfileImage image={page.data.pfp} />
    //     {isFilled.richText(page.data.introheading) && (
    //       <PrismicRichText field={page.data.introheading} />
    //     )}
    //     {isFilled.richText(page.data.introsubheading) && (
    //       <PrismicRichText field={page.data.introsubheading} />
    //     )}
    //     {isFilled.link(page.data.cta) && (
    //       <PrismicNextLink
    //         className="btn btn-outline btn-primary shadow-lg shadow-primary/80"
    //         field={page.data.cta}
    //       >
    //         {page.data.cta.text}
    //       </PrismicNextLink>
    //     )}
    <SliceZone slices={page.data.slices} components={components} />
    // </div>
    // </Container>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
