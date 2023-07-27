import { SinglePageData } from '@/types/shared';
import { renderRichTextWithImages } from '@/utils/richText';
import dayjs from 'dayjs';
import React from 'react';
import Container from './Container';
import Image from 'next/image';

export default function SinglePage({ pageData }: { pageData: SinglePageData }) {
  return (
    <Container>
      <div className='grid lg:grid-cols-[2fr,1fr] mb-8 md:mb-20'>
        <div className='order-2 mt-8 pr-8 md:mt-0 lg:order-1'>
          {/* TITLE */}
          <div className='text-4xl md:text-6xl font-decay mb-12'>
            <h1 className='mb-2'>{pageData.fields.artist} /</h1>
            <h1>{pageData.fields.title}</h1>
          </div>
          <div className='mb-12'>
            {/* INFO */}
            <div className='mb-12'>
              <p>Format: {pageData.fields.format}</p>
              <p>
                Release Date:{' '}
                {dayjs(pageData.fields.releaseDate).format('DD.MM.YYYY')}
              </p>
              <p>Cat.Nr: {pageData.fields.catalogueNumber}</p>
            </div>
            {/* RICH TEXT BELOW IMAGE */}
            <div className='block lg:hidden'>
              {pageData.fields.links
                ? renderRichTextWithImages(pageData.fields.links)
                : null}
            </div>
          </div>
          {/* BODY */}
          <section className='mb-40'>
            {pageData.fields.body
              ? renderRichTextWithImages(pageData.fields.body)
              : null}
          </section>
        </div>
        <div className='order-1 lg:order-2'>
          <Image
            className='mb-8'
            src={'https:' + pageData.fields.artwork!.fields.file!.url}
            alt=''
            height={pageData.fields.artwork!.fields.file!.details.image!.height}
            width={pageData.fields.artwork!.fields.file!.details.image!.width}
          />
          {/* RICH TEXT BELOW IMAGE */}
          <div className='hidden lg:block text-right text-xl'>
            {pageData.fields.links
              ? renderRichTextWithImages(pageData.fields.links)
              : null}
          </div>
        </div>
      </div>
    </Container>
  );
}
