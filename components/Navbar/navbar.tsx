import React from "react";
import styles from "./style.module.scss";
import NavbarFilterItem from "./navFilterItem";
import { NavbarPropsType } from "@/types/components";

function Navbar({ filters, activeFilter, handleClick }: NavbarPropsType) {
  return (
    <div className={styles.filter_nav}>
      <NavbarFilterItem
        filters={filters}
        activeFilter={activeFilter}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Navbar;
