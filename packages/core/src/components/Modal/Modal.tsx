import React from 'react';
import { Backdrop, Container, StyledModal, Title } from './Modal.styles';
import { ModalProps } from './Modal.types';
import { mergeClassnames } from '../../utils';
import { Button } from '../Button';
import CloseIcon from './CloseIcon';
function Modal(props: ModalProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const {
    slots,
    children,
    title,
    containerClassName,
    modalCloseBtnClassName,
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
        className={mergeClassnames(
          'overflow-scroll w-[25vw] max-w-[80vw] lg:max-w-[50vw] no-scrollbar',
          containerClassName
        )}
      >
        {onClose && (
          <Button
            variant="ghost"
            size="custom"
            className={
              mergeClassnames(
                'absolute top-0 right-4 m-4 border-none w-4 bg-transparent py-0 h-4',
                modalCloseBtnClassName
              ) as string
            }
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
