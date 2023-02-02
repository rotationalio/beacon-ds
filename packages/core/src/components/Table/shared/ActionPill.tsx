import mergeClassnames from '../../../utils/mergeClassnames';
import Menu from '../../Menu/Menu';
import useMenu from '../../../hooks/useMenu';
import { ThreeDotIcon } from '../../Icon/Icons';
import Button from '../../Button/Button';

export type ActionProps = {
  label: string;
  onClick: () => void;
};

export type ActionPillProps = {
  actions: ActionProps[];
  className?: string;
};

export function ActionPill({ actions, className }: ActionPillProps) {
  const { anchorEl, isOpen, open, close } = useMenu({
    id: 'wrapped-menu',
  });

  //console.log('actions: ', actions);

  return (
    <div className={mergeClassnames('relative', className)}>
      <Button
        variant="ghost"
        onClick={open}
        aria-controls={isOpen ? 'wrapped-menu' : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
        className="border-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-none h-6 w-6"
      >
        <ThreeDotIcon />
      </Button>
      {actions.length > 0 && (
        <>
          <Menu open={isOpen} onClose={close} anchorEl={anchorEl}>
            {actions.map((action) => (
              <Menu.Item key={action.label} onClick={action.onClick}>
                {action.label}
              </Menu.Item>
            ))}
          </Menu>
        </>
      )}
    </div>
  );
}
