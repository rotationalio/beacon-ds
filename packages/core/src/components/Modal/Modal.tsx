import React from 'react';
import { Backdrop, Container, StyledModal, Title } from './Modal.styles';
import { twMerge } from 'tailwind-merge';
import { ModalProps } from './Modal.types';

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
