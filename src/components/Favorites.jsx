import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();

  console.log('Favorites: ', favorites);
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} className='mx-auto my-3'>
            <h1>Favorites</h1>
            <Link to='/'>
              <Button>Homepage</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      {favorites.length === 0 ? (
        <Container>
          <Row>
            <Col>
              <h1 className='text-center'>No favorites yet</h1>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          {favorites.map((job, i) => (
            <Row
              key={i}
              className='mx-0 mt-3 p-3'
              style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
              <Col xs={3}>
                <Link to={`/${job.company_name}`}>{job.company_name}</Link>
              </Col>
              <Col xs={8}>
                <a href={job.url} target='_blank' rel='noreferrer'>
                  {job.title}
                </a>
              </Col>
              <Col xs={1}>
                <FaStar
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FAVORITE',
                      payload: job,
                    })
                  }
                  style={{
                    cursor: 'pointer',
                    color: '#FFD700',
                  }}
                />
              </Col>
            </Row>
          ))}
        </Container>
      )}
    </>
  );
};

export default Favorites;
