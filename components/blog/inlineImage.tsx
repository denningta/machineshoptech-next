import urlBuilder from '@sanity/image-url';
import { SanityImageAsset } from 'sanity-codegen';
import client from '../../lib/sanity-client';
import Image from 'next/image';

interface Props {
  value: {
    asset: SanityImageAsset;
    _key: string;
    _type: string;
  };
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

  console.log(value.asset.metadata);

  width = value.asset.metadata.dimensions.width;
  height = value.asset.metadata.dimensions.height;

  return (
    <Image
      src={urlBuilder(client).image(value).width(width).height(height).url()}
      layout={'intrinsic'}
      sizes={'50vw'}
      width={width}
      height={height}
      alt={'Alternate image text' || ' '}
      loading="lazy"
    />
  );
};

export default InlineImage;
