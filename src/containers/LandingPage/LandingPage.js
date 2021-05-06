import React from 'react';
import { Divider, Typography } from 'antd';
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
        backgroundColor: 'rgb(24, 26, 27)',
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
                  color: 'rgb(252, 252, 252)',
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
                }}
              >
                About Me
              </Title>
              <Paragraph
                style={{
                  color: 'rgb(252, 252, 252)',
                  maxWidth: 550,
                  padding: 20,
                }}
              >
                Full-stack web developer with a focus on frontend development.
                I'm driven by creating a unique and engaging experience that
                users will remember. My passion to innovate and automate drives
                me to continue learning new technologies such as React, GraphQL,
                JavaScript (es5, es6). Aside from software development, I love
                fitness, music and cooking. I look forward to meeting and
                working with like-minded developers to create the future of web
                applications.
              </Paragraph>
            </div>
          </HeadCon>
          <div
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
            <Divider style={{ borderColor: '#fff', margin: 10 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: 1250 }}>
              <ProjectSection />
            </div>
          </div>
        </div>
      </Typography>
    </div>
  );
}

export default LandingPage;
