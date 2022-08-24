import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { WishList } from "components/icons/wishlist";

const Navbar = () => {
  return (
    <div className="flex px-3 py-3">
      <div className="flex w-1/2 justify-around">
        <div className="w-12 h-6 bg-black"></div>
        <span>MEN</span>
        <span>WOMEN</span>
        <span>KIDS</span>
      </div>
      <div className="flex justify-between w-1/2">
        <div>
          <input type="text" className="border border-black" />
        </div>
        <div className="flex justify-evenly">
          <div className="mx-4">
            <WishList width="20" height="20" fill="none" />
          </div>
          <div className="mx-4">
            <UserIcon className="h-5 w-5" />
          </div>
          <div className="mx-4">
            <ShoppingCartIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
