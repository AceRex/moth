import { StyleProp, ViewStyle } from "react-native";

interface HeaderProps {
  greeting: string;
  name: string;
  image?: string;
}

interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface AvatarProps {
  image?: string;
}

export { AvatarProps, ContainerProps, HeaderProps };
