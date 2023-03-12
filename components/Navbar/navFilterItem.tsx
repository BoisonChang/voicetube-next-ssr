import React from "react";
import styles from "./style.module.scss";
import { NavbarPropsType } from "@/types/components";

const NavbarFilterItem: React.FC<NavbarPropsType> = ({
  filters,
  activeFilter,
  handleClick,
}) => {
  return (
    <>
      {filters.map((filter) => (
        <div
          key={filter.id}
          className={`${
            filter.id === activeFilter
              ? styles.filter_btn_active
              : styles.filter_btn
          }`}
          onClick={() => handleClick(filter.id)}
        >
          {filter.name}
        </div>
      ))}
    </>
  );
};

export default NavbarFilterItem;
