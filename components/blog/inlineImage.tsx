import urlBuilder from '@sanity/image-url';
import { SanityImageAsset } from 'sanity-codegen';
import client from '../../lib/sanity-client';
import Image from 'next/image';

interface Props {
  value: SanityImageAsset;
  width?: number;
  height?: number;
  aspectRatio?: string[] | number[];
}

const InlineImage = ({
  value,
  width = 1024,
  height,
  aspectRatio = [16, 9],
}: Props) => {
  height = width / (+aspectRatio[0] / +aspectRatio[1]);

  return (
    <Image
      src={urlBuilder(client)
        .image(value)
        .width(width)
        .height(height)
        .fit('max')
        .auto('format')
        .url()}
      width={width}
      height={height}
      alt={'Alternate image text' || ' '}
      loading="lazy"
    />
  );
};

export default InlineImage;
