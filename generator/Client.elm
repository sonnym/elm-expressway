module <%= appName %>.Client where

import Mouse
import Signal
import Text

main = Signal.map Text.asText receiveState

port receiveState : Signal String

port sendInput : Signal Int
port sendInput = Signal.map2 (+) Mouse.x Mouse.y
