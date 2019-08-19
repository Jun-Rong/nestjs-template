import Link from 'next/link';
import styled from 'styled-components';

const EkkImage = styled.img``;

const Logo = styled.img`
  margin-top: 100px;
  margin-left: 5px;
`;

const Card = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 30px;
  background-color: hsl(215, 62%, 21%);
  position: relative;
  overflow: hidden;

  ${EkkImage} {
    position: absolute;
    bottom: 1px;
    left: 10px;
  }
`;

const ChurchText = styled.p`
  margin-top: 50px;
  font-size: 50px;
  text-align: center;
  color: white;
`;

const NameText = styled.p`
  margin-top: 20px;
  font-size: 60px;
  font-weight: 100;
  text-align: 20;
  letter-spacing: 10px;
  text-indent: 10px;
  text-align: center;
  color: white;
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const IndexPage = () => (
  <Wrapper>
    <Card>
      <Logo src='/static/logo.svg' />
      <ChurchText>新生命小組教會</ChurchText>
      <NameText>邱俊榕</NameText>
      <EkkImage src='/static/ekk.svg' />
    </Card>
  </Wrapper>
);

export default IndexPage;
