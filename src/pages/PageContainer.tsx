import { Box, Container } from "@mui/material";

const Header = ({ children }) => {
  return <Box>{children}</Box>;
};

export const PageContainer = ({ children }) => {
  return (
    <Box sx={{  }}>
      <Header>
        
      </Header>
      <Container maxWidth="xl">
        <Box sx={{  }}>{children}</Box>
      </Container>
    </Box>
  );
};
