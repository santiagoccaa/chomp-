import { useContext } from "react";
import ShopContext from '@/context/shopContext'

const useShop = () => {
    return useContext(ShopContext)
}

export default useShop