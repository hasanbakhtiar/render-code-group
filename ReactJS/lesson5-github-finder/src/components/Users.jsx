import { Container, Row } from 'react-bootstrap'
import SingleCard from './SingleCard'

const Users = ({ comingUsers }) => {
    return (
        <Container>
            <Row className='mt-5 g-4'>
                {comingUsers.map(item => (
                    <SingleCard
                        key={item.id}
                        image={item.avatar_url}
                        title={item.login}
                        url={item.html_url}
                        desc={item.node_id}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default Users