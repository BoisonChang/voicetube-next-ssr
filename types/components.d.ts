export type FilterType = {
  id: number;
  name: string;
};

export type NavbarPropsType = {
  filters: FilterType[];
  activeFilter: number;
  handleClick: (filterId: number) => void;
};

export interface MyLoaderProps {
  src: string;
  width: number;
  quality?: number;
}
