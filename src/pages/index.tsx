import Image from 'next/image';
import { useTheme } from 'styled-components';
import { OrderButton } from '../components/OrderButton';
import * as Component from './Home.styles';

function Home() {
  const theme = useTheme();
  return (
    <Component.ContainerHome>
      <Component.ContainerContentHome>
        <span>✌ Olá, te apresento</span>
        <h1>Ao melhor hamburger de <span>Palmas</span></h1>
        <p> Faça seu pedido e veja por você mesmo 😉</p>
        <OrderButton width={290}/>
      </Component.ContainerContentHome>
      <Component.ContainerImgsHome>
        <Component.CircleBlur 
          color={theme.colors['brand-colors']['brand-brow']}
          position={{
            top: '350px',
            right: '10px'
          }}
        />
        <Component.CircleBlur 
          color={theme.colors['brand-colors']['brand-burnt-yellow']}
          position={{
            top: '200px',
            right: '300px'
          }}
        />
        <Image 
          src={"/assets/imgs/hamburguer.png"} 
          alt="Hamburger" 
          width={"528px"}
          height={"611px"}
        />
      </Component.ContainerImgsHome>
    </Component.ContainerHome>
  )
}

export default Home
