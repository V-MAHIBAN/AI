/* eslint-disable react/no-unknown-property */
import "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E90FF", // AI-themed blue
    },
    secondary: {
      main: "#00BFFF", // Complementary blue
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          background: "linear-gradient(135deg, #1E90FF, #00BFFF)",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* 3D Animation Canvas */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

            {/* Large Animated Sphere */}
            <Sphere args={[1.5, 64, 64]} scale={2.5} position={[-2, 0, 0]}>
              <MeshDistortMaterial
                color="#87CEFA"
                distort={0.3} // Distortion level
                speed={2} // Animation speed
                roughness={0.5}
              />
            </Sphere>

            {/* Small Rotating Sphere */}
            <Sphere args={[0.5, 64, 64]} scale={1} position={[2, -1, 1]}>
              <MeshDistortMaterial
                color="#1E90FF"
                distort={0.5}
                speed={1.5}
                roughness={0.3}
              />
            </Sphere>
          </Canvas>
        </Box>

        {/* Hero Content */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            maxWidth: "600px",
            padding: "0 20px",
          }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Explore the World of AI
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Revolutionize industries with cutting-edge artificial intelligence solutions. Your journey into the future starts here.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: "30px",
              px: 5,
              background: "linear-gradient(90deg, #1E90FF, #00BFFF)",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Hero;
