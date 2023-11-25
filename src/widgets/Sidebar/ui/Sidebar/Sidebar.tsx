import style from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div className={classNames(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={style.switchers}>
        <ThemeSwitcher/>

      </div>
    </div>
  );
};
