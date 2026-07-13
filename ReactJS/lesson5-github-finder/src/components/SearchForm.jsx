import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup } from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ sendKeyword }) => {
    const [keyword, setKeyword] = useState("");
    const formSubmited = (e) => {
        e.preventDefault();
        sendKeyword(keyword);
    }
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center mt-5">
                <Col md="5">
                    <Form onSubmit={formSubmited}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                onChange={e=>setKeyword(e.target.value)}
                                placeholder="Enter username"
                            />
                            <Button type='submit' variant="dark d-flex align-items-center justify-content-center" id="button-addon2">
                                <FaSearch />
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </div>
        </Container>
    )
}

export default SearchForm