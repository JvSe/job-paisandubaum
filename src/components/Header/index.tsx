import { CartButton } from '../CartButton';
import { OrderButton } from '../OrderButton';
import * as Component from './Header.styles';

function Header() {
    return(
        <Component.ContainerHeader>
            <Component.ContainerContent>
                <span>LOGO</span>
                <nav>
                    <a className='activate'>Home</a>
                    <a>Cardápio</a>
                    <a>Fale Conosco</a>
                </nav>
                <div>
                    <CartButton />
                    <OrderButton />
                </div>
            </Component.ContainerContent>
        </Component.ContainerHeader>
    )
};

export { Header };