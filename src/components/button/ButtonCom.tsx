import { Button } from "@nextui-org/react"

export const ButtonCom = (props : any) => {
  return (
    <Button color={props.color} variant={props.variant} size={props.sizze} onPress={props.onPress} className={props.ClassName}>{props.text}</Button>
  )
}
