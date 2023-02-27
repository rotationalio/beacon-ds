import React from 'react';
import { Backdrop, Container, StyledModal, Title } from './Modal.styles';
import { twMerge } from 'tailwind-merge';
import { ModalProps } from './Modal.types';
import { Button } from '../Button';
import CloseIcon from './CloseIcon';
function Modal(props: ModalProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const {
    slots,
    children,
    title,
    containerClassName,
    fullScreen,
    size = 'small',
    titleProps,
    onClose,
    ...rest
  } = props;
  return (
    <StyledModal slots={{ backdrop: Backdrop, ...slots }} {...rest} ref={ref}>
      <Container
        size={size}
        fullScreen={fullScreen}
        className={twMerge(containerClassName)}
      >
        {onClose && (
          <Button
            variant="ghost"
            className="absolute top-0 -right-10 p-2 border-none bg-transparent"
          >
            <CloseIcon onClick={onClose} />
          </Button>
        )}

        {title && (
          <Title {...titleProps} ref={null}>
            {title}
          </Title>
        )}
        <div>{children}</div>
      </Container>
    </StyledModal>
  );
}

export type ModalTitleProps = {
  children: React.ReactNode;
};

export default React.forwardRef(Modal);
