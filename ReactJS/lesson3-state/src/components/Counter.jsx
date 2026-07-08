import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Counter = () => {
    const [count, setCount] = useState(1);
    const [del, setDel] = useState(false);

    const increment = () => {
        if (count >= 10) {
            alert("Out of stock")
        } else {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <Container>
            {del ? <p>Samsung Galaxy Tab A11 4GB 64GB Gri Tablet məhsulu səbətindən çıxarıldı.</p> : <div>
                <img width={200} src="https://cdn.dsmcdn.com/ty10000/product/media/images/prod/PIM/20251022/14/2631c0bb-0120-48b2-bb3a-d4b649172024/1_org.jpg" alt="" />
                <p>Samsung Galaxy Tab A11 4GB 64GB Gri Tablet</p>
                <p>{461 * count} ₼</p>
                <Button onClick={decrement}>-</Button>
                <span className='mx-3'>{count}</span>
                <Button onClick={increment}>+</Button>
                <div>
                    <Button variant='danger mt-3' onClick={() => {
                        const cont = confirm();
                        if (cont) {
                            setDel(true)
                        }
                    }}>sil</Button>

                </div>
            </div>}


        </Container>
    )
}

export default Counter