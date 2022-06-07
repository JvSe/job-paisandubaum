import * as Component from './OrderButton.styles';

type OrderButtonProps = {
    width?: number | string 
}

function OrderButton({ width }: OrderButtonProps){
    return(
        <Component.ContainerOrderButton 
            style={{
                width: width!,
            }}
        >
            Fazer pedido
        </Component.ContainerOrderButton>
    )
}

export { OrderButton };