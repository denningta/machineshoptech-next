import { SanityCodegenConfig } from 'sanity-codegen';

// run "npx sanity-codegen" at the root of the sanity project 
// to output the schema to the below outputPath.

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.js',
  outputPath: '../src/app/interfaces/sanity-schema.ts',

  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
  // babelOptions: require('./.babelrc.json'), // (optional)
};

export default config;