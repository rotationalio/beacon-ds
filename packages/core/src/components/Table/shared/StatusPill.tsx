import mergeClassnames from '../../../utils/mergeClassnames';
import { STATUS } from './util';
import { StatusColorIcon } from '../../Icon/Icons';
interface StatusPillProps {
  value: any;
  className?: string;
}
export function StatusPill({ value, className }: StatusPillProps) {
  const status = value ? value.toLowerCase() : 'unknown';

  const statusColorMap = {
    [STATUS.ACTIVE]: 'text-green-800',
    [STATUS.CONFIRMED]: 'text-green-800',
    [STATUS.COMPLETE]: 'text-green-800',
    [STATUS.PENDING]: 'text-warning-500',
    [STATUS.INCOMPLETE]: 'text-warning-500',
    [STATUS.INACTIVE]: 'text-warning-500',
    [STATUS.REVOKED]: 'text-primary-500',
    [STATUS.ERROR]: 'text-danger-600',
    [STATUS.UNUSED]: 'text-gray-600',
  } as any;

  const statusIconMap = {
    [STATUS.ACTIVE]: <StatusColorIcon fill="#34753E" />,
    [STATUS.COMPLETE]: <StatusColorIcon fill="#34753E" />,
    [STATUS.CONFIRMED]: <StatusColorIcon fill="#34753E" />,
    [STATUS.INACTIVE]: <StatusColorIcon fill="#FF9500" />,
    [STATUS.PENDING]: <StatusColorIcon fill="#FF9500" />,
    [STATUS.INCOMPLETE]: <StatusColorIcon fill="#FF9500" />,
    [STATUS.REVOKED]: <StatusColorIcon fill="#F26800" />,
    [STATUS.ERROR]: <StatusColorIcon fill="#EB2A00" />,
    [STATUS.UNUSED]: <StatusColorIcon fill="#6C757D" />,
  } as any;

  return (
    <div className={mergeClassnames('flex items-center', className)}>
      {statusIconMap[status]}
      <span
        className={mergeClassnames('ml-1', statusColorMap[status] as string)}
      >
        {value}
      </span>
    </div>
  );
}
