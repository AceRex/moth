import Header from "@/components/homePage/header";
import Container from "@/constants/container";
import { globalColorStyles } from "@/constants/globalColorStyles";
import { useTheme } from "@/constants/themeProvider";
import { ThemeStyles } from "@/constants/themeStyles";
import React, { useMemo } from "react";

export default function Home() {
  const { theme } = useTheme();
  const colors = ThemeStyles[theme];
  const colorStyles = useMemo(() => globalColorStyles(colors), [colors]);

  return (
    <Container>
      <Header greeting="Hello" name="Rex" image={undefined} />
    </Container>
  );
}
