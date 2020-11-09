import React from 'react';
import { useShallowSelector } from 'lib/utils';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DispatchActions } from 'store/actionCreators';

const TestListState = {
  data: null,
};

function TestList({ match }) {
  const [values, setValues] = useImmer(TestListState);
  const { testsData } = useShallowSelector(state => ({
    testsData: state.test.tests.data,
  }));

  // console.log(match, 'match');
  // console.log(testsData, 'testsData');
  useEffect(() => {
    DispatchActions.fetch_tests_request();
  }, []);

  const data = testsData?.slice(0, 10);

  const handleClick = config => {
    const { type = '' } = config;

    if (type === 'data') {
      DispatchActions.fetch_tests_request();

      return;
    }
  };

  if (!data) return null;
  return (
    <>
      <ul>
        {data?.map(item => (
          <li key={item.id}>
            {item.id} <Link to={`${match.url}/@${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => handleClick({ type: 'data' })}>Request</button> */}
    </>
  );
}

export default TestList;
