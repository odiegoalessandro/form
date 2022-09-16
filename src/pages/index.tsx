import {
  Button,
  ButtonProps,
  Container,
  forwardRef,
  Heading,
  HStack,
  Text
} from "@chakra-ui/react"
import Link from "next/link"
import Seo from "../components/Seo"

const StyledButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button
    fontSize="lg"
    fontWeight="bold"
    textTransform="capitalize"
    w="10rem"
    h="4rem"
    borderRadius="lg"
    ref={ref}
    {...props}
  />
))

export default function Home() {
  return (
    <Container
      maxW="4xl"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Seo title="Homepage" description="Pagina inicial" />
      <Heading as="h1" size="3xl" fontWeight={800} textAlign="center">
        Olá, seja bem vindo ao meu{" "}
        <Heading as="span" size="3xl" fontWeight={800} color="teal.300">
          projeto
        </Heading>
      </Heading>
      <Text as="p" fontSize="xl" mt={10} color="#778877" textAlign="center">
        Esse projeto foi feito para simular uma pesquisa sobre media salarial, e
        analisar em media quanto tempo o ser humano medio demora para conquistar
        um salario "medio", carro e casa proprio. Os dados aqui apresentados não
        são fieis a realidade.
      </Text>
      <HStack mt={10} spacing={5}>
        <Link href="/dashboard">
          <StyledButton
            color="black"
            bgColor="gray.100"
            _hover={{ bgColor: "gray.200" }}
          >
            Dashboard
          </StyledButton>
        </Link>
        <Link href="/form">
          <StyledButton
            color="white"
            bgColor="teal.300"
            _hover={{ bgColor: "teal.400" }}
          >
            Iniciar
          </StyledButton>
        </Link>
      </HStack>
    </Container>
  )
}
