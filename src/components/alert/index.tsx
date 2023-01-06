import type { ReactNode } from 'react';
// import { useContext } from 'react';
import { useState } from 'react';
import './style/index.less';
import React from 'react';
// import { configCtx } from '../configProvider';
type AlertType = 'success' | 'info' | 'warning' | 'error';
interface AlertProps {
  action?: ReactNode;
  afterClose?: () => void;
  banner?: boolean;
  closable?: boolean;
  closeText?: ReactNode;
  closeIcon?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  message?: ReactNode;
  showIcon?: boolean;
  type?: AlertType;
  onClose?: (e: React.MouseEvent) => void;
}
const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = ({
  // banner = false,
  message,
  description,
  closeIcon,
  onClose,
  closable = false,
}) => {
  // const { compact } = useContext(configCtx);
  const [close, setClose] = useState(false);
  const handlerClose = (e: React.MouseEvent) => {
    setClose(true);
    onClose?.(e);
  };
  const showIcon = <button onClick={handlerClose}>{closeIcon ?? <div />}</button>;

  if (close) {
    return <></>;
  }
  return (
    <div>
      <div>
        <div>{message}</div>
        <div>{description}</div>
      </div>
      {closable && showIcon}
    </div>
  );
};
export default React.forwardRef<HTMLDivElement, AlertProps>(Alert);
