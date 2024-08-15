import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ menuItems, text, link, mobile }) {
  return (
    <Menu
      as="div"
      className={`relative ${mobile ? "w-full" : "inline-block text-left"}`}
    >
      <div>
        <MenuButton
          className={`flex justify-between items-center w-full ${
            mobile
              ? "bg-gray-100 p-2 rounded-md"
              : "bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          }`}
        >
          {text}
          <ChevronDownIcon
            aria-hidden="true"
            className={`h-5 w-5 ${mobile ? "text-gray-600" : "text-gray-400"}`}
          />
        </MenuButton>
      </div>

      <MenuItems
        className={`${
          mobile
            ? "w-full mt-2 origin-top"
            : "absolute right-0 z-10 mt-2 w-56 origin-top-right"
        } divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {menuItems.map((item, index) => (
          <div key={index} className="py-1">
            <MenuItem>
              {({ active }) => (
                <a
                  href={item.link}
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  {item.text}
                </a>
              )}
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
