import { HStack, Switch, useColorMode} from "@chakra-ui/react"

const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <>
    <HStack>
        <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}>Darkmode</Switch>
    </HStack>
    </>
  )
}

export default ColorModeSwitch