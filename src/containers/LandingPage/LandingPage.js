import React from 'react';
import { Divider, Typography } from 'antd';
import ProjectSection from './ProjectSection';

function LandingPage() {
  const { Title, Paragraph, Text, Link } = Typography;
  return (
    <div
      style={{
        backgroundColor: 'rgb(24, 26, 27)',
        color: 'rgb(252, 252, 252)',
      }}
    >
      <Typography>
        <div>
          <div style={{ marginTop: 10 }}>
            <Title
              style={{
                color: 'rgb(252, 252, 252)',
                marginBottom: 10,
                textAlign: 'center',
              }}
            >
              Hello,
            </Title>
            <Title
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
              style={{
                color: 'rgb(252, 252, 252)',
                textAlign: 'center',
                marginTop: 0,
              }}
            >
              Software Engineer.
            </Title>
          </div>
          <div style={{}}>
            <Title
              id="aboutme"
              style={{
                color: 'rgb(252, 252, 252)',
                textAlign: 'center',
                marginTop: 60,
              }}
            >
              About Me
            </Title>
            <Paragraph style={{ color: 'rgb(252, 252, 252)', padding: 18 }}>
              Full-stack web developer with a focus on frontend development. I'm
              driven by creating a unique and engaging experience that users
              will remember. My passion to innovate and automate drives me to
              continue learning new technologies such as React, GraphQL,
              JavaScript (es5, es6). Aside from software development, I love
              fitness, music and cooking. I look forward to meeting and working
              with like-minded developers to create the future of web
              applications.
            </Paragraph>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Title id="projects" style={{ color: 'rgb(252, 252, 252)' }}>
              Projects
            </Title>
          </div>
          <Divider style={{ margin: 0 }} />
          <ProjectSection />
        </div>
      </Typography>
    </div>
  );
}

export default LandingPage;
