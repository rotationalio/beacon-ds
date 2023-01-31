import mergeClassnames from '../../../utils/mergeClassnames';
import { STATUS } from './util';
interface StatusPillProps {
  value: any;
  className?: string;
}
export function StatusPill({ value, className }: StatusPillProps) {
  const status = value ? value.toLowerCase() : 'unknown';

  return (
    <span
      className={mergeClassnames(
        'px-3 py-1 capitalize leading-wide font-bold text-[12px] rounded-full shadow-sm',
        status.startsWith(STATUS.ACTIVE) ? 'bg-green text-white' : null,
        status.startsWith(STATUS.INACTIVE)
          ? 'bg-yellow-100 text-yellow-800'
          : null,
        status.startsWith(STATUS.ERROR) ? 'bg-red-100 text-red-800' : null,
        className
      )}
    >
      {status}
    </span>
  );
}
