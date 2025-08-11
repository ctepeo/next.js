import { SvgIcon } from '@components/Icon/SvgIcon';

export const ByFlagIcon = ({ className }: { className?: string }) => {
  return (
    <SvgIcon className={className} viewBox="0 0 1200 600">
      <path d="M0 0h1200v600H0" fill="#fff" />
      <path d="M0 200h1200v200H0" fill="#c00" />
    </SvgIcon>
  );
};
