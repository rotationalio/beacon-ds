import mergeClassnames from '../../../utils/mergeClassnames';
import { STATUS, capitalize } from './util';
import { StatusColorIcon } from '../../Icon/Icons';
interface StatusPillProps {
  value: any;
  className?: string;
}
export function StatusPill({ value, className }: StatusPillProps) {
  const status = value ? value.toLowerCase() : 'unknown';

  const statusColorMap = {
    [STATUS.ACTIVE || STATUS.CONFIRMED || STATUS.COMPLETE]: 'text-green-800',
    [STATUS.INACTIVE || STATUS.INCOMPLETE]: 'text-warning-300',
    [STATUS.REVOKED]: 'text-warning-600',
    [STATUS.ERROR]: 'text-danger-600',
    [STATUS.UNUSED]: 'text-gray-600',
  } as any;

  const statusIconMap = {
    [STATUS.ACTIVE || STATUS.CONFIRMED || STATUS.COMPLETE]: (
      <StatusColorIcon fill="#34753E" />
    ),
    [STATUS.INACTIVE || STATUS.INCOMPLETE]: <StatusColorIcon fill="#FFCC75" />,
    [STATUS.REVOKED]: <StatusColorIcon fill="#CC7C00" />,
    [STATUS.ERROR]: <StatusColorIcon fill="#EB2A00" />,
    [STATUS.UNUSED]: <StatusColorIcon fill="#6C757D" />,
  } as any;

  return (
    <div className={mergeClassnames('flex items-center', className)}>
      {statusIconMap[status]}
      <span
        className={mergeClassnames('ml-1', statusColorMap[status] as string)}
      >
        {capitalize(status)}
      </span>
    </div>
  );
}
