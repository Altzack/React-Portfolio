import React from 'react';

import { Card, Divider, Button, Typography } from 'antd';
import styled from 'styled-components/macro';
import projects from '../../Projects';
import { useIsSmallScreen } from '../common/responsiveComponents';

const StyledCard = styled(Card)`
  background-color: #181a1b;
  color: rgb(252, 252, 252);
  width: 340px;
  margin-top: 12px;
  margin-bottom: 12px;
  @media (min-width: 760px) {
    width: 700px;
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
        headStyle={{ color: 'rgb(252, 252, 252)', fontSize: 22 }}
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
        {data.langs && (
          <>
            <div>
              <span style={{ fontWeight: 600 }}>Tech used:</span> {data.langs}
            </div>
            <Divider style={{ borderColor: '#313537' }} />
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            target="_blank"
            href={data.appLink}
            type="ghost"
            style={{ borderColor: '#1890ff' }}
          >
            Live link
          </Button>
          {data.repoLink && (
            <Button
              target="_blank"
              href={data.repoLink}
              type="ghost"
              style={{ marginLeft: 10, borderColor: '#1890ff' }}
            >
              Repo
            </Button>
          )}
        </div>
      </StyledCard>
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '85%',
          }}
        >
          <div style={{ textAlign: small ? 'center' : 'left' }}>
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
          <Divider style={{ borderColor: '#303436' }} />
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
