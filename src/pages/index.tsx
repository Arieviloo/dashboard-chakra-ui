import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/input'

export default function SingIn() {
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
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" mt={6} colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
