import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components/macro';
import ProjectSection from './ProjectSection';
import { useIsSmallScreen } from '../common/responsiveComponents';

const HeadCon = styled.div`
  margin-top: 10;
  ${({ mobile }) => mobile && 'display: flex; justify-content: space-evenly;'};
`;

function LandingPage() {
  const { Title, Paragraph } = Typography;
  const small = useIsSmallScreen();
  return (
    <div
      style={{
        backgroundColor: 'rgb(20, 21, 22)',
        color: 'rgb(252, 252, 252)',
      }}
    >
      <Typography>
        <div>
          <HeadCon mobile={!small}>
            <div style={{ marginTop: !small ? 22 : 0 }}>
              <Title
                level={small ? 2 : ''}
                style={{
                  color: '#1890ff',
                  marginBottom: 10,
                  textAlign: 'center',
                }}
              >
                Hello,
              </Title>
              <Title
                level={small ? 2 : ''}
                style={{
                  color: 'rgb(252, 252, 252)',
                  textAlign: 'center',
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Im Zack Altschuler
              </Title>
              <Title
                level={small ? 2 : ''}
                style={{
                  color: 'rgb(252, 252, 252)',
                  textAlign: 'center',
                  marginTop: 0,
                }}
              >
                Software Engineer.
              </Title>
            </div>

            <div style={{ marginTop: !small ? 10 : 0 }}>
              <Title
                level={small ? 2 : ''}
                id="aboutme"
                style={{
                  color: 'rgb(252, 252, 252)',
                  textAlign: 'center',
                  marginTop: small ? 60 : 0,
                  marginBottom: 0,
                }}
              >
                About Me
              </Title>
              <Paragraph
                style={{
                  color: 'rgb(252, 252, 252)',
                  maxWidth: 650,
                  width: small && '100%',
                  padding: 20,
                  fontSize: !small && 16,
                }}
              >
                Full-stack web developer specializing in React, GraphQL,
                JavaScript/Typescript. Aside from software development, I love
                fitness, music and cooking. I look forward to meeting and
                working with like-minded developers to create the future of web
                applications.
              </Paragraph>
            </div>
          </HeadCon>
          {/* <div
            style={{
              display: 'flex',
              justifyContent: small ? 'center' : 'flex-start',
            }}
          >
            <Title
              level={small ? 2 : ''}
              id="projects"
              style={{
                color: 'rgb(252, 252, 252)',
                marginTop: 50,
                marginLeft: !small ? 50 : 0,
              }}
            >
              Projects
            </Title>
          </div>
          <div style={{ maxWidth: 650 }}>
            <Divider style={{ borderColor: '#fff' }} />
          </div> */}
          <div
            style={{
              display: 'flex',
              justifyContent: small ? 'center' : '',
            }}
          >
            <div style={{}}>
              <ProjectSection />
            </div>
          </div>
        </div>
      </Typography>
    </div>
  );
}

export default LandingPage;
