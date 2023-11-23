import style from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}


export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    className,
    to,
    theme = AppLinkTheme.SECONDARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(style.AppLink, {}, [className, style[theme]])}
    >
      {children}
    </Link>
  );
};
