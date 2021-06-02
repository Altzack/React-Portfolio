import React from 'react';

import { Card, Divider, Button, Typography } from 'antd';
import styled from 'styled-components/macro';
import projects from '../../Projects';
import { useIsSmallScreen } from '../common/responsiveComponents';

const StyledCard = styled(Card)`
  background-color: rgb(25, 26, 27);
  color: rgb(252, 252, 252);
  width: 340px;
  margin-top: 10px;
  @media (min-width: 760px) {
    width: 700px;
    padding: 30px;
  }
`;

const PageCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const ListCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function ProjectSection() {
  const { Title } = Typography;
  const small = useIsSmallScreen();
  const list = projects.map((data) => {
    return (
      <StyledCard
        key={data.title}
        title={data.title}
        cover={
          <img src={data.img} style={{ height: small ? 200 : 350 }} alt="img" />
        }
        bordered={false}
        headStyle={{ color: '#1890ff', fontSize: 22 }}
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
          <Button
            target="_blank"
            href={data.appLink}
            type="ghost"
            style={{ borderColor: '#1890ff' }}
          >
            Live link
          </Button>
          <Button
            target="_blank"
            href={data.repoLink}
            type="ghost"
            style={{ marginLeft: 10, borderColor: '#1890ff' }}
          >
            Repo
          </Button>
        </div>
        <Divider style={{ borderColor: '#313537' }} />
      </StyledCard>
    );
  });

  return (
    <div>
      <div style={{}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            maxWidth: 800,
          }}
        >
          <div style={{ textAlign: small && 'center' }}>
            <Title
              level={small ? 2 : ''}
              id="projects"
              style={{
                color: 'rgb(252, 252, 252)',
                marginTop: 50,
                marginLeft: !small ? 50 : 0,
                marginBottom: 0,
              }}
            >
              Projects
            </Title>
          </div>
          <Divider style={{ borderColor: '#fff' }} />
        </div>
      </div>
      <PageCon>
        <ListCon style={{ justifyContent: !small && 'space-evenly' }}>
          {list}
        </ListCon>
      </PageCon>
    </div>
  );
}
