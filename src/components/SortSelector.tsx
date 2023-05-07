import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string | null;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Releaste date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((o) => o.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevant"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((o) => (
          <MenuItem
            onClick={() => onSelectSortOrder(o.value)}
            key={o.value}
            value={o.value}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
