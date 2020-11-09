import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { useShallowSelector } from 'lib/utils';

const MainHomeContainer = () => {
  useEffect(() => {
    // actions.FETCH_TESTS_SAGA();
    // actions.FETCH_TEST_SAGA(1);
  }, []);

  return (
    <>
      {/* <section>
    <h2>Online Dof Brdige Servive</h2>
  </section>
  <section>
    <h3>Amazing Bidding System Dental Design Open Platform</h3>
  </section>
  <section>
    <h3>Who am I?</h3>
  </section>
  <section>
    <h3>AnyTime, AnyWhere</h3>
  </section>
  <section>Slide2</section> */}
      <h1>MainHome who are you?</h1>
    </>
  );
};

export default MainHomeContainer;
