import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import CustomIcon from "./CustomIcon";

interface IProps {
  title: string;
  imagePath: string;
  alt?: string;
}

const IconText: FC<IProps> = ({ imagePath, title, alt }) => {
  return (
    <Flex gap={5} alignItems="center">
      <CustomIcon imageSrc={imagePath} alt={alt || "Image"} />
      <Text
        fontWeight={900}
        fontSize={{ base: "24px", md: "40px" }}
        lineHeight={{ base: "29px", md: "49px" }}
        color="#fff"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default IconText;
