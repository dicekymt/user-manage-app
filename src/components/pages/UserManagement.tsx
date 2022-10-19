import {background, Box, Wrap, WrapItem} from "@chakra-ui/react"
import { memo, FC} from "react"

export const UserManagement:FC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
      <Box 
        w={"260px"}
        h={"260px"}
        bg={"white"}
        borderRadius={"10px"}
        shadow={"md"} > 
        </Box>
      </WrapItem>
    </Wrap>
  )
})
