import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCount = ({initial, stock}) => {

    const [cantidad, setCantidad] = useState(initial);

    const onAdd = () => {
        setCantidad(cantidad + 1)
        if (cantidad === 10) {
            setCantidad(stock)
            alert("No hay más stock!")
        }
    }

    const onSub = () => {
        setCantidad(cantidad - 1)
        if (cantidad === 1) {
            setCantidad(1)
        }
    }

    const addCart = () => {
        if (cantidad === 1){
            alert('No has agregado productos!')
        }else {
            alert('Has agregado ' + cantidad + ' productos!')
        }
    }

    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                    Producto
                </Card.Text>
                <Button size="sm" onClick={onAdd}>+</Button>
                <Button size="sm" onClick={onSub}>-</Button>

                <span> Cantidad: {cantidad}</span><br/>

                <Button size="sm" onClick={addCart}>Agregar al carrito</Button>

            </Card.Body>
        </Card>
    )
}

export default ItemCount

