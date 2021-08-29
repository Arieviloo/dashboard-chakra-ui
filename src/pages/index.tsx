import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from '@chakra-ui/react'
export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="amail"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="senha">Senha</FormLabel>
            <Input
              id="senha"
              name="senha"
              type="senha"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt={6} colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
