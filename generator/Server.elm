module <%= appName %>.Server where

import Signal

-- Boilerplate
import Text
main = Text.asText "main"

port receiveInput : Signal Int

port sendState : Signal String
port sendState = Signal.map toString receiveInput
