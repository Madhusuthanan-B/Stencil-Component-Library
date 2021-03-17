export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const colorClassMapper = {
  'primary': 'primary',
  'secondary': 'secondary',
  'danger': 'danger',
  'success': 'success',
  'warn': 'warning',
  'info': 'info',
  undefined: 'secondary'
};

export const sizeClassMapper = {
  'small': 'sm',
  'large': 'lg',
  undefined: ''
};

export const styleTypeClassMapper = {
  'outline': 'outline-'
};
