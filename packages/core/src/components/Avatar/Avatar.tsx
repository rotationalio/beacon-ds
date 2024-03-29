import { twMerge } from 'tailwind-merge';

import {
  StyledAvatar,
  StyledAvatarFallback,
  StyledAvatarImage,
} from './Avatar.styles';
import { AvatarProps } from './Avatar.type';
import getInitials from '../../utils/getInitials';

const Avatar = (props: AvatarProps) => {
  const { className, fallbackProps, ...imageProps } = props;

  return (
    <StyledAvatar>
      <StyledAvatarImage {...imageProps} className={twMerge(className)} />
      <StyledAvatarFallback
        delayMs={600}
        {...fallbackProps}
        className={twMerge('capitalize', fallbackProps?.className)}
      >
        {getInitials(props.alt)}
      </StyledAvatarFallback>
    </StyledAvatar>
  );
};

export default Avatar;
