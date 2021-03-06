import React from 'react';
import Head from 'next/head';
import Layout from '../component/Layout';
import PageHeader from '../component/PageHeader/Container';

import { Filter } from '../component/Input/Filter';
import styled from 'styled-components';

import Projects from '../container/Project/Container';
const Project = () => {
  return (
    <Layout>
      <Head>
        <title>수염난친구들 : 프로젝트</title>

        <meta name='description' content='수염난친구들 프로젝트' />
        <meta name='keywords' content='프로젝트' />

        <meta property='og:title' content='수염난친구들 :프로젝트' />

        <meta property='og:site_name' content='' />
        <meta property='og:description' content='수염난친구들 프로젝트..' />

        <meta name='twitter:title' content='수염난친구들 :프로젝트' />
        <meta name='twitter:description' content='수염난친구들 프로젝트..' />

        <meta name='twitter:card' content='summary' />
      </Head>
      <PageHeader
        first='프로젝트'
        second='다양한'
        third='것들을 경험하세요.'
        img='/truck.jpg'
        theme='project'
      />

      <FilterContainer>
        <Filter />
        <Projects />
      </FilterContainer>
    </Layout>
  );
};

export default Project;

const FilterContainer = styled.section`
  width: 100%;
  flex-direction: column;
  text-align: center;
  padding: 50px 0;
  background: #f8f8f8;
  min-height: 100vh;
  align-items: center;
  display: flex;
`;
