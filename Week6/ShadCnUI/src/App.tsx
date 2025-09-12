import { Button } from "./components/ui/button"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



const App = () => {
  return (
    <div>
      <h1 className="mb-5">
        Shad cn UI component
      </h1>
      <div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <div className="flex flex-col mt-10">
        <Button>Default</Button>
        <Button variant= "destructive">Destructive</Button>
        <Button variant= "ghost">Ghost</Button>
        <Button variant="secondary" >Secondary</Button>
        <Button variant= "outline">Outline</Button>
        <Button variant="link">Link</Button>
        <Button variant="raj">raj Custom Button</Button>
      </div>

      <div>
        <InputOTP maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>

            <InputOTPSeparator />

            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>

      </div>

    </div>
  )
}

export default App
