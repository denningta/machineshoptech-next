import { IconPickerGroq } from '../../sanity/sanity-queries';
import * as FontAwesome from 'react-icons/fa';
import * as MaterialDesign from 'react-icons/md';
import React from 'react';

interface Props {
  iconPicker: IconPickerGroq;
}

function Icon({ iconPicker }: Props) {
  const iconSelector: keyof typeof FontAwesome =
    toCamelCase(iconPicker.provider) + toCamelCase(iconPicker.name);
  const Icon = FontAwesome[iconSelector];
  return React.createElement(Icon);
}

export default Icon;

function toCamelCase(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toUpperCase() : word.toUpperCase();
    })
    .replace(/[\s-]+/g, '');
}
