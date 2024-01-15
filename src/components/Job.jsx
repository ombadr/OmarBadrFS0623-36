import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const Job = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    dispatch({
      type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
      payload: data,
    });
  };

  return (
    <Row
      className='mx-0 mt-3 p-3'
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target='_blank' rel='noreferrer'>
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <FaStar
          onClick={toggleFavorite}
          style={{ cursor: 'pointer', color: isFavorite ? '#FFD700' : '#000' }}
        />
      </Col>
    </Row>
  );
};

export default Job;
