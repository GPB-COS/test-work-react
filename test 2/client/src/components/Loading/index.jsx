import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Spin, Alert } from 'antd';
import './index.css';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export default function Loading() {
  const { id } = useParams();
  const [request, setRequest] = useState({
    data: null,
    isFetching: false,
    error: null,
  });

  const fetchService = useCallback(
    () => {
      setRequest((prev) => ({ ...prev, isFetching: true }));
      axios.get(`http://locahost:7070/api/services/${id}`)
        .then((data) => setRequest((prev) => ({ ...prev, data })))
        .catch((error) => setRequest((prev) => ({ ...prev, error })))
        .finally(() => setRequest((prev) => ({ ...prev, isFetching: false })));
    },
    [id],
  );

  useEffect(() => {
    fetchService();
  }, []);

  if (request.isFetching) {
    return (
      <div className="center">
        <Spin indicator={antIcon} />
      </div>
    );
  }
  if (request.error) {
    return (
      <div className="center">
        <Alert
          message={request.error.message}
          type="error"
          action={(
            <Button danger onClick={fetchService} className="myButton">
              повторить попытку
            </Button>
      )}
        />

      </div>
    );
  }
  return (
    <div className="center">
      данные
    </div>
  );
}
