import React from 'react';
import {
  Card, CardHeader, CardBody, CardFooter, CardTitle,
} from 'reactstrap';
import Options from '../Options/Options';

export default function Cards({ card }) {
  return (
    <Card
      className="my-2"
      style={{
        width: '18rem',
      }}
    >
      <CardHeader>
        {card.header}
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">
          {card.options.map((el) => <Options list={el} key={el.id} />)}
        </CardTitle>
      </CardBody>
      <CardFooter style={{ flexWrap: 'wrap' }}>
        {card.text}
      </CardFooter>
    </Card>
  );
}
