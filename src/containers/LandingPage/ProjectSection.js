import React from 'react';

import { Card, Divider, Button } from 'antd';
import styled from 'styled-components/macro';
import projects from '../../Projects';

const StyledCard = styled(Card)`
  background-color: rgb(25, 26, 27);
  color: rgb(252, 252, 252);
  width: 340px;
  margin-top: 10px;
  @media (min-width: 760px) {
    width: 450px;
  }
`;

const PageCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function ProjectSection() {
  const list = projects.map((data) => {
    return (
      <StyledCard
        key={data.title}
        title={data.title}
        cover={<img src={data.img} style={{}} alt="img" />}
        bordered={false}
        headStyle={{ color: '#27bdfd', fontSize: 18 }}
      >
        <div>
          {/* <img
            style={{ width: 350, height: 150 }}
            src={data.img}
            alt="project img"
          /> */}
        </div>
        <div>{data.desc}</div>
        <Divider style={{ borderColor: '#313537' }} />
        <div>
          <span style={{ fontWeight: 600 }}>Tech used:</span> {data.langs}
        </div>
        <Divider style={{ borderColor: '#313537' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button target="_blank" href={data.appLink} type="link">
            Live link
          </Button>
          <Button
            target="_blank"
            href={data.repoLink}
            type="link"
            style={{ marginLeft: 10 }}
          >
            Repo
          </Button>
        </div>
      </StyledCard>
    );
  });

  return (
    <PageCon>
      <ListCon>{list}</ListCon>
    </PageCon>
  );
}
