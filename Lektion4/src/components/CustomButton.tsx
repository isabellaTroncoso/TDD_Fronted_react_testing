import React from "react"
import { useState } from "react"


export enum ButtonState {
  idle = "idle",
  hover = "hover",
  clicked = "clicked",
}

// You lose on: Refactor capabilities, Immutability (Gain in performance)
type ButtonStateTwo = "idle" | "hover" | "clicked"

// Interface - PROPS
interface CustomButtonProps {
  buttonText: string
}

export default function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)
  const [buttonStateTwo, setButtonsStateTwo] = useState<ButtonStateTwo>("idle")

  return (
    <input
      type="button"
      value={props.buttonText}
      className={buttonState}
      onMouseLeave={() => {
        setButtonState(ButtonState.idle)
      }}
      onMouseEnter={() => {
        setButtonState(ButtonState.hover)
      }}
      onClick={() => {
        setButtonState(ButtonState.clicked)
      }}
    />
  )
}