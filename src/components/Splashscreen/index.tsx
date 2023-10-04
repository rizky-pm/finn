import styled from '@emotion/styled';
import { Spinner } from '@chakra-ui/react';

const Styled = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Splashscreen = () => {
  return (
    <Styled>
      <Spinner color='brand.black' size={'xl'} />
    </Styled>
  );
};

export default Splashscreen;
