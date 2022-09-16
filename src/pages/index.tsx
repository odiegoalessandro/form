import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <Container maxW="5xl" py={4} centerContent>
      <Seo title="Homepage" description="Pagina inicial" />

      <Heading size="2xl" as="h1" textAlign="center">
        Lorem ipsum dolor sit amet
      </Heading>
      <Text as="p" fontWeight="bold" fontSize="2xl" mt={10} textAlign="center">
        Lorem ipsum dolor sit amet. Eum assumenda culpa et deleniti temporibus
        in nihil reprehenderit aut praesentium officia! Non totam incidunt id
        amet nihil quo doloribus omnis rem placeat veniam qui velit enim quo
        error doloribus. Est fugiat labore rem ipsa incidunt eos odio provident
        ut adipisci distinctio dicta numquam aut harum odit et animi expedita?
        Ut iste ipsum aut corrupti suscipit aut mollitia accusamus aut galisum
        perspiciatis et earum ipsam et nihil possimus aut eligendi voluptatem.
      </Text>
      <SimpleGrid as="div" columns={2} spacing={10} my={10}>
        <Text as="p" fontSize="xl">
          Lorem ipsum dolor sit amet. Eum assumenda culpa et deleniti temporibus
          in nihil reprehenderit aut praesentium officia! Non totam incidunt id
          amet nihil quo doloribus omnis rem placeat veniam qui velit enim quo
          error doloribus.
        </Text>
        <Text as="p" fontSize="xl">
          Lorem ipsum dolor sit amet. Eum assumenda culpa et deleniti temporibus
          in nihil reprehenderit aut praesentium officia! Non totam incidunt id
          amet nihil quo doloribus omnis rem placeat veniam qui velit enim quo
          error doloribus.
        </Text>
      </SimpleGrid>
    </Container>
  );
}
