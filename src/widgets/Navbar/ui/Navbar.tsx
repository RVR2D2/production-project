import React from 'react';
import style from './Navbar.module.scss'

import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(style.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={style.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={style.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
};