import * as Component from './CartButton.styles';
import IconCartBag from '../../../public/assets/icons/cart-bag.svg';

function CartButton() {
    return(
        <Component.ContainerCartButton>
            <IconCartBag />
        </Component.ContainerCartButton>
    )
}

export { CartButton };